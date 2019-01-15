---
title: Uke 1 - Vue og AngularJS
date: '2019-01-01'
---

# Uke 1 - Vue og AngularJS

::: tip Timer
Denne uken: 27 :tada:
:::

## Fredag

Jeg fikk laget en funksjonalitet slik at når man skriver inn fødselsnummeret i input feltet i skjemaet blir det hentet resten av detaljene til kunden. Jeg jobbet også med å lage ett _directive_ som sjekker mens man skriver inn om fødselsnummeret er riktig

## Torsdag

Jobber videre med det grafiske, og starter med å lage _eventer_ for å sende signaler rundt i applikasjonen når man trykker på de ulike knappene. Det er også ett skjema hvor kunde detaljer skal fylles ut, enten for å lage en ny bruker eller redigere en eksisterende. Så det må lages logikk at når en knapp trykkes åpnes det en modal med skjemaet, også skal det lukkes når man enten trykker avbryt eller submit (da skal også dataene sendes).

## Onsdag

Jeg jobber nå på teamet FASIT og skal starte ett nytt prosjekt med å utvide funksjonaliteten i RPM løsningen slik at det skal være lettere å legge til ny eller eksisterende kunder til hovedkunden sin kundegruppe. Løsningen skal ta hensyn til dersom det er en ny kunde må kunden opprettes, dersom det er en eksisterende kunde må alle dataene hentes frem. Og dersom kunden skal slettes må den fjernes fra den eksisterende kundegruppen.

Jeg skal jobbe med klienten som er skrevet i AngularJS, her må det først lages det grafiske. Jeg har fått noen utkast i Jira saken som jeg kan bruke som retningslinjer når jeg skal kode. Når det grafiske er på plass, må det kjøres noen REST-kall for å knytte sammen backend.

## Litt om oppstart hos Stacc

Startet å jobbe hos Stacc 1.desember. Var inne ett par dager før jul der jeg fikk satt opp maskinen og utvikler miljøet.

Alt av verktøy og IDE'er hos Stacc er valgfritt. Jeg endte opp med Ubuntu 18.04 som OS, med VS Code til frontend og Intellij til Java.

Jeg begynte å sitte litt med en kollega og par-programmere. Vi skal lage nytt brukergrensesnitt på programvaren RPM (Rådgiver Privat Marked), og den skrives i VueJS. Jeg er ikke kjent med Vue fra før av, så det var kjekt å se hvor lett rammeverket er å bruke og hvor produktiv man blir etter bare ett par timer.
