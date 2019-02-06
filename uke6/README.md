---
title: Uke 6 - The mad girlfriend bug
date: '2019-02-04'
---

# Uke 6 - The mad girlfriend bug

## Mandag, tirsdag og onsdag

::: warning Mad girlfriend bug
When you see something strange is happening, but the software is telling you everything is fine.
:::

Har jobbet parallelt med flere oppgaver denne uken. I hovedsak har jeg jobbet med daglige oppgaver fra teamet mitt sin Kanban tavle, siden sky-prosjektet har en liten pause. Vi har nettopp tatt en _cut fra master_ som blir en leveranse til Eika. Denne har ett par saker som er blitt meldt inn fra kunden selv, og noen saker som testerne våre har meldt inn. På fredag fant jeg noen feil også, som jeg har jobbet med denne uken.

En sak jeg har sett på handlet om renderingen av en komponent i en av klientene som feilet når siden ble lastet i en ren nettleser. Med ren nettleser mener jeg at det ikke ligger noe cache som _localStorage_ og _sessionStorage_, samt ingen cookies.

Det har vært en frustrerende oppgave, for feilen ligger gjemt i klient koden. Alt på server siden var i orden. Til slutt var det flere på teamet som så på problemet. Til slutt viste det seg at kallene som gikk for å hente `i18n` tekstene som skal vises i klienten feilet, fordi de URL'en de gikk mot ikke var riktige. Dette resulterte i mange andre snodige feil, som gjorde at feilen så ut til å være noe den slett ikke skulle være.

Ellers har jeg hjupet en ny student som har begynt å jobbe hos oss med å sette opp noen API tester i Postman for å kjøre e2e-tester (ende til ende).

Også har jeg jobbet en del med en pipeline for JWT prosjektet, slik at ting blir bygget opp i Azure Artifacts.

I dag (Onsdag) fikk jeg endelig en prat med en av arkitektene som har vært med meg på _Veien mot skyene_ prosjektet, for å ta en status på hvordan prosjeket ligger an siden jeg skal fortsette med prosjektet fra i morgen av.
