# Guards

### Créer un nouveau projet
- Ajouter le routage
- Créer 3 components, ParentComponent, Enfant1Component et Enfant2Component
- Créer 1 service
- Créer un Guard

### Le service
- Le service aura simplement un boolean isLogged pour savoir si l'utilisateur est "connecté"
- Le boolean sera enregistré dans le localStorage et il sera rechargé à la création de l'application

### Routage
- app.component aura un \<router-outlet\>
- parent.component aura un autre \<router-outler\>
- enfant1.component et enfant2.component sera des routes enfants à parent.component

### Guard
- parent.component doit uniquement être affiché si l'utilisateur est connecté
- Pour tester le Guard, il faut rafraichir la page (donc il est important que la 'connexion' soit enregistrée dans le localstorage)

| ![image](/img/exercices/Guards/5W5-s3-ex1.jpg) |
|-|

### Solution
- 🔗[Solution Angular](https://github.com/CEM-420-5W5/ngRoutage)
