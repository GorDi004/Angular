import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(date: string): string {
    let regex1 = /(\d{2})(\d{2}).(\d{2}).(\d{2})/g;
    date = date.replace(regex1, '$4-$3-$1$2');
    return date;
  }

}
