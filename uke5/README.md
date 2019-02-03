---
title: Uke 5 - JWT
date: '2019-01-28'
---

# Uke 5 - JWT

::: tip Timer
Denne uken: 36

**Totalt: 177** :tada:
:::

## Fredag

Fredag ble brukt til å være med en av testerne på teamet mitt til en gjennomgang av Kreditt løsningen. Siden jeg nå jobber på _KredittTeam_ var det på tide å få en gjennomgang av hvordan løsningen fungerer. Jeg har jo tidligere holdt på med andre prosjekter som ikke er så relevant i forhold til det _KredittTeam_ faktisk jobber med. Vi har nettopp tatt en _cut fra master_ hvor vi skal levere en ny versjon til Eika. Det er denne som nå skal regresjonstestes, jeg holder på med en oppgave hvor det er en merkelig bug. Men på grunn av jeg ikke har domene kunnskapen om løsningen enda har det vært vanskelig, derfor slenger jeg meg med når en av testerne på teamet skal gå i gang.

I løpet av en liten halvtime når jeg tar trykket litt rundt og blitt forklart hva dette handler om, finner jeg i tillegg til den buggen jeg jobber med, fire andre problemer som blir til to saker. Så her blir det mer jobb til mandag.

## Onsdag og Torsdag

Jeg har jobbet med å få satt opp pipeline til JWT prosjeket. Prosjektet består av ett webprosjekt (war) og fire bibliotek. Webprosjektet skal bygges i Jenkins, også skal Bitbucket Pipeline lytte på en tag og deretter bygge Docker image og pushe det til Azure Container Registry. Bibliotekene skal bli publisert til Azure Artifacts på hver commit.

![comp](./comp.png)

Siden dette er ett monoprosjekt. Er det ønskelig at kun de modulene som blir påvirket/ har en endring, er de som blir oppdatert. Så her måtte det litt bash programmering til.

Ett fint eksempel på å sjekke om det er gjort noe endringer i en mappe eller en fil mellom de to siste commitene, og kun printe ut filnavnene, ser slik ut:

```bash
git diff --name-only --diff-filter=AMDR HEAD^ HEAD <fil eller mappenavn>
```

Også måtte jeg også finne alle undermapper med en `pom.xml` fil, som jeg kan putte inn i funksjonen over:

```bash
find . -name pom.xml -print0 | xargs -0 -n1 dirname rm | sort --unique | sed "s|^\./||" | tr '\n' ' ' | sed 's/^.\{2\}//'
```

Kommandoen over vil returnere en streng med alle undermapper som inneholder en `pom.xml` fil, hvor de er skilt med mellomrom. Det funker bra for en tabell i bash blir elementene skilt med mellomrom `array=(el1 el2 el3 el4)`

Jeg gjorde også en endring med i stedet for å endre vår Parent POM til å samhandle med Azure (som gjør at vi må endre alle gamle moduler). Lager jeg nå en Azure POM, som er konfigurert til å snakke med Azure Artifacts, og oppdaterer heller de bibliotekene / modulene som skal bli flyttet med denne nye Parent POM'en.

## Tirsdag

Litt diverse aktiviteter i dag, men hovedtrekkene var at _Veien mot Skyene_ prosjetet er satt litt på is. Jeg begynte å sette meg inn i ett nytt prosjekt kalt _JWT - Sikkerhet_, som handler om å bytte ut en eldre selvutviklet sikkerhetsløsning med OpenID Connect.

OpenID Connect er ett lettvektig identitets lag over OAuth 2.0 protokollen. Dette er har vi implementert med Spring Boot 2. OAuth 2.0 bruker [JSON Web Tokens](https://jwt.io/) (JWT) som er en åpen industri standard for å representere krav sikkert mellom to parter.

```bash
$ jwt decode eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

Token header
------------
{
  "typ": "JWT",
  "alg": "HS256"
}

Token claims
------------
{
  "iat": 1516239022,
  "name": "John Doe",
  "sub": "1234567890"
}
```

En mer abstrakt oversikt over flyten gjennom en OAuth autentisering.

![oauth](./oauth-abstract.png)

Jeg brukte dagen for å sette opp prosjeket lokalt på maskinen, og begynne å sette opp Bitbucket Pipeline så artefaktene kan bli deployet til Azure Artifacts. Hvor mye jeg kommer til å jobbe med dette prosjeket er litt usikkert, siden prosjektet er i sluttfasen.

## Mandag

I dag fikk endelig utviklerne tilgang til Azure Artifacts og kan begynne å bruke de nyeste versjonen av bibliotekene som blir bygget ut til Azure Artifacs via Bitbucket Pipelines.

Jeg skulle egentlig ha ett møte med arkitektene om _Veien til Skyen_ prosjektet. Nå er det på tide å få svar på en del viktige spørsmål rundt Kubernetes i produksjon, hvordan vi skal håndtere deployments og releases, hvilke veier ønsker vi å gå videre, hvilke milepæler har vi nådd, hvilke moduler skal vi velge som neste til å bli deployet til Kubernetes osv (ulik kompleksitet, avhengingheter, database tilkobling osv...).

Det møtet ble det ikke noe av på grunn av andre ting som haster mer i teamet. Derfor brukte jeg dagen på å gjøre litt research rundt bacheloroppgaven. Jeg prøvde å grave frem gammel dokumentasjon som brukerhistorier, illustrasjoner og funksjonelle krav til en klient som vi kaller "Planer". En del av innholdet til "Planer" klienten er sentral i bacheloroppgaven, så det hadde vært greit for både meg og de andre i gruppen å få litt bakgrunnstoff.

På slutten av dagen hadde jeg ett møte med bachelorgruppen min, Preben Haukebø og Arne Flatekval. Formålet med møte var å få spesifisert nøyere hva vi ønsker å lage, og de tekniske utfordringene vi står ovenfor.
