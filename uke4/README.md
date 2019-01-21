---
title: Uke 4 - Dypt inn i skyene
date: '2019-01-21'
---

# Uke 4 - Dypt inn i skyene

## Mandag

I dag har jeg jobbet videre med å få koblet sammen applikasjonen som kjører i Kubernetes klusteret og Prometheus. Utfordringen var å få self-discovery funksjonaliteten til Prometheus til å _scrape_ applikasjonen vår på `<url>:8090/metrics`. Dette er viktig å få til at den blir automatisk oppdaget, på grunn av når man kjører applikasjoner i Kubernetes, kommer det til å bli laget og fjernet kontainerer dynamisk ettersom Kubernetes klusteret skalerer etter behov. Da blir det umulig å statisk konfigurere dette.

Jeg fikk sammen med en kollega Prometheus til å fungere, da brukte jeg litt tid på å konfigurere ett par visualiseringer i Grafana. Prometheus har sitt eget spørrespråk for å hente ut data, så her er det en del å sette seg inn i.

Jeg begynte også å plukke opp tråden fra forrige uke med Azure Artifacts, vi er nødt til å fjerne oss med Nexus Repository hvor vi nå lagrer artifacts som bibliotek `jar` filer og `pom.xml`. Fordi Nexus serveren kjøres på intern nettverket vårt, og vi ønsker ikke å åpne det opp. Når Azure Artifacts er oppe og kjører kan vi snart teste med flere moduler i klusteret.

For å kunne benytte seg av Azure Artifacts med Maven må det settes opp en `settings.xml` fil med autentisering mot selve repositoryet. Jeg vurderer å lage et docker image for å sette opp all konfigurasjonen, det samme som jeg gjorde med Azure- `kubectl`-og-Helm docker imaget. Da tar det mindre til å sette opp flere pipelines i bitbucket.
