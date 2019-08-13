# Offline Konzept

## Ziel

Das Ziel der Offline Strategie sollte es sein, dass 
1. ein Nutzer nach erstem Aufrufen der Web App möglichst schnell alle Metadaten zur Verfügung hat und 
2. eventuell alle Bilder als Vorschau verfügbar hat, wobei eine Vorschau ausreicht, in der man das Bild nur erahnen/erkennen kann und nicht groß betrachten muss. 
3. Der FMP (First meaningful Paint) Punkt darf dabei etwas nach hinten wandern um die Netzwerklast zu verkleinern. 
4. Nach dem Laden der ersten Metadaten sollte der Nuter alle Daten lesen können und die Vorschaubilder betrachten können ohne eine erneute Internetverbindung zu benötigen. 
5. Höherwertige Bilder sollten wenn möglich angezeigt und für die Zukunft gespeichert werden.

## Characteristika der zu speichernden Daten

### Metadaten

- Klartext
- Ändert sich selten
- Strukturiert
- Relativ kleiner Datensatz pro Bild

### Vorschaubild

- Komprimierte Bilddaten
- Relativ klein (<5KB)
- Ändert sich selten

### Bild

- Komprimierte Bilddaten
- Sehr groß
- Ändert sich selten

## Mögliche Strategien

### Datenaufbau

#### Metadaten als JSON, Original als Bild

Aufgrund der strukturierten Art der Metadaten bietet sich eine Verbreitung als JSON an. Wenn man alle Metadaten zusammen in ein JSON packt muss man dieses zwar gesamt updaten für jede Änderung, aber Änderungen werden selten erwartet und v.A. ist es nicht zwingend schlimm, wenn ein Nutzer alte Daten sieht.

Die Originale direkt als Bilder zu laden vermeidet für den Nutzer zwar eine schlechte Vorschau sehen zu müssen,erzeugt aber eine hohe Ladezeit und Netzwerklast. Zudem hat man viele Roundtripverluste.

#### Metadaten als JSON, Original eingebettet

Durch die Einbettung der Originale entfernt man die Roundtripverluste, allerdings wird die JSON Datei extrem groß und bei instabilen Verbindungen so Ladefehler wahrscheinlich.

#### Metadaten als JSON, Vorschau und Original als Bild

Das Einbinden von Vorschaubildern reduziert die Netzwerklast gewaltig, doch die Zahl der Dateien steigt in die Höhe und gerade bei kleinen Dateien fällt die Roundtriptime stärker ins gewicht.

#### Metadaten als JSON, Vorschau eingebettet und Original als Bild

Bei der Kombination aus Einbettung und Originalen als Bilder haben wir eine Elimination der wichtigsten Roundtripverzögerungen und zudem lässt sich das Original erst bei Bedarf nachladen.

### Servingstrategie

#### Stale while Revalidate

Da davon ausgegangen wird, dass sich Daten selten ändern ist es okay auf jede Anfrage mit einer gecachten Response zu antworten und im Hintergrund den Cache zu verifizieren/ zu updaten. Auf diese Weise erhält der Nutzer quasi instantan eine Response, welche für den nächsten Aufruf gecacht wird und im Zweifel aktualisiert wird. Das Netzwerk wird nur direkt für Anfragen verwendet, die noch keine gecachte Version vorliegen haben.

## Umsetzung

Im Folgenden wird beschrieben, wie ein Ladevorgang für den First Visit und die nachfolgenden Aufrufe aussehen kann.

### First Visit

1. <- SPA samt HTML/CSS/JS wird geladen und gecacht
2. <- JSON Metadata mit Vorschaubildern wird geladen und angezeigt
3. <- aktuell angezeigte Bilder werden in voller Qualität geladen und gecacht und ausgewechselt

### Weitere Aufrufe

1. <- SPA wird aus Cache geladen und dieser revalidiert/aktualisiert
2. <- JSON Metadata wird aus Cache geladen
3. <- aktuell angezeigte Bilder werden in voller Qualität (aus cache) geladen und gecacht und ausgewechselt

## Resume

Auf diese Weise wird für Folgeaufrufe die SPA quasi instantan angezeigt und schon beim ersten Aufruf haben wir einen schnellen CFP (Contentful Paint). Durch das Laden der JSON Metadaten mit den Vorschaubildern ist die gesamte Web App bereits nach dem ersten Ladevorgang vollständig nutzbar und das mit möglichst geringer Netzlast.

Wenn vom Nutzer ein Interesse für ein Werk ausgeht, oder er es sieht und seine Netzwerkverbindung es zulässt, so wird dieses in voller Qualität geladen und ihm in Zukunft angezeigt (siehe img srcset).

Mit dieser Umsetzung bleibt zudem die Logik für Web App und Serviceworker relativ simpel, was Implementationsfehler vermeidet.