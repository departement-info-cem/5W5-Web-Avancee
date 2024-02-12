# Animations

### Vos options
On peut faire les animations en utilisant:
- Angular animations
OU
- CSS

### Comment ça marche
- Principalement (parce qu'on est loin loin loin d'être des experts) on change une propriété CSS
- On décide combien de temps de ça va prendre à faire la transition

### Exemple
- On change la propriété top de 10 à 20 en 0.2 seconde, voilà une animation

### Keyframes
- On peut avoir différentes étapes à notre animation
- Ces étapes sont des Keyframes

### CSS
- Générateur d'animations CSS:  https://animista.net

### Utiliser avec Angular
- Il faut commencer par créer l'animation en CSS
```ts
@keyframes attack {
  0% {
    transform: translateY(0%);
  }
  20% {
    transform: translateY(10%);
  }
  60% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0%);
  }
}
```

- Ensuite on assigne l'animation à une classe CSS

```ts
.attack{
  animation: attack 0.5s;
  -webkit-animation: attack 0.5s;
  //C'est peut-être overkill de mettre toutes les autres, mais 🤷‍♂️
  -moz-animation: attack 0.5s;
  -o-animation: attack 0.5s;
  -ms-animation: attack 0.5s;
}
```

- Finalement, on peut assigner classe CSS avec une condition

```html
<app-card [class.attack]="mycard.attack===true"></app-card>
```

### ng-animate
- Librairie Angular pour les animations: https://www.npmjs.com/package/ng-animate

### Exemple
```ts
@Component({
  selector: 'my-component',
  templateUrl: 'my-component.component.html',
  animations: [
    trigger('montrigger', [transition('* => *', useAnimation(bounce))])
  ],
})
export class MyComponent {
  mavariable: any;
}
```

- Dans le .hmtl
```html
<div [@montrigger]="mavariable"></div>
```

### Trigger
- C'est ce qui va permettre de déclencher l'animation
```ts
animations: [
    trigger('montrigger', 
      [transition('* => *', useAnimation(bounce))]
    )
],
```

### Transition
- C'est le changement sur la variable qui va déclencher l'animation
'* => *' signifie n'importe quel changement d'état

- On peut également mettre des ':increment' ou ':decrement'

```ts
animations: [
    trigger('bounce', [transition(':increment', useAnimation(bounce))]),
    trigger('shake', [transition(':decrement', useAnimation(shake))])
],
```

```html
<div [@shake]="mavariable" [@bounce]="mavariable"></div>
```

### useAnimation
- On utilise une animation prédéfinie
- Mais on pourrait également créer nos propres animations au style de CSS avec des keyframes
