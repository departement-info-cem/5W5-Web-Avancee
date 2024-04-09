# Test Driven Development

## Résumé
- Comprendre l’objectif du TDD (Test Driven Development)
- Expliquer les étapes
- Bénéfices
- Les choses à ne pas faire
- Ce que ça veut dire pour notre projet

## Objectif

Créer du code simple et bien tester.

Écrire du code qui répond aux besoins réels de l’application.

**Objectif ultime:** en regardant dans l’historique dans Git, on devrait pouvoir associer chaque ligne de code à un test précis qui est mentionné dans le commit. Et chaque test devrait être associé à un besoin réel de l’application. Chaque ligne de code est alors justifiée.

## Les étapes

### Liste des étapes

- Analyzer le problème
- Écrire les tests
- Coder la solution
- Maintenance

### Analyzer le problème

Avant d’écrire les tests, il faut d’abord analyzer le problème et créer nos « use cases » et « user stories ». On met alors toute l’attention sur les besoins de notre application.

Dans le cas de notre jeu de cartes, on veut premièrement bien établir les différentes règles de notre jeu.

### Écrire les tests

Les tests doivent couvrir de la façon la plus simple possible, l’ensemble des besoins de notre application qui sont couvert par nos user stories.

On veut:
1. Écrire les tests en se basant sur les use cases et user stories
2. Rouler les tests et être certains qu’ils ne passent pas par défaut

### Coder la solution

Au moment de coder la solution, on se concentre sur notre objectif. Faire passer nos tests. Après tout, ils représentent les besoins de notre application.

On veut:
1. Coder de la façon la plus simple qui permet de faire passer les tests
2. Rouler les tests pour voir le progrès et faire des commits fréquents
3. Une fois que les tests passent tous et que l’on a fait un commit, on peut prendre du temps pour améliorer la qualité de notre code sans risque, car les tests ne passeront plus si on brise une fonctionnalité

### Maintenance

Chaque fois que l’on veut ajouter des options ET chaque fois que l’on rencontre un bug:
1. Ajouter au moins un nouveau test
2. S’assurer qu’il ne passe pas
3. Implémenter la solution et vérifier que TOUS les tests passent maintenant

## Bénéfices

### Bénéfice #1

En commençant par faire les tests, on évite la situation trop fréquente où les tests sont prévus pour plus tard et les programmeurs manquent de temps pour les faire.

### Bénéfice #2

Prendre le temps d’écrire de bons tests à partir des user stories permet au programmeur de bien comprendre les besoins avant de se lancer dans la conception.

### Bénéfice en équipe
Si on fait le travail à deux et qu’une personne écrit les tests et l’autre code, on met en place un moyen très efficace de communiquer et valider la compréhension des besoins.
Après tout, les mots sont parfois peu précis et souvent mal interprétés, alors que si on code notre besoin, l’autre programmeur peut voir et vérifier qu’il remplit bien les attentes.

Dans le cas où les programmeurs ne s’entendent pas sur les besoins, c’est également plus efficace de regarder un ou des tests pour en parler:

Joe: « Ton test s’attend à ce que la méthode fonctionne, mais elle ne passe pas le paramètre X.»

Bob: « Si tu regardes bien la user stories, le paramètre X est optionnel dans ce cas pour une raison Y.»

Joe: « Tu as raison Bob. T’ai-je mentionné que j’apprécie vraiment travailler avec toi en TDD? »

## Les choses à ne pas faire

- Des tests trop longs et complexes. Séparer les en plus petit tets.
- Des tests qui dépendent de l’exécution d’un autre test. Par contre, utiliser un set up et clean up commun est une excellente pratique.
- Tester les librairies que l’on utilise. Il faut tester ce que l’on a ajouté, pas ce qui est fourni par nos librairies ou notre framework.
- Écrire trop de tests trop pointus. Parfois le nombre de combinaisons de paramètre à une fonction peu devenir très intense. Il faut parfois se concentrer sur les cas qui représentent bien l’utilisation et ne pas créer des centaines de tests sous prétexte de vouloir être exhaustif.

## Pour le projet
Requis pour la logique de combat du jeu
- Il faut donc ajouter des tests pour couvrir les nouvelles règles du jeu et les nouveaux pouvoirs
- Si possible, faites le travail à 2. Une personne qui va écrire les tests et une autre qui va écrire le code.
