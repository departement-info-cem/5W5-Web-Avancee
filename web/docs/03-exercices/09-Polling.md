# Polling vs SignalR

## Objectifs
Faire deux implémentations d’une application pour gérer des tâches:
  - La première avec un Controller d’API et du polling
  - La seconde avec SignalR

Les deux versions vont utiliser 2 components différents en Angular et les deux implémentations vont exister en même temps sur le même serveur.

## La version polling
### Configuration
- Modifier Program.cs, regardez les TODOs de « polling » (Pas besoin de faire ceux de « SignalR » pour l’instant)

### Complétez le contrôleur qui permet de gérer les tâches
- Modifier Program.cs, regardez les TODOs de « polling »
### Complétez l’application Angular de polling
- Faire un appel



## Les tâches
### Configuration
- Modifier Program.cs, regardez les TODOs

### Créer un Hub qui permet de supporter les actions suivantes :
### Connexion
- Recevoir le nombre d’utilisateurs en ligne qui regardent les tâches
  - Déclencher la fonction UserCount sur les clients
- Recevoir la liste des tâches à jour
  - Déclencher la fonction TaskList sur le client qui a fait l’appel

### Ajouter une tâche
- Ajouter une nouvelle tâche dans la BD
  - Déclencher la fonction TaskList sur les clients

### Compléter une tâche
- Marquer une tâche comme complétée dans BD
  - Déclencher la fonction TaskList sur les clients

### Déconnexion
- S’enlever des utilisateurs actifs
- Mettre à jour le nombre d’utilisateurs en ligne qui regardent les tâches
- Déclencher la fonction UserCount sur les clients

### Angular
- Voir les TODOs dans app.component.ts


:::danger
Comment on peut savoir si l'utilisateur est connecté ou non?
:::
