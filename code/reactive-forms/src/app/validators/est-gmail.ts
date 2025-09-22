import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function estGmail(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const courriel = control.value;
    // On regarde si le champ est rempli avant de faire la validation
    if (!courriel) {
      // On attend que le champ soit rempli avant de le valider
      return null;
    }
    // On fait notre validation. Includes retourne un booléen.
    const estValide = courriel.includes('@gmail.com');

    // On retourne null si c'est valide, ou un objet décrivant l'erreur sinon
    return estValide ? null : { estGmail: true };
  };
}
