# Tests Unitaires

## Les différents types de tests (liste incomplète) :

- Tests **unitaires** : vérifient le bon fonctionnement des composants individuels du logiciel.  
    - Pour nos services et éventuellement nos contrôleurs.  
- Tests **fonctionnels** : vérifient la conformité du logiciel aux exigences fonctionnelles.  
    - Pour tester la fonctionnalité du jeu.  
- Tests **de performance** : vérifient la capacité du logiciel à supporter des charges ou des contraintes.  
    - Pour vérifier que l’on peut gérer un grand nombre de parties en même temps.  

## Responsabilités des **contrôleurs** vs responsabilités des **services**

### Un contrôleur, ça fait quoi ?

- La sécurité à travers les **[Authorize]**
- Obtient les **données de l’utilisateur qui a fait la requête**
- Modifie les paramètres reçus pour faire les appels de services (si nécessaire)
- Retourne les données
- Gère les exceptions et renvoie les erreurs

### Un service, ça fait quoi ?

- La validation des paramètres
- Les requêtes dans la BD
- La logique de l’application
- Vérification des droits d’accès aux données  
    - À ne pas confondre avec [Authorize]. Ici, on parle, par exemple, de vérifier qu’un usager n’efface pas les données d’un autre usager !
- Lance une exception lorsqu’il y a un problème

## Génération de tests

| ![image](/img/infos/TestsUnitaires/CreerDesTestsUnitaires.png) |
|-|

:::info
On peut utiliser cette fonctionnalité même s’il n’y a pas encore de projet de tests dans la solution !
:::

## Tests unitaires avec MSTest

- **[TestClass]** : permet d’identifier la classe comme une classe de test  
- Le **constructeur** est appelé une fois pour l’ensemble des tests de la classe  
- **[TestInitialize]** : marque une méthode pour qu’elle soit appelée **avant** chaque test  
- **[TestCleanup]** : marque une méthode pour qu’elle soit appelée **après** chaque test  
- **[TestMethod]** : marque une méthode pour indiquer que c’est un **test à exécuter**

```csharp
[TestClass]
public class ServiceTests
{
    // Étape 1
    public ServiceTests()
    {
        // Exécuté une fois pour l’ensemble des tests de la classe
    }

    // Étapes 2 et 5
    [TestInitialize]
    public void Init()
    {
        // Exécuté AVANT chaque test
    }
    
    // Étapes 4 et 7
    [TestCleanup]
    public void Dispose()
    {
        // Exécuté APRÈS chaque test
    }

    // Étape 3
    [TestMethod]
    public void Test1()
    {
        // Exécution du test avec des Asserts
    }
    
    // Étape 6
    [TestMethod]
    public void Test2()
    {
        // Exécution d’un autre test avec des Asserts
    }
}
```

:::info
Les **étapes** indiquées dans l’exemple montrent dans quel ordre les méthodes sont appelées.
:::

### Comment tester une exception ?

```csharp
Exception e = Assert.ThrowsException<SomeException>(() => service.DoSomething());
Assert.AreEqual("ExpectedMessage", e.Message);
```

Il y a plusieurs façons de tester qu’une méthode lance bien une exception. En utilisant celle-ci, on peut également **valider le message de l’exception**.

## Comment tester du code qui utilise une BD ?

- Pour faire nos tests facilement, nous utiliserons une BD de tests de type **InMemoryDatabase**  
- Il est **IMPORTANT** que la BD ait la **plus petite durée de vie possible** pour éviter des problèmes avec **Entity**  
- Il est **IMPORTANT** d’effacer les données dans notre BD de tests entre deux tests  
- Il est **IMPORTANT** que la BD utilise **UseLazyLoadingProxies(true)** si c’est également le cas dans notre projet !

Il faut ajouter une librairie (utiliser la même version que pour les librairies d’EntityFramework utilisées dans votre projet).

| ![image](InMemory.png) |
|-|

### Exemple de test avec InMemoryDatabase

```csharp
[TestClass]
public class CardsServiceTests
{
    // TODO Mettre seulement les optionms ici et non la BD en entier
    // La BD doit être crée et détruite pour chacun des tests, sinon il y aura des problèmes avec le tracking des éléments
    private DbContextOptions<ApplicationDbContext> _options;
    public CardsServiceTests()
    {
        // TODO On initialise les options de la BD, on utilise une InMemoryDatabase
        _options = new DbContextOptionsBuilder<ApplicationDbContext>()
            // TODO il faut installer la dépendance Microsoft.EntityFrameworkCore.InMemory
            .UseInMemoryDatabase(databaseName: "CardsService")
            .UseLazyLoadingProxies(true) // Active le lazy loading
            .Options;
    }
    [TestInitialize]
    public void Init()
    {
        // TODO avoir la durée de vie d'un context la plus petite possible
        using ApplicationDbContext db = new ApplicationDbContext(_options);
        // TODO on ajoute des données de tests
        Card[] cards = new Card[] {
          new Card
          {
              Id = 1,
              Name = "Chat Dragon",
              Attack = 5,
              Defense = 6,
              Cost = 5,
              ImageUrl = "https://i.pinimg.com/originals/a8/16/49/a81649bd4b0f032ce633161c5a076b87.jpg"
          }, new Card
          {
              Id = 2,
              Name = "Chat Awesome",
              Attack = 2,
              Defense = 4,
              Cost = 3,
              ImageUrl = "https://i0.wp.com/thediscerningcat.com/wp-content/uploads/2021/02/tabby-cat-wearing-sunglasses.jpg"
          }, new Card
          {
              Id = 3,
              Name = "Chatton Laser",
              Attack = 4,
              Defense = 2,
              Cost = 3,
              ImageUrl = "https://cdn.wallpapersafari.com/27/53/SZ8PO9.jpg"
          }
        };
        db.AddRange(cards);
        db.SaveChanges();
    }
    [TestCleanup]
    public void Dispose()
    {
        //TODO on efface les données de tests pour remettre la BD dans son état initial
        using ApplicationDbContext db = new ApplicationDbContext(_options);
        db.Cards.RemoveRange(db.Cards);
        db.SaveChanges();
    }
    [TestMethod]
    public void AddValidCard()
    {
        //TODO Test classique d'une méthode de service
        using ApplicationDbContext db = new ApplicationDbContext(_options);
        CardsService service = new CardsService(db);
        Card c = new Card()
        {
            Id = 4,
        };
        service.Add(c);
        Assert.AreEqual(4, db.Cards.Count());
    }
}
```

## La couverture de code

- L’objectif d’avoir une « couverture de code complète », c’est que chaque ligne de code de notre application soit exécutée par au moins un test.

### Outil intéressant
- Il y a un outil qui permet de voir la couverture de code directement dans Visual Studio.

| ![image](/img/infos/TestsUnitaires/CouvertureDeCode.png) |
|-|

Dans cet exemple :  
- Les lignes de code en **bleu** sont couvertes par au moins un test  
- Les lignes de code en **rouge** ne sont pas couvertes par un test  
- Pour avoir une couverture de tests complète, il faudrait :  
    - Faire un test avec un nombre de matches plus grand que 1  
    - Faire un test avec un nombre de matches égal à 1  

### Utilisation
- Pour démarrer la couverture de code, il faut sélectionner les tests qui nous intéressent  
- Ensuite, faire **Analyser la couverture du code**

:::warning
Il faut la version **Pro** pour exécuter la couverture du code. **Ça FONCTIONNE à l’école**, mais ça ne fonctionnera pas si vous avez une version **Express**.
:::

| ![image](/img/infos/TestsUnitaires/OutilCouverture1.png) |
|-|

### Activer ou désactiver la coloration du code
- Il suffit de cliquer sur un petit bouton dans les résultats de la couverture du code.

| ![image](/img/infos/TestsUnitaires/OutilCouverture2.png) |
|-|

### Une autre façon de faire le setup/Dispose
- Pour éviter d’avoir à écrire un Dispose complexe, on peut créer une BD différente pour chaque test en lui donnant un nom différent à chaque fois.  
- Voici donc une autre option pour votre code de Init et Dispose (pas besoin de constructeur dans ce cas) :

```csharp
[TestClass]
public class CardsServiceTests
{
    private ApplicationDbContext _db;
    
    [TestInitialize]
    public void Init()
    {
        // En utilisant un nom différent à chaque fois, on n'a pas besoin de retirer les données
        string dbName = "CardsService" + Guid.NewGuid().ToString();
        // TODO On initialise les options de la BD, on utilise une InMemoryDatabase
        DbContextOptions<ApplicationDbContext> options = new DbContextOptionsBuilder<ApplicationDbContext>()
            // TODO il faut installer la dépendance Microsoft.EntityFrameworkCore.InMemory
            .UseInMemoryDatabase(databaseName: dbName)
            .UseLazyLoadingProxies(true) // Active le lazy loading
            .Options;
        
        _db = new ApplicationDbContext(options);
        
        // TODO on ajoute des données de tests
        Card[] cards = new Card[] {
          new Card
          {
              Id = 1,
              Name = "Chat Dragon",
              Attack = 5,
              Defense = 6,
              Cost = 5,
              ImageUrl = "https://i.pinimg.com/originals/a8/16/49/a81649bd4b0f032ce633161c5a076b87.jpg"
          }, new Card
          {
              Id = 2,
              Name = "Chat Awesome",
              Attack = 2,
              Defense = 4,
              Cost = 3,
              ImageUrl = "https://i0.wp.com/thediscerningcat.com/wp-content/uploads/2021/02/tabby-cat-wearing-sunglasses.jpg"
          }, new Card
          {
              Id = 3,
              Name = "Chatton Laser",
              Attack = 4,
              Defense = 2,
              Cost = 3,
              ImageUrl = "https://cdn.wallpapersafari.com/27/53/SZ8PO9.jpg"
          }
        };
        _db.AddRange(cards);
        _db.SaveChanges();
    }
    [TestCleanup]
    public void Dispose()
    {
        _db.Dispose();
    }
    [TestMethod]
    public void AddValidCard()
    {
        //TODO Test classique d'une méthode de service
        CardsService service = new CardsService(_db);
        Card c = new Card()
        {
            Id = 4,
        };
        service.Add(c);
        Assert.AreEqual(4, _db.Cards.Count());
    }
}
```

## Quoi tester ?
- Nous testerons uniquement les **services** et les méthodes **HasPower** et **GetPowerValue** pour le Sprint 2 (**TP2**).  
- Plus tard, dans le **TP3**, nous apprendrons également à écrire des tests pour nos **contrôleurs**.
