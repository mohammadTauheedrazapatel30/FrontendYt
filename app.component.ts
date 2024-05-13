import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  currentItem = 'Angular';

  items = ['alpha', 'beta', 'gamma', 'theta'];

  addNewItem(newItem:string){
     this.items.push(newItem);
  }  
}
