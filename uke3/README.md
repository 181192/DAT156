---
title: Uke 3 - Veien mot skyene
date: '2019-01-09'
---

# Uke 3 - Veien mot skyene

## Torsdag

Jeg fikk testet ut Azure Pipeline i dag. Sammenkoblingen mot ACR og AKS er smertefritt, alt er integrert i løsninen via en grafisk pipeline bygger. Men jeg fikk ett stort problem, i vår løsning med mono-repo og thrunk-based master er vi avhenging av `git tags` som versjonerer kodebasen etterhvert som Jenkins bygger prosjektet og byggingen blir vellyket. Denne metodikken ønsker vi å fortsette med, siden vi da kan bruke taggen fra git til å tagge docker imaget.

Desverre støtter ikke Azure Pipelines å lese `git tags` fra Bitbucket, hvor vi hoster alle repositoriene våre. Azure Pipelines har muligheten dersom man bruker Azure DevOps egne repositories. Men vi kan ikke flytte alle våre repositories fra Bitbucket til Azure DevOps over natten, på grunn av vi bruker Jira og Confluence hos Atlassian. Skal vi gå over, vil det generere en god del ekstra arbeid utennom dette prosjektet. Derfor går jeg tilbake til Bitbucket Pipelines.

Pipelinen min i Bitbucket deployer i siste steg til AKS. Vi skal bruke Kubernetes package manager'en Helm til å deploye nye Docker images til klusteret. Dette var egentlig grunnen til at jeg ville prøve ut Azure Pipeline, fordi integrasjonen allerede var laget. Så nå må jeg sette det opp selv.

Kubernetes eksperten fra i går, hjalp meg med å designe Helm Chartet for test applikasjonen vår.

For å kunne deploye til AKS med Helm trenger jeg noen verktøy i Pipelinen min:

1. `az` - Azure CLI for autentisering
2. `helm` - Helm klient for å kunne oppdatere Helm Chartet
3. `kubectl` - Kubernetes CLI for å kunne autentisere mot klusteret og sette riktig kontekst.

Dette løste jeg med å lage ett eget Dockerimage som inneholder nettopp disse verktøyene, som jeg kan importere i Pipelinen.

```docker
FROM microsoft/azure-cli

ENV KUBE_LATEST_VERSION="v1.12.2"
ENV HELM_LATEST_VERSION="v2.11.0"
RUN apk add --update ca-certificates \
  && apk add --update -t deps curl \
  && curl -L https://storage.googleapis.com/kubernetes-release/release/${KUBE_LATEST_VERSION}/bin/linux/amd64/kubectl -o /usr/local/bin/kubectl \
  && chmod +x /usr/local/bin/kubectl \
  && wget http://storage.googleapis.com/kubernetes-helm/helm-${HELM_LATEST_VERSION}-linux-amd64.tar.gz \
  && tar -xvf helm-${HELM_LATEST_VERSION}-linux-amd64.tar.gz \
  && mv linux-amd64/helm /usr/local/bin \
  && rm -f /helm-${HELM_LATEST_VERSION}-linux-amd64.tar.gz \
  && apk del --purge deps \
  && rm /var/cache/apk/*
```

Pipelinen ser etterpå slik ut (fjernet noen verdier `<variabel>`):

```yaml
pipelines:
  tags:
    '*':
      - step:
          name: Build and deploy to Docker registry
          services:
            - docker
          script:
            - export IMAGE_NAME=$DOCKER_REGISTRY/$APP_NAME:$BITBUCKET_TAG
            - export IMAGE_NAME_LATEST=$DOCKER_REGISTRY/$APP_NAME:latest
            - docker build -t $IMAGE_NAME -t $IMAGE_NAME_LATEST .
            - docker login <registry_name>.azurecr.io -u $DOCKER_USERNAME --password $DOCKER_PASSWORD
            - docker push $IMAGE_NAME
            - docker push $IMAGE_NAME_LATEST
      - step:
          name: Deploy to Kubernetes
          deployment: test
          image:
            name: <registry_name>.azurecr.io/az-cli-kubectl-helm:0.1.1
            username: $DOCKER_USERNAME
            password: $DOCKER_PASSWORD
          script:
            - az login --service-principal --username $AZURE_CLIENT_ID --password $AZURE_SECRET --tenant $AZURE_TENANT --subscription $AZURE_SUBSCRIPTION_ID
            - helm init --client-only
            - az acr helm repo add -n <registry_name>
            - echo $KUBE_TOKEN | base64 -d > ./kube_token
            - echo $KUBE_CA | base64 -d > ./kube_ca
            - kubectl config set-cluster <cluster_name> --server=$KUBERNETES_HOST --certificate-authority="$(pwd)/kube_ca"
            - kubectl config set-credentials bitbucket --token="$(cat ./kube_token)"
            - kubectl config set-context development --cluster=<cluser_name> --user=bitbucket
            - kubectl config use-context development
            - helm upgrade $APP_NAME --install <registry_name>/$APP_NAME --set image.tag=$BITBUCKET_TAG --namespace development
```

Planen i morgen er å få oversikt over hvordan vi skal ta hånd om deployments som ikke er gyldige, Helm har innebygget funksjonalitet for å kunne kjøre roll-back. Men det må ligge noe over for å styre dette.

Videre punkter som må undersøkes er logging, monitorering og sikkerhet både for selve Kubernetes klusteret, Tomcat serveren som kjører inni containeren og Java applikasjonen.

## Onsdag

I dag hadde jeg sammen med en kollega møte med en Kubernetes ekspert fra firmaet som drifter mye av infrastrukturen til Stacc. Han skal hjelpe oss på veien med å sette opp infrastrukturen rundt Kubernetes i _Veien mot skyene_ prosjektet.

Siden jeg forrige uke fikk satt opp Azure Container Registry med Ansibe kunne jeg i dag gå videre på faktisk pushe Dockerimages til ACR.
Jeg fikk satt opp Bitbucket Pipeline til demo modulen vår, så når det kommer en `git tag` vil pipelinen starte.

Pipelinen består av følgende:

1. Bygge et Dockerimage
2. Deploye til Azure Container Registry
3. Koble seg til Azure Kubernetes Service (AKS) via `kubectl`
4. Deploye Dockerimaget til Kubernetes klusteret (AKS)

Etter ett nytt møte for å diskutere stegene fremover, diskuterte vi litt om hva vi skal gjøre med delte biblioteker som i dag blir hostet inhouse via Nexus Repository. Disse vil ikke Bitbucket Pipeline få tilgang til. Derfor vurderer jeg nå og se på Azure Artifacts, fordelen med at dette er en Azure tjeneste er mye tettere integrering med ACR og AKS, som blandt annet automatisk autentisering.

Azure Artifacts er en undertjeneste i Azure DevOps, så det kan kanskje også være smart å ta i bruk Azure Pipelines som også ligger i Azure DevOps når muligheten ligger der.

## Mandag og tirsdag

Syk
