import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summa'
})
export class SummaPipe implements PipeTransform {

  transform(value: string,): string {
    let parts = value.split(' + ');
    let result = parseInt(parts[0]) + parseInt(parts[1]);
    value = `${parts[0]} + ${parts[1]} ${result}`
    return value;
  }

}
