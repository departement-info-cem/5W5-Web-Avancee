---
title: 7.1 - Formatif Intra
hide_table_of_contents: true
---

## Pratique examen intra

- Il est **très fortement** recommandé de le faire **avant OU pendant** la période. Sinon, vous risquez de vous rendre compte trop tard que vous ne maitrisez pas la matière.
- Pour le réussir, il faut bien comprendre:
  - Évènements
  - SignalR/Hub
- L'intra vaut 20% de la note total. C'est la moitié de la la note théorique du cours qui a un double seuil!

[🔗Formatif A26](https://github.com/CEM-420-5W5/Intra_Formatif_A26)

## SignalR (ou comment on transforme des données et comment on reçoit le résultat!)

### Utilisation de fonction

```cs
int Double(int x){
  return 2 * x;
}

int resultat = Double(42);
```

### Utilisation d'un lambda pour modifier les données

```cs
// Un cas très particulier, mais il contient déjà un lambda
List<Card> cards = dbContext.Cards.Where((c) => c.Attack > 4).ToList();

// Dans ce cas, le lambda est exécuté normalement
List<Card> cards2 = cards2.Where((c) => c.Health > 4).ToList();
```

### Utilisation d'un appel Web

```ts
// On a ajouté un niveau de complexité dans notre "Appel de fonction", mais on peut maintenant obtenir des données à distance!
const response = await axios.get("http://localhost:5011/api/Account/PublicTest")
```

### Utiisation de SignalR

```cs
// Pour la première fois, on n'utilise pas un simple return pour renvoyer l'information!
// Pourquoi? Car grâce à l'objet Clients qui contient de l'information à propos de tout les clients qui se sont connectés au Hub,
// on peut maintenant envoyer l'information vers plusieurs destinations!
public async Task AddTask(string task)
{
    _context.UselessTasks.Add(new UselessTask() { Text = task });
    _context.SaveChanges();
    await Clients.All.SendAsync("TaskList", _context.UselessTasks.ToList());
}
```

```ts
let newHubConnection = new HubConnectionBuilder()
    .withUrl('http://localhost:5042/tasks')
    .build();

// On utilise un lambda pour avoir une function qui va traiter le data reçu par le serveur
newHubConnection.on('TaskList', (data) => {
  setTasks(data);
});

newHubConnection
  .start()
  .then(() => {//On fait des trucs})

// Ailleurs dans le code:

// On fait un invoke à la place d'un get ou d'un post ou pour remplacer un appel de fonction
hubConnection!.invoke('AddTask', taskname);
```

La question: Pourquoi on ne met pas simplement un await pour attendre le résultat de invoke? Pourquoi on doit utiliser le .on ?

## Events

### Comprendre la différence entre les deux cas suivants:

- Terminer son tour dans un jeu de carte et voir le résultat
- Faire une recette ou assembler un meuble et voir le résultat

Comment on peut modifier notre logique de applyEvents pour résoudre le 2e problème!?
