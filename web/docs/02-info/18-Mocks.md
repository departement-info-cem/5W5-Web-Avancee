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

Prenons une interface pour obtenir de l’information de la bourse.

```csharp
public interface IStockMarket
{
    decimal GetStockValue(string stockTicker, DateTime date);

    int GetNbStocks(string stockTicker, DateTime date);
}
```

## L’OBJET Mocké

Au moment où l’on a créé le Mock

```csharp
var stock_Mock = new Mock<IStockMarket>();
var analyzer = new StonksAnalyzer(stock_Mock.Object);
```

L’objet ressemble à ceci:

```csharp
public class StockMarketMockedObject : IStockMarket
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

:::info
Il compte le nombre d’appels pour pouvoir répondre aux appels aux fonctions **Verify**
:::


## L’Objet Mocké avec Setup

Si on utilise la méthode Setup

```csharp
Setup(x => x.GetStockValue("ABC", It.IsAny<Date>()).Returns(42.42M);
Setup(x => x.GetStockValue("XYZ", It.IsAny<Date>()).Returns(33.33M);
```

L’objet ressemble à ceci:

```csharp
public class ConfiguredStockMarketMockedObject : IStockMarket
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

## L’Objet Mocké avec SetupSequence

Si on utilise la méthode SetupSequence (sur un AUTRE mock)

```csharp
stock_Mock.SetupSequence(x => x.GetStockValue(It.IsAny<string>(), It.IsAny<DateTime>()))
    .Returns(33.33M)
    .Returns(42.00M);
```

L’objet ressemble à ceci:

```csharp
public class SequenceStockMarketMockedObject : IStockMarket
{
    public int NbGetStockValueCalls { get; set; }
    public int NbGetNbStocksCalls { get; set; }
    public decimal GetStockValue(string stockTicker, DateTime date)
    {
        NbGetStockValueCalls++;
        if (NbGetStockValueCalls == 1)
            return 33.33M;
        if (NbGetStockValueCalls == 2)
            return 42.42M;
        return default;
    }
   //...
}
```

## Pour clarifier

:::warning
Pour clarifier, les différents objets qui ont été présentés sont uniquement des **représentations simplifiées** de ce que le mock fait lorsque l’on utilise les méthodes de Setup. Vous n’avez PAS à créer ces classes et la véritable implémentation est probablement plus complexe!
:::
