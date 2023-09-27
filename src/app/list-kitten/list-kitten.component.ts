import { Component } from '@angular/core';
import Kitten from '../models/kitten';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent {
  kittenList?:Kitten[];
  UserKittenList?:Kitten[];

  addNewKitten(event: Kitten){
    this.kittenList ? this.kittenList?.push(event) : this.kittenList = [event]; 
  }

  moveToUserList(event: number){    
    if (this.kittenList) {
      !this.UserKittenList ? this.UserKittenList = [this.kittenList.splice(event,1)[0]] : this.UserKittenList?.push(this.kittenList.splice(event,1)[0]);
    } 
  }
}
