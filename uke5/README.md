---
title: Uke 5 - JWT
date: '2019-01-28'
---

# Uke 5 - JWT

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
