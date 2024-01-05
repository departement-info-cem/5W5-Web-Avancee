## Reactive Forms
### Créer un nouveau projet
- Créer un nouveau projet Angular, les options ne sont pas importantes

## Création d'un premier formulaire
### Validation dynamique

- On peut afficher des messages d'erreurs directement sur les champs

![image](/img/exercices/reactiveForms/5W5-s2-f1.jpg)

CONFIGURATION
Reactive Forms
Ajouter les modules nécessaires à app.modules.ts

```ts title=app.modules.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [		
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

ReactiveFormsModule
Nous permet de faire de la validation dynamique sur les champs d'un formulaire
MatInputModule et Material
Nous permet d'afficher facilement les messages d'erreurs sous les champs du formulaire

:::warning

Il faut installer Material pour utiliser MatInput

:::

```powershell
ng add @angular/material
```

COMPONENT.TS
Reactive Forms
Injecter Formbuilder

```ts
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private fb: FormBuilder) { }
  //...
}
```

### Utiliser le FormBuilder
- Créer un groupe de validation à partir du FormBuilder
- Chaque champ du formulaire que l'on doit valider doit avoir un Validateur
```ts
form = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  name: ['',[Validators.required]],
});
```

### Les Validators
- Il existe plusieurs Validators par défaut
- Vous retrouverez les même Validations que l'on peut mettre sur un modèle en C#
- Utiliser les choix de réponses avec Validators. pour connaitre les options
![image](/img/exercices/reactiveForms/5W5-s2-f1.jpg)

### Créer un Validator
- On peut créer des "custom" validator et les affecter à un champ du groupe
```ts
form = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  name: ['',[Validators.required, this.myCustomValidator]],
});
```

Validator sur plusieurs champ
On peut également utiliser un Validator pour valider plus d'un champ en même (ex. Mot de passe et confirmation)

```ts
form = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  name: ['',[Validators.required]],
}, { validators: this.myCustomValidator });
```

myCustomValidator pour UN SEUL champs

```ts
myCustomValidator(control: AbstractControl): ValidationErrors | null {
  // On récupère la valeur du champs texte
  const email = control.value;
  // On regarde si le champs est remplis avant de faire la validation
  if (!email) {
    return null;
  }
  // On fait notre validation
  let formValid = email.includes('@gmail.com');
  // Si le formulaire est invalide on retourne l'erreur
  // Si le formulaire est valide on retourne null  
  return !formValid?{gmailValidator:true}:null;
}
```

myCustomValidator pour plusieurs champs
```ts
myCustomValidator(control: AbstractControl): ValidationErrors | null {
  // On récupère les valeurs de nos champs textes
  const email = control.get('email')?.value;
  const name = control.get('name')?.value;
  // On regarde si les champs sont remplis avant de faire la validation
  if (!email || !name) {
    return null;
  }
  // On fait notre validation
  let formValid = email.includes(name);
  // On mets les champs concernés en erreur
  if(!formValid) {
    control.get('email')?.setErrors({nameInEmail:true});
    control.get('name')?.setErrors({nameInEmail:true});
  } else {
    //S'il n'y a plus d'erreur, on les efface
    control.get('email')?.setErrors(null);
    control.get('name')?.setErrors(null);
  }
  // Si le formulaire est invalide on retourne l'erreur
  // Si le formulaire est valide on retourne null  
  return !formValid?{nameInEmail:true}:null;
}
```

### form.valueChanges
- Pour récupérer les données du formulaire, nous utiliserons un Observable sur l'évènement valueChanges
- Il faudra aussi avoir créer un classe (ou une interface) du même type que le formulaire
- Il faudra finalement créer une variable du type du formulaire

```ts
// interface qui décris le type du formulaire
interface Data { 
  email?: string | null ; 
  name?: string | null ; 
}
export class RegisterComponent implements OnInit{
  // Le component contient une variable du même type que les champs du formulaire
  formData?: Data;
  ngOnInit(): void {
    // À chaque fois que les valeurs changent, notre propriétés formData sera mise à jour
    this.form.valueChanges.subscribe(() => {
      this.formData = this.form.value;
    });
  }
  //...
}
```

Version finale
```ts
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email, , this.gmailValidator]],
    name: ['',[Validators.required]],
  }, { validators: this.myCustomValidator });
  // Le component contient une variable du même type que les champs du formulaire
  formData?: Data;
  constructor(private fb: FormBuilder) {  }
  ngOnInit(): void {
    // À chaque fois que les valeurs changent, notre propriétés formData sera mise à jour
    this.form.valueChanges.subscribe(() => {
      this.formData = this.form.value;
    });
  }
  gmailValidator(control: AbstractControl): ValidationErrors | null {
    // On récupère la valeur du champs texte
    const email = control.value;
    // On regarde si le champs est remplis avant de faire la validation
    if (!email) {
      return null;
    }
    // On fait notre validation
    let formValid = email.includes('@gmail.com');
    // On mets les champs concernés en erreur
    // Si le formulaire est invalide on retourne l'erreur
    // Si le formulaire est valide on retourne null  
    return !formValid?{gmailValidator:true}:null;
  }
  myCustomValidator(control: AbstractControl): ValidationErrors | null {
    // On récupère les valeurs de nos champs textes
    const email = control.get('email')?.value;
    const name = control.get('name')?.value;
    // On regarde si les champs sont remplis avant de faire la validation
    if (!email || !name) {
      return null;
    }
    // On fait notre validation
    let formValid = email.includes(name);
    // On mets les champs concernés en erreur
    if(!formValid) {
      control.get('email')?.setErrors({nameInEmail:true});
      control.get('name')?.setErrors({nameInEmail:true});
    } else {
      //S'il n'y a plus d'erreur, on les efface
      control.get('email')?.setErrors(null);
      control.get('name')?.setErrors(null);
    }
    // Si le formulaire est invalide on retourne l'erreur
    // Si le formulaire est valide on retourne null  
    return !formValid?{nameInEmail:true}:null;
  }
}
// interface qui décris le type du formulaire
interface Data { 
  email?: string | null ; 
  name?: string | null ; 
}
```

### COMPONENT.HMTL
- Ajouter le groupe de validation au formulaire hmtl
```html
<form [formGroup]="form">
  <!-- ... !-->
</form>
```

Ajouter les champs textes

```html
<mat-form-field style="width: 100%">
  <input matInput type="text" placeholder="Votre nom" formControlName="name" name="name">
  <mat-error *ngIf="form.get('name')?.hasError('required')">
    Votre nom est <strong>requis</strong>
  </mat-error>
  <mat-error *ngIf="form.hasError('nameInEmail')">
    Le nom doit être dans l'adresse courriel
  </mat-error>
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
 <mat-error *ngIf="form.hasError('nameInEmail')">
    Le nom doit être dans l'adresse courriel
  </mat-error>
```

Version finale
```html
<div style="width: 100%;height: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column">
  <mat-card class="artist-card" style="margin: 16px; padding: 16px;">
      
    <form [formGroup]="form">
      <mat-form-field style="width: 100%">
        <input matInput type="email" placeholder="Courriel" formControlName="email" name="email">
        <mat-error *ngIf="form.get('email')?.errors?.['email'] && !form.get('email')?.hasError('required')">
          Entrer une adresse courriel valide
        </mat-error>
        <mat-error *ngIf="form.get('email')?.hasError('required')">
          Le courriel est <strong>requis</strong>
        </mat-error>
      </mat-form-field>
      <mat-form-field style="width: 100%">
        <input matInput type="text" placeholder="Votre nom" formControlName="name" name="name">
        <mat-error *ngIf="form.get('name')?.hasError('required')">
          Votre nom est <strong>requis</strong>
        </mat-error>
        <mat-error *ngIf="form.hasError('nameInEmail')">
          Le nom doit être dans l'adresse courriel
        </mat-error>
      </mat-form-field>
      <button mat-raised-button color="primary" [disabled]="!form.valid">Enregistrer</button>
    </form>
  </mat-card>
</div>
```


## Création d'un 2e ReactiveForm 
### Ajout d'un ReactiveForm pour savoir si on aime les chats
- On va ajouter un autre formulaire dans la même page
    - Ajouter un champ texte et un input
        - Ce champ texte demande votre animal favoris
        - La réponse est requise
    - Ajouter un deuxième champ texte
        - Le champ texte demande si on aime mieux les chats que l'informatique
        - La réponse est requise
    - Ajouter une validation du formulaire
        - Le formulaire est seulement valide si l'utilisateur écris "chat" comme animal favoris **ET** qu'il répond "oui" à la 2e question
        - Il faut afficher **"Vous devez préférer le chat!"** si la réponse à la 1ere question n'est pas chat
        - Il faut afficher **"Vous devez répondre oui!"** si la réponse à la 2e question n'est pas oui
    - Ajouter un bouton pour pouvoir soumettre le formulaire
        - Le bouton est seulment actif si le formulaire est valide