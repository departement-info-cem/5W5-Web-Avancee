# Reactive Forms

### Créer un nouveau projet

- Créer un nouveau projet Angular

```powershell
ng new ngReactiveForms
```

- Les autres options ne sont pas importantes.

## Création d'un premier formulaire

### Validation dynamique

- On peut afficher des messages d'erreurs directement sur les champs

![image](/img/exercices/reactiveForms/5W5-s2-f1.jpg)

### Configuration

```ts title=app.component.ts
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTabsModule } from "@angular/material/tabs";

@Component({
  selector: "app-exercice",
  standalone: true,
  imports: [ReactiveFormsModule, MatTabsModule, CommonModule, MatError, MatFormField, MatCard, MatInput],
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
```

- **ReactiveFormsModule** permet la création de formulaires pilotés par le code (validation dynamique, écoute des changements, etc.)
- **MatError (via MatFormFieldModule)** permet d'afficher facilement les messages d'erreurs sous les champs.

:::warning
Il faut installer Material pour utiliser MatInput
:::

```powershell
ng add @angular/material
```

### Injecter FormBuilder

Il faut injecter `FormBuilder` dans le composant où l'on veut ajouter notre formulaire.

```ts
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  constructor(private fb: FormBuilder) {}
  //...
}
```

### Utiliser le FormBuilder

- Créer un groupe de validation à partir du `FormBuilder`.
- Chaque champ du formulaire peut avoir un ou plusieurs validateurs.

```ts
form = this.fb.group({
  email: ["", [Validators.required, Validators.email]],
  name: ["", [Validators.required]],
});
```

### Les Validators

- Il existe plusieurs Validators par défaut
- Vous retrouverez les mêmes Validations que l'on peut mettre sur un modèle en C#

![image](/img/exercices/reactiveForms/5W5-s2-f1.jpg)

### Créer un Validator (personnalisé)

On peut créer des "custom" validator et les affecter à un champ du groupe

```ts
form = this.fb.group({
  email: ["", [Validators.required, Validators.email]],
  name: ["", [Validators.required, this.myCustomValidator]],
});
```

### Exemple sur un contrôle

```ts
myCustomValidator(control: AbstractControl): ValidationErrors | null {
  // On récupère la valeur du champ texte
  const email = control.value;
  // On regarde si le champ est rempli avant de faire la validation
  if (!email) {
    return null;
  }
  // On fait notre validation
  const isValid = email.includes('@gmail.com');
  return isValid ? null : { gmailValidator: true };
}
```

### Validator sur plusieurs champs

On peut également utiliser un Validator custom sur le formulaire pour faire une validation sur plusieurs champs (ex. Mot de passe et confirmation)

```ts
form = this.fb.group(
  {
    email: ["", [Validators.required, Validators.email]],
    name: ["", [Validators.required]],
  },
  { validators: this.myCustomValidator }
);
```

### Exemple sur un formulaire

```ts
myCustomValidator(form: AbstractControl): ValidationErrors | null {
  // On récupère les valeurs de nos champs textes
  const email = form.get('email')?.value;
  const name = form.get('name')?.value;
  // On regarde si les champs sont remplis avant de faire la validation
  if (!email || !name) {
    return null;
  }
  // On fait notre validation
  const isValid = email.includes(name);
  return isValid ? null : { nameInEmail: true };
}
```

### form.valueChanges

- Pour récupérer les données du formulaire, nous utiliserons un Observable sur l'évènement valueChanges
- Il faudra aussi avoir créé une classe (ou une interface) du même type que le formulaire
- Il faudra finalement créer une variable du type du formulaire

```ts
// Interface qui décrit le type du formulaire
interface Data {
  email?: string | null;
  name?: string | null;
}
export class RegisterComponent implements OnInit {
  // Le component contient une variable du même type que les champs du formulaire
  formData?: Data;
  ngOnInit(): void {
    // À chaque fois que les valeurs changent, notre propriété formData sera mise à jour
    this.form.valueChanges.subscribe(() => {
      this.formData = this.form.value;
    });
  }
  //...
}
```

### setErrors

C'est également possible de mettre une erreur directement sur un control à l'intérieur d'une validation

```ts
if (error) {
  form.get("email")?.setErrors({ nameInEmail: true });
} else {
  form.get("email")?.setErrors(null);
}
```

:::danger
Prudence : `setErrors(null)` écrase toutes les erreurs existantes sur le contrôle.
:::

### Version complète

```ts
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  form: FormGroup;
  formData?: Data;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group(
      {
        email: [
          "",
          [Validators.required, Validators.email, this.gmailValidator],
        ],
        name: ["", [Validators.required]],
      },
      { validators: this.nameInEmailValidator }
    );

    this.form.valueChanges.subscribe((v) => (this.formData = v));
  }

  gmailValidator(control: AbstractControl): ValidationErrors | null {
    const email = control.value as string | null;
    if (!email) return null;
    return email.includes("@gmail.com") ? null : { gmailValidator: true };
  }

  nameInEmailValidator(form: AbstractControl): ValidationErrors | null {
    const email = form.get("email")?.value as string | null;
    const name = form.get("name")?.value as string | null;
    if (!email || !name) return null;
    return email.includes(name) ? null : { nameInEmail: true };
  }
}

interface Data {
  email?: string | null;
  name?: string | null;
}
```

### L'utilisation de ReactiveForms dans la vue

- Ajouter le groupe de validation au formulaire HTML

```html
<form [formGroup]="form">...</form>
```

- Ajouter les champs textes

```html
<mat-form-field style="width: 100%">
  <input
    matInput
    type="text"
    placeholder="Votre nom"
    formControlName="name"
    name="name"
  />
  @if(form.get('name')?.hasError('required')) {
  <mat-error> Votre nom est <strong>requis</strong> </mat-error>
  } @if(form.hasError('nameInEmail')) {
  <mat-error> Le nom doit être dans l'adresse courriel </mat-error>
  }
</mat-form-field>
```

### formControlName="name"

- On lie le champ texte au contrôle "name" dans le groupe du formulaire (groupe de validation)

### form.get('name')?.hasError('required')

- On vérifie s'il y a une erreur de type required sur le champ

### form.hasError('nameInEmail')

- On regarde s'il y a notre erreur "custom" sur l'ensemble du formulaire

### mat-error

- On affiche un message d'erreur sous le champ texte

```html
@if(form.hasError('nameInEmail')) {
<mat-error> Le nom doit être dans l'adresse courriel </mat-error>
}
```

Version finale

```html
<div
  style="width: 100%;height: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column"
>
  <mat-card class="artist-card" style="margin: 16px; padding: 16px;">
    <form [formGroup]="form">
      <mat-form-field style="width: 100%">
        <input
          matInput
          type="email"
          placeholder="Courriel"
          formControlName="email"
          name="email"
        />
        @if(form.get('email')?.hasError('email') &&
        !form.get('email')?.hasError('required')) {
        <mat-error> Entrez une adresse courriel valide </mat-error>
        } @if (form.get('email')?.hasError('gmailValidator') &&
        !form.get('email')?.hasError('email') &&
        !form.get('email')?.hasError('required')) {
        <mat-error>
          Le courriel doit venir de <strong>Google</strong>
        </mat-error>
        } @if (form.get('email')?.hasError('required')) {
        <mat-error> Le courriel est <strong>requis</strong> </mat-error>
        }
      </mat-form-field>
      <mat-form-field style="width: 100%">
        <input
          matInput
          type="text"
          placeholder="Votre nom"
          formControlName="name"
          name="name"
        />
        @if (form.get('name')?.hasError('required')) {
        <mat-error> Votre nom est <strong>requis</strong> </mat-error>
        } @if(form.hasError('nameInEmail')) {
        <mat-error> Le nom doit être dans l'adresse courriel </mat-error>
        }
      </mat-form-field>
      <button mat-raised-button color="primary" [disabled]="!form.valid">
        Enregistrer
      </button>
    </form>
  </mat-card>
</div>
```

:::danger
Un `<mat-error>` s'affiche uniquement s'il est sur un contrôle (ou formulaire) qui possède au moins une erreur. Sinon il ne sera pas rendu même si la condition `@if` est vraie.
:::

- 🔗[Solution](https://github.com/CEM-420-5W5/ngReactiveForms)
