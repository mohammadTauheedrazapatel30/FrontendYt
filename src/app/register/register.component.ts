import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // A formData Property for our forms 
  // Now we will bind this to our form using ngModel , it's done
  formData = {
     fname : "",
     lname : "",
     email : "",
     password : "",
     city : "",
     state : "",
     zipcode : ""
  }
  
  constructor(){
   }

  ngOnInit(): void {
  }

  // here i have created a method for saving the values so
  onRegister() {
        // as this condition got true therefore
        if(this.onValid()){
            console.log("Form Submitted", this.formData);
            alert("Registered Successfully !");
        }    
  }

  onValid(){
    return this.formData.fname && this.formData.lname && this.formData.email && this.formData.password && this.formData.city && this.formData.state && this.formData.zipcode;
  }

}
