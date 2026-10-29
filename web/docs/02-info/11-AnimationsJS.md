# Animations

## Les options

On peut faire jour des animations en utilisant un grand nombre de technologies, mais dans ce cours on va se concentrer sur les technologies qui font directement partie de JavaScript et CSS. Les autres technologies sont généralment des outils qui utilisent ces technologies à l'interne.

- Animations JS (Ce cours-ci)
- CSS (Prochain cours)



## Animations JS

### La base pour joueur une animation

```ts
const rotationKeyframes: Keyframe[] = [
  { transform: 'rotate(180deg)' }
];

// elementId est spécifié dans l'élément html de cette façon <div id="monId">
const element = document.getElementById(elementId);

// On fait jouer l'animation qui est décrit par le keyframes (on va voir plus de détails plus loin)
// L'animation va jouer en 1000 ms, donc 1 seconde
let animation = element?.animate(keyframes, { duration: 1000 });

// On peut attendre la fin de l'animation de cette façon
await animation?.finished;

```

Pour rendre notre vie plus simple, on va se créer une méthode qui va nous permettre de jouer nos animations facilement

```ts
const animer = async (elementId:string, keyframes: Keyframe[], durationMS:number) => {
  const element = document.getElementById(elementId);

  let animation = element?.animate(keyframes, { duration: durationMS });
  await animation?.finished;
};

// Avec cette méthode on peut maintenant écrire
await animer(`monId`, rotationKeyframes, 1000);
// Et facilement changer l'id de l'élément et la durée
await animer(`unAutreId`, rotationKeyframes, 2000);
// Ou même jouer une autre animation
await animer(`unAutreId`, translationKeyframes, 2000);
```

:::info
On va utiliser la méthode animer dans les exemples de cette page, c'est important de la comprendre
:::


### Qu'est-ce qu'on peut animer?

Voici une liste partielle des choses que l'on peut animer (On peut essentiellement animer toutes les propriétés!) et le keyframes le plus simple que l'on peut écrire pour chaque propriété

- Translation (translate)
```ts
const translationKeyframes: Keyframe[] = [
      { transform: 'translateX(100%)' }
];
```
- Rotation (rotate)
```ts
const rotationKeyframes: Keyframe[] = [
  { transform: 'rotate(180deg)' }
];
```
- Échelle (scale)
```ts
const scaleKeyframes: Keyframe[] = [
  { transform: 'scale(2)' }
];
```
- Couleur (backgroundColor, mais on peut évidemment animer les autres propriétés de couleur)
```ts
const colorKeyframes: Keyframe[] = [
  { backgroundColor: 'yellow' }
];
```
- Transparence (opacity)
```ts
const opacityKeyframes: Keyframe[] = [
  { opacity: 0 }
];
```

### Mais c'est quoi ça un keyframe?

Les clés d'animation permettent de définir les différentes valeur que vont prendre la propriété (ou les propriétés) pendant une animation.

La première chose à comprendre c'est à quel moment ces valeurs vont être appliqué selon le nombre de paramètres.

#### Cas 1: Il y a une seule valeur dans l'array 

```ts
const translationKeyframes: Keyframe[] = [
  { transform: 'translateX(100%)' }
];
```

La proprété transform va valoir sa valeur sans animation au début et va **terminer** avec une translation en X équivalente à 100% de sa taille. (On pourrait utiliser un nombre de pixels)
Bref: C'est la valeur finale!

#### Cas 2: Il y a deux valeurs dans l'array 

```ts
const translationKeyframes: Keyframe[] = [
  { transform: 'translateX(-100%)' },
  { transform: 'translateX(100%)' }
];
```

La proprété transform va appliquer instantanément une translation de -100% et va **terminer** avec une translation de 100%
Bref: La première valeur c'est le début et la deuxième c'est la fin

#### Cas 3: Il y a 3 valeurs dans l'array (ou plus)

```ts
const translationKeyframes: Keyframe[] = [
  { transform: 'translateX(0%)' },
  { transform: 'translateX(100%)' },
  { transform: 'translateX(500%)' }
];
```

La proprété transform va appliquer instantanément une translation de 0% et va **terminer** avec une translation de 500%

Mais qu'est-ce qui se passe entre les deux???

Pour s'aider on va donner une durée à l'animation, par exemple 2 secondes.

Donc le premier va logiquement arriver au moment 0 seconde.
Le dernier va logiquement arriver au moment 2 secondes (la fin).
Et celui du millieu? Et bien au millieu du temps, à 1 seconde.

C'est important de comprendre que cette animation n'est plus à vitesse constante! Pourquoi?

On se déplace de 100% pendant la première seconde (0% à 100%) et de 400% pendant la deuxième seconde (100% à 500%)

import TranslationGraph from '@site/src/components/TranslationGraph';

<TranslationGraph />

:::info
Si il y a plus de 3 valeurs, on va avoir la première et la dernière valeur et les autres vont être à une distance égale dans le temps. On va voir comment on peut avoir plus de contrôle au prochain point.
:::


#### Utiliser des offsets pour avoir plus de contrôle!

Si on regarde l'exemple précédent:

```ts
const translationKeyframes: Keyframe[] = [
  { transform: 'translateX(0%)' },
  { transform: 'translateX(100%)' },
  { transform: 'translateX(500%)' }
];
```

Il utilise l'équivalent des valeurs d'offset suivantes:

```ts
const translationKeyframes: Keyframe[] = [
  { transform: 'translateX(0%)', offset: 0 },
  { transform: 'translateX(100%)', offset: 0.5 },
  { transform: 'translateX(500%)', offset: 1 }
];

// ou de façon plus simple 

const translationKeyframes: Keyframe[] = [
  { transform: 'translateX(0%)' },
  { transform: 'translateX(100%)', offset: 0.5 },
  { transform: 'translateX(500%)' }
];
```

On peut donc modifier l'offset et obtenir quelque chose qui ressemble à ceci:

```ts
// Les commentaires aident à comprendre quand ça arrive si la durée est de 2 secondes, mais l'offset est un ratio du temps total. Donc une durée d'animation différente donnerait d'autres valeurs
const translationKeyframes: Keyframe[] = [
  { transform: 'translateX(0%)' }, // 0 seconde
  { transform: 'translateX(100%)', offset: 0.75 }, // 1.5 secondes (avec une durée de 2 secondes)
  { transform: 'translateX(500%)' } // 2 seconde (avec une durée de 2 secondes)
];
```

Ici on va avoir une différence de vitesse encore **plus** grande. Car on prend 75% du temps (offset de 0.75) pour se rendre à 100% de translation et les autres 25% du temps pour se rendre à 500% de translation.

<TranslationGraph middleOffset={0.75} />

#### Utiliser une méthode d'interpolation!

Pour l'instant, on passe d'une valeur à l'autre avec une vitesse constante entre les deux points. Bref, on fait une ligne droite entre chaque point.

Pour donner quelque chose de plus doux et agréable à regarder on va généralement utiliser une méthode d'interpolation. Les plus populaires en animations:

- Ease in
- Ease out
- Ease in and out

On ne va pas passer beaucoup de temps sur ce concept, vous n'avez pas besoin de devenir des animateurs non plus, mais voici une représentation visuelle de la même animation avec une interpolation in-out.

<TranslationGraph middleOffset={0.75} easing="ease-in-out" />

:::info
Les animations peuvent rapidement devenir complexes! Elles peuvent contenir des dizaines de keyframes et des fonction d'interpolation qui changent d'un keyframe à l'autre. En plus chaque keyframe peut modifier plusieurs valeurs en même temps. Mais on utilise des outils (ou maintenant de l'AI) pour générer ces animations complexes.
:::


Vous pouvez voir de nombreux autres exemples sur ce [repo](https://github.com/CEM-420-5W5/animations-info).
