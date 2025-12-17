import SlideImage from '@site/src/components/SlideImage';

const Rencontre_2_1 = () => {
  return (
    <div class="slides">
      {/* ===== SLIDE 1 ===== */}
      <section data-background-gradient="linear-gradient(to bottom, #141e30, #243b55)">
      <h2>Rencontre 2.1</h2>
      <p>5W5 Programmation Web Avancée</p>
      </section>

      {/* ===== SLIDE 2 ===== */}
      <section data-background-gradient="linear-gradient(to bottom, #141e30, #243b55)">
      <h3>Résumé</h3>
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
      <section data-background-gradient="linear-gradient(to bottom, #141e30, #243b55)">
      <h3>Démo de création de relations et Migrations</h3>
      <ul>
        <li>1 à N</li>
        <li>N à N</li>
        <li>N à N avec doublon</li>
        <li>1 à 1</li>
      </ul>
      </section>

      {/* ===== SLIDE 4 ===== */}
      <section data-background-gradient="linear-gradient(to bottom, #141e30, #243b55)">
      <h3>Relations N à N sans doublon</h3>
      <p className='petit-texte'>- Lorsque l’on a simplement une liste de A dans B et une liste de B dans A, EntityFramework va créer une table intermédiaire avec une clé primaire composite (avec les deux Ids).</p>
      <p className='petit-texte'>- Comme une clé primaire doit être unique, on ne peut donc pas avoir la même relation 2 fois!</p>
      <p className='petit-texte'>- C’est parfois souhaitable et parfois pas, ça dépend du problème que l’on veut résoudre!</p>
      </section>

      {/* ===== SLIDE 5 ===== */}
      <section data-background-gradient="linear-gradient(to bottom, #141e30, #243b55)">
      <h3>Relations N à N sans doublon (Le « bug »)</h3>
      <p className='petit-texte'>- Lorsqu’on n’a pas de support pour les doublons, le comportement d’EntityFramework est assez particulier. C’est bon de le comprendre pour éviter de se taper la tête sur les murs pendant des heures!</p>
      <p className='petit-texte'>- La liste n’a pas de vérification pour les doublons, alors lorsque l’on ajoute un doublon, le modèle ne va pas refuser l’information. Il n’y aura même pas d’erreur au moment de sauvegarder l’information dans la BD!</p>
      <p className='petit-texte'>- Par contre, quand vient le moment de récupérer l’information de la BD avec un Find, First, ToList, etc. Et bien le doublon va avoir disparu. On se retrouve donc avec une donnée « fantôme ».</p>
      </section>

      {/* ===== SLIDE 6 ===== */}
      <section data-background-gradient="linear-gradient(to bottom, #141e30, #243b55)">
      <h3>Fork</h3>
      <p>On peut créer un fork pour créer une copie d’un projet. On a alors notre propre repository, basé sur le repo original.</p>
      <SlideImage src="/img/slides/Rencontre_2_1/06-1.png" />
      </section>

      {/* ===== SLIDE 7 ===== */}
      <section data-background-gradient="linear-gradient(to bottom, #141e30, #243b55)">
      <h3>Fork</h3>
      <p>On a quelques options lorsque l’on va créer un fork.</p>
      <SlideImage src="/img/slides/Rencontre_2_1/07-1.png" />
      </section>

      {/* ===== SLIDE 8 ===== */}
      <section data-background-gradient="linear-gradient(to bottom, #141e30, #243b55)">
      <h3>Collaboration</h3>
      <p>- Une fois qu’on a notre repo « forké », on peut le maintenir à jour en intégrant les changements du repo original.</p>
      <p>- On peut également faire des demandes d’intégration de changement à partir de notre fork pour collaborer sur un projet open source.</p>
      </section>

      {/* ===== SLIDE 9 ===== */}
      <section data-background-gradient="linear-gradient(to bottom, #141e30, #243b55)">
      <h3>Présences</h3>
      <p>Présences</p>
      </section>

      {/* ===== SLIDE 10 ===== */}
      <section data-background-gradient="linear-gradient(to bottom, #141e30, #243b55)">
      <h3>Équipes</h3>
      <p>Formation des équipes de 3 ou 4 personnes</p>
      <p>Les équipes de 3 auront un peu plus de travail pour le TP1, mais ensuite il y aura une tâche optionnelle pour les TP 2 et 3.</p>
      </section>

      {/* ===== SLIDE 11 ===== */}
      <section data-background-gradient="linear-gradient(to bottom, #141e30, #243b55)">
      <h2>Création des comptes AZURE devops</h2>
      <p>Suivre l’information dans la section Info pour la création de votre compte Azure DevOps ainsi que la création d’un projet « MusiquePlus » avec tous les membres de l’équipe.</p>
      </section>

      {/* ===== SLIDE 12 ===== */}
      <section data-background-gradient="linear-gradient(to bottom, #141e30, #243b55)">
        <h3>DEVOPS USER ACCESS</h3>
        <p>StakeHolder vs Basic</p>
        <SlideImage src="/img/slides/Rencontre_2_1/12-2.png"  style={{maxHeight: "55%", float: "left"}} />
        <SlideImage src="/img/slides/Rencontre_2_1/12-1.png"  style={{maxHeight: "55%"}} />
      </section>
    </div>
);
};

export default Rencontre_2_1; // Export the component

