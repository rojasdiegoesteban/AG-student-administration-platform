import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formErrors'
})
export class FormErrorsPipe implements PipeTransform {

  transform(value: ValidationErrors | null | undefined, ...args: unknown[]): unknown {
    const errorMessage: string[] = [];

    if (!value) return '';

    if ('required' in value) {
      errorMessage.push('Este campo es requerido');
    }
    if ('email' in value) {
      errorMessage.push('Debe ser un mail valido');
    }
    return errorMessage.join('. ');
  }

}
