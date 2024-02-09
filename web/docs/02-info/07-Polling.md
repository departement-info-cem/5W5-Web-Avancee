# Polling

### Intérroger le serveur
- Le polling est une méthode simple pour interroger le serveur jusqu'à ce qu'on ait la réponse attendue

### Exemple: Joindre une partie
- Lorsque l'on veut joindre une partie, il faut attendre un autre joueur
- Alors, on interroge le serveur à un intervalle régulier jusqu'à ce qu'on ait réussi à créer un match

### Le code pour le polling
- Il suffit de faire une méthode "récursive"
- Puis setTimeout, pour planifier un intervalle de temps pour la récursion

```ts
async polling() {
  console.log("======= Je polle ======");
  // Si on n'a pas arrêté l'attente
  if(this.retry) {
    result = await this.api.maRequeteHttp();
    // Si le résultat n'est pas celui attendu pour poursuivre
    if(result==null) {
      //On recommence dans 0.5 seconde
      setTimeout(() => {this.polling()}, 500);
    }
  }
}
```

### Inefficace

Le principal désavantage de cette technique, c'est qu'elle utilise mal les resources.

Dans un cas où il y a de nombreux clients qui attendent en même temps et que l'on veut faire des requêtes assez fréquemment pour avoir une bonne interactivité, on se retrouve rapidement avec un très grand nombre de requêtes au serveur.

Dans ce cas, la majorité des requêtes ne retournent aucune information pertinente, car rien n'a changé.
