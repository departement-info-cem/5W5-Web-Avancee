import SlideImage from '@site/src/components/SlideImage';

const Rencontre_2_1 = () => {
  return (
    <div class="slides">
      {/* ===== SLIDE 1 ===== */}
      <section>
      <h2>Cours 3</h2>
      <p>5W5 Programmation Web Avancée</p>
      </section>

      {/* ===== SLIDE 2 ===== */}
      <section>
      <h2>Résumé</h2>
      <ul>
        <li>Relations et migrations</li>
        <li>Relations N à N (avec et sans doublon)</li>
        <li>Fork (pour l’exercice)</li>
        <li>Présences</li>
        <li>Formation des équipes</li>
        <li>Création des comptes Azure Devops et d’un projet « MusiquePlus » pour chaque Équipe</li>
      </ul>
      </section>

      {/* ===== SLIDE 3 ===== */}
      <section>
      <h2>Démo de création de relations et Migrations</h2>
      <ul>
        <li>Démo des relations:</li>
        <li>1 à N</li>
        <li>N à N</li>
        <li>N à N avec doublon</li>
        <li>1 à 1</li>
      </ul>
      </section>

      {/* ===== SLIDE 4 ===== */}
      <section>
      <h2>Relations N à N sans doublon</h2>
      <p>- Lorsque l’on a simplement une liste de A dans B et une liste de B dans A, EntityFramework va créer une table intermédiaire avec une clé primaire composite (avec les deux Ids).</p>
      <p>- Comme une clé primaire doit être unique, on ne peut donc pas avoir la même relation 2 fois!</p>
      <p>- C’est parfois souhaitable et parfois pas, ça dépend du problème que l’on veut résoudre!</p>
      </section>

      {/* ===== SLIDE 5 ===== */}
      <section>
      <h2>Relations N à N sans doublon (Le « bug »)</h2>
      <p>- Lorsqu’on n’a pas de doublon, le comportement d’EntityFramework est assez particulier. C’est bon de le comprendre pour éviter de se taper la tête sur les murs pendant des heures!</p>
      <p>- La liste n’a pas de vérification pour les doublons, alors lorsque l’on ajoute un doublon, le modèle ne va pas refuser l’information. Il n’y aura même pas d’erreur au moment de sauvegarder l’information dans la BD!</p>
      <p>- Par contre, quand vient le moment de récupérer l’information de la BD avec un Find, First, ToList, etc. Et bien le doublon va avoir disparu. On se retrouve donc avec une donnée « fantôme ».</p>
      </section>

      {/* ===== SLIDE 6 ===== */}
      <section>
      <h2>Fork</h2>
      <p>On peut créer un fork pour créer une copie d’un projet. On a alors notre propre repository, basé sur le repo original.</p>
      <SlideImage src="/img/slides/Rencontre_2_1/06-1.png" />
      </section>

      {/* ===== SLIDE 7 ===== */}
      <section>
      <h2>Fork</h2>
      <p>On a quelques options lorsque l’on va créer un fork.</p>
      <SlideImage src="/img/slides/Rencontre_2_1/07-1.png" />
      </section>

      {/* ===== SLIDE 8 ===== */}
      <section>
      <h2>Collaboration</h2>
      <p>- Une fois qu’on a notre repo « forké », on peut le maintenir à jour en intégrant les changements du repo original.</p>
      <p>- On peut également faire des demandes d’intégration de changement à partir de notre fork pour collaborer sur un projet open source.</p>
      </section>

      {/* ===== SLIDE 9 ===== */}
      <section>
      <h2>Présences</h2>
      <p>Présences</p>
      </section>

      {/* ===== SLIDE 10 ===== */}
      <section>
      <h2>Équipes</h2>
      <p>Formation des équipes de 3 ou 4 personnes</p>
      <p>Les équipes de 3 auront un peu plus de travail pour le TP1, mais ensuite il y aura une tâche optionnelle pour les TP 2 et 3.</p>
      </section>

      {/* ===== SLIDE 11 ===== */}
      <section>
      <h2>Création des comptes AZURE devops</h2>
      <p>Suivre l’information dans la section Info pour la création de votre compte Azure DevOps ainsi que la création d’un projet « MusiquePlus » avec tous les membres de l’équipe.</p>
      </section>

      {/* ===== SLIDE 12 ===== */}
      <section>
        <SlideImage src="/img/slides/Rencontre_2_1/12-1.png" />
      <h2>DEVOPS USER ACCESS</h2>
      <p>StakeHolder                       vs       Basic</p>
      <SlideImage src="/img/slides/Rencontre_2_1/12-1.png" />
      </section>

    </div>
);
};

export default Rencontre_2_1; // Export the component

