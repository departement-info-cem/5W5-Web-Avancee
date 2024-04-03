# Mocks

## Comprendre les MOCKS

Un mock contient un objet que l’on programme en appelant des méthodes sur le mock.
Un objet mocké n’est PAS intelligent, il retourne uniquement ce que les méthodes Setup lui disent de retourner.
Si il n’y a pas de Setup pour une méthode, il retourne default.

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


## L’OBJET Mocké avec setup

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

## L’OBJET Mocké avec setupsequence

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

Pour clarifier, les différents objets qui ont été présenté dans les 3 dernières diapos sont uniquement des représentations simplifiées de ce que le mock fait lorsque l’on utilise les méthodes de Setup. Vous n’avez PAS à créer ces classes!

