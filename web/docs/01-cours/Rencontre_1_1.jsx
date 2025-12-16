import SlideImage from '@site/src/components/SlideImage';

const Rencontre_1_1 = () => {
  return (
    <div class="slides">
      <section>
        <h1>5W5 Programmation Web Avancée</h1>
      </section>
      <section>
        <h3>Présentation du Prof</h3>
        <li>Études</li>
        <li>Expérience avec les cours 3W6, 4W6, 5W5 et le projet de fin d’étude</li>
        <li>Expériences de travail</li>
      </section>
      <section>
        <h3>Plan De cours (Résumé)</h3>
        <li>Communication « Full-Duplex » (Bidirectionnelle)</li>
        <li>Azure DevOps (Pratiquer ce que vous avez appris)</li>
        <li>Utilisation de Git/Github de façon collaborative</li>
        <li>Développement « Test Driven Development » (TDD)</li>
        <li>« Stubs » et « Mocks » pour les tests</li>
        <li>« Stubs » pour le développement</li>
        <li>Déploiement et configuration</li>
        <li>Nouvelles fonctionnalités Angular et .Net</li>
        <li>Mais SURTOUT travailler sur un plus gros projet!</li>
      </section>
      <section>
        <h3>Un grand projet en équipe</h3>
        <li>Faire un jeu de carte du même style que Hearthstone</li>
        <li>Doit utiliser les technologies web services (4W6) et MVC (3W6)</li>
        <li>Le thème est libre, mais doit rester de bon goût!</li>
        <ul>
        <li>Vous pouvez très bien garder le thème de chat déjà fourni!</li>
        <li>Gardez toujours le focus sur les fonctionnalités</li>
        </ul>
        <li>3 itérations!</li>
        <li>Plus de détails la semaine prochaine!</li>
      </section>
      <section>
        <h3>Aperçu de la première itération</h3>
        <SlideImage src="/img/slides/05-1.png" />
      </section>
      <section>
        <SlideImage src="/img/slides/06-1.png" />
      </section>
      <section>
        <SlideImage src="/img/slides/07-1.png" />
        <SlideImage src="/img/slides/07-2.png" />
      </section>
      <section>
        <h3>Présences</h3>
        <li>Ce cours se concentre sur le travail en équipe, la présence au cours est donc très importante</li>
        <li>Si un étudiant n’est pas assez présent pour contribuer au projet, il pourra être expulsé de son équipe et devra réaliser le travail par lui-même</li>
      </section>
      <section>
        <h3>Formation d’équipe</h3>
        <li>Vous allez devoir former des équipes de 4 la semaine prochaine et vous entendre sur un thème</li>
      </section>
      <section>
        <h3>Site web</h3>
        https://info.cegepmontpetit.ca/5W5-Web-Avancee/
        <SlideImage src="/img/slides/10-1.png" />
      </section>
      <section>
        <h3>Horaire</h3>
        <li>Groupe 1010:</li>
        <li>le cours du mardi commence à ?.</li>
        <li>le cours du jeudi commence à ?.</li>
        <li>Groupe 1020:</li>
        <li>le cours du mardi commence à ?.</li>
        <li>le cours du jeudi commence à ?.</li>
        <li>Groupe 1030:</li>
        <li>le cours du lundi commence à ?.</li>
        <li>le cours du mercredi commence à ?.</li>
      </section>
      <section>
        <h3>Plan de cours et présences</h3>
        <li>Plan de cours</li>
        <li>Présences</li>
      </section>
      <section>
        <h3>WebAPI et MVC</h3>
        <li>Une seule solution pour les contrôler tous!</li>
        <li>Et un projet pour les modèles, pour que ça ne soit pas trop le bordel…</li>
      </section>
      <section>
        <h3>Exercice de la journée</h3>
        <li>Exercice avec MVC et WebAPI</li>
        <li>C'est ce qui va servir de base aux TPs sur lesquels vous allez travailler </li>
      </section>
      
    </div>
  );
};

export default Rencontre_1_1; // Export the component