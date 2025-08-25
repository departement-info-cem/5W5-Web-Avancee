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
- Laisser le champ **VIDE** pour les projets **Angular**, puisque Angular génère lui-même un .gitignore
- Pour un projet **.NET**, vous **pouvez** laisser vide, mais il faut alors utiliser la commande dans la console après avoir créer votre projet.

![image](/img/infos/creationProjetGitHub.png)

ou ouvrir un terminal powershell à la racine du projet :

```powershell
dotnet new gitignore
```

ou simplement chercher un .gitignore qui existe déjà sur internet. Ex : ".gitignore .net core". Vous pouvez ensuite l'ajouter à la racine de votre projet.

:::info C'est quoi ça .gitignore?
Git est une technologie qui est faite pour gérer des modifications sur des fichiers texte. Il n'est pas particulièrement bon pour gérer des fichiers binaires (ex : image, .exe, pdf, etc.), même si ça peut parfois être nécessaire. C'est pourquoi on essaie d'éviter d'envoyer les fichiers compilés dans Git, soit tout ce qui se retrouve dans les dossiers obj et bin d'un projet .NET. Le fichier `.gitignore permet de dire à Git **d'ignorer** certains fichiers.
:::

## Les branches

### Les bonnes pratiques avec Git

- 1 branche 👉 1 fonctionnalité
- Faire une nouvelle branche pour chaque User Story (US)
- Créer des sous-branches pour la tâche est longue et/ou si plusieurs personnes travaillent sur la même US en même temps
- Fusionner (Merge) la branche une fois la US terminée (Nous allons revenir sur ce sujet)
