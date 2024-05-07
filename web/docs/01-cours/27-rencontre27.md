# Rencontre 27

- Travail sur TP3

## Choses en vracs 

### Utilisation de SignalR

Il est préférable de faire ceci pour éviter les **bugs** avec **SignalR**:

```ts
    this.hubConnection = new signalR.HubConnectionBuilder()
        .withUrl(environment.apiUrl + 'monHub')
        .build();

    // C'est mieux d'écouter pour le message avant de faire start() sur la connection. On ne risque pas d'avoir un problème où le message est reçu avant même d'avoir obtenu la connection
    // ATTENTION: Ce problème risque d'arriver beaucoup plus souvent dans une version DÉPLOYÉE de l'application
    this.hubConnection?.on("DoSomething", (data:number) => {
        // Faire quelque chose
    });

    this.hubConnection
        .start()
        .then(() => {
            this.isConnected = true;
        });

```
          
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



