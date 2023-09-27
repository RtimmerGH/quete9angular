import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import Kitten from '../models/kitten';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent implements OnInit, OnDestroy {
  @Output() addKitten: EventEmitter<Kitten> = new EventEmitter();
  
  kittenForm = this.fb.group({
    name: ['', Validators.required],
    race: ['', Validators.required],
    birthday: ['', Validators.required],
    picture: ['', Validators.required]
  });
  newKitten: Kitten = this.kittenForm.value as Kitten;
  kittenChange?: Subscription;
  constructor(private fb: FormBuilder) {}

  ngOnInit(){
    this.kittenChange = this.kittenForm.valueChanges
    .subscribe(value => {
      this.newKitten = value as Kitten;      
    });    
  }

  ngOnDestroy(){
    this.kittenChange?.unsubscribe();    
  }

  onSubmit() {
    this.addKitten.emit(this.newKitten);   
    console.log('form: ', this.kittenForm.value, 'new kitten:',this.newKitten);
  }

}
