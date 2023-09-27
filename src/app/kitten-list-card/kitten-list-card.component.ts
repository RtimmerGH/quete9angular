import { Component, EventEmitter, Input, Output } from '@angular/core';
import Kitten from '../models/kitten';

@Component({
  selector: 'app-kitten-list-card',
  templateUrl: './kitten-list-card.component.html',
  styleUrls: ['./kitten-list-card.component.css']
})
export class KittenListCardComponent {
  @Input() kitten?: Kitten;
  @Input() kittenIndex?: number;
  @Output() kittenToMove:EventEmitter<number> = new EventEmitter();  
  showInfo = false;

  moveToUserList(){
    this.kittenToMove.emit(this.kittenIndex);
  }

}
