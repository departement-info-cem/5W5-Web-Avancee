# Mocks

## Les Mocks

- Objets simulés qui simulent le comportement de vrais objets
  - Les mocks sont habituellement utilisés pour faire des tests unitaires
  - Les mocks sont utilisés pour tester le comportement d’un autre objet
- “Mocké” c’est imiter l’objet réel et faire des opérations de façon contrôlée pour qu’on obtienne toujours le résultat attendu

## Pourquoi?

- Pour simuler des résultats non déterministes
  - L’heure, la température, etc.
- Pour simuler des objets avec des états difficiles à reproduire
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

Prenons une interface d'un service pour obtenir de l’information de la bourse. Un fois implémentée, elle ferait des appels d'API à un service externe qui permet d'obtenir la valeur courante d'un titre à la bourse.

```csharp
public interface IStonkMarketService
{
    decimal GetStonkValue(Stonk stonk);

    int GetNbStonks(Stonk stonk);
}

public enum Stonk
{
    Nvda, // NVIDIA
    Opai, // Open AI
    Aapl, // Apple
    Amd, // AMD
}
```

et un controlleur qui utilise ce service :

```csharp
public class StonksAnalyzerController(IStonkMarketService stonkMarketService)
{
    public decimal GetPortfolioStonkValue(Stonk stonk)
    {
        return stonkMarketService.GetNbStonks(stonk) * stonkMarketService.GetStonkValue(stonk);
    }
}
```

## Le service Mocké

Au moment où l’on a créé le Mock

```csharp
// Créer
var stonkMarketMock = new Mock<IStonkMarketService>();

// Notre controlleur prend normalement une implémentation de l'interface du service.
// Dans le cas normal, ce sera une implémentation qui effectue le bon comportement.
// Dans le cas de nos tests, ce sera un service Mocké, qui émule le comportement d'une implémentation de service.
var analyzerController = new StonksAnalyzerController(stonkMarketMock.Object);

Console.WriteLine("Bienvenu dans votre portfolio. Voici vos actifs :");
Console.WriteLine("- NVIDIA   " + analyzerController.GetPortfolioStonkValue(Stonk.Nvda));
Console.WriteLine("- Open AI  " + analyzerController.GetPortfolioStonkValue(Stonk.Opai));
Console.WriteLine("- Apple    " + analyzerController.GetPortfolioStonkValue(Stonk.Aapl));
Console.WriteLine("- AMD      " + analyzerController.GetPortfolioStonkValue(Stonk.Amd));
```

Le mock du service (qu'on ne voit pas) ressemblerait à ceci :

```csharp
public class StonkMarketMocked : IStonkMarketService
{
    public int NbGetStonkValueCalls { get; set; }
    public int NbGetNbStonkCalls { get; set; }
    public decimal GetStonkValue(Stonk stonk)
    {
        NbGetStonkValueCalls++;
        return default;
    }
    public int GetNbStonk(Stonk stonk)
    {
        NbGetNbStonksCalls++;
        return default;
    }
}
```

## Le service Mocké avec Setup

Si on utilise la méthode Setup

```csharp
// En français : quand la méthode GetStonkValue(Stonk stonk) prend en paramètre Stonk.Aapl, elle retourne 42.42.
stonkMarketMock.Setup(x => x.GetStonkValue(Stonk.Aapl)).Returns(42.42M);
// En français : quand la méthode GetStonkValue(Stonk stonk) prend en paramètre Stonk.Opai, elle retourne 69.23.
stonkMarketMock.Setup(x => x.GetStonkValue(Stonk.Opai)).Returns(69.23M);
```

Le mock du service (qu'on ne voit pas) ressemblerait maintenant à ceci :

```csharp
public class ConfiguredStonkMarketMockedObject : IStonkMarketService
{
    public int NbGetStonkValueCalls { get; set; }
    public decimal GetStonkValue(Stonk stonk)
    {
        NbGetStonkValueCalls++;
        // Le deuxième appel à Setup
        if (stonk == Stonk.Opai)
            return 69.23M;
        // Le premier appel à Setup
        if (stonk == Stonk.Aapl)
            return 42.42M;
        return default;
    }
    //...
}
```

## Le service Mocké avec SetupSequence

Si on utilise la méthode SetupSequence (sur un AUTRE mock)

```csharp
// En français : quand la méthode GetNbStonks(Stonk stonk) est appelée avec n'importe quel paramềtre, elle retourne 3 une première fois, 10 au 2ième appel, puis la valeur par défaut (0) par la suite.
stonkMarketMock.SetupSequence(x => x.GetNbStonks(It.IsAny<Stonk>()))
    .Returns(3)
    .Returns(10);
```

Le mock du service (qu'on ne voit pas) ressemblerait maintenant à ceci:

```csharp
public class SequenceStonkMarketMockedObject : IStonkMarketService
{
    public int NbGetStonkValueCalls { get; set; }
    public int NbGetNbStonksCalls { get; set; }
    public decimal GetNbStonks(Stonk stonk)
    {
        NbGetNbStonksCalls++;
        // Au premier appel de la méthode, on retourne cette valeur.
        if (NbGetNbStonksCalls == 1)
            return 3;
        // Au deuxième appel de la méthode, on retourne cette valeur.
        if (NbGetNbStonksCalls == 2)
            return 10;
        return default;
    }
   //...
}
```

[Lien vers le projet de démonstration](https://github.com/CEM-420-5W5/Stonk)

## Rappel

:::warning
Pour clarifier, les différents services qui ont été présentés sont uniquement des **représentations simplifiées** de ce que le mock fait lorsque l’on utilise les méthodes de Setup. Vous n’avez PAS à créer ces classes et la véritable implémentation est probablement plus complexe!
:::
