import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[minDate]',
  standalone: true,
  providers: [{provide: NG_VALIDATORS, useExisting: MinDateDirective, multi: true}]
})
export class MinDateDirective implements Validator {
  @Input() minDate!: string;

  constructor() { }

  validate(control: FormControl): ValidationErrors | null {
    if (this.minDate && control.value && this.minDate > control.value) {
      return { minDate: true }; // Error returned
    }

    return null; // No errors
  }

}
