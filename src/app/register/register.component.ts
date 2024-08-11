import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   
  @Input() matDatepicker : any = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
