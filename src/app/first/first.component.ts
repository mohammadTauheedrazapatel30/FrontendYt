import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  // Create a variable with @Input() decorator to pass data from parent to Child !
  // A value gets passed from Parent Component i.e App to First Component and gets printed using this value
  @Input() item = '';

  constructor() { }

  ngOnInit(): void {
    // Things in here will get Load on the initialization of our angular Project
  }

}
