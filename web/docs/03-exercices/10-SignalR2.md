# SignalR, 2e partie

## Objectifs
Compléter l'implémentation d'une application de chat en utilisant SignalR

[Projet GitHub avec Client et Serveur](https://github.com/CEM-420-5W5/SignalR_2)

### État initial

- Le projet de base permet déjà de s'enregistrer et de s'authentifier
- Il permet également de se connecter au Hub et d'envoyer un message à tous ceux qui sont connectés

### Tokens et SignalR

- Le projet est déjà configuré pour supporter l'authentification par Token avec SignalR
- Voici les éléments qui ont été ajoutés pour y arriver

```csharp
AddJwtBearer(options =>
  {
      options.SaveToken = true;
      // TODO: Seulement lors du developement
      options.RequireHttpsMetadata = false;
      options.TokenValidationParameters = new TokenValidationParameters()
      {
          ValidateAudience = false,
          ValidateIssuer = true,
          ValidIssuers = serverAdresses,
          ValidAudience = null,
          IssuerSigningKey = signingKey
      };

      // DÉBUT DU CODE À AJOUTER
      // Va lire le token de la requête et mettre le Token du context à jour pour les requêtes vers le Hub
      options.Events = new JwtBearerEvents
      {
          OnMessageReceived = context =>
          {
              var accessToken = context.Request.Query["access_token"];

              // If the request is for our hub...
              var path = context.HttpContext.Request.Path;
              if (!string.IsNullOrEmpty(accessToken) &&
                  (path.StartsWithSegments("/chat")))
              {
                  // Read the token out of the query string
                  context.Token = accessToken;
              }
              return Task.CompletedTask;
          }
      };
      // FIN DU CODE À AJOUTER
  }
```

```ts
this.hubConnection = new signalR.HubConnectionBuilder()
                              .withUrl('http://localhost:5106/chat',
                                // Ajout du code pour joindre le token aux requêtes SignalR (l'équivalent de l'interceptor pour les autres requêtes)
                                { accessTokenFactory: () => localStorage.getItem("token")! }
                              )
                              .build();
```

:::info
Si j'avais à faire un TP avec SignalR et une authentification par token, je me dirais: "Hum, ça va vraiment être utile à savoir une fois que je vais intégrer les changements de mon équipe"
:::

### Complétez les tâches suivantes côté serveur

:::warning
C'est normal que les messages ne soient pas dans la BD. Vous pouvez simplement afficher les nouveaux messages sur le client et ne pas afficher les anciens.
:::

:::warning
Il faut également ajouter 2 invokes sur le client pour faire fonctionner les tâches suivantes: Voir les **TODOs**
:::

- Il faut mettre les clients à jour avec la liste des utilisateurs connectés après chaque connexion/déconnexion

| ![alt text](/img/exercices/signalR2/image-8.png) |
|-|

- Il faut mettre les clients à jour avec la liste des canaux à la connexion et quand il y a un changement
  - Il faut également gérer le message sur le client (TODO: Angular)

![alt text](/img/exercices/signalR2/image-7.png)

- Lorsqu'on supprime un canal, il faut faire sortir les utilisateurs de ce canal en leur envoyant un message. (Pas besoin d'enlever les utilisateurs du groupe sur le serveur)
  - Il faut également gérer le message sur le client (TODO: Angular)
- Lorsqu'un utilisateur joint un canal et qu'il envoit un message, le message doit être reçu uniquement par les membres du canal et commencer par \[NomDuCanal\]

![alt text](/img/exercices/signalR2/image-2.png)

- Lorsqu'un utilisateur sélectionne un utilisateur, son message doit être reçu uniquement par cet utilisateur et commencer par [De: EmailDuSender@test.com]

![alt text](/img/exercices/signalR2/image-6.png)

![alt text](/img/exercices/signalR2/image-4.png)

![alt text](/img/exercices/signalR2/image-3.png)

### Affichage de messages 

- Afficher un message lorsqu'un utilisateur se connecte ou se déconnecte d'un canal à tout les membres de ce canal

![alt text](/img/exercices/signalR2/image-5.png)

## Solution

La solution est dans la branche **solution** du repo
