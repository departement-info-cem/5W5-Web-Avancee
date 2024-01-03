# Les bonnes pratiques avec Git
## Ajouter un projet à un repository
## Les bonnes pratiques avec Git
### 1 Repo 👉 1 Projet
- Ajouter seulement un projet par repository
- Donc, un seul repository par language
### Exemple
- Un backend en C#
- Un frontend en Angular
- Une app mobile en Flutter
👇
- Un repo pour le backend C#
- Un repo pour le frontend en Angular
- Un repo pour le mobile en Flutter

### Création du repo et .gitignore
- À la création du repo, GitHub vous propose d'ajouter un template pour un .gitignore
- Laisser le champ **VIDE**
- Le framework utilisé vous générera un .gitignore mieux adapté sans problème

### Angular
- Le fichier est généré lors de la création d'un nouveau projet

### .Net
- Ajouter le .gitignore en ligne de commande
``` powershell
dotnet new gitignore
```

## LES BRANCHES
### Les bonnes pratiques avec Git
- 1 branche 👉 1 feature
- Faire une nouvelle branche pour chaque User Story (US)
- Créer des sous branches pour la tâche est longue et/ou si plusieurs personnes travaillent sur la même US en même temps
- Fusionner (Merge) la branche une fois la US terminée (Nous allons revenir sur ce sujet)


