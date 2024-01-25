# Polling

### Intérroger le serveur
- Le polling est une méthode simple d'interroger le serveur jusqu'à ce qu'on ait la réponse attendue

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
