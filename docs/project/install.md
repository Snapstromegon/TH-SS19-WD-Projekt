# Installationsaleitung

## Web Deployment

[Hier](https://raphael.hoeser-medien.de/) findet man ein Deployment der Webapp.

### Anmerkungen zum Deployment

- Es gibt Probleme mit der Installation, da das CDA noch immer HTTP nutzt, obwohl das mit bestem Willen nur noch eine schlechte Idee ist
- Gehostet wurde auf meinem privaten Uberspace mit einem Apache, der den Build statisch ausliefert
- Zugangsdaten sind persönlich zu erhalten

## Lokales Deployment

Die Webapp lässt sich mit der Vue CLI lokal bauen. Hierfür kann man entweder den Liveserver nutzen, oder tatsächlich einen Productionbuild antriggern.

### Liveserver

```
$ npm i
$ npm run serve
```

Einfach den Link in der Ausgabe im Browser öffnen.

### Production Build

```
$ npm i
$ npm run build
```

Ab da an lässt sich die index.html im dist Verzeichnis im Browser öffnen.