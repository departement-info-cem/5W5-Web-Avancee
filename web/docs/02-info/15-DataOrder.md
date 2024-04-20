# Ordre des éléments dans une BD

## Objectif
- Comprendre que l'ordre d'une requête de BD est seulement prévisible avec un **OrderBy**
- Comprendre comment se comporte l'ordre des éléments d'une liste dans Entity Framework 

## Ordre des éléments dans une BD Relationel

:::info
Ce problème arrive assez **rarement**
:::

- De très nombreux programmeurs sont convaincus que lorsque l'on fait une requête dans une base de données, les éléments sont dans l'ordre de création. (Ou dans l'ordre d'Id des éléments) et c'est **presque** toujours vrai.

- La vérité, c'est qu'il n'y a pas de garantie avec SQL.
    - Si on fait une requête de BD **sans** OrderBy, on ne peut pas être certain de l'ordre des éléments reçus.
    - C'est "très souvent" l'ordre d'Id, **surtout** si la requête est simple et/ou qu'il y a peu de data dans la BD (Disons, moins d'un million).

## Ordre des éléments d'une liste avec EntityFramework

:::danger
Ce problème arrive **fréquemment**
:::

Si vous avec une liste (Ou un IEnumerable) dans un modèle, par exemple une liste de **PlayableCard** dans **MatchPlayerData** (Et plus précisément, le BattleField).

Dans quel ordre les éléments vont être lorsque je les obtiens de la BD?

Si on prend un exemple très concret, j'ajoute 2 **PlayableCard** sur le **BattleField**.

```csharp
var matchPlayerData = dbContext.MatchPlayerData.Find(idDuMatchPlayerData);

matchPlayerData.BattleField.Add(playableCardA);
matchPlayerData.BattleField.Add(playableCardB);
// Sans surprise, présentement les éléments de la liste BattleField sont dans l'ordre A, B

dbContext.SaveChanges();
```

Quand je vais rechercher l'élément dans la BD

```csharp
var matchPlayerData = dbContext.MatchPlayerData.Find(idDuMatchPlayerData);

// Pour exécuter cette ligne de code et obtenir les cartes du BattleField, Entity Framework fait une requête dans la BD.
// À ce moment là, on ne CONNAIT PAS l'ordre des éléments dans la liste. C'est peut-être (A,B) ou peut-être (B,A).
// Le plus **probable** c'est que l'ordre soit l'ordre d'Id des 2 éléments (mais dans le cas d'une partie, ça nous aide absolument pas! Ça peut encore être A,B ou B,A)
Console.log(matchPlayerData.BattleField);
```

## Gérer l'ordes d'une Liste avec Entity Framework

Comme on veut être **certain** de l'ordre dans notre jeu, on va devoir faire un **OrderBy** et on va donc avoir besoin d'un **propriété Index** pour **PlayableCard**.

Pour éviter de faire des erreurs, le plus simple ça va être de ne pas utiliser directement la propriété **BattleField**. À la place, on va ajouter 3 méthodes qui vont prendre en compte l'Index et le mettre à jour.

```csharp
// Assurez-vous d'utiliser cette méthode pour votre logique de combat!
public IEnumerable<PlayableCard> GetOrderedBattleField() {
    // Retourner les cartes dans l'ordre de l'Index
}

public void AddCardToBattleField(PlayableCard playableCard)
{
    // Ajouter la carte au BattleField et lui donner le bon index (En fonction du nombre de cartes déjà sur le BattleField)
}
public void RemoveCardFromBattleField(PlayableCard playableCard)
{
    // Retirer la carte du BattleField
    // Atention: Il faut mettre les autres cartes du BattleField à jour!
}
```

### Et le client?

Sur le client, le plus important c'est de mettre les cartes dans le bon ordre quand on reçoit un Match du serveur.

Comme le client reçoit directement l'objet JSON, les cartes du BattleField ne sont pas ordonnées.

Dans la méthode qui reçoit le Match, ajoutez un peu de code pour faire un sort des cartes sur les **2** BattleField.

Pendant le match, vous ne devriez pas avoir besoin de faire d'autres sorts. Les cartes vont rester dans le bon ordre.


:::warning
Ce qu'il faut retenir, c'est que si l'ordre des éléments est important, il faut **TOUJOURS** faire un **OrderBy**!
:::