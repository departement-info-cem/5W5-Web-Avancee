# Animations simples

## Objectifs
Modifier les déalis d'animations et créer des séquences et des boucles

[Projet GitHub](https://github.com/CEM-420-5W5/ngRPGAnimations)

## État initial

- Il y a déjà un projet qui affiche un blob (Slimey) et un background. Il y a déjà une logique pour afficher les boutons selon la situation (si Slimey est là ou pas)

## Complétez les tâches suivantes

### Cacher Slimey

- Par défaut, on ne veut pas montrer Slimey. On va mettre son opacity à 0.

```ts
.slime
{
    opacity: 0;
}
```

- Slimey devrait avoir disparu!

### Afficher Slimey

- Quand on clique sur **Spawn**, on veut faire apparaître Slimey.
- Ajouter d'une méthode showSlime qui utilise document.getElementById("slimeyId")

```ts
showSlime(){
    var element = document.getElementById("slimeyId");
    element?.classList.remove("fadeOut");
    element?.classList.add("fadeIn");
}
```

```ts
@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

.slime.fadeIn
{
    animation: fadeIn 0.5s;
    -webkit-animation: fadeIn 0.5s;
}
```

#### Utilisation de forwards

:::warning
Présentement, Slimey redevient invisible une fois que l'animation est terminé!
:::

- Il faut ajouter un forwards à l'animation pour que les valeurs modifiées soient conversées!

```ts
.slime.fadeIn
{
    animation: fadeIn 0.5s forwards;
    -webkit-animation: fadeIn 0.5s forwards;
}
```

### Tuer Slimey

- Faire une méthode **hideSlime()** qui fait le contaire de **showSlime()** et appelez-la
    - Il faut également ajouter un fadeOut dans app.component.css pour définir le css pour fadeOut et ses @keyframes

:::info
Si tout fonctionne bien, on voit Slimey qui prend 0.5 pour disparaître
:::

```ts
animations: [
    trigger('death', [transition(':increment', useAnimation(shakeX, {params: {timing: DEATH_DURATION_SECONDS}}))]),
]
```

- Faire jouer l'animation **shakeX** de ng-animate lors de la mort. (Angular animation)
    - Ajoutez l'animation **shakeX** avec un params de timing de **0.5 seconde**
     - Utilisez une variable **ng_death** pour déclencher l'animation
    - n'oubliez pas de mettre le [@death]="ng_death" sur l'img de Slimey
    - Et de modifier ng_death dans la méthode **death()** pour déclencher l'animation

:::info
Si ça fonctionne bien, Slimey va se déplacer rapidement de gauche à droite pendant qu'il disparaît!
:::

### Faire attaquer Slimey

- Faire jouer l'animation **pulse** de ng-animate lors de l'attaque. (Angular animation)
    - Utiliser un timing de 0.3 et un scale de 4.5 (L'image devrait devenir beaucoup plus grande!)
    - Il faut faire les mêmes choses que pour death pour déclencher l'animation

- On veut faire joueur une autre animation avant de faire l'attaque, pour nous montrer qu'il prend son élan!

- Faites ce qu'il faut pour jouer une animation 

### Faire MAL à Slimey!

- En utilisant le site [https://animista.net](https://animista.net) pour générer un animation wobble

|![alt text](/img/exercices/animations/animistaWobble.png)|
|-|

### Empêcher que les actions se chevauchent (On ne veut pas faire 2 choses en même temps)

- Ajout d'un méthode **waitUntilEndOfAnimation(delay:number)**

## Solution

La solution est dans la branche **solution** du repo
