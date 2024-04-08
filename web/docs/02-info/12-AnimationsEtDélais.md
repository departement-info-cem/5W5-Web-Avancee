# Animations et délais

## Objectif
Bien comprendre l'utilisation de **setTimeout** et de **timer**, qui sont très utiles pour les animations, mais également dans de nombreuses autres situations.

## Différentes techniques

Il y a de nombreuses façons d'obtenir le même résultat lorsque l'on veut jouer des animations. Voici quelques exemples qui font tous un peu la même chose: "Jouer une animation shake pendant 1 seconde, puis flip pendant 2 secondes"

Pour les explication suivantes, on assume qu'il y a une configuration comme cell-ci pour les animations Angular:

```ts
trigger('shake', [transition(':increment', useAnimation(shakeX, {params: {timing: 1000}}))]),
trigger('flip', [transition(':increment', useAnimation(flip, {params: {timing: 2000}}))]),

ng_shake = 0;
ng_flip = 0;
```

```html
<div [@shake]="ng_shake" [@flip]="ng_flip"></div>
```

Et dans le cas d'une animation CSS, il y a la configuration suivante:

```ts
css_shake = false;
css_flip = false;
```

```html
<div [class.shake]="css_shake" [class.flip]="css_flip"></div>
```

```css
.shake{
  // Voir les exemples d'animations
}

.flip{
  // Voir les exemples d'animations
}
```



### setTimeout les uns dans les autres

#### Avec les animations Angular
```csharp 
shakeFlipAndBounce_Angular_1() {
  this.ng_shake++;
  setTimeout(() => {
    // Après 1 seconde
    this.ng_flip++;
  }, 1000);
  // Après 0 seconde
}
```

#### Avec les animations CSS, c'est un peu moins jolie, car il faut également mettre les valeurs à false!
```csharp 
shakeFlipAndBounce_CSS_1() {
  this.css_shake = true;
  setTimeout(() => {
    // Après 1 seconde
    this.css_shake = false;
    this.css_flip = true;
    setTimeout(() => {
      // Après 3 secondes
      this.css_flip = false;
    }, 2000);
  }, 1000);
  // Après 0 seconde
}
```

:::info
On avait déjà vu que les animations Angular peuvent être déclenché chaque fois qu'une valeur change ou encore qu'elle est incrémenté ou décrémenté. Alors que pour les animations CSS, il faut s'assurer de retirer la class lorsque l'animation est terminé (et donc de mettre la valeur à false) 
:::

### setTimeout un à la suite de l'autre

On peut également démarrer tous les setTimeout d'un même coup, mais avec délais différents

#### CSS
```csharp 
shakeFlipAndBounce_CSS_2() {
  this.css_shake = true;

  setTimeout(() => {
    // Après 1 seconde (shake est terminé)
    this.css_shake = false;
    this.css_flip = true;
  },1000);

  setTimeout(() => {
    // Après 3 (1+2) secondes (flip est terminé)
    this.css_flip = false;
    this.css_bounce = true;
  },3000);
  // Après 0 seconde
}
```

### Avec une méthode async

On peut également utiliser un mélange de await et de async et un timer

#### CSS
```csharp 
async shakeFlipAndBounce_CSS_3() {
  this.css_shake = true;

  await lastValueFrom(timer(1000));
  // Après 1 seconde
  this.css_shake = false;
  this.css_flip = true;
  
  await lastValueFrom(timer(2000));
  // Après 3 secondes
  this.css_flip = false;
}
```

On peut se créer une méthode pour faire nos délais. On peut l'appeler waitFor

```csharp 
async waitFor(delayInSeconds:number) {
  await lastValueFrom(timer(delayInSeconds * 1000));
}
```

Et ensuite l'utiliser dans une méthode async:

#### CSS avec waitFor
```csharp 
async shakeFlipAndBounce_CSS_4() {
  this.css_shake = true;

  await waitFor(1);
  // Après 1 seconde
  this.css_shake = false;
  this.css_flip = true;
  
  await waitFor(2);
  // Après 3 secondes
  this.css_flip = false;
}
```

#### Angular avec waitFor
```csharp 
async shakeFlipAndBounce_Angular_4() {
  this.ng_shake++;

  await waitFor(1);
  // Après 1 seconde
  this.ng_flip++;
}
```

::: info
Comme on peut voir, en utilisant une méthode async et des animations angular, on arrive à une écriture qui est très facile à lire!
:::

### Boucle infini

Si on veut joueur la même animation, tant qu'une valeur est vrai, on peut le faire avec de la récurssion

```csharp 
playLoop_Angular_1() {
    this.ng_shake++;

    setTimeout(() => {
      // Après 1 seconde
      if(this.keepPlayingAnimation)
        this.playLoop_Angular_1();
    },1000);
    // Après 0 seconde
  }
```

Mais on peut également le faire dans une boucle avec une méthode async

```csharp 
async playLoop_Angular_2() {
  while(this.keepPlayingAnimation){
    this.ng_shake++;
    await lastValueFrom(timer(1000));
  }
}
```

### Boucle infini avec une séquence

Si on veut joueur 2 animations (shake et bounce), une après l'autre, à l'infini

```csharp 
playLoop_Angular_3() {
  this.playShake();
}

playShake() {
  this.ng_shake++;
  setTimeout(() => {
    // On appel playBounce, qui va appeler playShake, qui va appeler playBounce, qui va appeler playShake, qui va appeler....
    this.playBounce();
  },1000);
}

playBounce() {
  this.ng_bounce++;
  setTimeout(() => {
    this.playShake();
  },1000);
}
```


