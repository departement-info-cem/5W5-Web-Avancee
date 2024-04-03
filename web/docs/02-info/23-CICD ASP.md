# CI/CD ASP .NET

### Changer la BD
- Nous utiliserons SQLite pour le déploiement
- C'est n'est pas particulièrement bon, mais ça nous permet de garder l'hébergement gratuit!
- Vous devrez ajouter la dépendance à Microsoft.EntityFrameworkCore.Sqlite

```csharp
builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseLazyLoadingProxies();
    // Ajouter Microsoft.EntityFrameworkCore.Sqlite
    options.UseSqlite(connectionString);
});
```

- Ajuster maintenant appsettings.json
- La connection string pour SQLite est très simple

```csharp
"ConnectionStrings": {
  "DefaultConnection": "DataSource=app.db;Cache=Shared"
},
```

### Ajuster les Cookies
- Nous devrons modifier les cookies pour ajuster l'option SameSite et permettre l'échange de cookies entre domaine

```csharp
builder.Services.ConfigureApplicationCookie(options =>
{
    options.Cookie.HttpOnly = false;
    options.Cookie.SameSite = SameSiteMode.None;
});
```

### Déployer sur Azure

- Aller sur le portail Azure: https://portal.azure.com/#home

- Choisir App Services

| ![image](/img/infos/CICD/ASP/5W5-s3-az10.jpg) |
|-|

- Créer une application web

### Configuration de base
- S'assurer de choisir la bonne pile d'exécution (.net 7 probablement)
- S'assurer de garder le plan de tarification gratuit!

| ![image](/img/infos/CICD/ASP/5W5-s3-az11.jpg) |
|-|

### Configuration du déploiement
- Cliquer pour activer le déploiement continu
- Choisir le repo du projet asp.net

| ![image](/img/infos/CICD/ASP/5W5-s3-az12.jpg) |
|-|

### Valider et créer
- La configuration est terminée, on peut créer notre application

### Paramètres de l'app
- Retourner à l'accueil
- Cliquer sur votre application web

| ![image](/img/infos/CICD/ASP/5W5-s3-az13.jpg) |
|-|

### Activer les messages d'erreurs
- Nous allons activer le mode développement pour être en mesure de voir les problème qui surviennent
- Cela nous permettra aussi d'appliquer les migrations
- Ne vous inquiétez pas, nous ferons quelque chose de mieux éventuellement
- Aller dans Configuration et ajouter un nouveau paramètre d'application

| ![image](/img/infos/CICD/ASP/5W5-s3-az14.jpg) |
|-|

- Inscrire ASPNETCORE_ENVIRONMENT comme nom de paramètre
- Inscrire Development comme valeur
- Enregistrer les changements

| ![image](/img/infos/CICD/ASP/5W5-s3-az15.jpg) |
|-|

### Appliquer les migrations
- Avec ASPNETCORE_ENVIRONMENT à development on pourra appliquer les migration lors de notre première connexion

TODO: Ajouter une image

### Configurer les CORS
- Activer Access-Control-Allow-Credentials
- Ajouter l'adresse de votre application Angular
- Enregistrer le tout

| ![image](/img/infos/CICD/ASP/5W5-s3-az16.jpg) |
|-|