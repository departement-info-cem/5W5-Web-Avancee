# Actions sur GitHub

## Objectif

- Apprendre à ajouter une action sur GitHub. 
- Les actions permettent de faire des tâches intéressantes et de les **automatisées**

:::info
L'exemple est une action qui roule les tests unitaires, mais il y a de très nombreuses options d'actions! 
:::


## Les étapes

Pour ajouter une action à votre workflow

|![Alt text](/img/infos/GitHub/AddWorkflowAction.png)|
|-|

On va choisir une action de tests unitaires .NET (On va reparler de **Continuous Integration** dans un autre cours)

|![Alt text](/img/infos/GitHub/AddWorkflowTestAction.png)|
|-|

Les options par défaut font bien ce que l'on veut. On peut simplement cliquer sur **Commit Changes...**

|![Alt text](/img/infos/GitHub/TestActionScript.png)|
|-|

## Résultat

Maintenant, chaque fois qu'un push est fait vers la branche main (ou chaque fois qu'un commit est fait dans une branche qui fait un pull request vers main), l'action va être effecté et faire ce que le script indique.

Donc:
- Faire un checkout
- Faire un setup de dotnet
- Mettre à jour les dépendances
- Builder le projet
- Rouler les tests

:::danger
Chaque fois qu'une tâche roule, elle laisse derrière un **artefact**. Ça prend de l'espace mémoire et c'est important de les effacer régulièrement, sinon ça coûte de l'argent avec un compte payant OU on risque d'atteindre rapidement la limite d'un compte gratuit!
:::

|![alt text](/img/infos/GitHub/DeleteWorkflow.png)|
|-|
