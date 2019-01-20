---
title: Uke 3 - Veien mot skyene
date: '2019-01-09'
---

# Uke 3 - Veien mot skyene

::: tip Timer
Denne uken: 26 (syk to dager)

**Totalt: 93** :tada:
:::

[[toc]]

## Fredag

I dag ble tiden brukt på å se på monitorering av Kubernetes klusteret og Tomcat serveren som kjører applikasjonen.

### Ulike nivåer av monitorering

::: warning Det er ulike nivåer vi ønsker å kunne monitorere og logge på:

1. Infrastruktur nivå
2. Kubernetes nivå
3. Tomcat / JVM nivå
4. Applikasjonsnivået

:::

På infrastruktur nivået ønsker vi å få informasjon om hvor mange ressurser vi har i Azure, som VM instanser og Kubernetes klustre.

På Kubernetes nivået ønsker vi oversikt over blandt annet CPU, minnebruk, fillagring og nettverks bruk for selve klusteret. Men vi ønsker også detaljert informasjon om hver enkelt Pod.

På Tomcat og JVM nivået ønsker vi detaljert informasjon om for eksempel hvor mange tråder som kjører, hvor mange feilmeldinger, telle antall forespørsler mot hvert enkelt REST-endpoint for eksempel `/location`, hvor mye minne JVM'en bruker.

Og til slutt på Applikasjons laget så ønsker vi å kunne analysere loggene, indeksere de, og kunne søke og prosessere loggene.

### Prometheus og Grafana

[Prometheus](https://prometheus.io/) er et monitorerings system og en tidsseriedatabase. Prometheus er gode på dataer som man monitorerer, for eksempel CPU og minnebruk. For applikasjons logger, der vi må analysere innholdet må vi bruke andre alternativer som ELK-stacken (Elasticsearch). Det finnes også en mer lettvekt løsning for logger til Prometheus også, [Loki](https://github.com/grafana/loki), som er laget av Grafana.

[Grafana](https://grafana.com/) er ett verktøy for å data visualisering og monitorering, som man bruker sammen med tjenester som Prometheus, Elasticsearch og InfluxDB.

Både Kubernetes og Docker har innebygget støtte for Prometheus, og med Kubernetes så vil Prometheus kunne oppdage tjenestene selv (self-discovering) som er svært viktig når ressursene i Kubernetes blir laget dynamisk.

### JMX Exporter, Java Agent og `premain`

For å kunne monitorere Tomcat serveren vi må servere dataene til Prometheus over HTTP, og skal vi dra nytte av Kubernetes sin støtte til Prometheus må monitorerings dataene bli servert på `/metrics`. Siden vi har mye eksisterende kode, er det nødvendig å finne en løsning slik at vi kan monitorere applikasjone uten å måtte endre den eksisterende kodebasen. Her kommer vi over Java Agent.

::: tip Java Agent

En Java agent er en vanlig Java klasse med litt strengere regler, den må implementere metoden:

```java
public static void premain(String agentArgs, Instrumentation inst)
```

`premain` metoden blir en _agent entry point_, lignende den vanlige `main` vi er vandt med i vanlige Java applikasjoner.

Når Java Virtuell Maskin (JVM) har blitt initialisert, vil hver `premain(String agentArgs, Instrumentation inst)` bli kalt i den rekkefølgen agentene ble spesifisert når JVM'en startet. Når alle `premain` metodene er initialisert vil den ekte Java applikasjon `main` metoden bli kalt.

Med denne metoden kan man injisere og modifisere eksisterende kode, ved å manipulere byte-koden. Her er det laget noen rammeverk, men i korte trekk blir det lagt til ekstra kode i for eksempel Interfacet `javax.servlet.Servlet`. Hvor vi da kan lytte på Servletene og telle for mange forespørsler det kommer til for eksempel `/eksempel`.
:::

#### JMX Exporter

Prometheus har heldigvis laget en [JMX Exporter](https://github.com/prometheus/jmx_exporter) som kjøres som en Java Agent og serverer _metrics_ på `url:port/metrics`, denne tar hånd om de fleste JVM målingene vi er interessert i, og prosjektet ligger åpen på GitHub så her kan vi også videre utvikle etter vårt eget behov.

JMX Exporter prosjektet har også ett [Grafana dashboard](https://grafana.com/dashboards/3457) som vi kan bruke til å videre utvikle.

### Kubernetes og Prometheus

Jeg kom over ett [Kubernetes oppsett for Prometheus og Grafana](https://github.com/giantswarm/prometheus) som jeg kunne kjapt teste litt ut. Målet her er at vi også skal kjøre Prometheus i selve Kubernetes klusteret.

Prosjektet er satt opp med en fin _one-liner quick install_ som setter opp alt under namespacet `monitoring` i det eksisterende klusteret vårt:

```bash
kubectl apply \
  --filename https://raw.githubusercontent.com/giantswarm/kubernetes-prometheus/master/manifests-all.yaml
```

Så kan vi videre sende porten inni klusteret til vår lokale maskin ved å kjøre kommandoen:

```bash
kubectl port-forward --namespace=monitoring grafana-core 3000:3000
```

Åpner vi `http://localhost:3000` på maskinen vil vi kunne se Grafana dashboardet

### Videre

Jobben videre blir å knytte sammen applikasjonen vår og Prometheus i Kubernetes klusteret. For å få dette til må vi konfigurere Prometheus Annotations i Helm sin deployment fil. I metadata seksjonen under template i spec seksjonen må vi definere tre variabler:

- `prometheus.io/scrape`: Om Prometheus skal skrape Pod'en
- `prometheus.io/path`: Hvilken sti _metrics_ vil bli servert på (standard `/metrics`)
- `prometheus.io/port`: Hvilken port Prometheus skal skrape på.

Neste uke, på mandag, skal jeg og ett par fra teamet mitt, samt Kubernetes eksperten fra tidligere i uken, ta et møte for å gå igjennom og se hvor langt vi har kommet i prosjektet. Hva som gjenstår, hva som er gjort og hvor vi ønsker å bevege oss videre.

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
