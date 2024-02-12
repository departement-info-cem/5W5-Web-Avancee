# Polling vs SignalR

## Objectifs
Faire deux implémentations d’une application pour gérer des tâches:
  - La première avec un Controller d’API et du polling
  - La seconde avec SignalR

Les deux versions vont utiliser 2 components différents en Angular et les deux implémentations vont exister en même temps sur le même serveur.

[Projet GitHub avec Client et Serveur](https://github.com/CEM-420-5W5/PollingEtSignalR)

## La version **polling**

### Complétez la partie Angular de **Polling**

- Il existe déjà un contrôleur d'API pour les tâches qui est fonctionnel **UselessTasksController.cs**
- Il faut faire les appels et mettres les données à jour du côté du client
  - Regardez les TODOs dans le fichier **polling.component.ts**
- Une fois que c'est possible d'ajouter les tâches et de les compléter, essayez d'ouvrir un autre navigateur et vérifier que les tâches ne sont **PAS** synchronisé entre les deux!
- Ajoutez ensuite du polling pour mettre à jour les tâches chaque seconde


## La version **SignalR**

### Configuration
- Modifier Program.cs, regardez les TODOs et [les infos sur SignalR](/info/SignalR#enregistrer-un-hub)

### Créer un Hub qui permet de supporter les actions suivantes :
#### Connexion
- Déclencher la fonction TaskList sur **le client qui a fait l’appel**

#### Ajouter une tâche
- Ajouter une nouvelle tâche dans la BD, puis déclencher la fonction TaskList sur **tous les clients**

#### Compléter une tâche
- Marquer une tâche comme complétée dans BD, puis déclencher la fonction TaskList sur **tous les clients**

#### Déconnexion
- S’enlever des utilisateurs actifs
- Mettre à jour le nombre d’utilisateurs en ligne qui regardent les tâches
- Déclencher la fonction UserCount sur les clients

### Angular
- Ajouter la possibilité d'ajouter et de compléter des tâches, mais avec SignalR
  - Voir les **TODOs** dans **signalr.component.ts**

## Ajout du nombre d'utilisateurs

Maintenant que les deux versions sont fonctionnels, on va ajouter une fonctionnalité à la version SignalR.

- Chaque fois qu'un client se connecte au Hub incrémenter le nombre de connection (Une simpleme variable int à ajouter)
- Déclencher également une méthode sur les clients pour mettre à jour le nombre de connexions (Il faut ajouter la méthode)
- Faire ensuite la même chose avec la déconnexion pour réduire le compte
- Sur le client, il faut ajouter un affichage pour le nombre d'utilisateurs et la méthode pour mettre à jour le nombre de connexions.
