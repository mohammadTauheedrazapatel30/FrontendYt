import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  // @Input() decorator - used to share the data from parent Component to Child 
  @Input() userlogin = { userName: '', password: '' };

  constructor(private router: Router) { }

  ngOnInit(): void {}

  onLogin() {
    if ((this.userlogin.userName == "abc@gmail.com" && this.userlogin.password != '123@223')) {
      console.log("Login Successful !");
      alert("Login Successful !");
      this.router.navigate(["register"]);
    } else {
      alert("No User Found !");
    }
  }

}
