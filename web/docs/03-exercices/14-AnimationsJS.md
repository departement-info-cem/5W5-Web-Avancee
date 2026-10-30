# Animations JS

## Objectifs

Faire jouer des animations JavaScript (méthode `animate`) dans un projet React / Next.js, enchaîner des animations avec `async` / `await` et créer une boucle d'animations.

[Projet](https://github.com/CEM-420-5W5/react-rpg-animations)

## État initial

- Le projet affiche un blob (Slimey) et un background. Slimey est invisible au départ (`opacity: 0`).
- La logique qui affiche les boutons selon la situation (Slimey est là ou non) est déjà faite.
- La méthode `animer` vue dans le cours est déjà fournie dans `app/page.tsx`.
- Les durées sont déjà définies dans des constantes (`SPAWN_DURATION_MS`, `DEATH_DURATION_MS`, etc.).
- Les keyframes complexes (`SHAKE_X`, `JELLO`, `WOBBLE`, `BOUNCE`, `FLIP`) sont déjà fournis. **Vous n'avez pas à les écrire.**
- Les endroits où vous devez écrire du code sont identifiés par les commentaires `// TODO` ou entre les commentaires 

:::info
Tout le travail se fait dans le fichier `app/page.tsx`.
:::

## Partie 1

### Faire apparaître Slimey

1. Dans la section des keyframes, écrivez le keyframes `FADE_IN`: l'opacité passe de `0` à `1`.
2. Dans la méthode `spawn`, appelez `animer` avec l'id `"slimeyId"`, vos keyframes `FADE_IN` et la durée `SPAWN_DURATION_MS`.

:::warning
Slimey redevient invisible une fois l'animation terminée! Il faut conserver les valeurs de la fin de l'animation. Quel paramètre de `animer` devez-vous utiliser?
:::

### Tuer Slimey

1. Écrivez le keyframes `FADE_OUT`. Ici, **une seule valeur** suffit (la valeur finale: `opacity: 0`).
2. Dans la méthode `death`, faites jouer l'animation `FADE_OUT` (en conservant les valeurs finales!).
3. Faites aussi jouer l'animation `SHAKE_X` (fournie) pendant la mort.

:::info
Si les deux `animer` sont appelés l'un après l'autre **sans** `await`, les deux animations jouent en même temps. Si tout fonctionne, Slimey se déplace rapidement de gauche à droite pendant qu'il disparaît!
:::

### Faire attaquer Slimey

1. Écrivez le keyframes `PULSE`: l'échelle (`scale`) passe de `1` à `4.5`, puis revient à `1` (3 valeurs).
2. Dans la méthode `attack`, faites jouer **d'abord** l'animation `JELLO` (fournie), pour montrer que Slimey prend son élan, **ensuite** l'animation `PULSE`.

:::info Coup de pouce
Pour qu'une animation commence seulement quand la précédente est terminée, utilisez `await` devant l'appel à `animer`.
:::

### Faire MAL à Slimey!

Dans la méthode `hit`, faites jouer l'animation `WOBBLE` (fournie) pendant `HIT_DURATION_MS`.

:::warning
Il faut animer le **parent** (le `div` qui a l'id `"slimeyParentId"`) et non l'image, sinon l'animation ne joue pas correctement!
:::

## Partie 2

Les boutons **Bounce/Shake/Flip** et **Infinite Triple Spin** sont déjà affichés. Il faut maintenant écrire leur logique.

### Bounce/Shake/Flip

Dans la méthode `bounceShakeFlip`, faites jouer la séquence suivante, **une animation après l'autre**:

| Animation | Keyframes | Durée                   |
| --------- | --------- | ----------------------- |
| Bounce    | `BOUNCE`  | `BOUNCE_DURATION_MS`    |
| Shake     | `SHAKE_X` | `SHAKE_DURATION_MS`     |
| Flip      | `FLIP`    | `FLIP_DURATION_MS`      |

### Infinite Triple Spin

1. Écrivez le keyframes `ROTATE_CENTER`: une rotation complète (`rotate(360deg)`). Une seule valeur suffit!
2. Écrivez le keyframes `ROTATE_HOR`: une rotation complète sur l'axe horizontal (`rotateX(360deg)`). Une seule valeur suffit!
3. Dans la méthode `infiniteTripleSpin`, faites une **boucle infinie** qui joue:
   - 2 rotations autour du centre (`ROTATE_CENTER`, durée `ROTATE_CENTER_DURATION_MS`)
   - suivies d'une rotation horizontale (`ROTATE_HOR`, durée `ROTATE_HOR_DURATION_MS`)

:::warning
Comme pour le _hit_, il faut animer le **parent** de l'image (`"slimeyParentId"`).
:::

:::info Coup de pouce
Une boucle `while (true)` dans une méthode `async` avec des `await` à l'intérieur ne bloque pas le navigateur: chaque `await` laisse la place aux autres tâches.
:::

## Solution

La solution est dans la branche **solution** du repo.
