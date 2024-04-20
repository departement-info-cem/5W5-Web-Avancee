# Tester un contrôleur avec les mocks

## Tests unitaires

- On a déjà vu au Sprint 2 comment tester nos Services
- Maintenant, on complète nos test en testant nos contrôleurs
- Il sera particulièrement important de tester l’API, 
    - L’API aura beaucoup plus de trafic que l’app MVC
    - Il est plus probable qu’un méchant « hacker » armé d’outils tel que Postman tente de brisé l’API

## Tester un ActionResult

Se fier au projet exemple disponible sur GitHub
[Projet GitHub de tests de résultat de contrôleur](https://github.com/CEM-420-5W5/action.result)

## Les Mocks

- Objets simulés qui simulent le comportement de vrais objets
    - Les mocks sont habituellement utilisés pour faire des tests unitaires
    - Les mocks sont utilisés pour tester le comportement d’un autre objet
- “Mocké” c’est imiter l’objet réel et faire des opérations de façon contrôlée pour qu’on obtienne toujours le résultat attendu

## Les Mocks

Pourquoi utiliser les objets mock?
- Pour simuler des résultats non déterministes
    - L’heure, la température, etc.
- Pour simuler des objets avec des états difficiles à  reproduire
    - Erreur réseau
- Pour simuler des objets qui sont lents
    - Base de données
- Pour simuler des objets qui n’existent pas encore ou qui vont changer
- Parce qu’il y a des trucs qu’on ne veut pas avoir à tester
    - HttpContext
        - Qui inclus User
    - Les services lorsqu’on test un contrôleur

## Mock vs Stubs

### Stub 
- Un objet écrit avec un comportement prédéterminé
- Particulièrement utile lors du développement en parallèle d’un API et d’une (ou plusieurs) application qui l’utilise

### Mock
- Un objet que l’on configure avec nos attentes
- Un mock n’a pas de configuration prédéterminée, on doit avoir du code qui  le configure dans nos tests

### Déroulement d'un test
Stub : initialisation \-\> exécution \-\> vérification
Mock : initialisation \-\> configuration des attentes \-\> exécution \-\> vérification

## Moq se retrouve dans NuGet

|![alt text](/img/infos/Mocks/librairieMoq.png)|
|-|

## Moq - Création

- Créer un mock
```csharp
Mock<UsersService> usersServiceMock = new Mock<UsersService>();
```
- Nous aurons donc un faux service qu’on pourra configurer
- L’option Callbase permet de mocker seulement une partie une partie de l’objet et d’utiliser le code original pour tout le temps
```csharp
Mock<TripsController> tripsControllerMock = new Mock<TripsController>() { CallBase = true };
```
- Nous pourrons ainsi utiliser des mocks avec les services du contrôleur, mais appel les vrai actions de l’objet

## Moq - Configuration

- Pour que moq puisse « mocker » (simuler) une méthode ou une propriété, celle-ci doit absolument être virtual
- Moq fait des override sur nos méthodes et propriétés
- Pour configurer une méthode ou une propriété, on utilise .Setup
- Méthodes

```csharp
    mock.Setup(foo => foo.DoSomething("ping")).Returns(true);
```
- Propriétés

```csharp
mock.Setup(foo => foo.Name).Returns("bar");
```

Il est possible de configurer les paramètres que notre méthode reçoit

- It.IsAny
    - Exécute le return pour toutes les valeurs possibles
```csharp
mock.Setup(foo => foo.DoSomething(It.IsAny<string>())).Returns(true);
```

- It.Is
    - Permet de configurer une certaine plage de données
```csharp
mock.Setup(foo => foo.Add(It.Is<int>(i => i % 2 == 0))).Returns(true);
```

### Pour une fonction qui retourne void

Comme que le comportement par défaut est de rien faire lorsqu’un méthode de notre mock n’est pas configure, il n’est pas souvent nécessairement de configurer une méthode qui retourne void toutefois, c’est possible en utilisant .Verifiable
```csharp
tripsServiceMock.Setup(s => s.Delete(It.IsAny<int>())).Verifiable();
```

### La méthode Callback
Permet d’exécuter du code lorsque la méthode est appelée
Exemple, simuler une suppression
Le callback enlève un élément de la liste
```csharp
tripsServiceMock.Setup(s => s.Delete(It.IsAny<int>())).Callback((int id) =>
{
    allTrips.Remove(trip);
}).Verifiable();
```

### Utiliser le mock

La propriété .Object contient l’objet de référence qu’on peut utiliser comme l’objet normal
```csharp
tripsServiceMock.Object.Delete(1);
```
Appel la configuration qu’on a fait
```csharp
tripsControllerMock.Object.Delete()
```
Appel la vrai action Delete de notre contrôleur **SI** on avait utilisé l’option **Callbase** lors de la création


## Comment faire si une action contient le code suivant?
```csharp
User.FindFirstValue(ClaimTypes.NameIdentifier)
```

### Étape 1 
Faire une propriété pouvant être mockée dans notre contrôleur
```csharp
Public virtual string UserId { get { return User.FindFirstValue(ClaimTypes.NameIdentifier)!; } }
```

### Étape 2
Faire un mock dans nos tests du contrôleur utilisant le vrai code
```csharp
Mock<TripsController> tripsControllerMock = new Mock<TripsController>() { CallBase = true };
```

### Étape 3
Faire la configuration de la propriété UserId
```csharp
tripsControllerMock.Setup(t => t.UserId).Returns("2");
```

### Étape 4
Utiliser notre mock
```csharp
RedirectToRouteResult result = tripsControllerMock.Object.Delete(1)
```






