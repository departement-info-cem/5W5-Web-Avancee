# GIT
## Branches
### Jouer avec des branches!
- Créer un nouveau repo sur GitHub appelé branches_de_chats
- Créer 2 nouvelles branches, une branche chats et une branche plus_de_chats
- Ajouter 3 fichiers texte
- main.txt sur la branche main
- chats.txt sur la branche chats
- plus_de_chats.txt sur la branche plus_de_chats

### Stash et unstash
- Écrire des noms de chats dans chaque fichier sans faire de commit
- Utiliser Stash et Pop (unstash) pour mettre les changement en attente et les récupérer

### Commit des changements
- Faire des commits de la version finale des fichiers
- Fusionner tous les changements des 2 branches de chats sur la branche main

Les trois fichiers sont maintenant sur la branche main!

## Conflits
### Setup de l'exercice
- Créer un repo sur GitHub
- Ajouter un nouveau projet Angular sur le repo
- Faire 2 clones du projet sur votre poste

### Modifier le projet sans conflit
- Dans le premier clone du repo
- Ajouter 2 méthodes au fichier app.component.ts
- Ne pas faire de commit immédiatement

```ts
export class AppComponent {
  wow() {
  }
  incroyable() {
    
  }
}
```

- Dans l'autre clone du repo
- Modifier le fichier app.component.html pour le code suivant

```html
<div>
    {{wow()}}
</div>
<div>
    {{incroyable()}}
</div>
```

- Faire les commits maintenant (un commit pour chaque clone du repo)
- Il ne devrait pas avoir de conflit
- Vous avez modifier des fichiers différents

### Mettre les 2 clones du repo à jour
- Récupérer la dernière version du code

### Modifier sans conflit v.2.0

- Dans le premier clone du repo
- Modifier la méthode wow
- Ne faites pas de commit tout de suite
```ts
wow() {
  return "Ben voyons donc!"
}
```

- Dans le deuxième clone du repo
- Modifier la méthode incroyable

```ts
incroyable() {
  return "Je n'en reviens pas!"
}
```

- Faire les commits maintenant (un commit pour chaque clone du repo)
- Il ne devrait pas avoir de conflit
- Même si vous avez modifié le même fichier, vous avez modifié des méthodes différentes
- Mettre les 2 clones du repo à jour

### Modifier avec conflit! 🧨
- Dans le premier clone du repo
- Modifier la méthode wow
- Ne faites pas de commit tout de suite
```ts
wow() {
  return "Ah! voilà!"
}
```

- Dans le deuxième clone du repo
- Modifier la méthode wow

```ts
wow() {
  return "Boom!"
}
```

- Faire les commits maintenant (un commit pour chaque clone du repo)
- Il devrait y avoir un conflit
- Vous avez la même méthode / la même ligne dans le même fichiers

### Résoudre le conflit

Vous avez 3 options:
- Garder la version du premier repo
- Garder la version du deuxième repo
- Garder la fusion des deux versions

Garder la version du code qui n'est pas encore enregistré sur le repo

Voilà!
