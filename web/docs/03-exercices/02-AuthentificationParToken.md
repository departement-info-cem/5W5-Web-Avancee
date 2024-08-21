# Authentification par token

## Objectif

Mettre en place une solution .Net qui contient 3 projets, donc 1 MVC et un Web API.

Créer un projet angular qui permet de se connecter à l'API Web en utilisant une authentification par token.






Partie 1:

Ajouter le code pour s'authentifier avec Swagger
Tester la méthode Private


## La partie Angular








Partie 2:

- Ajouter un client Angular
- Ajouter 2 méthodes, une public et l'autre private
- Ajouter un bouton pour tester les fonctions
- Vérifier que la public fonctionne et l'autre pas

- CORS?

- Ajouter un bouton pour s'enregistrer
- Ajouter un bouton pour se connecter
    - Utiliser le localStorage pour le token
- Tester la fonction privée
- Faire le logout et affiche si on est connecté ou pas (les boutons register et login ou le bouton logout)
- Ajouter un interceptor (être certain de retirer le bout de code de token de l'appel Angular)
    - Tester


- Ajout d'un Admin pour le projet MVC (le seul utilisateur qui va être utilisé dans notre cas)


Partie Angular:
<!--
Créer avec --no-standalone

Ajouter Material
ng add @angular/material

Ajouter Modules
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

Ajouter le service (Fournir le code sans gestion du token)

Modifier l'app et son template

Ajouter le code pour la gestion du token

Faire ajouter les CORS

A FAIRE: Image de la création de projet Angular
![alt text](image-3.png)


![image](/img/exercices/areas/path.jpg)
-->
