# Rencontre 23

- .NET BackgroundService avec un Hub
- Utilisation de Scope à l'intérieur d'un service Singleton
- MAUVAIS JsonIgnore...

## Faire jouer une animation sur une carte

### CSS
```ts
var element = document.getElementById("PC" + event.PlayableCardId);
element?.classList.add("attack");
```

- Pour un power sur une carte

```ts
var element = document.getElementById("PC" + event.PlayableCardId + "_Heal");
element?.classList.add("powerAnimation");
```

Ou

```ts
var element = document.getElementById("PC" + event.PlayableCardId)
                         .querySelector('[name="' + powerId + '"]');
element?.classList.add("powerAnimation");
```

### Angular

- Pour faire jouer une animation angular, on peut ajouter des variables directement sur PlayableCard et déclencher les animations sur la carte avec un trigger sur ces variables


## Info

[BackgroundService](/info/BackgroundService)

### Exercices

[Exercice BackgroundService](/exercices/BackgroundService)
