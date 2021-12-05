import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export class CustomValidator {

  static nameValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const regex = /\d/;
    if (regex.test(value)) {
      return { invalidName: true }
    }
    return null;
  }

  static dateValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value<new Date()) {
      return { pastDate: true }
    }
    return null;
  }

  static checkPassword(control: AbstractControl): ValidationErrors | null {
    if (control.get('password')?.value !== control.get('passwordConfirmation')?.value) {
      return { differentPassword: true }
    }
    return null;
  }




}
