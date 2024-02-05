# Guards

### Créer un nouveau projet
- Créer un nouveau projet Angular.
- Créer une page **parent**
- Créer 4 pages enfant:
    - /verreDEau qui affiche l'image d'un verre d'eau
    - /bonbon qui affiche une image de bonbons
    - /sel qui affiche une image de sel
    - /caramelAuSel qui affiche une image de caramel au beurre salé

- Compléter la page parent en ajoutant:
    - 2 checkbox
    - un lien (\<a\>) vers la page /caramelAuSel
    - un \<router-outlet\> pour les pages enfants

- Les 2 check boxes **sauvegarde leur état** dans le **localStorage** et ont les textes suivants :
    - « J’aime les choses sucrés ! »
    - « J’aime les choses salés ! »
:::info
Vous pouvez utiliser [(ngModel)] et (ngModelChange) pour gérer l'état des préférences de l'utilisateur (Si il aime le salé et/ou le sucré)
:::
- Ajouter un guard pour la page /caramelAuSel et rediriger vers :
    - /verreDEau si l’utilisateur n’aime ni le sucre, ni le sel
    - /bonbon si l’utilisateur n’aime pas le sel, mais aime le sucre
    - /sel si l’utilisateur aime le sel, mais pas le sucre

### Solution
- 🔗[Solution Angular](https://github.com/CEM-420-5W5/ngGuards)
