import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { estGmail } from './validators/est-gmail';
import { nomDansCourriel } from './validators/nom-dans-courriel';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [
    ReactiveFormsModule, // Pour lier le formulaire du code typescript à celui dans le html ↔️
    MatInputModule, // Pour intéragir avec les champs de texte ✍️
    MatButtonModule, // Pour avoir un beau bouton 👉🔘
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  formGroup: FormGroup;
  formData?: Data;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group(
      {
        courriel: ['', [Validators.required, Validators.email, estGmail()]],
        nom: ['', [Validators.required]],
      },
      { validators: nomDansCourriel() }
    );

    this.formGroup.valueChanges.subscribe((v) => (this.formData = v));
  }
}

interface Data {
  courriel?: string | null;
  nom?: string | null;
}
