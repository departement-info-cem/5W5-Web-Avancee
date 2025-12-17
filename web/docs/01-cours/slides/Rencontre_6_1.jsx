import SlideImage from '@site/src/components/SlideImage';

const Rencontre_6_1 = () => {
  return (
    <div class="slides">
{/* ===== SLIDE 1 ===== */}
<section data-background-gradient="linear-gradient(to bottom, #141e30, #243b55)">
<h2>Rencontre 6.1</h2>
<p>5W5 Programmation Web Avancée</p>
</section>

{/* ===== SLIDE 2 ===== */}
<section data-background-gradient="linear-gradient(to bottom, #141e30, #243b55)">
<h3>Résumé</h3>
<ul>
  <li>Évaluation de la tâche Individuelle Hub</li>
  <li>Comprendre la fonctionnalité Stash et Pop de GitKraken</li>
  <li>Update-database PLUS</li>
  <li>Comment merger efficacement et sans risque</li>
  <li>Pas de rebase</li>
  <li>Pas d’opération « force »</li>
  <li>Vers notre branche d’abord</li>
  <li>Si le Hub n’est pas encore fait, vous pouvez faire le merge des 3 autres parties avant</li>
  <li>Présentation des tâches d’équipe</li>
</ul>
</section>

{/* ===== SLIDE 3 ===== */}
<section data-background-gradient="linear-gradient(to bottom, #141e30, #243b55)">
<h3>Stash et pop</h3>
<ul>
  <li>Permet de mettre de côté des fichiers avec un stash et de les ramener avec un pop</li>
  <li>Généralement utilisé pour mettre nos changements courant de côté le temps de faire un pull et/ou un merge</li>
  <li>Possible de changer de branche</li>
</ul>
</section>

{/* ===== SLIDE 4 ===== */}
<section data-background-gradient="linear-gradient(to bottom, #141e30, #243b55)">
<h3>Update-database Voir les migrations</h3>
<p>On peut utiliser Get-Migration pour voir toutes les migrations dans l’ordre.</p>
<p>Version « dotnet » de la commande: dotnet ef migrations list</p>
<SlideImage src="/img/slides/Rencontre_6_1/04-1.png" />
</section>

{/* ===== SLIDE 5 ===== */}
<section data-background-gradient="linear-gradient(to bottom, #141e30, #243b55)">
<h3>Update-database PLUS</h3>
<p>C’est possible de spécifier un nom de migration à update-database pour retourner en arrière!</p>
<p>update-database nomMigration</p>
<p>Les fonctions Down des migrations qui ont été générées après celle que l’on a sélectionné sont exécutés, une après l’autre, pour retourner à cette migration.</p>
<p>Une fois que c’est fait, on peut utiliser remove-migration pour retirer une migration à la fois! (Jusqu’à ce que l’on atteigne la migration « nomMigration »)</p>
<p>Démo!</p>
</section>

{/* ===== SLIDE 6 ===== */}
<section data-background-gradient="linear-gradient(to bottom, #141e30, #243b55)">
<h3>Comment merger dans un gros projet</h3>
<p>Il existe plusieurs techniques, mais la plus simple et robuste c’est de ramener la branche vers laquelle on veut appliquer nos changements vers notre branche avant de faire le merge.</p>
<p>Donc si on veut merger A dans B:</p>
<p>- On commence par merger B dans A et régler les conflits et les problèmes dans NOTRE branche</p>
<p>- Ensuite on test</p>
<p>- Finalement on peut merger A vers B, sans conflit et sans risque</p>
</section>

{/* ===== SLIDE 7 ===== */}
<section data-background-gradient="linear-gradient(to bottom, #141e30, #243b55)">
<h3>Importance d'être "PrOPRE" dans Une branche</h3>
<p>Les branches dans un compagnie n'ont pas toute la même importance. En gros, voici l'ordre d'importante (les noms varient un peu d'une compagnie à l'autre).</p>
<p>Prod {'>'} Staging(test) {'>'} Dev {'>'} Feature {'>'} Branche personnelle</p>
<p>Pourquoi? C'est toujours une question de la quantité de gens qui sont impactées par un problème. Le "coût" pour régler un problème augmente également!</p>
<p>Pour cette raison, on merge toujours les changements vers l'endroit le moins important en premier!</p>
<p>Tout le monde se fou que vous ayez un conflit dans votre branche, mais pas dans la branche Prod!!!</p>
</section>

{/* ===== SLIDE 8 ===== */}
<section data-background-gradient="linear-gradient(to bottom, #141e30, #243b55)">
<h3>Les fonctionnalités à éviter</h3>
<p>Ces fonctionnalités ne doivent pas être utilisé sans comprendre exactement ce que l’on fait:</p>
<p>- Pas de Rebase</p>
<p>- Pas de « Force » quoi que ce soit</p>
<p>En respectant ces règles, on garde toujours un historique clair des changements qu’on a fait!</p>
</section>

{/* ===== SLIDE 9 ===== */}
<section data-background-gradient="linear-gradient(to bottom, #141e30, #243b55)">
<h3>Travail d’équipe</h3>
<p>Vous pouvez commencer à merger aujourd’hui, même si votre Hub n’est pas terminé/évalué.</p>
<p>Il y a une section dans le TP1 pour le travail nécessaire pour terminer le TP1 en équipe.</p>
<p>N’oubliez pas que vous pouvez toujours regarder le projet de référence si vous n’êtes pas certain de savoir comment l’application devrait fonctionner!</p>
</section>

</div>
);
};

export default Rencontre_6_1; // Export the component