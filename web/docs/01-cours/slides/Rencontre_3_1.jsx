import SlideImage from '@site/src/components/SlideImage';

const Rencontre_3_1 = () => {
  return (
    <div class="slides">
{/* ===== SLIDE 1 ===== */}
<section>
<h2>Cours 5</h2>
<p>5W5 Programmation Web Avancée</p>
</section>

{/* ===== SLIDE 2 ===== */}
<section>
<h2>Résumé</h2>
<ul>
  <li>Azure DevOps (Application GFaim)</li>
  <li>Présentation du TP1</li>
  <li>Démo</li>
  <li>Lecture de l’énoncé</li>
  <li>Projets de départ</li>
  <li>Stubs</li>
  <li>Système de création de partie</li>
  <li>Singleton pour WaitingUserService</li>
  <li>Fluent API</li>
  <li>Match de test Angular</li>
  <li>C’est un projet « guidé » pour permettre de couvrir certains concepts comme les stubs et le TDD</li>
  <li>Premières étapes</li>
</ul>
</section>

{/* ===== SLIDE 3 ===== */}
<section>
<h2>Fluent API</h2>
<ul>
  <li>Fluent API va être présenté avec plus de détails plus tard dans la session.</li>
  <li>En résumé, il permet de créer ou clarifier des relations entre des objets. C’est un outil qui complète l’utilisation des propriétés de navigation.</li>
</ul>
<SlideImage src="/img/slides/Rencontre_3_1/03-1.png" />
</section>

{/* ===== SLIDE 4 ===== */}
<section>
<h2>Dev OPS</h2>
<p>Avant toute chose, faites vos user stories et découpez-les en tâches.</p>
<p>Ça doit être fonctionnel et compréhensible pour une personne qui ne connait pas déjà les détails du projet!</p>
</section>

{/* ===== SLIDE 5 ===== */}
<section>
<h2>Diagramme de classes</h2>
<p>Il existe déjà un diagramme de classes qui est fourni.</p>
<p>Il faut ajouter les classes nécessaires pour la gestion des cartes de départs, des cartes des joueurs et de la configuration.</p>
</section>

{/* ===== SLIDE 6 ===== */}
<section>
<h2>DÉFI</h2>
<p>Le projet contient déjà pas mal de code. Un des défis c’est de réussir à le comprendre. Plus vous allez rapidement être à l’aise avec le fonctionnement du jeu, plus ce sera facile de faire vos tâches et de comprendre celles des autres.</p>
</section>

{/* ===== SLIDE 7 ===== */}
<section>
<h2>Matière à venir</h2>
<p>C’est normal si on n’a pas encore vu certaines matières nécessaires pour compléter le TP1. On va les voir dans les prochains cours!</p>
<p>- Reactive Forms et guards (prochain cours)</p>
<p>- SignalR/Hub (cours suivant)</p>
</section>
</div>
);
};

export default Rencontre_3_1; // Export the component