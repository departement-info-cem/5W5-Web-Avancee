# Animations (2e partie)

## Objectifs

Créer des séquences et des boucles d'animations

## État initial

Continuez avec le projet de l'exercice précédent

## Complétez les tâches suivantes

### Ajoutez les boutons

Ajoutez deux boutons qui vont déclencher 2 séquences d'animations (**Bounce/Shake/Flip** et **Infinite Triple Spin**)

| ![alt text](/img/exercices/animations/image-3.png) |
| -------------------------------------------------- |

### Ajoutez la logique pour Bounce/Shake/Flip

- Utilisez les animations Angular de la libraire ng-animate.
- Pour _shake_, réutilisez l'animation **shakeX**.
- Ajoutez les animations **bounce** et **flip**.

Pour les durées d'animation:

- **Bounce** : 1 seconde
- **Shake** : 0.75 seconde
- **Flip** : 0.75 seconde

- Utilisez une méthode **async** avec des **await** pour faire jouer la séquence suivante d'animation: **Bounce/Shake/Flip**.

### Ajoutez la logique pour Infinite Triple Spin

- Utilisez encore le site [Animista](https://animista.net). Dans la section _basic_ il y a _Rotate_.

| ![alt text](/img/exercices/animations/image-2.png) |
| -------------------------------------------------- |

- Ajoutez à votre projet les 2 animations CSS suivantes

**rotate-center** (duration: 0.8 seconde, timing-function: easeInQuart, iteration-count: **2**)

:::info
Avec l'option iteration-count, l'animation va jouer 2 fois chaque fois que le CSS est déclenché. Assurez-vous de bien ajuster votre délai!
:::

**rotate-hor-top** (duration: 0.7 seconde, timing-function: easeInOut)

:::warning
Il faut ajouter les _trigger_ css sur le div qui contient l'image, comme pour le _wobble_ du hit dans la première partie de l'exercice.
:::

- Utilisez `setTimeout` et 2 méthodes qui s'appellent l'une, l'autre pour faire une **boucle infinie** qui jouent la double rotation autour du centre et ensuite la rotation horizontale.

## Solution

La solution est dans la branche **solution2** du repo
