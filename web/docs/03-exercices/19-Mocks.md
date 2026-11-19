# Mocks

## Étapes

Commencer par mettre en place le projet.

[Projet GitHub](https://github.com/CEM-420-5W5/Mock-Controller)

- Générer des tests unitaires pour ce projet
- Ajouter des tests à fin d'avoir une **couverture de code complète** (Voir la section sur le [couverture de code](/info/TestsUnitaires#la-couverture-de-code) )
- Vous allez devoir utiliser un Mock pour le service ET le contrôleur (Pour pouvoir mocker la propriété UserId du contrôleur)

```csharp
Mock<CatsService> serviceMock = new Mock<CatsService>();
// Notez l'utilisation de CallBase = true
// On veut un véritable objet CatsController et changer son comportement seulement pour la propriété UserId!
// L'option CallBase = true nous permet de garder le comportement normal des méthode de la classe. 
Mock<CatsController> controller = new Mock<CatsController>(serviceMock.Object) { CallBase = true };
```

- Dans chaque test, il faut vérifier que le classe de l'objet retourné est du bon type ET que la valeur retournée est la bonne (s'il y a une valeur)

Vous pouvez regarder ce projet pour des exemples de vérification de type de ActionResult ET de la valeur contenu dans le action Result (Comme dans return Ok(x), vérifier la valeur x)
[Projet GitHub action.result](https://github.com/CEM-420-5W5/action.result)

### Solution

Il y a une branche **solution** dans le projet
