# Animations CSS

## Objectifs

Utiliser des animations CSS pour animer des cartes.

[Projet](https://github.com/CEM-420-5W5/css-animations-exercice)

## État initial

Le projet est déjà assez complet, mais il faut faire quelques modifications à chaque étape

## Complétez les tâches suivantes

### Faire apparaître la carte

Ici on va utiliser la propriété className pour mettre fade-in directement sur l'élément dans le JSX

### Faire disparaître la carte

On va travailler un peu plus cette fois-ci.

Premièrement créer une animation fade-out dans le fichier **animations.css** (il faut créer la classe et les keyframes). C'est assez simple, faites le contraire du fade-in!

Dans la méthode afficherCarte, il faut faire quelque chose quand la valeur est false (pour la cacher).
Premièrement, trouvez l'élément et ensuite ajoutez-lui la classe fade-out que vous venez de créer.

Ça ne fonctionne pas? Ça serait mieux d'attendre que l'animation soit terminé avant d'exécuter la ligne setCardVisible, sinon l'élément disparaît instantanément!

Gardons ça simple avec une autre stratégie qui fonctionne bien dans ces cas simples:

```ts
// On attend 500 ms avec ce code (la méthode doit être async)
await new Promise(resolve => setTimeout(resolve, 500));
```

### Faire jouer une animation d'attaque

Dans la méthode **jouerAttaque**, on peut obtenir l'élément avec son id en fonction de la variable side.

On peut ensuite ajouter la classe d'animation pour jouer la bonne animation d'attaque (player-attack ou opponent-attack)

:::warning
Êtes-vous capable de jouer les animations plusieurs fois? Si non, allez-y avec la première solution présenté en classe.
:::

:::danger
On montre comment le faire avec une animation CSS, mais ça sera sans doute plus facile de le faire avec une animation JS dans votre TP
:::

### Afficher une animation autour de la carte quand on peut la jouer

Pas de méthode à modifier ici, on va uniquement définir le className des cartes de cette section en fonction du coût en mana de la carte et de la variable mana.

La classe card-can-be-played permet d'afficher une bordure animée en boucle

### Activer un pouvoir sur une carte

Ici c'est presque exactement le même problème que pour jouer une attaque. Mais comment bien identifier les différents pouvoirs?

Modifier la propriété id des pouvoirs pour qu'elle soit vraiment unique. Le truc c'est de combiner le id de la carte avec celui du pouvoir!

Modifiez ensuite **activatePower** pour jouer les animations.

Utilisez les variables **selectedCardId** et **selectedPowerId**

:::warning
Êtes-vous capable d'animer les pouvoirs plusieurs fois? Utilisez encore le même fix.
:::

:::danger
On montre comment le faire avec une animation CSS, mais ça sera sans doute plus facile de le faire avec une animation JS dans votre TP
:::

## Solution

La solution est dans la branche **solution** du repo
