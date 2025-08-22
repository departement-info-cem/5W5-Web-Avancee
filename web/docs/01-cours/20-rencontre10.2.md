---
title: 10.2 - GitHub & TP2 😾
hide_table_of_contents: true
sidebar_class_name: remise-tp2-fonctionnalites
---

# Github & TP2 😾

- Exercice Git (Merge, conflits et pull request)
- Explication sur le problème avec l'ordre des PlayableCard du BattleField
- Travail sur TP2

## Info

[Ordre des éléments d'une liste avec EF](/info/DataOrder)

[Actions pour exécuter des tests sur GitHub](/info/ActionsTestGitHub)

[Pull Requests](/info/PullRequests)

## Faire jouer une animation sur une carte

### CSS

```ts
var element = document.getElementById("PC" + event.PlayableCardId);
element?.classList.add("attack");
```

- Pour un power sur une carte

```ts
var element = document.getElementById("PC" + event.PlayableCardId + "_Heal");
element?.classList.add("powerAnimation");
```

Ou

```ts
var element = document
  .getElementById("PC" + event.PlayableCardId)
  .querySelector('[name="' + powerId + '"]');
element?.classList.add("powerAnimation");
```

:::warning

Il y a présentement une class **fadeIn** sur les cartes du BattleField. C'est important de la retirer après la fin de l'animation de **fadeIn** si vous voulez ajouter d'autres classes sans redéclencher l'animation de **fadeIn**.

:::

### Angular

- Pour faire jouer une animation Angular, on peut ajouter des variables directement sur PlayableCard et déclencher les animations sur la carte avec un trigger sur ces variables

### Exercices

[Git tests et Pull Requests](/exercices/GitTestsEtPRs)
