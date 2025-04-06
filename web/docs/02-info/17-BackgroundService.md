# BackgroundService

## Résumé
- Utiliser un BackgroundService
- Intégrer le BackgroundService avec un Hub
- Créer un scope à l'intérieur d'un Singleton

## Exemple

Pour comprendre ces nouveaux concepts, nous allons regarder un exemple. L'exercice sera ensuite d'ajouter des fonctionalitées à cet exemple.

L'exemple est un le jeu le plus simple que l'on puisse imagine. Il faut cliquer le plus de fois possible sur un bouton à l'intérieur d'une même round.

Par défaut, un round dure 30 secondes.

Chaque clic va faire un appel vers le serveur et augmenter le score du joueur.

À chaque 30 secondes, le serveur va regarder quel(s) joueur(s) a le plus grand score et envoyer à TOUS les clients un message de fin de round avec le(s) joueur(s) gagnant(s) et le nombre de clicks gagnant.

Chaque joueur doit se créer un compte et être connecté à l'aide de son token pour pouvoir jouer.

## Les nouveaux concepts

### BackgroundService

Dans notre exemple, on a besoin d'une tâche qui roule sur le serveur à chaque fin de round (chaque 30 secondes).
Contrairement aux autres fonctionnalités que nous avons fais sur nos serveurs par le passé, celle-ci n'est pas déclenchée par un contrôleur!

On va utiliser un **BackgroundService** avec une méthode **ExecuteAsync** que l'on va faire boucler à l'infini:

```csharp
public class MonBackgroundService : BackgroundService
{
    public const int DELAY = 30 * 1000;
    
    public MonBackgroundService(){}

    public async Task DoSomething(CancellationToken stoppingToken){}

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            await Task.Delay(DELAY, stoppingToken);
            await DoSomething(stoppingToken);
        }
    }
}
```

À la base, on peut ajouter un **BackgroundService** de cette manière.

```csharp
builder.Services.AddHostedService<MonBackgroundService>;
```

:::warning
Cette technique est tout à fait appropriée dans de nombreux cas, mais pas si on veut que le service soit accessible par d'autres services!
:::

Pour nous permettre d'accéder à notre **BackgroundService** dans notre **Hub**, on va utiliser cette technique qui déclare un service Singleton et l'enregistre ensuite comme HostedService.

```csharp
builder.Services.AddSingleton<MonBackgroundService>();
builder.Services.AddHostedService<MonBackgroundService>(p => p.GetService<MonBackgroundService>());
```

### Utilisation d'un scope et d'un DbContext

Comme notre service est un **Singleton** (On en veut un seul, sinon ça va vite devenir chaotique!), on ne peut pas **injecter une dépendance** vers un **service Scoped**.

Le **DbContext** est **scoped**, alors ça peut rapidement devenir un problème!

On va utiliser un **scope** et un **IServiceScopeFactory** que l'on va injecter dans notre service :

```csharp
public MonBackgroundService(IServiceScopeFactory serviceScopeFactory)
{
    _serviceScopeFactory = serviceScopeFactory;
}

public async Task DoSomething(CancellationToken stoppingToken){
    using (IServiceScope scope = _serviceScopeFactory.CreateScope())
    {
        BackgroundServiceContext dbContext = scope.ServiceProvider.GetRequiredService<BackgroundServiceContext>();

        // On peut maintenant utiliser le dbContext normalement
        // On peut également faire un SaveChanges
    }
    // Une fois que l'on va sortir du "using", le scope va être détruit et le dbContext associé au scope va également être détruit!
}
```

### Utilisation d'un IHubContext

Ici on va voir comment appeler un Hub à partir d'un BackgroundService

```csharp
public MonBackgroundService(IHubContext<MonHub> monHub, IServiceScopeFactory serviceScopeFactory)
{
    _monHub = monHub;
    _serviceScopeFactory = serviceScopeFactory;
}

public async Task DoSomething(CancellationToken stoppingToken){
    // On peut maintenant faire un appel à un Hub!
    _monHub.Clients.All.SendAsync("Method", data, stoppingToken);
}
```

:::danger
On peut accéder à un **IHubContext**, mais pas au **Hub** lui-même. On peut utiliser le **IHubContext** pour envoyer des messages aux clients et aux groupes ou ajouter et retirer des connexions à un groupe, mais on ne peut pas appeler les méthodes du Hub. Il n'y a pas de "User", ni de "connection" dans notre BackgroundService. Donc pas possible d'utiliser ConnectionId, Caller, Others ou l'utilisateur comme dans une action du Hub!
:::

### Utilisation du BackgroundService à partir du Hub

Pour une fois, rien de nouveau à apprendre! Comme le BackgroundService est un service Singleton, on peut simplement l'injecter dans notre constructeur et voilà!

```csharp
public MonHub(MonBackgroundService backgroundService)
{
    _backgroundService = backgroundService;
}
```

### Références

L'exemple qui est discuté ici fait référence à l'exercice que vous pouvez trouver ici:
[Exercice BackgroundService](/exercices/BackgroundService)

Voici également un projet de référence plus simple qui est utile pour comprendre les Background Services:
[Projet GitHub Simple](https://github.com/CEM-420-5W5/SimpleBackgroundService.git)
