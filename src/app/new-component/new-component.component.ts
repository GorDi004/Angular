import { Component } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent {
  date1 = '2023.05.04';
  date2 = '2023/05/04';
  expresion = '23 + 35 = ';
}
