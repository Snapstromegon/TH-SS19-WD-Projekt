# Prototyp

## Ziele

Um bereits vor der eigentlichen Implementierung mit Vue.js Single
File Components Erfahrung zu sammeln wurde ein kleiner Prototyp
erstellt.

Der Prototyp wird ebenfalls verwendet um die notwendige Dateigröße
der Bilder im Cache zu ermitteln. Einerseits sind möglichst kleine
Dateien das Ziel, sie müssen aber noch zu erkennen sein. Der Prototyp
hat geholfen sich für das von Google entwickelte webp Format zu 
entscheiden.

## Eingesetzte Tools

Wir verwenden im Prototyp Gulp zum konvertieren von Bildern in das
webp Format und für SCSS. Dafür wurden zwei Watcher definiert.

_gulpfile.js_

```javascript
task('sass:watch', function () {
    watch('./src/scss/*.scss', series('sass'));
});

task('webp:watch', function () {
    watch('./src/assets/images/*.jpg', series('webp'));
});
```

Die [Vue CLI](https://cli.vuejs.org/) hat uns bei der Einrichtung
von Webpack und Hot Reloading geholfen. 

Der Module Bundler Webpack ist notwendig für die Verwendung von
Single File Components. 




