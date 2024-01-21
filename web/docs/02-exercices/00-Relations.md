# Relations

## Objectif
L'objectif de cet exercice est de réviser les types de relations et de mieux comprendre comment elles fonctionnent.
Les relations révisées sont:
- 1 à N
- N à N (sans doublon) 
- N à N (avec doublon) 

## Comprendre les migrations
- Générer une première migration
```powershell
add-migration initiale
```
- Regarder le contenu du fichier de migration. Il n'y a pas encore de relations entre les 2 classes Game et Genre, le fichier de migration est donc assez simple.
```csharp
protected override void Up(MigrationBuilder migrationBuilder)
{
    migrationBuilder.CreateTable(
        name: "Game",
        columns: table => new
        {
            Id = table.Column<int>(type: "int", nullable: false)
                .Annotation("SqlServer:Identity", "1, 1"),
            Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
            Image = table.Column<string>(type: "nvarchar(max)", nullable: false),
            ReleaseYear = table.Column<int>(type: "int", nullable: false)
        },
        constraints: table =>
        {
            table.PrimaryKey("PK_Game", x => x.Id);
        });

    migrationBuilder.CreateTable(
        name: "Genre",
        columns: table => new
        {
            Id = table.Column<int>(type: "int", nullable: false)
                .Annotation("SqlServer:Identity", "1, 1"),
            Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
        },
        constraints: table =>
        {
            table.PrimaryKey("PK_Genre", x => x.Id);
        });
}
```

## Relation 1 à N entre Game et Genre
- Ajouter un lien entre **Game** et **Genre**. Pour l'instant, ne faites que modifier la classe **Game**. Chaque **Game** a qu'un seul **Genre**.
```csharp
public class Game
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Image { get; set; }
    public int ReleaseYear { get; set; }
    
    public int? GenreId { get; set; }
    [ValidateNever]
    public Genre? Genre { get; set; }
}
```
- Générer une migration
```powershell
add-migration relationGameGenre
```
- Regarder la migration. Si on prend le temps de lire, c'est relativement simple. On a une nouvelle colonne qui contient un Index pour améliorer la performance et qui est une clé étrangère vers la table Genre.
```csharp
protected override void Up(MigrationBuilder migrationBuilder)
{
    migrationBuilder.AddColumn<int>(
        name: "GenreId",
        table: "Game",
        type: "int",
        nullable: true);

    migrationBuilder.CreateIndex(
        name: "IX_Game_GenreId",
        table: "Game",
        column: "GenreId");

    migrationBuilder.AddForeignKey(
        name: "FK_Game_Genre_GenreId",
        table: "Game",
        column: "GenreId",
        principalTable: "Genre",
        principalColumn: "Id");
}
```
- Ajouter la liste de Games au Genre
```csharp
public class Genre
{
    public int Id { get; set; }
    public string Name { get; set; }
    [ValidateNever]
    public List<Game> Games { get; set; }
}
```
- Générer une nouvelle migration (peu importe le nom)
- Regarder le contenu de la migration. Elle devrait être vide! Par défaut, ce genre de relation est de type 1 à N, alors le fait d'ajouter la liste au Genre ne change **RIEN** au modèle de données!
```csharp
protected override void Up(MigrationBuilder migrationBuilder)
{

}
```
- On peut simplement retirer la migration vide
```powershell
remove-migration
```
- Et maintenant mettre notre BD à jour
```powershell
update-database
```
- Générer un contrôleur avec une vue pour **Genre**
![image](/img/exercices/relations/GenerationController.png)

- Ajouter un lien dans la barre de navigation

| ![image](/img/exercices/relations/NavbarGenres.png) |
|-|

- Vérifier que ça fonctionne correctement en ajoutant les genres suivants:
    - shooter
    - fighting

![image](/img/exercices/relations/Genres.png)

- Générer un contrôleur avec une vue pour **Game**
- Ajouter un lien dans la barre de navigation
- La vue générez a probablement un problème avec le champ optionel Genre. On peut simplement modifier pour afficher le nom lorsque le genre n'est pas null:
```html
<td>
    @if(item.Genre != null)
    {
        @Html.DisplayFor(modelItem => item.Genre.Name)
    }
</td>
```
- Vous devriez avoir quelque chose qui ressemble à ça maintenant:

| ![image](/img/exercices/relations/GamesV1.png) |
|-|

- Afficher les images avec un height de 200
- Corriger le Contrôleur GamesController pour afficher le **Name** des **Genre**. Il y a 4 endroits où un SelectList est créé. Il faut simplement utiliser le champ "Name" à la place du champ "Id"
- Corriger **les** vues **Edit** et **Create** pour bien supporter la possibilité d'avoir aucun genre
```html
<select asp-for="GenreId" class="form-control" asp-items="ViewBag.GenreId">
    <option selected value="">--- NONE ---</option>
</select>
```
- Vérifier qu'il est possible de choisir un nouveau genre pour un jeux existant

## Relation N à N sans doublon entre Game et Platform
Un même jeu peut avoir plusieurs Platform différentes!

- Ajouter une classe Platform avec une relation N à N avec Game

```csharp
public class Platform
{
    public int Id { get; set; }
    public string Name { get; set; }

    [ValidateNever]
    public List<Game> Games { get; set; }
}
```
```csharp
public class Game
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Image { get; set; }
    public int ReleaseYear { get; set; }

    public int? GenreId { get; set; }
    [ValidateNever]
    public Genre? Genre { get; set; }

    [ValidateNever]
    public List<Platform> Platforms { get; set; }
}
```

- Faites une migration. Cette fois-ci c'est un peuplus complexe. Il y a une table en plus qui est créé pour stocker l'information des relations multiples entre Game et Platform. Cette classe contient 2 champs pour l'Id de Game et de Platform.

```csharp
protected override void Up(MigrationBuilder migrationBuilder)
{
    migrationBuilder.CreateTable(
        name: "Platform",
        columns: table => new
        {
            Id = table.Column<int>(type: "int", nullable: false)
                .Annotation("SqlServer:Identity", "1, 1"),
            Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
        },
        constraints: table =>
        {
            table.PrimaryKey("PK_Platform", x => x.Id);
        });

    migrationBuilder.CreateTable(
        name: "GamePlatform",
        columns: table => new
        {
            GamesId = table.Column<int>(type: "int", nullable: false),
            PlatformsId = table.Column<int>(type: "int", nullable: false)
        },
        constraints: table =>
        {
            table.PrimaryKey("PK_GamePlatform", x => new { x.GamesId, x.PlatformsId });
            table.ForeignKey(
                name: "FK_GamePlatform_Game_GamesId",
                column: x => x.GamesId,
                principalTable: "Game",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
            table.ForeignKey(
                name: "FK_GamePlatform_Platform_PlatformsId",
                column: x => x.PlatformsId,
                principalTable: "Platform",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        });

    migrationBuilder.CreateIndex(
        name: "IX_GamePlatform_PlatformsId",
        table: "GamePlatform",
        column: "PlatformsId");
}
```

- Ajouter des plateformes avec votre DbInitializer
```csharp
if (_context.Platform.Count() == 0)
{
    Platform ps5 = new Platform()
    {
        Name = "PS3"
    };
    await _context.Platform.AddAsync(ps5);

    Platform xbox360 = new Platform()
    {
        Name = "Xbox 360"
    };
    await _context.Platform.AddAsync(xbox360);

    Platform n64 = new Platform()
    {
        Name = "N64"
    };
    await _context.Platform.AddAsync(n64);

    await _context.SaveChangesAsync();
}
```

- Utiliser la vue qui est fournit pour afficher les Plateform d'un Game
- Essayer d'ajouter 2 fois la même Platform!
- Améliorer en filtrant la Platform pour éviter cette situation

## Relation N à N avec doublon entre Game et Purchase
En créant une relation qui utilise une classe de relation, on a plus de contrôle sur notre façon de gérer la relation. On peut entre autres avoir plusieurs copies de la même relation.
- Ajouter une classe **Purchase** très simple
```csharp
 public class Purchase
{
    public int Id { get; set; }
    [ValidateNever]
    public List<GamePurchase> GamePurchases { get; set; }
}
```
- Ajouter une classe **GamePurchase**. Comme elle contient son propre Id, on va pouvoir ajouter plusieurs fois la même relation Game/Purchase
```csharp
public class GamePurchase
{
    public int Id { get; set; }
    [ValidateNever]
    public Game Game { get; set; }
    [ValidateNever]
    public Purchase Purchase { get; set; }
}
```
- Ajouter également une liste de **GamePurchases** à la classe **Game**
```csharp
public class Game
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Image { get; set; }
    public int ReleaseYear { get; set; }

    public int? GenreId { get; set; }
    [ValidateNever]
    public Genre? Genre { get; set; }

    [ValidateNever]
    public List<Platform> Platforms { get; set; }

    [ValidateNever]
    public List<GamePurchase> GamePurchases { get; set; }
}
```
- Faire une migration et regarder son contenu. On peut remarquer qu'il y a des colonnes GameId et PurchasedId, c'est le nom par défaut d'une clé étrangère (Nom de la propriété + Id)
```csharp
protected override void Up(MigrationBuilder migrationBuilder)
{
    migrationBuilder.CreateTable(
        name: "Purchase",
        columns: table => new
        {
            Id = table.Column<int>(type: "int", nullable: false)
                .Annotation("SqlServer:Identity", "1, 1")
        },
        constraints: table =>
        {
            table.PrimaryKey("PK_Purchase", x => x.Id);
        });

    migrationBuilder.CreateTable(
        name: "GamePurchase",
        columns: table => new
        {
            Id = table.Column<int>(type: "int", nullable: false)
                .Annotation("SqlServer:Identity", "1, 1"),
            GameId = table.Column<int>(type: "int", nullable: false),
            PurchaseId = table.Column<int>(type: "int", nullable: false)
        },
        constraints: table =>
        {
            table.PrimaryKey("PK_GamePurchase", x => x.Id);
            table.ForeignKey(
                name: "FK_GamePurchase_Game_GameId",
                column: x => x.GameId,
                principalTable: "Game",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
            table.ForeignKey(
                name: "FK_GamePurchase_Purchase_PurchaseId",
                column: x => x.PurchaseId,
                principalTable: "Purchase",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        });

    migrationBuilder.CreateIndex(
        name: "IX_GamePurchase_GameId",
        table: "GamePurchase",
        column: "GameId");

    migrationBuilder.CreateIndex(
        name: "IX_GamePurchase_PurchaseId",
        table: "GamePurchase",
        column: "PurchaseId");
}
```

- Ajouter 1 vente dans le DbInitializer

```csharp
 if (_context.Purchase.Count() == 0)
{
    Purchase purchase = new Purchase()
    {
        
    };
    await _context.Purchase.AddAsync(purchase);

    // On va chercher les 2 premiers jeux
    Game game1 = _context.Game.First(x => x.Id == 1);
    Game game2 = _context.Game.First(x => x.Id == 2);

    // Création d'une 1ere relation avec le premier jeu
    GamePurchase gamePurchase1 = new GamePurchase()
    {
        Game = game1,
        Purchase = purchase
    };
    await _context.AddAsync(gamePurchase1);

    // Création d'une 2e relation avec encore le premier jeu
    GamePurchase gamePurchase2 = new GamePurchase()
    {
        Game = game1,
        Purchase = purchase
    };
    await _context.AddAsync(gamePurchase2);

    // Création d'une 3e relation avec le deuxième jeu
    GamePurchase gamePurchase3 = new GamePurchase()
    {
        Game = game2,
        Purchase = purchase
    };
    await _context.AddAsync(gamePurchase3);

    // Création d'une 4e relation avec ENCORE le premier jeu
    GamePurchase gamePurchase4 = new GamePurchase()
    {
        Game = game1,
        Purchase = purchase
    };
    await _context.AddAsync(gamePurchase4);

    await _context.SaveChangesAsync();
}
```

- Ajouter ce contrôleur pour visualizer les données de Purchase

```csharp
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RelationsNaN.Data;

namespace RelationsNaN.Controllers
{
    public class PurchasesController : Controller
    {
        private readonly RelationsNaNContext _context;

        public PurchasesController(RelationsNaNContext context)
        {
            _context = context;
        }

        // GET: Games
        public async Task<IActionResult> Index()
        {
            var relationsNaNContext = _context.Purchase.Include(p => p.GamePurchases).ThenInclude(gp => gp.Game);
            return View(await relationsNaNContext.ToListAsync());
        }
    }
}
```

- Ajouter une vue pour visualizer les données de Purchase

```html
@model IEnumerable<RelationsNaN.Models.Purchase>

@{
    ViewData["Title"] = "Index";
}

<h1>Index</h1>

<p>
    <a asp-action="Create">Create New</a>
</p>
<table class="table">
    <thead>
        <tr>
            <th>
                @Html.DisplayNameFor(model => model.Id)
            </th>
            <th>
                @Html.DisplayNameFor(model => model.GamePurchases)
            </th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        @foreach (var item in Model)
        {
            <tr>
                <td>
                    @Html.DisplayFor(modelItem => item.Id)
                </td>
                <td>
                    @foreach (var gamePurchase in item.GamePurchases)
                    {
                        <span class="badge bg-primary">@gamePurchase.Game.Name</span>
                    }
                </td>
            </tr>
        }
    </tbody>
</table>
```

- Vérifier le résultat en allant sur **/purchases**

| ![image](/img/exercices/relations/GamesV1.png) |
|-|

## Autres possibilités
Une fois que l'on a une classe de relation, on a la flexibilité de gérer notre problème comme on le veut.
On peut par exemple:
- Ajouter une propriété Count à la relation au lieu d'avoir un Id, comme ceci:

```csharp
public class GamePurchase
{
    public int Id { get; set; }
    [ValidateNever]
    public Game Game { get; set; }
    [ValidateNever]
    public Purchase Purchase { get; set; }

    public int Count { get; set; }
}
```

- Ou encore en ayant un "Owner" pour pouvoir faire des cadeaux
```csharp
public class GamePurchase
{
    public int Id { get; set; }
    [ValidateNever]
    public Game Game { get; set; }
    [ValidateNever]
    public Purchase Purchase { get; set; }

    public Owner Owner { get; set; }
}
```


