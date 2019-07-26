# Expose

## Zielsetzung

Unser Ziel ist es eine Single Page Application (kurz SPA) zu entwickeln die eine Bildergalerie bereit stellt erweitert um Informationen zu den Werken. 

Moderne mobile Betriebssysteme für Smartphones erlauben es Progressive Web Apps auf dem Startbildschirm hinzuzufügen und diese vergleichbar wie eine native App zu starten und zu verwenden.

Durch das verfolgen des Offline First Ansatzes wollen wir ermöglichen nach dem einmaligen laden der Inhalte diese auch während eines Besuches diese ohne dauerhafte Internetverbindung bereit stellen zu können.
So können Nutzer die möglicherweise keine mobile Internetverbindung haben die Informationen zu Hause im Heimnetzwerk abrufen und weitere Details zu den Werken auch später ohne Internetverbindung abrufen.

Die PWA wird mindestens drei Unterschiedliche Ansichten bereit stellen. Die Hauptansicht ist die Galerie. In dieser kann der Benutzer mit einer Pagination navigieren und sich kleine Vorschauansichten der Bilder ansehen. Wählt der Benutzer ein Bild aus wird dieses in der Detail-Ansicht gezeigt. Diese zeigt das Bild in höherer Auflösung und zeigt weitere Metainformationen zu dem Werk. Als letztes soll es möglich sein Werke in ohne die Metainformationen möglichst groß betrachten zu können mit der Option zum skalieren der Ansicht.  

## Technologien / Frameworks

Wir werden das Frontend Javascript-Framework [Vue.js](https://vuejs.org/) verwenden. Zusätzlich wird für die SPA das offizielle Vue Router Modul verwendet. Für die Verwendung von [Single File Components](https://vuejs.org/v2/guide/single-file-components.html) (kurz SFCs) wird der Module Bundler Webpack genutzt. Zusätzlich ist ein Loader für Webpack notwendig welcher mit den SFCs umgehen kann. 

## Vorgehensweise

Zuerst werden wir für die in der PWA verfügbaren Ansichten Wireframes anfertigen. Diese werden dann weiter ausgearbeitet bis wir alle notwendigen Elemente in den Ansichten definiert haben sowie das Design dieser.

Im nächsten Schritt können die Designs umgesetzt werden das sie im Webbrowser darstellbar sind. 

Als letztes wird die eigentliche PWA mit Vue.js umgesetzt, dabei können bereits umgesetztes HTML und CSS verwendet werden.
