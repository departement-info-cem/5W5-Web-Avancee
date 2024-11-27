# NgZone

## Objectif

- Comprendre pourquoi la vue peut ne pas se mettre à jour une fois déployée
- Apprendre à utiliser NgZone

## Le symptome

- Lorsque l'on utilise une application Angular **déployée** OU la version de **production** (ce qui est produit par **ng build**), il est possible que nos vues ne soient as toujours à jour!
- Donc, le data est mis à jour, mais la vue n'est pas rafraîchit et contient encore l'**ancien contenu!!!!**
- Pire encore, parfois il se met à jour et parfois pas et des fois en retard!
- Ça arrive par exemple lorsque l'on exécute du code dans un callback de SignalR:

```ts
this.hubConnection.on('GameInfo', (data:GameInfo) => {
    this.isConnected = true;
    this.multiplierInitialCost = data.multiplierCost;
    this.multiplierCost = this.multiplierInitialCost;
    this.nbWins = data.nbWins;
});
```
### La solution

Pour régler le problème, on peut utiliser NgZone

```ts
import { Component, NgZone } from '@angular/core';

...

constructor(private zone: NgZone){}
```

```ts
this.hubConnection.on('GameInfo', (data:GameInfo) => {
    this.zone.run(() => {
        this.isConnected = true;
        this.multiplierInitialCost = data.multiplierCost;
        this.multiplierCost = this.multiplierInitialCost;
        this.nbWins = data.nbWins;
    });
});
```

Maintenant que le code s'exécute dans une "Zone Angular", ça veut dire essentiellement qu'Angular est au courrant que le changement a eu lieu et qu'il devrait mettre la vue à jour!

### Pourquoi ça arrive?

Essentiellement, comme le callback a été déclenché par la libraire de communication SignalR et non par le framework d'Angular, Angular ne sait pas que le changement a eu lieu.

Angular roulerait vraiment plus lentement s'il commençait à écouter TOUT les changements de données qui arrivent à tout moment par tout le code JS qui roule.

### Pourquoi ça arrive juste en production?

Jusqu'à présent, on n'a pas eu de problème avec nos applications, car on les a toujours roulé en dévelopement. Et comme on est en dévelopement, de nombreuses optimisations de performances ne sont pas activés et les mises à jours de nos vues sont déclenchés plus fréquemment!

### En résumé

**Donc**, on va devoir ajouter un **this.zone.run** autour de chaque **callback de SignalR** si on veut que la page soit mise à jour (C'est probablement le cas dans **tous les callbacks de notre application**)



