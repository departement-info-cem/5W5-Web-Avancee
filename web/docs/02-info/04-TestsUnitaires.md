# Tests Unitaires

## Les services

### Quoi tester?
- Nous testerons uniquement les services pour ce Sprint

### La logique
- Pour faire nos tests facilement, nous utiliserons une BD de tests
- Nous utiliserons l'options **InMemoryDatabase** pour cette BD
- Il est **IMPORTANT** que la BD est la plus petit durée de vie possible
```csharp
[TestClass]
public class CardsServiceTests
{
    // TODO Mettre seulement les optionms ici et non la BD en entier
    // La BD doit être crée et détruite pour chacun des tests, sinon il y aura des problèmes avec le tracking des éléments
    DbContextOptions<ApplicationDbContext> options;
    public CardsServiceTests()
    {
        // TODO On initialise les options de la BD, on utilise une InMemoryDatabase
        options = new DbContextOptionsBuilder<ApplicationDbContext>()
            // TODO il faut installer la dépendance Microsoft.EntityFrameworkCore.InMemory
            .UseInMemoryDatabase(databaseName: "CardsService")
            .Options;
    }
    [TestInitialize]
    public void Init()
    {
        // TODO avoir la durée de vie d'un context la plus petite possible
        using ApplicationDbContext db = new ApplicationDbContext(options);
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
        using ApplicationDbContext db = new ApplicationDbContext(options);
        db.Cards.RemoveRange(db.Cards);
        db.SaveChanges();
    }
    [TestMethod]
    public void AddValidCard()
    {
        //TODO Test classique d'une méthode de service
        using ApplicationDbContext db = new ApplicationDbContext(options);
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

### Outil intéressant
- La couverture de code permet de facilement visualiser ce qui est testé ou non dans votre code

| ![image](/img/infos/testUnitaires/5W5-s4-cc1.png) |
|-|

### Utilisation
- Pour démarrer la couverture de code, il faut sélectionner les tests qui nous intéresse
- Ensuite faire Analyser la couverture du code

| ![image](/img/infos/testUnitaires/5W5-s4-cc2.png) |
|-|

### Activiter ou désactiver la coloration du code
- Il suffit de cliquer sur un petit bouton dans les résultats de la couverture du code

| ![image](/img/infos/testUnitaires/5W5-s4-cc3.png) |
|-|
