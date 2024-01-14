import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(_value: string, gender: string): any {
    if (gender.toLowerCase() == 'male') {
      return "Mr." + _value;
    } else {
      return "Mrs. " +_value;
    }
  }

}
