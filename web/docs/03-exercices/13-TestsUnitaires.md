# Test unitaires

## Objectifs
Ajouter des tests unitaires pour tester une méthode de service en utilisant une base de données InMemory.

[Projet GitHub](https://github.com/CEM-420-5W5/TestsUnitairesPourServices)

## État initial

- Il y a déjà un service avec un méthode **Move** qui permet de déplacer un chat d'une maison à l'autre.

## Complétez les tâches suivantes

- Générez des tests pour la méthode **Move de CatsService** (Ça devrait **générer le projet de tests** pour vous!)
- Utilisez une **InMemoryDatabase**
- Il faut écrire du code pour ajouter les données à notre BD pour pouvoir rouler les tests. Il va falloir ajouter:
    - Au moins 2 maisons
    - Au moins un chat sans maison
    - Au moins un chat avec maison

:::info
Utilisez des constantes pour les IDs de vos tests, on veut éviter d'utiliser des **chiffres magiques**
:::

- Atteindre une **couverte de 100%** sur la méthode Move du CatsService
    - Utilisez l'outil pour vérifier la couverture de code
- Les tests doivent tous être réussis et les asserts doivent être valides
    - Vérifiez qu'un Move avec succès ne retourne pas null
    - Vérifiez qu'un Move d'un chat donc l'Id est inconnu retourn null
    - Vérifiez qu'un Move d'un chat qui n'a pas de maison lance une exception **WildCatException**
    - Vérifiez qu'un Move d'un chat se fait bien à partir de sa maison **DontStealMyCatException**
- Il faut **valider les messages des exceptions**

## Solution

La solution est dans la branche **solution** du repo
