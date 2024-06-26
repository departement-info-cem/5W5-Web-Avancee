# Authentification par Cookies

## Utiliser Identity avec MVC

## Création du projet (Étape 1)
- Choisir "Comptes individuels" pour le Type d'authentification
- Par défaut, Identity est présent et fonctionnel avec l'utilisation de Cookies
- L'interface utilisateur est générée en utilisant Identity.UI
- On ne veut pas qu'un utilisateur confirme son courriel pour pouvoir accéder à notre application. Assurez-vous d'avoir: **RequireConfirmedAccount = false**

```csharp
builder.Services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = false)
    .AddEntityFrameworkStores<ApplicationDbContext>();
```

## Configuration des Cookies (Étape 2)

### Configurer les accès entre domaines

- Il faudra mettre à jours les autorisations CORS pour inclure l'utilisation de Cookies avec AllowCredentials()
- Spécifier l'adresse ou les adresses des clients, car on ne peut plus accepter toutes les adresses

```csharp
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAlmostAll", policy =>
    {
        // Pour utiliser AllowCredentials, il faut spécifier les origines acceptés
        // on ne peut plus utiliser AllowAnyOrigin
        //policy.AllowAnyOrigin();
        policy.WithOrigins("http://localhost:4200","https://localhost:4200");
        policy.AllowAnyHeader();
        policy.AllowAnyMethod();
        // Permettre l'utilisation des Cookies
        policy.AllowCredentials();
    });
});
``` 

- Ne pas oublier d'utiliser la configuration qui vient d'être créer
```csharp
    app.UseCors("AllowAlmostAll");
``` 
### Propriété HttpOnly des Cookie

- Par défaut, les Cookies ont la propriété HttpOnly
- HttpOnly signifie qu'on ne peut pas lire les Cookies à partie de Code Javascript (ou TypeScript)
- Nous voudrons donc désactiver cette propriété pour avoir le plein contrôle à partir d'Angular

### Configurer les Cookies dans Program.cs
- Mettre HttpOnly à false pour qu'Angular puisse voir le Cookie pour valider la connexion à l'api
```csharp
builder.Services.ConfigureApplicationCookie(options =>
{
    options.Cookie.HttpOnly = false;
});
``` 


## Ajouter un contrôleur d'API pour les connections (ÉTAPE 3)

### Ajouter un contrôleur
- Ajouter un contrôleur **Web API vide**
- Ce contrôleur aura les actions Login, Register et Logout
### Injecter les dépendances
- UserManager pour le Register
- SignInManager pour le login
```csharp
UserManager<IdentityUser> _userManager;
SignInManager<IdentityUser> _signInManager;

public AccountController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
{
    _userManager = userManager;
    _signInManager = signInManager;
}
```
### Ajouter l'action Register
- Register peut être exactement le même code que ce qui était fait dans le cours de 4W6
- Créer également une classe **DemoUser** qui hérite d'**IdentityUser**
- Créer également une classe **RegisterDTO** qui contient les champs nécessaires
```csharp
[HttpPost]
public async Task<ActionResult> Register(RegisterDTO register)
{
    if(register.Password != register.PasswordConfirm)
    {
        return StatusCode(StatusCodes.Status500InternalServerError, new { Error = "Le mot de passe et la confirmation ne sont pas identique" });
    }

    DemoUser user = new DemoUser()
    {
        UserName = register.UserName,
        Email = register.Email
    };
    IdentityResult identityResult = await _userManager.CreateAsync(user, register.Password);

    if(!identityResult.Succeeded)
    {
        return StatusCode(StatusCodes.Status500InternalServerError, new { Error = identityResult.Errors });
    }

    return Ok();
}
``` 

### Ajouter l'action Login
- Utiliser le SignInManager pour créer le Cookie
- Il faut également créer un **LoginDTO**

``` csharp
var result = await _signInManager.PasswordSignInAsync(login.UserName, login.Password, true, lockoutOnFailure: false);
if(result.Succeeded)
{
   return Ok();
}
                
return NotFound(new { Error = "L'utilisateur est introuvable ou le mot de passe de concorde pas" });
```

### Ajouter l'action Logout
- Utiliser le SignInManager pour faire le logout et détruire le Cookie

```csharp
public async Task<ActionResult> Logout()
{
    await _signInManager.SignOutAsync();
    return Ok();
}
``` 

### Ajouter des actions
- Pour pouvoir tester que l'on a accès ou non aux actions avec authorize avec notre cookie, on va créer les 2 actions suivantes:

```csharp
[Authorize]
public ActionResult<string[]> PrivateData()
{
    return new string[] { "figue", "banane", "noix" };
}

public ActionResult<string[]> PublicData()
{
    return new string[] { "chien", "chat", "loutre" };
}
```


## Angular (ÉTAPE 4)
### HTTPS
- Il est essentiel d'utiliser le serveur en Https
- ET de démarrer Angular en HTTPS
``` powershell
ng serve --ssl
```

### Faites un client très simple avec les 5 boutons suivants:
![image](/img/exercices/authentification/angularAuthentificationSimple.png)

- Pour chaque action, affichez le résultat dans la console
- Pour la requête publique, rien de spécial à faire et elle devrait fonctionner dès le départ.
- Mais si vous essayer de faire la requête privée, vous devriez avoir un message d'erreur car l'utilisateur n'a pas accès!
- Pour Enregistrer et Connecter, simplement utiliser des DTOs hardcodés.
- Pour faire l'appel de connection, c'est essentiel d'inclure l'option **withCredentials: true**
``` ts
let options = { withCredentials: true };
let result = await lastValueFrom(this.http.post<any>('https://localhost:7219/api/Account/Login', registerData, options));
```

:::danger
Attention, par défaut les mots de passes doivent suivre certaines règles. Un mot de passe qui fonctionne bien: Passw0rd!
:::

- Pour faire fonctionner la requête privée il faut également joindre le cookie obtenu lors du login. On ajoute simplement l'option withCredentials!
``` ts
let options = { withCredentials:true };
let result = await lastValueFrom(this.http.get<Cat>('https://localhost:7219/api/Account/PrivateData', options));
``` 
- Testez maintenant que vous pouvez obtenir l'information privée avec un utilisateur connecté!
- Pour se déconnecter, il faut **ENCORE** inclure l'option **withCredentials: true**

:::danger
Faites toujours attention quand vous utilisez la méthode post avec des options. Car les paramètres sont (url, data, options). Alors si il n'y a pas de data, n'oubliez pas de mettre null ou sinon vous allez passer vos options comme du data!!
:::

### Ajouter un interceptor
- Automatiser l'ajout des options avec un interceptor

``` ts
intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  request = request.clone({ withCredentials: true });
  return next.handle(request);
}
``` 

- Retirez l'options withCredentials de vos appels
- Testez encore que vous pouvez obtenir l'information privée en utilisant l'interceptor!

:::info
Le cookie reste dans votre navigateur après le login. Si vous fermez votre navigateur alors que vous êtes connecté et vous l'ouvrez de nouveau, vous êtes encore connecté!
:::

### Cookie
- En ouvrant la console de développeur, on peut voir les cookies pour la page courrante
![image](/img/exercices/authentification/cookie.png)
- On peut remarquer que le premier cookie vient d'Identity. Si vous faites déconnecter il va disparaître et si vous faites connecter un nouveau cookie va apparaître.
- 2 éléments intéressants:
    - L'expiration du cookie. Après cette date, il faut se reconnecter pour obtenir un nouveau cookie.
    - HttpOnly est bien faux, comme on l'a spécifié dans Program.cs (on peut donc lire le cookie à partir de notre code!)

### Lecture du cookie avec Angular
- Ajouter ngx-cookie-service pour être capable m'interagir facilement avec les Cookies
[ngx-cookie-service](https://www.npmjs.com/package/ngx-cookie-service)
- Une fois que vous avez injectez le service, vous pouvez ajouter une méthode pour vérifier si le cookie d'Identity est présent
``` ts
isLoggedIn(){
    return this.cookieService.get(".AspNetCore.Identity.Application");
}
```
- Modifiez également votre page pour afficher le bouton déconnecter seulement si il y a un cookie et le bouton connecter si il n'y en a pas!


### Solution
- 🔗[Solution .Net](https://github.com/CEM-420-5W5/CookieAuthentication)
- 🔗[Solution Angular](https://github.com/CEM-420-5W5/ngCookieAuthentication)

