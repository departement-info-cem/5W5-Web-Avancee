# Authentification par Cookies

## Utiliser Identity avec MVC

## Création du projet (Étape 1)
- Cocher "Authentification individuelle"
- Par défaut, Identity est présent et fonctionnel avec l'utilisation de Cookies
- L'interface utilisateur est générée en utilisant Identity.UI

## Configuration des Cookies (Étape 2)

### Configurer les accès entre domaines

- Il faudra mettre à jours les autorisations CORS pour inclure l'utilisation de Cookies avec AllowCredentials()

```csharp
    policy.AllowCredentials();
```

- Spécifier l'adresse ou les adresses des clients
- On ne peut plus accepter toutes les adresses

```csharp
    // Pour utiliser AllowCredentials, il faut spécifier les origines acceptés
    // on ne peut plus utiliser AllowAnyOrigin
    policy.WithOrigins("http://localhost:4200","https://localhost:4200");
``` 

### Une fois qu'on met tout ensemble

```csharp
    builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAlmostAll", policy =>
    {
        // On n'accepte plus toutes les origines
        //policy.AllowAnyOrigin();
        // Pour utiliser AllowCredentials, il faut spécifier les origines acceptés
        // on ne peut plus utiliser AllowAnyOrigin
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

### Ajouter un contrôleur d'API appelé Account
- Ce contrôleur aura les actions Login, Register et Logout
### Injecter les dépendances
- UserManager pour le Register
- SignInManager pour le login
```csharp
UserManager<IdentityUser> userManager;
SignInManager<IdentityUser> signInManager;

public AccountController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
{
    this.userManager = userManager;
    this.signInManager = signInManager;
}
```
### Ajouter l'action Register
- Register peut être exactement le même code que ce qui était fait dans le cours de 4W6
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
    IdentityResult identityResult = await this.userManager.CreateAsync(user, register.Password);

    if(!identityResult.Succeeded)
    {
        return StatusCode(StatusCodes.Status500InternalServerError, new { Error = identityResult.Errors });
    }

    return Ok();
}
``` 

Ajouter l'action Login
Utiliser le SignInManager pour créer le Cookie

``` csharp
var result = await signInManager.PasswordSignInAsync(login.UserName, login.Password, true, lockoutOnFailure: false);
if(result.Succeeded)
{
   return Ok();
}
                
return NotFound(new { Error = "L'utilisateur est introuvable ou le mot de passe de concorde pas" });
Ajouter l'action Logout
Utiliser le SignInManager pour faire le logout et détruire le Cookie
public async Task<ActionResult> Logout()
{
    await signInManager.SignOutAsync();
    return Ok();
}
``` 


## Angular (ÉTAPE 4)
### HTTPS
- Il est essentiel d'utiliser le serveur en Https
- ET de démarrer Angular en HTTPS
``` powershell
ng serve --ssl
```

### Effectuer une requête Http à partir d'Angular
- À partir d'une requête de base
``` ts
let result = await lastValueFrom(this.http.get<Cat>('https://localhost:7219/api/cats/3'));
``` 

- Ajouter ensuite l'option withCredentials pour activer l'envoie du Cookie
``` ts
let options = { withCredentials:true };
let result = await lastValueFrom(this.http.get<Cat>('https://localhost:7219/api/cats/3', options));
``` 

### Ajouter un interceptor
- Automatiser l'ajout des options avec un interceptor

``` ts
intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  request = request.clone({ withCredentials: true });
  return next.handle(request);
}
``` 
