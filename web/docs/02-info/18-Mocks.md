# Mocks

## Les Mocks

- Objets simulés qui simulent le comportement de vrais objets
    - Les mocks sont habituellement utilisés pour faire des tests unitaires
    - Les mocks sont utilisés pour tester le comportement d’un autre objet
- “Mocké” c’est imiter l’objet réel et faire des opérations de façon contrôlée pour qu’on obtienne toujours le résultat attendu

## Pourquoi?

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

## Comprendre les MOCKS

Un mock contient un objet que l’on programme en appelant des méthodes sur le mock.
Un objet mocké n’est PAS intelligent, il retourne uniquement ce que les méthodes Setup lui disent de retourner.
S'il n’y a pas de Setup pour une méthode, il retourne default.

## L’interface

Prenons une interface d'un service pour obtenir de l’information de la bourse.

```csharp
public interface IStockMarketService
{
    decimal GetStockValue(string stockTicker, DateTime date);

    int GetNbStocks(string stockTicker, DateTime date);
}
```

## Le service Mocké

Au moment où l’on a créé le Mock

```csharp
// Créer 
var stockMarketMock = new Mock<IStockMarketService>();

// Notre controlleur prend normalement une implémentation de l'interface du service.
// Dans le cas normal, ce sera une implémentation qui effectue le bon comportement.
// Dans le cas de nos tests, ce sera un service Mocké, qui émule le comportement d'une implémentation de service. 
var analyzerController = new StonksAnalyzerController(stockMarketMock.Object);
```

Le mock du service (qu'on ne voit pas) ressemblerait à ceci :

```csharp
public class StockMarketMocked : IStockMarketService
{
    public int NbGetStockValueCalls { get; set; }
    public int NbGetNbStocksCalls { get; set; }
    public decimal GetStockValue(string stockTicker, DateTime date)
    {
        NbGetStockValueCalls++;
        return default;
    }
    public int GetNbStocks(string stockTicker, DateTime date)
    {
        NbGetNbStocksCalls++;
        return default;
    }
}
```

## Le service Mocké avec Setup

Si on utilise la méthode Setup

```csharp
// En français : la méthode (string stockTicker, DateTime date) prend en paramètre "ABC" et n'importe quelle date, et retourne 42.42.
stockMarketMock.Setup(x => x.GetStockValue("ABC", It.IsAny<Date>()).Returns(42.42M);
// En français : la méthode (string stockTicker, DateTime date) prend en paramètre "XYZ" et n'importe quelle date, et retourne 33.33.
stockMarketMock.Setup(x => x.GetStockValue("XYZ", It.IsAny<Date>()).Returns(33.33M);
```

Le mock du service (qu'on ne voit pas) ressemblerait maintenant à ceci :

```csharp
public class ConfiguredStockMarketMockedObject : IStockMarketService
{
    public int NbGetStockValueCalls { get; set; }
    public decimal GetStockValue(string stockTicker, DateTime date)
    {
        NbGetStockValueCalls++;
        // Le deuxième appel à Setup
        if (stockTicker == "XYZ")
            return 33.33M;
        // Le premier appel à Setup
        if (stockTicker == "ABC")
            return 42.42M;
        return default;
    }
    //...
}
```

## Le service Mocké avec SetupSequence

Si on utilise la méthode SetupSequence (sur un AUTRE mock)

```csharp
stockMarketMock.SetupSequence(x => x.GetStockValue(It.IsAny<string>(), It.IsAny<DateTime>()))
    .Returns(33.33M)
    .Returns(42.00M);
```

Le mock du service (qu'on ne voit pas) ressemblerait maintenant à ceci:

```csharp
public class SequenceStockMarketMockedObject : IStockMarketService
{
    public int NbGetStockValueCalls { get; set; }
    public int NbGetNbStocksCalls { get; set; }
    public decimal GetStockValue(string stockTicker, DateTime date)
    {
        NbGetStockValueCalls++;
        // Au premier appel de la méthode, on retourne cette valeur.
        if (NbGetStockValueCalls == 1)
            return 33.33M;
        // Au deuxième appel de la méthode, on retourne cette valeur.
        if (NbGetStockValueCalls == 2)
            return 42.42M;
        return default;
    }
   //...
}
```

## Rappel

:::warning
Pour clarifier, les différents services qui ont été présentés sont uniquement des **représentations simplifiées** de ce que le mock fait lorsque l’on utilise les méthodes de Setup. Vous n’avez PAS à créer ces classes et la véritable implémentation est probablement plus complexe!
:::
