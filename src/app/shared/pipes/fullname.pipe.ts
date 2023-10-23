import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/core/models/user-model';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(value: User, ...args: unknown[]): unknown {
    // return value.firstName + ' ' + value.lastName;
    return `${value.firstName} ${value.lastName}`;
  }

}
