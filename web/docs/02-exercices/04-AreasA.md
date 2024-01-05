#LES AREAS
### Qu'est-ce qu'un Area?
- Un Area c'est une section séparée de l'application asp.net (asp.net c'est le framework qui comprend MVC et Web API)
- Un Area a une url séparée du reste de l'application

![image](/img/exercices/areas/path.jpg)

- Ce sera particulièrement utile pour séparer la partie admin du reste de l'application


## Configuration d'un Area
### Créer la structure des dossiers
- Créer un répertoire Areas
- Créer un dossier de base pour la section dans le dossier Areas (ex. Admin)
- Dans le dossier de la section, créer les dossiers Controllers et Views

![image](/img/exercices/areas/CreationRepertoiresArea.png)


### Ajouter le layout de base
- Copier le fichier _ViewStart.cshtml du dossiers Views vers le dossier Views de votre Area
- Copier également le fichier _ViewImports.cshtml

![image](/img/exercices/areas/CopierViewStart.png)


### Modifier _VIewStart.cshtml
- Modifier le path du fichier de layout
```csharp
@{
    Layout = "/Views/Shared/_Layout.cshtml";
}
```

## CONFIGURATION DU ROUTAGE
### Modifier Program.cs

- Ajouter une configuration pour le routage à la fin du fichier, juste avant la configuration des routes par défaut
```csharp
app.MapControllerRoute(
    name: "Admin",
    pattern: "{area:exists}/{controller=Home}/{action=Index}/{id?}");
```

## Ajouter un contrôleur
### Générer un contrôleur
- On peut générer des contrôleurs dans l'area en ajoutant directement au dossier Controllers de l'area Admin
- On pourrait faire un ou l'autre, mais dans ce cas, faites un contrôleur **MVC**
- On va appeler le contrôleur **CatsController**

![image](/img/exercices/areas/CreationController.png)
![image](/img/exercices/areas/CreationControllerSuite.png)


### Voilà!
- Tout a été généré correctement dans l'area
![image](/img/exercices/areas/CreationControllerResultat.png)


- Ouvrir le contrôleur généré et remarqué l'annotation Area
```csharp
[Area("Admin")]
public class CatsController : Controller
{
    //...
}
```

## Contrôleur Web API 
### Ajouter un contrôleur directement dans le projet (pas sous un Area)
- On va maintenant ajouter un autre contrôleur, mais cettes fois-ci, choisissez un contrôleur Web API
- Ce n'est pas vraiment une très bonne idée dans un vrai projet, mais pour le bien de la démonstration, appelez votre 2e contrôleur **CatsController** aussi!
- Après avoir terminé, vous avez maintenant 2 contrôleurs avec le même nom.


