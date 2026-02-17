# Reactive Forms

## Objectifs

<Row>
  <Column vCenter>
    - Faire de la validation sur un ou plusieurs champs à la fois
    - Communiquer à l'utilisateur comment corriger les erreurs sur les champs
  </Column>
  <Column>
    ![image](_06-ReactiveForms/objectif.png)
  </Column>
</Row>

## Création d'un premier formulaire

### Validation dynamique

- On peut afficher des messages d'erreurs directement sur les champs

### Configuration

:::warning
Il faut installer Material pour utiliser `MatInput` et `MatFormFieldModule`
:::

```powershell
ng add @angular/material
```

Les librairies suivantes vont être utilisées dans le html. Elles doivent donc être importées.

<GHCode 
  repo="5W5-Web-Avancee" 
  filePath="code/reactive-forms/src/app/app.ts" 
  language="ts" 
  startLine="14" 
  endLine="24"
/>

### Injecter FormBuilder

Il faut injecter `FormBuilder` dans le composant où l'on veut ajouter notre formulaire.

<GHCode 
  repo="5W5-Web-Avancee" 
  filePath="code/reactive-forms/src/app/app.ts" 
  language="ts" 
  startLine="24"
  ignore="26-27,29-37,41-44"
/>

### Utiliser le FormBuilder

- Créer un groupe de validation à partir du `FormBuilder`.
- Chaque champ du formulaire peut avoir un ou plusieurs validateurs.

<GHCode 
  repo="5W5-Web-Avancee" 
  filePath="code/reactive-forms/src/app/app.ts" 
  language="ts" 
  startLine="28"
  endLine="38"
  ignore="31:61-31:73,34-34,36-37"
/>

### HTML

Nous allons ajouter deux champ texte qui seront liés aux éléments du formulaire que nous venons d'ajouter.

<GHCode 
  repo="5W5-Web-Avancee" 
  filePath="code/reactive-forms/src/app/app.html" 
  language="html"
  ignore="7-9,18-31,33-35"
/>

### CSS (pour faire jolie)

Si vous suivez en même temps, vous pouvez ajouter ce CSS pour que les champs soient bien alignés et centrés.

<GHCode 
  repo="5W5-Web-Avancee" 
  filePath="code/reactive-forms/src/app/app.css" 
  language="css" 
/>

## Les Validators

- Un Validator est une fonction qui s'exécute **à chaque frappe de clavier** pour s'assurer que la valeur dans le champ est valide.
- Il existe plusieurs Validators par défaut
- Vous retrouverez les mêmes Validations que l'on peut mettre sur un modèle en C#
- Vous trouverez une documentation exhaustive des Validators offerts par Angular [ici](https://angular.dev/api/forms/Validators)

Pour être capable de tester nos validations, il faut ajouter ces conditions dans notre code HTML

<GHCode
  repo="5W5-Web-Avancee"
  filePath="code/reactive-forms/src/app/app.html"
  language="html"
  ignore="22-27:6,29:6-31,33-35"
/>

Jouez avec les champs textes. Des erreurs devraient apparaître.

## Créer un Validator (personnalisé)

- Parfois nos besoins de validation dépassent l'offre d'Angular
- On peut créer des Validator personnalisés et les affecter à un champ du groupe

On veut valider que le courriel entré par l'utilisateur utilise gmail.

- Créer un fichier nommé `est-gmail.ts`
- Dans le fichier, ajouter le contenu suivant
- Prenez le temps de bien lire les commentaires

<GHCode
  repo="5W5-Web-Avancee" 
  filePath="code/reactive-forms/src/app/validators/est-gmail.ts" 
  language="ts"
  startLine="3"
/>

On peut finalement ajouter la validation sur le formulaire

<GHCode
  repo="5W5-Web-Avancee"
  filePath="code/reactive-forms/src/app/app.ts"
  language="ts"
  startLine="29"
  endLine="35"
  ignore="34-34"
/>

Et ajouter les erreurs dans le HTML

<GHCode
  repo="5W5-Web-Avancee"
  filePath="code/reactive-forms/src/app/app.html"
  language="html"
  ignore="  29:6-31,33-35"
/>

## Validator sur plusieurs champs

- On peut également utiliser un Validator personnalisé sur le formulaire pour faire une validation sur plusieurs champs
- Le cas le plus fréquent est de valider qu'un mot de passe et sa confirmation sont identiques
- Créer un fichier nommé `nom-dans-courriel.ts`
- Dans le fichier, ajouter le contenu suivant
- Prenenz le temps de bien lire les commentaires

<GHCode
  repo="5W5-Web-Avancee"
  filePath="code/reactive-forms/src/app/validators/nom-dans-courriel.ts"
  language="ts"
  startLine="3"
/>

On Peut ajouter le validateur au groupe de champs

<GHCode
  repo="5W5-Web-Avancee"
  filePath="code/reactive-forms/src/app/app.ts"
  language="ts"
  startLine="28"
  endLine="38"
  ignore="36-37"
/>

Et ajouter les erreurs dans le HTML

<GHCode
  repo="5W5-Web-Avancee"
  filePath="code/reactive-forms/src/app/app.html"
  language="html"
  startLine="11"
  endLine="32"
/>

## Bouton

- C'est possible de lier la validité d'un bouton au formulaire
- Par exemple, si certains champs du formulaire sont invalides, ce ne sera pas possible de cliquer sur le bouton
- À ajouter dans le formulaire, sous les autres champs.

<GHCode
  repo="5W5-Web-Avancee"
  filePath="code/reactive-forms/src/app/app.html"
  language="html"
  startLine="33"
  endLine="35"
/>

## Accéder aux valeurs dans le groupe

Pratique pour se préparer à envoyer une requête HTTP!

```ts
this.formGroup.get("nom")?.value;
```

## S'abonner aux changements sur le formulaire

- Être notifié des changements dans le formulaire, nous utiliserons un Observable sur l'évènement valueChanges
- Il faudra aussi avoir créé une classe (ou une interface) du même type que le formulaire
- Il faudra finalement créer une variable du type du formulaire

<GHCode
  repo="5W5-Web-Avancee"
  filePath="code/reactive-forms/src/app/app.ts"
  language="ts"
  startLine="24"
/>

## Version complète

Référez vous à [ce projet](https://github.com/departement-info-cem/5W5-Web-Avancee/tree/main/code/reactive-forms) pour voir la version complète du code.
