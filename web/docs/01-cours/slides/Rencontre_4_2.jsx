import SlideImage from '@site/src/components/SlideImage';

const Rencontre_4_2 = () => {
  return (
    <div class="slides">
{/* ===== SLIDE 1 ===== */}
<section>
<h2>Cours 8</h2>
<p>5W5 Programmation Web Avancée</p>
</section>

{/* ===== SLIDE 2 ===== */}
<section>
<h2>Résumé</h2>
<ul>
  <li>Présentation sur les événements (Info)</li>
  <li>Explications à propos du service de Match</li>
  <li>Travail sur le TP1</li>
  <li>Évaluation individuelle du TP1</li>
</ul>
</section>

{/* ===== SLIDE 3 ===== */}
<section>
<h2>Les events</h2>
<ul>
  <li>Il faut ajouter des events dans le TP1</li>
  <li>Il y a des TODOs dans PlayerStartTurnEvent et StartMatchEvent</li>
</ul>
</section>

{/* ===== SLIDE 4 ===== */}
<section>
<h2>Service de match</h2>
<p>Il faut bien utiliser les 5 méthodes de MatchesService:</p>
<p>- JoinMatch</p>
<p>- StopJoiningMatch (Quand on se déconnecte)</p>
<p>Les méthodes suivantes retournent un événement sérialisé:</p>
<p>- StartMatch</p>
<p>- EndTurn</p>
<p>- Surrender</p>
</section>

{/* ===== SLIDE 5 ===== */}
<section>
<h2>Travail sur TP1</h2>
<p>- Prenez le temps de regarder ce qui existe déjà dans le projet de départ!</p>
<p>- N’hésitez pas à regarder la version d’exemple qui est fourni à la fin de l’énoncé du TP</p>
</section>

{/* ===== SLIDE 6 ===== */}
<section>
<h2>Travail sur TP1</h2>
<p>N’oubliez pas que vous avez chacun la responsabilité d’une tâche dans votre équipe, mais que ça reste un travail d’équipe.</p>
<p>Vous pouvez donc collaborer et vous entre aider.</p>
<p>Au moment de l’évaluation, la personne responsable d’une tâche va recevoir la note associée à cette tâche. Pour avoir ses points, elle doit également comprendre 100% du code et être à l’aise de répondre aux questions de l’enseignant.</p>
</section>

{/* ===== SLIDE 7 ===== */}
<section>
<h2>MatchHUB</h2>
<p>Il y a déjà un MatchHub vide dans le projet que vous pouvez utiliser.</p>
<p>ATTENTION: Pour l’instant, il faut mettre le [Authorize] en commentaire jusqu’à ce que l’authentification soit intégrée à votre projet.</p>
</section>

{/* ===== SLIDE 8 ===== */}
<section>
<h2>Évaluation individuelle du TP1</h2>
<p>L’évaluation arrive très vite et a lieu la semaine prochaine!</p>
<p>N’oubliez pas que pour l’évaluation individuelle, je m’attends à ce que chaque tâche soit encore dans sa propre branche.</p>
<p>Vous n’avez PAS à regrouper les différentes branches, on va faire ça la semaine suivante!</p>
</section>

</div>
);
};

export default Rencontre_4_2; // Export the component