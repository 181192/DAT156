(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{186:function(e,t,n){"use strict";n.r(t);var s=n(0),a=Object(s.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),n("p"),e._m(2),n("p"),e._v(" "),e._m(3),e._v(" "),n("p",[e._v("I dag ble tiden brukt på å se på monitorering av Kubernetes klusteret og Tomcat serveren som kjører applikasjonen.")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),n("p",[e._v("På infrastruktur nivået ønsker vi å få informasjon om hvor mange ressurser vi har i Azure, som VM instanser og Kubernetes klustre.")]),e._v(" "),n("p",[e._v("På Kubernetes nivået ønsker vi oversikt over blandt annet CPU, minnebruk, fillagring og nettverks bruk for selve klusteret. Men vi ønsker også detaljert informasjon om hver enkelt Pod.")]),e._v(" "),e._m(6),e._v(" "),n("p",[e._v("Og til slutt på Applikasjons laget så ønsker vi å kunne analysere loggene, indeksere de, og kunne søke og prosessere loggene.")]),e._v(" "),e._m(7),e._v(" "),n("p",[n("a",{attrs:{href:"https://prometheus.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prometheus"),n("OutboundLink")],1),e._v(" er et monitorerings system og en tidsseriedatabase. Prometheus er gode på dataer som man monitorerer, for eksempel CPU og minnebruk. For applikasjons logger, der vi må analysere innholdet må vi bruke andre alternativer som ELK-stacken (Elasticsearch). Det finnes også en mer lettvekt løsning for logger til Prometheus også, "),n("a",{attrs:{href:"https://github.com/grafana/loki",target:"_blank",rel:"noopener noreferrer"}},[e._v("Loki"),n("OutboundLink")],1),e._v(", som er laget av Grafana.")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://grafana.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Grafana"),n("OutboundLink")],1),e._v(" er ett verktøy for å data visualisering og monitorering, som man bruker sammen med tjenester som Prometheus, Elasticsearch og InfluxDB.")]),e._v(" "),n("p",[e._v("Både Kubernetes og Docker har innebygget støtte for Prometheus, og med Kubernetes så vil Prometheus kunne oppdage tjenestene selv (self-discovering) som er svært viktig når ressursene i Kubernetes blir laget dynamisk.")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),n("p",[e._v("Prometheus har heldigvis laget en "),n("a",{attrs:{href:"https://github.com/prometheus/jmx_exporter",target:"_blank",rel:"noopener noreferrer"}},[e._v("JMX Exporter"),n("OutboundLink")],1),e._v(" som kjøres som en Java Agent og serverer "),n("em",[e._v("metrics")]),e._v(" på "),n("code",[e._v("url:port/metrics")]),e._v(", denne tar hånd om de fleste JVM målingene vi er interessert i, og prosjektet ligger åpen på GitHub så her kan vi også videre utvikle etter vårt eget behov.")]),e._v(" "),n("p",[e._v("JMX Exporter prosjektet har også ett "),n("a",{attrs:{href:"https://grafana.com/dashboards/3457",target:"_blank",rel:"noopener noreferrer"}},[e._v("Grafana dashboard"),n("OutboundLink")],1),e._v(" som vi kan bruke til å videre utvikle.")]),e._v(" "),e._m(12),e._v(" "),n("p",[e._v("Jeg kom over ett "),n("a",{attrs:{href:"https://github.com/giantswarm/prometheus",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes oppsett for Prometheus og Grafana"),n("OutboundLink")],1),e._v(" som jeg kunne kjapt teste litt ut. Målet her er at vi også skal kjøre Prometheus i selve Kubernetes klusteret.")]),e._v(" "),e._m(13),e._v(" "),e._m(14),n("p",[e._v("Så kan vi videre sende porten inni klusteret til vår lokale maskin ved å kjøre kommandoen:")]),e._v(" "),e._m(15),e._m(16),e._v(" "),e._m(17),e._v(" "),n("p",[e._v("Jobben videre blir å knytte sammen applikasjonen vår og Prometheus i Kubernetes klusteret. For å få dette til må vi konfigurere Prometheus Annotations i Helm sin deployment fil. I metadata seksjonen under template i spec seksjonen må vi definere tre variabler:")]),e._v(" "),e._m(18),e._v(" "),n("p",[e._v("Neste uke, på mandag, skal jeg og ett par fra teamet mitt, samt Kubernetes eksperten fra tidligere i uken, ta et møte for å gå igjennom og se hvor langt vi har kommet i prosjektet. Hva som gjenstår, hva som er gjort og hvor vi ønsker å bevege oss videre.")]),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),n("p",[e._v("Pipelinen min i Bitbucket deployer i siste steg til AKS. Vi skal bruke Kubernetes package manager'en Helm til å deploye nye Docker images til klusteret. Dette var egentlig grunnen til at jeg ville prøve ut Azure Pipeline, fordi integrasjonen allerede var laget. Så nå må jeg sette det opp selv.")]),e._v(" "),n("p",[e._v("Kubernetes eksperten fra i går, hjalp meg med å designe Helm Chartet for test applikasjonen vår.")]),e._v(" "),n("p",[e._v("For å kunne deploye til AKS med Helm trenger jeg noen verktøy i Pipelinen min:")]),e._v(" "),e._m(22),e._v(" "),n("p",[e._v("Dette løste jeg med å lage ett eget Dockerimage som inneholder nettopp disse verktøyene, som jeg kan importere i Pipelinen.")]),e._v(" "),e._m(23),e._m(24),e._v(" "),e._m(25),n("p",[e._v("Planen i morgen er å få oversikt over hvordan vi skal ta hånd om deployments som ikke er gyldige, Helm har innebygget funksjonalitet for å kunne kjøre roll-back. Men det må ligge noe over for å styre dette.")]),e._v(" "),n("p",[e._v("Videre punkter som må undersøkes er logging, monitorering og sikkerhet både for selve Kubernetes klusteret, Tomcat serveren som kjører inni containeren og Java applikasjonen.")]),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),n("p",[e._v("Pipelinen består av følgende:")]),e._v(" "),e._m(29),e._v(" "),n("p",[e._v("Etter ett nytt møte for å diskutere stegene fremover, diskuterte vi litt om hva vi skal gjøre med delte biblioteker som i dag blir hostet inhouse via Nexus Repository. Disse vil ikke Bitbucket Pipeline få tilgang til. Derfor vurderer jeg nå og se på Azure Artifacts, fordelen med at dette er en Azure tjeneste er mye tettere integrering med ACR og AKS, som blandt annet automatisk autentisering.")]),e._v(" "),n("p",[e._v("Azure Artifacts er en undertjeneste i Azure DevOps, så det kan kanskje også være smart å ta i bruk Azure Pipelines som også ligger i Azure DevOps når muligheten ligger der.")]),e._v(" "),e._m(30),e._v(" "),n("p",[e._v("Syk")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"uke-3-veien-mot-skyene"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uke-3-veien-mot-skyene","aria-hidden":"true"}},[this._v("#")]),this._v(" Uke 3 - Veien mot skyene")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("Timer")]),this._v(" "),t("p",[this._v("Denne uken: 26 (syk to dager)")]),this._v(" "),t("p",[t("strong",[this._v("Totalt: 93")]),this._v(" 🎉")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#fredag"}},[e._v("Fredag")]),n("ul",[n("li",[n("a",{attrs:{href:"#ulike-nivaer-av-monitorering"}},[e._v("Ulike nivåer av monitorering")])]),n("li",[n("a",{attrs:{href:"#prometheus-og-grafana"}},[e._v("Prometheus og Grafana")])]),n("li",[n("a",{attrs:{href:"#jmx-exporter-java-agent-og-premain"}},[e._v("JMX Exporter, Java Agent og premain")])]),n("li",[n("a",{attrs:{href:"#kubernetes-og-prometheus"}},[e._v("Kubernetes og Prometheus")])]),n("li",[n("a",{attrs:{href:"#videre"}},[e._v("Videre")])])])]),n("li",[n("a",{attrs:{href:"#torsdag"}},[e._v("Torsdag")])]),n("li",[n("a",{attrs:{href:"#onsdag"}},[e._v("Onsdag")])]),n("li",[n("a",{attrs:{href:"#mandag-og-tirsdag"}},[e._v("Mandag og tirsdag")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"fredag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fredag","aria-hidden":"true"}},[this._v("#")]),this._v(" Fredag")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"ulike-nivaer-av-monitorering"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ulike-nivaer-av-monitorering","aria-hidden":"true"}},[this._v("#")]),this._v(" Ulike nivåer av monitorering")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("Det er ulike nivåer vi ønsker å kunne monitorere og logge på:")]),e._v(" "),n("ol",[n("li",[e._v("Infrastruktur nivå")]),e._v(" "),n("li",[e._v("Kubernetes nivå")]),e._v(" "),n("li",[e._v("Tomcat / JVM nivå")]),e._v(" "),n("li",[e._v("Applikasjonsnivået")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("På Tomcat og JVM nivået ønsker vi detaljert informasjon om for eksempel hvor mange tråder som kjører, hvor mange feilmeldinger, telle antall forespørsler mot hvert enkelt REST-endpoint for eksempel "),t("code",[this._v("/location")]),this._v(", hvor mye minne JVM'en bruker.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"prometheus-og-grafana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prometheus-og-grafana","aria-hidden":"true"}},[this._v("#")]),this._v(" Prometheus og Grafana")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"jmx-exporter-java-agent-og-premain"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jmx-exporter-java-agent-og-premain","aria-hidden":"true"}},[this._v("#")]),this._v(" JMX Exporter, Java Agent og "),t("code",[this._v("premain")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("For å kunne monitorere Tomcat serveren vi må servere dataene til Prometheus over HTTP, og skal vi dra nytte av Kubernetes sin støtte til Prometheus må monitorerings dataene bli servert på "),t("code",[this._v("/metrics")]),this._v(". Siden vi har mye eksisterende kode, er det nødvendig å finne en løsning slik at vi kan monitorere applikasjone uten å måtte endre den eksisterende kodebasen. Her kommer vi over Java Agent.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("Java Agent")]),e._v(" "),n("p",[e._v("En Java agent er en vanlig Java klasse med litt strengere regler, den må implementere metoden:")]),e._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("void")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("premain")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("String agentArgs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" Instrumentation inst"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),n("p",[n("code",[e._v("premain")]),e._v(" metoden blir en "),n("em",[e._v("agent entry point")]),e._v(", lignende den vanlige "),n("code",[e._v("main")]),e._v(" vi er vandt med i vanlige Java applikasjoner.")]),e._v(" "),n("p",[e._v("Når Java Virtuell Maskin (JVM) har blitt initialisert, vil hver "),n("code",[e._v("premain(String agentArgs, Instrumentation inst)")]),e._v(" bli kalt i den rekkefølgen agentene ble spesifisert når JVM'en startet. Når alle "),n("code",[e._v("premain")]),e._v(" metodene er initialisert vil den ekte Java applikasjon "),n("code",[e._v("main")]),e._v(" metoden bli kalt.")]),e._v(" "),n("p",[e._v("Med denne metoden kan man injisere og modifisere eksisterende kode, ved å manipulere byte-koden. Her er det laget noen rammeverk, men i korte trekk blir det lagt til ekstra kode i for eksempel Interfacet "),n("code",[e._v("javax.servlet.Servlet")]),e._v(". Hvor vi da kan lytte på Servletene og telle for mange forespørsler det kommer til for eksempel "),n("code",[e._v("/eksempel")]),e._v(".")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"jmx-exporter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jmx-exporter","aria-hidden":"true"}},[this._v("#")]),this._v(" JMX Exporter")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"kubernetes-og-prometheus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-og-prometheus","aria-hidden":"true"}},[this._v("#")]),this._v(" Kubernetes og Prometheus")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Prosjektet er satt opp med en fin "),t("em",[this._v("one-liner quick install")]),this._v(" som setter opp alt under namespacet "),t("code",[this._v("monitoring")]),this._v(" i det eksisterende klusteret vårt:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("kubectl apply \\\n  --filename https://raw.githubusercontent.com/giantswarm/kubernetes-prometheus/master/manifests-all.yaml\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("kubectl port-forward --namespace"),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v("monitoring grafana-core 3000:3000\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Åpner vi "),t("code",[this._v("http://localhost:3000")]),this._v(" på maskinen vil vi kunne se Grafana dashboardet")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"videre"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#videre","aria-hidden":"true"}},[this._v("#")]),this._v(" Videre")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("code",[e._v("prometheus.io/scrape")]),e._v(": Om Prometheus skal skrape Pod'en")]),e._v(" "),n("li",[n("code",[e._v("prometheus.io/path")]),e._v(": Hvilken sti "),n("em",[e._v("metrics")]),e._v(" vil bli servert på (standard "),n("code",[e._v("/metrics")]),e._v(")")]),e._v(" "),n("li",[n("code",[e._v("prometheus.io/port")]),e._v(": Hvilken port Prometheus skal skrape på.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"torsdag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#torsdag","aria-hidden":"true"}},[this._v("#")]),this._v(" Torsdag")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Jeg fikk testet ut Azure Pipeline i dag. Sammenkoblingen mot ACR og AKS er smertefritt, alt er integrert i løsninen via en grafisk pipeline bygger. Men jeg fikk ett stort problem, i vår løsning med mono-repo og thrunk-based master er vi avhenging av "),t("code",[this._v("git tags")]),this._v(" som versjonerer kodebasen etterhvert som Jenkins bygger prosjektet og byggingen blir vellyket. Denne metodikken ønsker vi å fortsette med, siden vi da kan bruke taggen fra git til å tagge docker imaget.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Desverre støtter ikke Azure Pipelines å lese "),t("code",[this._v("git tags")]),this._v(" fra Bitbucket, hvor vi hoster alle repositoriene våre. Azure Pipelines har muligheten dersom man bruker Azure DevOps egne repositories. Men vi kan ikke flytte alle våre repositories fra Bitbucket til Azure DevOps over natten, på grunn av vi bruker Jira og Confluence hos Atlassian. Skal vi gå over, vil det generere en god del ekstra arbeid utennom dette prosjektet. Derfor går jeg tilbake til Bitbucket Pipelines.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ol",[n("li",[n("code",[e._v("az")]),e._v(" - Azure CLI for autentisering")]),e._v(" "),n("li",[n("code",[e._v("helm")]),e._v(" - Helm klient for å kunne oppdatere Helm Chartet")]),e._v(" "),n("li",[n("code",[e._v("kubectl")]),e._v(" - Kubernetes CLI for å kunne autentisere mot klusteret og sette riktig kontekst.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language-docker extra-class"},[n("pre",{pre:!0,attrs:{class:"language-docker"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" microsoft/azure"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("cli\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ENV")]),e._v(" KUBE_LATEST_VERSION="),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"v1.12.2"')]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ENV")]),e._v(" HELM_LATEST_VERSION="),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"v2.11.0"')]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RUN")]),e._v(" apk add "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("update ca"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("certificates \\\n  && apk add "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("update "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("t deps curl \\\n  && curl "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("L https"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("//storage.googleapis.com/kubernetes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("release/release/$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("KUBE_LATEST_VERSION"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("/bin/linux/amd64/kubectl "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("o /usr/local/bin/kubectl \\\n  && chmod +x /usr/local/bin/kubectl \\\n  && wget http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("//storage.googleapis.com/kubernetes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("helm/helm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("HELM_LATEST_VERSION"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("linux"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("amd64.tar.gz \\\n  && tar "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("xvf helm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("HELM_LATEST_VERSION"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("linux"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("amd64.tar.gz \\\n  && mv linux"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("amd64/helm /usr/local/bin \\\n  && rm "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("f /helm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("HELM_LATEST_VERSION"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("linux"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("amd64.tar.gz \\\n  && apk del "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("purge deps \\\n  && rm /var/cache/apk/*\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Pipelinen ser etterpå slik ut (fjernet noen verdier "),t("code",[this._v("<variabel>")]),this._v("):")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language-yaml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("pipelines")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("tags")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("'*'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("step")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Build and deploy to Docker registry\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("services")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" docker\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" export IMAGE_NAME=$DOCKER_REGISTRY/$APP_NAME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("$BITBUCKET_TAG\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" export IMAGE_NAME_LATEST=$DOCKER_REGISTRY/$APP_NAME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("latest\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" docker build "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("t $IMAGE_NAME "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("t $IMAGE_NAME_LATEST .\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" docker login <registry_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v(".azurecr.io "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("u $DOCKER_USERNAME "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("password $DOCKER_PASSWORD\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" docker push $IMAGE_NAME\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" docker push $IMAGE_NAME_LATEST\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("step")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Deploy to Kubernetes\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("deployment")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" test\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n            "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" <registry_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v(".azurecr.io/az"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("cli"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("kubectl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("helm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("0.1.1\n            "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("username")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" $DOCKER_USERNAME\n            "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("password")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" $DOCKER_PASSWORD\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" az login "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("principal "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("username $AZURE_CLIENT_ID "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("password $AZURE_SECRET "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("tenant $AZURE_TENANT "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("subscription $AZURE_SUBSCRIPTION_ID\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" helm init "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("client"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("only\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" az acr helm repo add "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("n <registry_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" echo $KUBE_TOKEN "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("|")]),e._v(" base64 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("d "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v(" ./kube_token\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" echo $KUBE_CA "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("|")]),e._v(" base64 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("d "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v(" ./kube_ca\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" kubectl config set"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("cluster <cluster_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("server=$KUBERNETES_HOST "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("certificate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v('authority="$(pwd)/kube_ca"\n            '),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" kubectl config set"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("credentials bitbucket "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v('token="$(cat ./kube_token)"\n            '),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" kubectl config set"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("context development "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("cluster=<cluser_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("user=bitbucket\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" kubectl config use"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("context development\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" helm upgrade $APP_NAME "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("install <registry_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v("/$APP_NAME "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("set image.tag=$BITBUCKET_TAG "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("namespace development\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"onsdag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onsdag","aria-hidden":"true"}},[this._v("#")]),this._v(" Onsdag")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("I dag hadde jeg sammen med en kollega møte med en Kubernetes ekspert fra firmaet som drifter mye av infrastrukturen til Stacc. Han skal hjelpe oss på veien med å sette opp infrastrukturen rundt Kubernetes i "),t("em",[this._v("Veien mot skyene")]),this._v(" prosjektet.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Siden jeg forrige uke fikk satt opp Azure Container Registry med Ansibe kunne jeg i dag gå videre på faktisk pushe Dockerimages til ACR.\nJeg fikk satt opp Bitbucket Pipeline til demo modulen vår, så når det kommer en "),t("code",[this._v("git tag")]),this._v(" vil pipelinen starte.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ol",[n("li",[e._v("Bygge et Dockerimage")]),e._v(" "),n("li",[e._v("Deploye til Azure Container Registry")]),e._v(" "),n("li",[e._v("Koble seg til Azure Kubernetes Service (AKS) via "),n("code",[e._v("kubectl")])]),e._v(" "),n("li",[e._v("Deploye Dockerimaget til Kubernetes klusteret (AKS)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"mandag-og-tirsdag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mandag-og-tirsdag","aria-hidden":"true"}},[this._v("#")]),this._v(" Mandag og tirsdag")])}],!1,null,null,null);t.default=a.exports}}]);