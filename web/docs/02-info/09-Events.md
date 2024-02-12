# Événements

## JSON

On se souvient que pour la communication entre notre client et notre serveur, les données sont sérialisées en utilisant le format JSON.

## Exemple du JSon avec un event simple

Voici un exemple d’évènement et sa sérialisation. On peut voir qu’il contient toute l’information à propos de qui pige quelle carte.

Classe d'événement:

```csharp
public class DrawCardEvent : MatchEvent
{
    public int PlayableCardId { get; set; }
    public int PlayerId { get; set; }

    public DrawCardEvent(MatchPlayerData playerData)
    {
        if(playerData.CardsPile.Count > 0) {
            int lastElementIndex = playerData.CardsPile.Count() - 1;
            var playableCard = playerData.CardsPile[lastElementIndex];

            PlayerId = playerData.PlayerId;
            PlayableCardId = playableCard.Id;

            playerData.CardsPile.RemoveAt(lastElementIndex);
            playerData.Hand.Add(playableCard);
        }
    }
}
```

Sérialisation:

```json
{
    "$type":"DrawCard",
    "PlayableCardId":54,
    "PlayerId":2,
    "Events":null
}
```

## Des events dans des events

:::danger
Cet exemple est différent de l'implémentation d'événements que vous avez dans le véritable TP
:::

Un exemple qui contient des sous événements

```csharp
public class StartMatchEvent : MatchEvent
{
    public StartMatchEvent(Match match, MatchPlayerData currentPlayerData, MatchPlayerData opposingPlayerData)
    {
        Events = new List<MatchEvent> { };
        
        // On pige les cartes du début
        for(int i = 0; i < match.GameConfig.NbStartingCards; i++)
        {
            Events.Add(new DrawCardEvent(currentPlayerData));
            Events.Add(new DrawCardEvent(opposingPlayerData));
        }
        
        Events.Add(new GainManaEvent(currentPlayerData, match.GameConfig.NbManaPerTurn));
        // On fait piger la carte de début de tour du premier joueur
        Events.Add(new DrawCardEvent(currentPlayerData));
    }
}
```

Sérialisation:

```json
{
    "$type":"StartMatch",
    "Events":[
        {"$type":"DrawCard","PlayableCardId":54,"PlayerId":2,"Events":null},
        {"$type":"DrawCard","PlayableCardId":45,"PlayerId":1,"Events":null},
        {"$type":"DrawCard","PlayableCardId":53,"PlayerId":2,"Events":null},
        {"$type":"DrawCard","PlayableCardId":44,"PlayerId":1,"Events":null},
        {"$type":"GainMana","Mana":3,"PlayerId":2,"Events":null},
        {"$type":"DrawCard","PlayableCardId":50,"PlayerId":2,"Events":null}
    ]
}
```

## Une action, un arbre d'événements

- Chaque action va donc générer un event qui va contenir tout un arbre de sous events.
- Le JSON de l’arbre d’events est envoyé aux 2 clients (C’est important pour synchroniser l’autre joueur).

## La sérialisation polymorphique

- Il faut ajouter des annotations pour que chaque event soit sérializé avec ses propriétés.
- Mais en bonus, ça nous donne un « $type » pour l’event qui va être très utile sur le client!

```csharp
[JsonDerivedType(typeof(DrawCardEvent), typeDiscriminator: "DrawCard")]
[JsonDerivedType(typeof(EndMatchEvent), typeDiscriminator: "EndMatch")]
[JsonDerivedType(typeof(GainManaEvent), typeDiscriminator: "GainMana")]
[JsonDerivedType(typeof(PlayerTurnEvent), typeDiscriminator: "PlayerTurn")]
[JsonDerivedType(typeof(StartMatchEvent), typeDiscriminator: "StartMatch")]
[JsonDerivedType(typeof(SurrenderEvent), typeDiscriminator: "Surrender")]
public abstract class MatchEvent
{
    public MatchEvent()
    {
    }

    public List<MatchEvent>? Events { get; set; }
}
```

## La mise à jour interactive des données

- Jusqu’à présent dans vos cours, le serveur exécutait une requête pour obtenir de l’information et pouvait simplement mettre ses données à jour.
    - Par exemple, obtenir une liste d’album d’un groupe ou une liste de zombies à afficher.
- Sinon, le client envoyait un formulaire pour modifier les données sur le serveur et par la suite obtenait les données une fois de plus et ces données contenaient nos changements.

- Notre situation est plus complexe car on ne veut pas simplement mettre les données à jour.
    - Ça ne serait vraiment pas intéressant, si lorsque l’on joue une carte on voyait simplement le résultat sans voir la carte être jouée, les combats entre cartes, les dégâts reçus, etc.
- On veut donc réappliquer les changements un à un sur le client!

## Le client

- Le travail du client, c’est de traverser l’arbre d’events et d’afficher au joueur ce qui s’est produit.
- Par exemple, afficher lorsqu’un joueur pige une carte ou lorsqu’une carte reçoit des dégâts.





