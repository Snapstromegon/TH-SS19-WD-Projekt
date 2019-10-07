# Reflexion

## Welche Probleme galt es zu lösen und wie wurden sie gelöst?

### Möglichst vollständige Offline Experience

Es wurde als Ziel gesetzt eine möglichst durchgängige Offlineerfahrung zu bieten.

#### Umsetzung

Alle Bilder wurden verkleinert als Base64 in die Metadaten eingebettet und somit kann der Nutzer immer überall hin navigieren und erhält eine Vorschau.

### Caching

Es sollten möglichst viele Daten aus dem Cache geliefert werden und dabei einigermaßen aktuell bleiben.

#### Umsetzung

Es wurde die Caching Strategie "Stale While Revalidate" genutzt, welche alte Daten zeigt und im Hintergrund diese aktualisiert.

## Welche Probleme konnten nur mit einem „Dirty Hack” eliminiert werden?

### CDA kann kein HTTPS

Da das CDA kein HTTPS kann, kann das Deployment nicht auf dieses zugreifen (Mixed Content violation). Daher wird im Deployment nur die Preview zu sehen sein und in der lokalen Version die volle Auflösung.

## Was wurde besonders gut oder elegant gelöst?

### Einbettung der Bilder in JSON

Die Metadaten enthalten eine sehr gut balancierte Version zwischen Qualität und Größe der Bilder als webp.
Zudem wurden bei der Entwicklung der Cachingstrategie gut die Contentarten analysiert.

## Welcher Teil hat den größten Aufwand/ die meiste Anstrengung gekostet?

### Entwicklung Offline Konzept

Die Analyse der möglichen Offline Strategien und deren Abwägung.

## Was hat Sie überrascht?

- Das CDA kann kein HTTPS, was eigentlich eine reine Nutzergefährdung ist

## Was würden Sie eigentlich gerne noch mal refactoren?

### First Load Serviceworker

Der Serviceworker kann aktuell nicht die gebundelten JS Dateien vorladen. Dies geschieht aber bei der Nutzung der Seite automatisch und ist daher nicht problematisch.