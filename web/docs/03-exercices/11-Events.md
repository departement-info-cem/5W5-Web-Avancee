# Events

## Objectifs
Compléter l'implémentation d'une application de bonhomme pendu en utilisant des événements.

L'objectif ici c'est d'abord de devenir à l'aise avec la création d'événements qui contiennent des événements.

Il y aura ensuite de petites améliorations à apporter sur le client également.

[Projet GitHub avec Client et Serveur](https://github.com/CEM-420-5W5/BonhommePendu.git)

:::info
Dans ce jeu, tous les utilisateurs jouent ENSEMBLE pour découvrir le mot. Il y a donc UN seul mot qui se fait découvrir à la fois sur le serveur.
:::

:::warning
Il n'y a pas de base de données, alors si vous redémarrez le serveur pendant que vous devinez un mot, la "partie" est perdu.
:::

## État initial

- Le client se connecte déjà au Hub et écoute déjà la majorité des messages. Parcontre, le serveur ne fait rien du tout lorsqu'il reçoit une action pour voir si une lettre est dans le mot à deviner.

![alt text](/img/exercices/events/image-2.png)

## Complétez les tâches suivantes

:::info
**GuessEvent** est l'event de base où tout commence! C'est **là** que vous allez commencer à ajouter les autres événements!
:::

:::warning
Certains events ont besoin d'avoir des propriétés qui vont être lues par le client!
:::

### La première fonctionnalité à ajouter, c'est d'afficher les lettres essayées par les utilisateurs avec **GuessedLetterEvent**

Voicie le résultat voulu:

![alt text](/img/exercices/events/image-3.png)

C'est assez simplement, vous pouvez simplement créer un **GuessedLetterEvent** dans le constructeur de **GuessEvent**.

Il faut également mettre à jour **gameData.GuessedLetters**.

Si vous regardez le client, vous allez voir que pendant la gestion de l'événement **GuessedLetter**, on s'attend à avoir une propriété **letter** (Sur le serveur, commencez par une lettre majuscule pour la propriété)

### Afficher lorsqu'une lettre n'est pas dans le mot avec **WrongGuessEvent**

N'hésitez pas à commencer simplement, au début vous pouvez tester en créant un **WrongGuessEvent** peu importe que ce soit une bonne lettre ou pas!

![alt text](/img/exercices/events/image-4.png)

Ensuite, utilisez **HasSameLetterAtIndex** pour chercher la lettre et créer un **WrongGuessEvent** seulement si la lettre n'est pas présente!

:::danger
À partir de maintenant, c'est à vous de comprendre GameData et de le mettre à jour correctement dans vos évènements!
:::

:::info
Si vous voulez vérifier si vous mettez correctement GameData à jour, faites un refresh du client!
:::

### Remplacer les lettres avec **RevealLetterEvent**

Il faut créer un **RevealLetterEvent** pour chaque occurence de la lettre dans le mot.

![alt text](/img/exercices/events/image-5.png)

### Ajouter un **WinEvent**

Lorsqu'on trouve une lettre dans un mot, si le mot est complétement trouvé, on doit créer un WinEvent.

Il **FAUT** enregistrer **WinEvent** pour qu'il soit correctement sérialisé lorsqu'il est envoyé au client. Regardez la classe **GameEvent** et enregistrez le comme les autres!

Regardez maintenant sur le client, l'event "Win" n'est pas gérer. Il faut mettre la propriété won du GameData à jour.

![alt text](/img/exercices/events/image-8.png)

### Ajouter un **LoseEvent**

Lorsqu'on fait un erreur, on doit éventuellement perdre. Ajoutez un **LoseEvent**.

Regardez maintenant sur le client, l'event "Lose" n'est pas gérer non plus. Il faut mettre la propriété lost du GameData à jour.

Lorsqu'on perd, il faudrait afficher le mot qu'on cherchait dans le message d'erreur. Il existe déjà la variable **wronglyGuessedWord** dans **app.component.ts**

![alt text](/img/exercices/events/image-6.png)

### Dead eyes

Il existe une dernière étape au bonhomme pendu pour afficher les yeux rouges. Le mini défi c'est d'appeler hangman.showMore() une fois de plus après une défaite MAIS après un délai de quelques secondes.

![alt text](/img/exercices/events/image-7.png)

### Défi extra?

Si vous voulez un défi en plus, changez la langue pour le français! Mais faites attention, il faut comparer les lettres en ignorant les accents!

La deuxième réponse semble être une bonne solution à notre problème!
[StackOverflow](https://stackoverflow.com/questions/359827/ignoring-accented-letters-in-string-comparison)

Voilà!

## Solution

La solution est dans la branche **solution** du repo
