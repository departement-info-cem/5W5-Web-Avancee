import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function nomDansCourriel(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const courriel = control.get('courriel');
    const nom = control.get('nom');
    // On regarde si les champs sont remplis avant de faire la validation
    if (!courriel || !nom) {
      return null;
    }
    // On fait notre validation
    const estValide = courriel.value.includes(nom.value);

    if (!estValide) {
      // On ajoute l'erreur au champ courriel
      // On conserve les autres erreurs déjà présentes
      courriel.setErrors({ ...courriel.errors, nomDansCourriel: true });
    }
    return estValide ? null : { nomDansCourriel: true };
  };
}
