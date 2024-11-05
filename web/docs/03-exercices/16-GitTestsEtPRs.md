# GitHub tests et PRs

## Objectifs
- Configurer une action de test sur GitHub
- Ajouter un test unitaire
- Protéger une branche pour obliger les PRs et le succès du test
- Faire une PR

## Étapes

- Commencer par créer un repo sur GitHub avec un nom comme "GitHubActionsAndPRs".
    - Ajouter un fichier .gitignore pour Visual Studio.

- Créer un nouveau projet .NET (Modèle Vue Contrôleur) dans ce repository

- Faire un commit/push du projet

- Configurer une action de tests GitHub, comme c'est expliqué dans [ici](/info/ActionsTestGitHub#les-%C3%A9tapes)

Ici, on peut voir que l'action est en train d'être exécutée
![alt text](/img/exercices/github/image-4.png)

L'action passe présentement, mais notre projet n'a pas encore de tests! (On va en ajouter bientôt)
![alt text](/img/exercices/github/image-6.png)

- Configurer une règle de protection pour la branche **main**, comme c'est expliqué [ici](/info/PullRequests#prot%C3%A9ger-une-branche)
    - Il faut demander un Pull Request, avec un moin 1 approval (valeur par défaut)
    - Il faut également mettre l'option **Do not allow bypassing the above settings**

- Maintenant, on va faire un petit changement dans le code, simplement ajouter un commentaire dans un fichier et essayer de faire un commit directement dans la branche **main**

:::warning
Le commit devrait fonctionner, mais pas le Push!
:::

- On va maintenant faire une petite manipulation de branches!

- On commence par renommer notre branche **main** en **test** (Mais seulement la branche local!)
![alt text](/img/exercices/github/image-8.png)

- On va ENSUITE créer une branche **test** sur GitHub

![alt text](/img/exercices/github/image-9.png)

- Il faut taper test comme nom de branche dans le menu

![alt text](/img/exercices/github/image-10.png)

- Et maintenant faire un **PUSH**

- On va maintenant faire un Pull Request de notre branche test vers la branche main

Comme on a fait un commit récemment, il y a un moyen rapide de créer le Pull Request. Directement dans la section code, GitHub nous le propose!

![alt text](/img/exercices/github/image-11.png)

On peut voir qu'il manque un review. C'est le moment d'ajouter un collaborateur à votre projet. Vous pouvez ajouter un collègue ou votre enseignant et leur demander de faire le review.

![alt text](/img/exercices/github/image-12.png)

Faites un review qui approve

![alt text](/img/exercices/github/image-13.png)

On peut maintenant intégrer la branche test dans la branche main!

![alt text](/img/exercices/github/image-14.png)

## Protection avec les tests

- Toujours dans la branche test, ajouter des tests unitaires pour la méthode **Index** du HomeController (N'oubliez pas que l'on peut simplement faire un **right click** sur la méthode **Index** et choisir **Créer des tests unitaires**)

:::info
Par défaut, le test qui est généré fait Assert.Fail() et c'est PARFAIT COMME ÇA POUR LE MOMENT
:::

- Faire un commit/push du projet dans notre branche **test**

- Faire un nouveau Pull Request vers la branche **main**

- On devrait avoir un **échec** pour le moment! (Si ce n'est pas le cas, assurez-vous d'avoir bien ajouté au moins un test qui Fail et d'avoir fait votre push!)

- On va maintenant retirer le Assert.Fail() de notre test et faire un autre commit/push.

- Normalement, le test devrait maintenant passer et le pull request être valid (il faut simplement un autre review pour ce changement)

- Une fois que tout est vert, c'est possible d'exécuter le Pull Request!


[Projet GitHub avec la solution](https://github.com/CEM-420-5W5/GitHubActionsAndPRs)
