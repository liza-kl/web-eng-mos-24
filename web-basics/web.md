---
marp: true
paginate: true

---
<style scoped>
section { justify-content: center; }
</style>
# Web Engineering I - Web Grundlagen
Elisabeth Kletsko – DHBW Mosbach WiSe 2024 

---
<style>

section { justify-content: start; }
section::after {
  content: attr(data-marpit-pagination) '/' attr(data-marpit-pagination-total);
}
</style>
## Ziele dieses Blocks
**DHBW**
- Grundlagen Webserver, HTTP (Request, Response usw.)
- Werkzeuge für Web-Entwicklung
- Einen groben Überblick über Definitionen im Web erhalten
  - Begriffe wie _Frontend_, _Backend_, _API_ einordnen können
  - _Client Server Modell_ verstehen (Request, Response)
---
## Was ist das „WWW“?

> 📖 **World-Wide-Web (WWW)**
> [...] Ein System von untereinander verlinkten, Hypertext-Dokumenten.

> 📖 **Hypertext - Übertext**
> Text mit Querverweisen zur Bildung einer netzartigen Struktur 
> Analogie: Buch mit Inhalts- oder Stichwortverzeichnis und Fußnoten

Das WWW ist kein Synonym für das „Internet“ (welches „nur“ die Infrastruktur aus vernetzer Hardware beschreibt) [Video Erklärung](https://www.youtube.com/watch?v=aZIAM2I0lsU)

---
## Kommunikation im Web - Clients 
> 📖 **Client** 
> Ein Gerät, welches auf Ressourcen von einem Server zugreift (Terminal, Web Browser).
> Dies geschieht über einen **Request** (dt. Anfrage), auf welche eine Server **Response** (dt. Antwort) erfolgt.

![](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview/basic_static_app_server.png)

--- 
## Kommunikation im Web – Server 
> 📖 **Server**
> Ein Computer, welcher Ressourcen (Daten, Services, Websiten) über ein Netzwerk verfügbar macht für einen Client-Request mit einer Server-Response

> 📖 **Webserver** 
> **Hardwareseitig**: Ein Server, welcher Datenaustausch über das Web ermöglicht.
> **Softwareseitig**: Bereitstellung von Mechanismen, um HTTP Protokolle zu verarbeiten und URLs. ➡️ [MDN Webdocs](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server)

---
##  Kommunikation im Web – Das Client Server Modell
> 📖 **Client Server Modell**
> Der Client stellt eine Verbindung zum Server her und schickt eine Anfrage. Der Webserver antwortet darauf in der Regel mit einer Bestätigung und sendet z.B. ein HTML-Dokument zurück.
➡️ [Mehr dazu](https://www.geeksforgeeks.org/client-server-model/)

![](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview/basic_static_app_server.png)

---
## Websites vs. Webapps

Eigenschaft | Website | Webapp |
:-----|:------|:-----|
 | | Eine Kollektion von verlinkten HTML-Dokumennten  | Eine Software |
Statisch/Dynamisch | Anzeigen von statischen Inhalten  | Dynamische Inhalte, teils basierend auf Nutzer-Interaktion |
Hauptfunktion | Inhalte / Informatinen darstellen | Erlauben von Interaktion und Ausführung von Nutzer-Aufgaben |
Beispiel | Vereinswebsite | facebook | 


---
## Web Frontend

> 📖 **Web Frontend**
> Die **sichtbare** Oberfläche einer Web-Anwendung im Browser mit welcher ein Benutzer interagieren kann.

- Nimmt Benutzer-Interaktion entgegen (bspw. Klicken auf einen Button)
- Sendet Requests an den Server ab (siehe Client-Server Modell)

![](https://ondrejsevcik.com/blog-images/web-perf-example.gif)

---
## Web Frontend - „Basis“-Technologien

<!-- - Grundlegend setzt sich ein Web-Frontend aus HTML, CSS und JavaScript zusammen -->
- **HTML**: Strukturiert das Frontend
- **CSS**: Styled das Frontend
- **JavaScript**: Fügt Elementen Interaktivität hinzu (hier wird auch oft auf Frameworks wie React, Vue.js etc. zurückgegriffen)

![width](https://technicalseo.com/insights/wp-content/uploads/2019/04/javascript.gif)

--- 
## Backend
<!-- Webserver Begriff "droppen", nimmt Anfrage entgegen / Apache -->
<!-- Evt Definition von Bank -->

> 📖 **Backend** (Die „unsichtbare“ Server-Seite einer Webanwendung)
> Service(s), welcher die Annahme und Verarbeitung von Requests übernehmen. Ggf. resultieren Änderungen in der Datenbank

- **Bsp. Technologien:** Programmiersprachen und Frameworks wie Node.js (Express), Python (Django, Flask), Java (Spring), PHP (Symfony, Laravel)
- ➡️ [Mehr zu Unterschiede FE / BE](https://aws.amazon.com/compare/the-difference-between-frontend-and-backend/)
---
## Application Programming Interface (API)
> 📖 **API**
> APIs sind Mechanismen, die es zwei Software-Komponenten [bspw. Frontend und Backend] ermöglichen, über eine Reihe von Definitionen und Protokollen miteinander zu kommunizieren. [AWS](https://aws.amazon.com/what-is/api/)

- Beispiel: [Star Wars API](https://swapi.dev/)
![bg right:50% fit](https://phauer.com/blog/2015/0304-restful-api-design-best-practices/POST-for-Creation-eo.svg)

---
<!-- Überarbeiten / Nachrecherchieren -->
## URI, URL und URN

- URI (Uniform Resource Identifier): Konzept zur eindeutigen Identifikation einer Resource
- URL (Uniform Resource Locator) und URN (Uniform Resource Name) zur Lokalisierung einer Ressourcen (im Internet)

---
## URI – Uniform Resource Identifier

Ein URI ist ein allgemeiner Begriff, der eine Zeichenkette bezeichnet, die eine bestimmte Ressource eindeutig identifiziert. Ein URI kann entweder eine URL oder eine URN sein.

- **Zweck**: Dient zur Identifikation von Ressourcen, unabhängig davon, wo sich die Ressource befindet oder wie sie abgerufen wird.
- **Beispiel**: `http://example.com/resource` ist ein URI, weil es eine Ressource eindeutig beschreibt. 

![bg right:30% fit](https://media.geeksforgeeks.org/wp-content/uploads/20200205203241/gfg30.jpg)

---

## URN – Uniform Resource Name

Eine URN ist ein URI, der eine Ressource über einen dauerhaften Namen identifiziert, unabhängig vom Standort. Im Gegensatz zu einer URL beschreibt sie nicht, wie und wo die Ressource abgerufen wird.

- **Zweck**: Dauerhafte, standortunabhängige Identifikation einer Ressource.
- **Syntax**: Beginnt mit dem Präfix `urn:`.
- **Beispiel**: `urn:isbn:978-3-16-148410-0` ist eine URN für ein spezifisches Buch, unabhängig von dessen Standort.

---

## URL – Uniform Resource Locator

Eine URL ist eine spezifische Art von URI, die den Ort einer Ressource beschreibt und den Weg zur Ressource angibt. Sie enthält in der Regel ein Protokoll (wie HTTP oder HTTPS), eine Domain und oft auch den Pfad zur Ressource.

- **Zweck**: Lokalisiert die Ressource und beschreibt, wie darauf zugegriffen wird.
- **Bestandteile**: Protokoll, Domain, optionaler Pfad, Portnummer.
- **Beispiel**: `https://example.com/path/to/page.html` beschreibt den Standort und Zugriffspfad zur Ressource.

![bg right:30% fit](https://media.geeksforgeeks.org/wp-content/uploads/20200205203241/gfg30.jpg)

---

<!-- Verhalten ggü Vorgesetzten, Funk Geräte Beispiele -->
## Das Internet Protokoll HTTP(S)
> 📖 **Protokoll**
> Ein Protokoll ist ein standardisierter Satz von Regeln für die Formatierung und Verarbeitung von Daten.

- **HTTP** (HyperText Transfer Protocol) und **HTTPS** (HTTP Secure) sind fundamentale Protokolle, um Daten im Internet zu kommunizieren.
---
<!-- HTTP Status -->
## HTTP-Methoden

> 📖 **HTTP-Methoden**
> **Standardisierte Anfragen**, die Clients an Server senden, um verschiedene Operationen wie Abrufen, Erstellen, Aktualisieren oder Löschen von (Server)-Ressourcen durchzuführen.

- Bspw. möchte ich einen User abrufen (GET), erstellen (POST) oder löschen (DELETE)

---
<style scoped>
  table {font-size: 0.85rem;}
  </style>
## HTTP-Methoden

| **Methode** | **Beschreibung**                                         |
|-------------|---------------------------------------------------------|
| **GET**     | Fordert Daten von einem Server an.                      |
| **POST**    | Sendet Daten an den Server, um eine Ressource zu erstellen oder zu aktualisieren. |
| **PUT**     | Aktualisiert eine bestehende Ressource oder erstellt sie, wenn sie nicht existiert. |
| **DELETE**  | Löscht eine angegebene Ressource auf dem Server.       |
| **HEAD**    | Fordert die Header-Informationen einer Ressource an, ohne den Body zu übertragen. |
| **OPTIONS** | Gibt die unterstützten HTTP-Methoden für eine bestimmte Ressource zurück. |
| **PATCH**   | Nimmt Teiländerungen an einer Ressource vor.           |
---

## HTTP Status Codes

HTTP-Statuscodes sind dreistellige Zahlen, die Webserver als Antwort auf Anfragen von Clients (z. B. Browser) zurückgeben. Sie zeigen den Status der Anfrage an und helfen bei der Fehlerdiagnose und -behebung.

---
<style scoped>
  table {font-size: 0.65rem;}
  </style>
## Kategorien von HTTP Status Codes

| **Status Code Kategorie**   | **Bedeutung**                                                                                                | **Beispiel**                                                                                           |
| ----------------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| **1xx - Informational** | Informiert darüber, dass die Anfrage empfangen wurde und die Verarbeitung fortgesetzt wird.              | `100 Continue` - Der Server hat den Anfang der Anfrage erhalten und der Client soll fortfahren.     |
| **2xx - Success**       | Die Anfrage war erfolgreich.                                                                             | `200 OK` - Die Anfrage war erfolgreich und der Server liefert die angeforderten Daten.              |
| **3xx - Redirection**   | Zusätzliche Schritte erforderlich, meist eine Weiterleitung.                                             | `301 Moved Permanently` - Die Ressource wurde dauerhaft verschoben und die neue URL wird angegeben. |
| **4xx - Client Error**  | Die Anfrage war fehlerhaft und muss vom Client korrigiert werden.                                        | `404 Not Found` - Die angeforderte Ressource wurde nicht gefunden.                                  |
| **5xx - Server Error**  | Ein Fehler ist auf dem Server aufgetreten und die Anfrage konnte nicht erfolgreich abgeschlossen werden. | `500 Internal Server Error` - Ein allgemeiner Serverfehler ohne genauere Details.                   |

---
## Häufige HTTP-Statuscodes im Detail

- **200 OK**  
  Die Anfrage war erfolgreich, und die gewünschten Daten werden im Antwortkörper geliefert.

- **301 Moved Permanently**  
  Die Ressource wurde dauerhaft verschoben.


---

## Häufige HTTP-Statuscodes im Detail

- **403 Forbidden**  
  Der Server verweigert den Zugriff auf die angeforderte Ressource, z. B. wegen fehlender Berechtigungen.

- **404 Not Found**  
  Die Ressource existiert nicht unter der angefragten URL. Kann ein Tippfehler oder ein gelöschter Inhalt sein.

- **500 Internal Server Error**  
  Ein allgemeiner Fehler auf dem Server. Ursache ist oft ein fehlerhaftes Server-Skript.

---

## Warum sind HTTP-Statuscodes wichtig?

- **Fehlerbehebung**: Sie helfen Entwickler\*innen, Probleme schnell zu identifizieren und zu beheben.
- **SEO-Relevanz**: Suchmaschinen beachten Weiterleitungen und Fehlerseiten (z. B. 301, 404), was die SEO-Rankings beeinflussen kann.
- **Benutzererfahrung**: Klare Statuscodes ermöglichen es, Nutzer\*innen besser über den Status einer Seite zu informieren.
---

## HTTP Methoden ausprobieren #1
- Gehe auf [https://reqbin.com/](https://reqbin.com/)
- Trage ein [https://api.chucknorris.io/jokes/random](https://api.chucknorris.io/jokes/random) mit der `GET` Methode
- Mache das selbe mit der `POST` Methode
- Schaue unter `Headers` welche Felder Du noch feststellen kannst
---
<!-- Mit Inspektor ausprobieren -->
## HTTP Methoden ausprobieren #2
1. Öffne den Inspector und das „Network“ Tab + „Doc“
2. Gehe auf [https://api.chucknorris.io/jokes/random](https://api.chucknorris.io/jokes/random)
4. Klicke "Doc" an

- _Erkennst du die Header Fields von vorhin?_ 
- Weitere Fields [hier](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
---
<!-- Diese Seite ist nicht sicher -->
## Unterschiede zwischen HTTP und HTTPS
- **S = Secure**
- Seiten, die mit einem `https` gesichert sind, verwenden ein **SSL-Zertifikat** zur Verschlüsselung der Datenübertragung.
- [Mehr dazu](https://blog.mozilla.org/en/products/firefox/https-protect/)
<!-- Registrar, Registry, ionos Beispiele, Diagramm -->
<!-- Telefon Beispiel 
# Ablauf des Zugriffs auf eine Web Ressource

1. **URL-Eingabe oder Klick**: Der Nutzer gibt eine URL in den Browser ein oder klickt einen Link an.
2. **DNS-Auflösung**: Der Browser übersetzt die URL in eine IP-Adresse (Domain Name System, DNS).
3. **HTTP(S)-Anfrage**: Der Browser sendet eine HTTP(S)-Anfrage an den Server unter der IP-Adresse.
4. **Serverantwort**: Der Server liefert eine Antwort (z.B. HTML-Daten).
5. **Rendering im Browser**: Der Browser interpretiert und zeigt die Inhalte als Webseite an.-->
