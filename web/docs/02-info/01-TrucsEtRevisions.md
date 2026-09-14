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

## Révision

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

## IA

### Activer copilot dans VS Code

Voici des instructions pour utiliser les modèles d'IA que vous pouvez utiliser avec votre **compte éducation** de GitHub avec VS Code.

Il faut sélectionner le menu d'extension à gauche et trouver GitHub Copilot Chat
<img width="352" height="239" alt="image" src="https://github.com/user-attachments/assets/24333529-ecee-42c1-b45c-7df7d4b3c43d" />

Il faut ensuite activer les fonctionnalités IA
<img width="384" height="135" alt="image" src="https://github.com/user-attachments/assets/f57a7dbc-7f6b-4231-8c73-301ccc120580" />

On peut maintenant cliquer sur le bouton à droite de la barre de recherche au haut de l'écran et discuter avec notre Agent
<img width="722" height="1028" alt="image" src="https://github.com/user-attachments/assets/22020399-dab0-4867-9fda-9f5274a349ba" />

Pour le moment, on va utiliser le modèle Claude Haiku 4.5 (on va expliquer en classe pourquoi on le choisit pour le moment)
<img width="592" height="616" alt="image" src="https://github.com/user-attachments/assets/d5bafea8-447e-429c-a3fc-22fe190e095f" />


### Activer copilot dans Visual Studio 2026

On commence par se connecter à notre compte GitHub en clique "s'identifier" (L'image montre le résultat une fois connecté)
<img width="208" height="83" alt="image" src="https://github.com/user-attachments/assets/bb0395ce-58bb-4332-bcde-fc4603299be1" />

On va ensuite ouvrir la fenêtre de Copilot
<img width="340" height="260" alt="image" src="https://github.com/user-attachments/assets/93f3bd8e-b439-4cac-b413-a082328f8ad8" />

On peut maintenant choisir le mode Agent (traduit par "Countourner!??" et choisir Haiku 4.5)

<img width="356" height="437" alt="image" src="https://github.com/user-attachments/assets/8b4d8f99-5070-4d7e-9fc8-00567df35149" />




