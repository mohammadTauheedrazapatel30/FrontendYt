import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  // Create a variable with @Input() decorator to pass data from parent to Child !
  // A value gets passed from Parent Component i.e App to First Component and gets printed using this value
  @Input() item = '';
  
  // This decorator is used to pass data from Child to Parent !
  @Output() event = new EventEmitter<string>();

  //to raise or call an event we will create a method in child class only
  // we will create a method in angular which will emit the data .
  addNewItem(value:string){
       // inside here we will create what our function will do
       this.event.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
    // Things in here will get Load on the initialization of our angular Project
  }

}
