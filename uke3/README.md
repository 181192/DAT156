---
title: Uke 3 - Veien mot skyene
date: '2019-01-09'
---

# Uke 3 - Veien mot skyene

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
