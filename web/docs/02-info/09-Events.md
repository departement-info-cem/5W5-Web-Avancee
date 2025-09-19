# Événements

## JSON

On se souvient que pour la communication entre notre client et notre serveur, les données sont sérialisées en utilisant le format JSON.

## Exemple du JSON avec un event simple

Voici un exemple d’évènement et sa sérialisation. On peut voir qu’il contient toute l’information à propos de qui pige quelle carte.

Classe d'événement:

```csharp
public class DrawCardEvent : MatchEvent
{
    public override string EventType { get { return "DrawCard"; } }
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
    "EventType":"DrawCard",
    "PlayableCardId":54,
    "PlayerId":2,
    "Events":null
}
```

## Des events dans des events

Un exemple qui contient des sous événements

```csharp
public class StartMatchEvent : MatchEvent
{
    public override string EventType { get { return "StartMatch"; } }

    public StartMatchEvent( Match match,
                            MatchPlayerData currentPlayerData, MatchPlayerData opposingPlayerData,
                            int nbCardsToDraw, int nbManaPerTurn)
    {
        Events = new List<MatchEvent> { };
        
        // On pige les cartes du début
        for(int i = 0; i < nbCardsToDraw; i++)
        {
            Events.Add(new DrawCardEvent(currentPlayerData));
            Events.Add(new DrawCardEvent(opposingPlayerData));
        }
        
        Events.Add(new PlayerStartTurnEvent(currentPlayerData, nbManaPerTurn));
    }
}

public class PlayerStartTurnEvent : MatchEvent
{
    public override string EventType { get { return "PlayerStartTurn"; } }
    public int PlayerId { get; set; }

    // L'évènement lorsqu'un joueur débutte son tour
    public PlayerStartTurnEvent(MatchPlayerData playerData, int nbManaPerTurn)
    {
        this.PlayerId = playerData.PlayerId;
        this.Events = new List<MatchEvent>();

        this.Events.Add(new DrawCardEvent(playerData));

        this.Events.Add(new GainManaEvent(playerData, nbManaPerTurn));
    }
}
```

Sérialisation:

```json
{
    "EventType":"StartMatch",
    "Events":[
        {"EventType":"DrawCard", "PlayableCardId":54, "PlayerId":2, "Events":null},
        {"EventType":"DrawCard", "PlayableCardId":45, "PlayerId":1, "Events":null},
        {"EventType":"DrawCard", "PlayableCardId":53, "PlayerId":2, "Events":null},
        {"EventType":"DrawCard", "PlayableCardId":44, "PlayerId":1, "Events":null},
        {"EventType":"PlayerStartTurn", "PlayerId":2, "Events":[
            {"EventType":"GainMana", "Mana":3, "PlayerId":2, "Events":null},
            {"EventType":"DrawCard", "PlayableCardId":50, "PlayerId":2, "Events":null}
        ]}
    ]
}
```

## Une action, un arbre d'événements

- Chaque action va donc générer un event qui va contenir tout un arbre de sous events.
- Le JSON de l’arbre d’events est envoyé aux 2 clients (C’est important pour synchroniser l’autre joueur).

## La sérialisation polymorphique

- Il faut ajouter des annotations pour que chaque event soit sérializé avec ses propriétés.
- Sinon, au moment de la sérialization de la liste de Events, le serializer traite chaque objet comme un simple MatchEvent avec **uniquement** les propriétés **EventType** et **Events**!

```csharp
[JsonDerivedType(typeof(DrawCardEvent))]
[JsonDerivedType(typeof(EndMatchEvent))]
[JsonDerivedType(typeof(GainManaEvent))]
[JsonDerivedType(typeof(PlayerEndTurnEvent))]
[JsonDerivedType(typeof(PlayerStartTurnEvent))]
[JsonDerivedType(typeof(StartMatchEvent))]
[JsonDerivedType(typeof(SurrenderEvent))]
public abstract class MatchEvent
{
    public MatchEvent()
    {
    }

    public abstract string EventType { get; }

    public List<MatchEvent>? Events { get; set; }
}
```

## La mise à jour interactive des données

- Jusqu’à présent dans vos cours, le serveur exécutait une requête pour obtenir de l’information et pouvait simplement mettre ses données à jour.
    - Par exemple, obtenir une liste d’album d’un groupe ou une liste de zombies à afficher.
- Sinon, le client envoyait un formulaire pour modifier les données sur le serveur et par le serveur renvoyaient les données qui contenaient nos changements.

- Notre situation est plus complexe car on ne veut pas simplement mettre les données à jour.
    - Ça ne serait vraiment pas intéressant, si lorsque l’on joue une carte on voyait simplement le résultat sans voir la carte être jouée, les combats entre cartes, les dégâts reçus, etc.
- On veut donc réappliquer les changements un à un sur le client!
- Avec SignalR, on va pouvoir envoyer les events aux deux clients pour pouvoir mettre les données à jour.

## Le client

- Le travail du client, c’est de traverser l’arbre d’events et d’afficher au joueur ce qui s’est produit en modifiant les données, un event à la fois.
- Par exemple, afficher lorsqu’un joueur pige une carte ou qu'il reçoit du mana.


```ts
// La méthode qui passe à travers l'arbre d'évènements reçu par le serveur
// Utiliser pour mettre les données à jour et jouer les animations
async applyEvent(event:any){
    console.log("ApplyingEvent: " + event.eventType);
    switch(event.eventType){
        case "StartMatch": {
            // Un petit délai avant de commencer à pigner les cartes
            await new Promise(resolve => setTimeout(resolve, 1000));
            break;
        }

        case "GainMana": {
            // TODO
            break;
        }

        case "PlayerEndTurn": {
            if(this.match)
            {
                this.match.isPlayerATurn = !this.match.isPlayerATurn;
                this.isCurrentPlayerTurn = event.playerId != this.currentPlayerId;
            }

            break;
        }

        case "DrawCard": {
            let playerData = this.getPlayerData(event.playerId);
            if(playerData)
            {
                this.moveCard(playerData.cardsPile, playerData.hand, event.playableCardId);
                await new Promise(resolve => setTimeout(resolve, 250));
            }

            break;
        }

        case "EndMatch": {
            this.matchData!.winningPlayerId = event.winningPlayerId;
            this.match!.isMatchCompleted = true;
            break;
        }
    }
    // On exécute à nouveau cette méthode, mais pour les évènements enfant
    if(event.events){
        for(let e of event.events){
            await this.applyEvent(e);
        }
    }
}
```



