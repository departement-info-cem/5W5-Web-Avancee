# Reactive Forms

### Créer un nouveau projet

- Créer un nouveau projet Angular en utilisant le mode **--no-standalone**

```powershell
ng new --no-standalone ngReactiveForms
```

- Les autres options ne sont pas importantes.
  :::info
  Si vous avez déjà créé un projet pour suivre cet exemple [Info/ReactiveForms](/info/ReactiveForms), vous pouvez simplement ajouter un autre formulaire au même projet.
  Sinon, suivez les instructions pour la création du projet et la configuration.
  :::

### Ajout d'un ReactiveForm pour savoir si on aime les chats

- On va ajouter un formulaire

  - Ajouter un champ texte et un input
    - Ce champ texte demande votre animal favori
    - La réponse est requise
  - Ajouter un deuxième champ texte
    - Le champ texte demande si on aime mieux les chats que l'informatique
    - La réponse est requise
  - Ajouter une validation du formulaire
    - Le formulaire est seulement valide si l'utilisateur écrit "chat" comme animal favori **ET** qu'il répond "oui" à la 2e question
    - Il faut afficher **Vous devez préférer le chat!** si la réponse à la 1ere question n'est pas chat (Directement sur le premier input)
    - Il faut afficher **Vous devez répondre oui!** si la réponse à la 2e question n'est pas oui (Directement sur le deuxième input)
    - Il faut afficher **N'importe quoi!** avec le message d'erreur du formulaire dans les deux cas!
  - Ajouter un bouton pour pouvoir soumettre le formulaire
    - Le bouton est seulement actif si le formulaire est valide

- 🔗[Solution](https://github.com/CEM-420-5W5/ngReactiveForms)
