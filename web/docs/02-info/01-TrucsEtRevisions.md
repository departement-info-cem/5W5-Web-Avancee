# Trucs et révisions

Contient "entre autres" des solutions aux problèmes que l'on a dans les laboratoires et de la "révision" ou des clarifications par rapport à des choses déjà vu dans le programme.

## Trucs

### Erreur pendant un update-database ou un add-migration

Il y a maintenant **parfois** des drôles d'erreurs au moment de faire les opérations de BD. Si vous avez l'erreur suivante:

:::danger
L’exécution de la commande s’est arrêtée, car la variable de préférence « ErrorActionPreference » ou le paramètre courant a la valeur Stop : System.Management.Automation.RemoteException
:::

Ajoutez -ErrorAction Continue à votre commande:

```powershell
update-database -ErrorAction Continue
```

:::info
Ça ne va pas toujours régler votre erreur (parfois oui), MAIS sinon ça va au moins vous donner plus d'information pour la régler!
:::

### Révision

### Comment passer des données avec une requête à un serveur web

#### URL

La premièreme façon c'est le chemin d'accès (url) qui contient au minimum l'information nécessaire pour activer le bonne méthode du bon contrôleur. Par exemple:

```ts
https://localhost:3080/api/AccountController/Login
```

```csharp
[Route("api/[controller]/[action]")]
[ApiController]
public class AccountController : ControllerBase
```

Ça va permetre d'appeler la méthode Login du AccountController

En plus de cela, on peut passer du data dans le URL. Comme dans le cas suivant:

```ts
https://localhost:3080/api/DataController/Delete/42
```

```csharp
[HttpGet("{id}")]
public async Task<IActionResult> Delete(int id)
```

Va appeler la méthode Delete de notre DataController et lui passer la valeur 42 comme id!

#### queryParams

Celui que tout le monde semble avoir oublier!

```ts
https://localhost:3080/api/TaskController/Add?text=banane&priority=33
```

```csharp
[HttpPost]
public async Task<ActionResult> Add(string text, int priority)
```

Va appeler la méthode Add de notre TaskController et lui passer la valeur "banane" comme text et 33 comme priority

#### Body

La méthode la plus utilisée nous permet d'envoyer un objet dans notre requête.

:::info
C'est la seule technique qui permet d'avoir de la confidentialité pour les données envoyés, car les autres techniques passent leur données dans le URL et l'URL n'est pas encrypté. Même en utilisant https!
:::

```ts
let data = {text="MonNom", priority=42}
let result = await axios.post('https://localhost:3080/api/TaskController/Add', data);
```

```csharp
[HttpPost]
public async Task<ActionResult> Add(MyTask newTask)
```

Va appeler la méthode Add de notre TaskController et lui passer un object MyTask avec la proriété text "banane" et la propriété priority 42

#### Tout en même temps!!

On peut tout à fait combiner tout ça ensemble

```ts
let raison = "Pour gagner la guerre commercial";
let idDuProjet = 28;
let data = {texte="Arrêter d'écouter Netflix", priorite=42};
let result = await axios.post('https://localhost:3080/api/TachesController/Ajouter/${idDuProjet}?raison=${raison}', data);
```

```csharp
[HttpPost("{id}")]
public async Task<ActionResult> Ajouter(Tache nouvelleTache, int id, string raison)
```

Va appeler la méthode Ajouter de notre TachesController et lui passer:
- Par l'URL: l'id 28
- Par le queryParams: la raison "Pour gagner la guerre commercial"
- Par le body: un object Tache avec la proriété texte "Arrêter d'écouter Netflix" et la propriété priorite 42
