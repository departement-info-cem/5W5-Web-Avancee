# Rencontre 27

- Travail sur TP3

## Choses en vracs 

### Aide avec la mise à jour des données statistiques

Utilisation de ngOnChanges:
```ts
ngOnChanges(changes: SimpleChanges) {
    this.updateChart();
}
```

Mettre à jour les dataPoints et faire un render à chaque mise à jour:
```ts
this.chart.options.data[0].dataPoints = dataPoints;
this.chart.render();
```

### Bon à savoir
Si un joueur regarde le data JSON qui est reçu par son navigateur, il peut voir les cartes que l'adversaire a dans ses mains et dans son deck! Pour faire un projet complet, il faudrait révéler cette information uniquement lorsque la carte est jouée.



