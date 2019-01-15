---
title: Uke 2 - Postman, Azure og Kubernetes
date: '2019-01-07'
---

# Uke 2 - Postman, Azure og Kubernetes

::: tip Timer
Denne uken: 40

**Totalt: 67** :tada:
:::

## Fredag

Jeg fikk endelig tak i ett Azure Subscription og kunne begynne å teste i skyen. Jeg fikk Ansible Playbooken til å fungere ved å opprette og slette ett Azure Container Registry (ACR). Det er bra, en kommando for å sette opp alt, og en for å ta ned alt.
Neste steg er å få satt opp Bitbucket pipeline og bygge Docker images og få pushet de til ACR.

## Torsdag

Jeg bytter team i dag og skal begynne på prosjektet "Veien mot skyene". Dette er et prosjekt hvor jeg skal snu opp ned på hele bygg og utviklings prosessen i Stacc Insight.

I dag kjøres det lokale instanser av docker-compose, hvor det bygges lokal på maskinen og overføres war-filer til en tomcat server som kjører i en Docker container.

På bygg-siden bygges alt i Jenkins og deretter blir war filene arkivert i ett registry. Når det skal leveres en versjon ut til bankene vil det da hentes ut spesifike versjoner av hver enkelt modul.

Planen er at vi nå skal over til å kjøre Kubernetes i skyen. Først skal vi ta ut en liten modul som vi skal test kjøre litt og lage en prosedyre slik at vi kan utvide med flere moduler etterhvert.

Her ønsker jeg å ta i bruk flere teknologier slik som Ansible for oppretting av ressurser i Azure Cloud (Infrastructure as code), Kubernetes for kontainer orkestrering, Helm package manager for Kubernetes og Bitbucket Pipeline.

Det første jeg må sette opp er ett Docker Registry, eller som i Azure: Azure Container Registry (ACR). Det kan jeg bruke Ansible til.

Brukte hele dagen på å lese meg opp på ulike teknologier, og sette opp diverse miljøer lokalt på maskinen. Blandt annet Kubernetes kluster med hjelp av MiniKube.

## Onsdag

Jeg får endelig fullført Jira-oppgaven, REST-kallene funker og det grafiske fungerer og gjør som forventet. Nå er det en del ting som skal gjøres på backend, så jeg avslutter oppgaven før det ender opp i dobbelt arbeid og sender de til QA.

## Tirsdag

Økten med Postman dagen før gjorde at jeg nå har full oversikt over hvilke steg jeg må gjøre for å både lage en ny kunde, legge til en eksisterende og slette en kunde fra en kundegruppe. Jeg jobber videre med å få ting til å flyte mer i sammen.

## Mandag

Etter forrige uke ved å lage grov arbeidet rundt det grafiske og ett par enkle REST-kall begynner jeg nå på arbeidet med å sette opp resten av logikken med de resterende REST-kallene som må gjøres.
I min Jira sak står det hvilket PUT-kall jeg skal gjøre for å legge til en kunde i en kundegruppe. Men det er desverre bare det siste kallet som skal gjøres, for jeg mangler en god del informasjon om kunden før jeg kommer så langt. Så resten av dagen går i å dyp dykke ned i Postman og lete i API'er for å finne de riktige kallene som gir meg de riktige resultatene.
