# SignalR

## Objectif

- Permettre à notre serveur d’envoyer du data à un ou des client(s) quand on veut. (Donc c'est le serveur et non le client qui déclenche l'envoi)
- On veut donc éviter d’utiliser la solution de « polling » où le client fait des requêtes très fréquemment pour savoir si il y a du nouveau data.

## Half-duplex

- C’est le type de communication que vous connaissez déjà très bien.
- Le client peut non seulement envoyer des données, mais également recevoir une réponse qui contient également des données.
- L’échange va dans les deux sens, mais uniquement lorsque le client fait une demande.

## Full-duplex

- L’information peut communiquer librement dans les deux directions.
- Le serveur peut donc envoyer des requêtes avec des données à un ou des clients qui peuvent lui retourner des données.

## Web Sockets

- Websockets permet de faire une communication full-duplex depuis .Net 7.
- Les websockets font parties de .Net Core et sont utilisable directement à l’intérieur d’un Controller.

```csharp
public class WebSocketController : ControllerBase {
    [Route("/ws")]
    public async Task Get() {
        if (HttpContext.WebSockets.IsWebSocketRequest) {
            using var webSocket = await HttpContext.WebSockets.AcceptWebSocketAsync();
            await MaFonctionDeCommunication(webSocket);
        }
        else {
            HttpContext.Response.StatusCode = StatusCodes.Status400BadRequest;
        }
    }
}
```

## SignalR

- C’est généralement préférable de ne pas utiliser des websockets directement et d’utiliser une libraire comme **SignalR**.
- SignalR est une technologie qui utilise des websockets et qui fournit de nombreuses fonctionnalités très utiles!

## Le protocol

Avec websockets et SignalR, il faut d’abord établir une connection avant de pouvoir communiquer de façon full-duplex.

![Alt text](/img/infos/signalR/SignalRProtocol.png)

## Fonctionnalités SignalR

Avec SignalR, on peut utiliser un **Hub** pour:
- Établir une connexion full-duplex
- Répondre à des requêtes des clients
- Envoyer des requêtes aux clients qui peuvent être exécutés comme des fonctions
- Créer des groupes de clients pour leur envoyer des requêtes
- Utiliser [Authorize]

## Hub

- C’est l’équivalent d’un contrôleur, mais pour SignalR.
- C’est dans un hub que l’on va écrire tout notre code pour gérer notre communication avec les clients.
- **Un Hub est simplement une classe qui hérite de la classe Hub**
- Par convention, on met les classes de Hub dans le répertoirs **/Hubs/**


## Fonctionnalités du Hub

### Traiter des requêtes

```csharp
// Recevoir une requête
// Appeler une fonction sur le client avec la même donnée
public async Task FaireUnEcho(int value)
{
    await Clients.Caller.SendAsync("UneFonctionClient", value);
}
```

```csharp
// Recevoir une requête
// Appeler une fonction sur TOUS les client avec la même donnée 
public async Task EnvoyerAuxAutres(int value)
{
    await Clients.All.SendAsync("UneFonctionClient", value);
}
```

### Envoyer des données à une connection

```csharp
// Appeler une connection
public async Task EnvoyerAUneConnection(int value, string connectionId)
{
    await Clients.Client(connectionId).SendAsync("UneFonctionClient", value);
}
```

### C'est quoi un connectionId?

Comme son nom l'indique, c'est l'Id de la connection établie entre le serveur et le client. Il n'est **PAS** unique par utilisateur et si la même page ouvre 2 connections différentes, il y aura 2 connectionIds **différents**.

### Envoyer des données à un usager

```csharp
// Appeler un usager
public async Task EnvoyerAUnUsager(int value, string userId)
{
    await Clients.User(userId).SendAsync("UneFonctionClient", value);
}
```

:::info
Comme un User peut se connecter plusieurs fois au même Hub, il est possible que ce code envoit l'information à plusieurs instances différentes (Par exemple, deux fenêtres d'un navigateur connecté à ce serveur).
:::

### Gérer des groupes

```csharp
await Groups.RemoveFromGroupAsync(Context.ConnectionId, "ancienGroupe");
await Groups.AddToGroupAsync(Context.ConnectionId, "nouveauGroupe");
```

### Appeler un groupe d’usager

```csharp
// Appeler un groupe
public async Task EnvoyerAUnUsager(int value, string groupName)
{
    await Clients.Group(groupName).SendAsync("UneFonctionClient", value);
}
```

### Possible de faire de nombreux appels!

```csharp
public async Task FairePlusieursChoses(int valueA, int valueB, string groupName)
{
    // Appeler la méthode UneFonctionClient sur les clients qui font partie du groupe nommé groupName
    await Clients.Group(groupName).SendAsync("UneFonctionClient", valueA);
    // Appeler la méthode UneAutreFonctionClient sur tous les clients connectés à ce Hub
    await Clients.All.SendAsync("UneAutreFonctionClient", resultB);
}
```

### Possible d'envoyer plusieurs paramètres
(Voir la section [Écouter plusieurs paramètres](/info/SignalR#écouter-plusieurs-paramètres))

```csharp
public async Task EnvoyerPlusieursParametres()
{
    int a = 42;
    int b = 33;
    string c = "test";
    // Appeler la méthode UneAutreFonctionClient sur tous les clients connectés à ce Hub
    await Clients.All.SendAsync("PlusieursParametres", a, b, c);
}
```

### Pour faire une action lors d'une connection ou déconnection au Hub

```csharp
public override async Task OnConnectedAsync()
{
    base.OnConnectedAsync();
    // TODO: Ajouter votre logique
}

public override async Task OnDisconnectedAsync(Exception? exception)
{
    base.OnDisconnectedAsync(exception);
    // TODO: Ajouter votre logique
}
```

## Hub et \[authorize\]

- On peut mettre un [Authorize] sur un Hub.
- On peut alors utiliser Context.UserIdentifier pour obtenir le userId de l’utilisateur qui a fait la requête.

## Enregistrer un hub

Il faut enregistrer notre Hub dans Program.cs

```csharp
builder.Services.AddSignalR();

//...

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.MapHub<MatchHub>("/matchHub");
```

## Côté Angular

La librairie "@microsoft/signalr" permet de communiquer facilement avec un hub.

### Connection

```ts
connectToHub() {
    // On doit commencer par créer la connexion vers le Hub
    this.hubConnection = new signalR.HubConnectionBuilder()
                              .withUrl('https://localhost:7060/chat')
                              .build();

    // On peut commencer à écouter pour les évènements qui vont déclencher des callbacks
    this.hubConnection!.on('UneFonction', (data) => {
        // data a le même type que ce qui a été envoyé par le serveur
        console.log(data);
    });
    
    this.hubConnection!.on('UneAutreFonction', (data) => {
        console.log(data);
    });

    // On se connecte au Hub  
    this.hubConnection
        .start()
        .then(() => {
            console.log('La connexion est active!');
          })
        .catch(err => console.log('Error while starting connection: ' + err));
}
```

:::warning
Le moment est important!
:::
```ts
    this.hubConnection = new signalR.HubConnectionBuilder()
        .withUrl(environment.apiUrl + 'monHub')
        .build();

    // Il faut écouter les messages avant de faire start() sur la connection. On ne risque pas d'avoir un problème où le message est reçu avant même d'avoir exécuté le .on
    // ATTENTION: Ce problème risque d'arriver beaucoup plus souvent dans une version DÉPLOYÉE de l'application
    this.hubConnection?.on("DoSomething", (data:number) => {
        // Faire quelque chose
    });

    this.hubConnection
        .start()
        .then(() => {
            this.isConnected = true;
            // Ne PAS faire de .on() ICI
        });

```

### Écouter plusieurs paramètres
(Voir la section [Possible d'envoyer plusieurs paramètres](/info/SignalR#possible-denvoyer-plusieurs-paramètres))

```ts
this.hubConnection?.on("PlusieursParametres", (a:number, b:number, c:string) => {
    // Faire quelque chose
});
```

### Appel d'une action sur le Hub

Une fois la connexion établit, on peut appeler les méthodes que l’on veut sur notre Hub.

```ts
faireQuelqueChose() {
    this.hubConnection!.invoke('FaireQuelqueChose', this.uneString, 42);
}
```

## Cycle de vie

- Les connections peuvent être fermées de chaque côté
- Les connections ont une durée de vie (2 minutes par défaut)
- La durée de vie est remise à zéro chaque fois que le client envoit  une requête
- Un client peut envoyer un message « keep alive » pour garder une connexion ouverte sans envoyer de données

