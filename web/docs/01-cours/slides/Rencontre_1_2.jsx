import SlideImage from '@site/src/components/SlideImage';

const Rencontre_1_2 = () => {
  return (
    <div class="slides">
      
      {/* ===== SLIDE 1 ===== */}
      <section>
      <h2>Cours 2</h2>
      <p>5W5 Programmation Web Avancée</p>
      </section>

      {/* ===== SLIDE 2 ===== */}
      <section>
      <h2>Résumé</h2>
      <ul>
        <li>sessionStorage et localStorage</li>
        <li>Création de projet avec Git</li>
        <li>Fichier .gitignore</li>
        <li>Démonstration de débogage</li>
        <li>Exercice</li>
        <li>Présences</li>
      </ul>
      </section>

      {/* ===== SLIDE 3 ===== */}
      <section>
      <h2>Localstorage et sessionstorage</h2>
      <p>JavaScript (et donc Angular) possède 2 façons très semblables pour pour sauvegarder des données. Les deux utilisent les méthodes setItem et getItem.</p>
      <p>localStorage: permet de stocker les données indéfiniment et partagées entres les fenêtres pour un même site.</p>
      <p>sessionStorage: permet de stocker des données qui sont effacées lorsque l'on ferme la fenêtre et qui peuvent être différente d'une fenêtre à l'autre pour un même site.</p>
      </section>

      {/* ===== SLIDE 4 ===== */}
      <section>
      <h2>Bonnes pratiques GIT</h2>
      <ul>
        <li>C’est toujours préférable de travailler avec une gestion de source comme Git. Même lorsque vous travaillez seul!</li>
        <li>En faisant des commits fréquemment, on peut facilement retourner en arrière lorsqu’on fait une erreur!</li>
        <li>C’est d’ailleurs pourquoi avoir une branche de travail personnel est toujours préférable!</li>
        <li>Voir la page d’info sur le site</li>
      </ul>
      </section>

      {/* ===== SLIDE 5 ===== */}
      <section>
      <h2>.gitignore</h2>
      <ul>
        <li>Le fichier .gitignore permet d’éviter que certains fichiers se retrouvent sur Git/Github</li>
        <li>On veut éviter de voir tous les fichiers temporaires qui peuvent prendre énormément de place!</li>
        <li>On ne veut donc généralement pas les fichiers et répertoires qui commencent par « . », mais il y en a plusieurs autres!</li>
      </ul>
      </section>

      {/* ===== SLIDE 6 ===== */}
      <section>
      <h2>.gitignore</h2>
      <p>D’autres répertoires importants</p>
      <p>Angular:</p>
      <p>- /.angular (normal, il commence par un .)</p>
      <p>- /node_modules</p>
      <p>Visual Studio:</p>
      <p>- /bin</p>
      <p>- /obj</p>
      <p>Les fichiers .gitignore générés couvrent ces répertoires et bien plus encore!</p>
      </section>

      {/* ===== SLIDE 7 ===== */}
      <section>
      <h2>Débogage avec Angular</h2>
      <ul>
        <li>Démonstration en classe</li>
        <li>Me montrer que vous pouvez ajouter un breakpoint dans l’exercice d’aujourd’hui!</li>
      </ul>
      </section>

      {/* ===== SLIDE 8 ===== */}
      <section>
      <h2>Authentification par TOKEN</h2>
      <ul>
        <li>Un des avantages des cookies, c’est que le navigateur les gère très bien tout seul. Donc, moins de travail!</li>
        <li>Les cookies ne sont pas un bon choix pour l’authentification lorsque l’on utilise un API car les services sont fréquemment distribués sur de nombreux serveurs. On se retrouve alors avec un ThirdParty cookie qui cause de potentiel problème de sécurité. (On utilise alors les tokens, comme vous avez vu en 4W6)</li>
        <li>Pour plus de détails: https://developer.okta.com/blog/2022/02/08/cookies-vs-tokens</li>
      </ul>
      </section>

      {/* ===== SLIDE 9 ===== */}
      <section>
      <h2>Présences</h2>
      <p>- Présences</p>
      </section>

      {/* ===== SLIDE 10 ===== */}
      <section>
      <h2>exerciceS</h2>
      <ul>
        <li>On continue l'exercice du cours 1. Voir les étapes expliquées dans la section « Authentification par Token» pour vous guider.</li>
      </ul>
      </section>
    </div>
  );
};

export default Rencontre_1_2; // Export the component