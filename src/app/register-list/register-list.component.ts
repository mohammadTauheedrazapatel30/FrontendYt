import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceapiService } from '../../serviceapi.service';

@Component({
  selector: 'app-register-list',
  templateUrl: './register-list.component.html',
  styleUrls: ['./register-list.component.css']
})
export class RegisterListComponent implements OnInit {
   
  // items array property of any
  items : any[] = [];

  constructor(private apiService : ServiceapiService) { }

  ngOnInit(): void{
    this.show();
  }

  show(){
    this.apiService.getData().subscribe(data => {
      console.log(data);
      this.items = data;
    });
  }

   

}
