## Reactive Forms
### Créer un nouveau projet
- Créer un nouveau projet Angular, les options ne sont pas importantes

## Création d'un 2e ReactiveForm 
### Ajout d'un ReactiveForm pour savoir si on aime les chats
- En vous basant sur les notes de cours sur les ReactiveForms:
    - Ajouter un champ texte et un input
        - Ce champ texte demande votre animal favoris
        - La réponse est requise
    - Ajouter un deuxième champ texte
        - Le champ texte demande si on aime mieux les chats que l'informatique
        - La réponse est requise
    - Ajouter une validation du formulaire
        - Le formulaire est seulement valide si l'utilisateur écris "chat" comme animal favoris **ET** qu'il répond "oui" à la 2e question
        - Il faut afficher **"Vous devez préférer le chat!"** si la réponse à la 1ere question n'est pas chat
        - Il faut afficher **"Vous devez répondre oui!"** si la réponse à la 2e question n'est pas oui
    - Ajouter un bouton pour pouvoir soumettre le formulaire
        - Le bouton est seulment actif si le formulaire est valide