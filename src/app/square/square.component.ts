import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  //@ts-ignore
 @Input() value: 'X' | 'O';
}
