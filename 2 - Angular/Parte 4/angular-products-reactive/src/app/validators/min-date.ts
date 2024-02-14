import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function minDateValidator(minDate: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (minDate && control.value && minDate > control.value) {
      return { minDate: true }; // Error returned
    }

    return null; // No errors
  };
}
