import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ServiceapiService } from 'src/app/serviceapi.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // A formData Property for our forms 
  // Now we will bind this to our form using ngModel , it's done
  formData = {
    fname: "",
    lname: "",
    address: "",
    contact: "",
    email: "",
    password: "",
    city: "",
    state: "",
    zipcode: ""
  }

  constructor(private apiService: ServiceapiService) {
  }

  ngOnInit(): void {
  }

  // here i have created a method for saving the values so
  onRegister(form: any) {
    // as this condition got true therefore
    const formvalues = {
      firstname: this.formData.fname,
      lastname: this.formData.lname,
      address: this.formData.address,
      contact: this.formData.contact,
      email: this.formData.email,
      password: this.formData.password,
      city: this.formData.city,
      state: this.formData.state,
      zipcode: this.formData.zipcode
    }
    if (this.onValid()) {
      console.log("Form Submitted", this.formData);
      alert("Registered Successfully !");

      this.apiService.saveData(formvalues).subscribe((response : any) =>
      {
        console.log("Details added Successfully", formvalues);
      }),(error : Error) => {
        console.log("Error Coming !", error);
      }
    };
  }

  onValid() {
    return this.formData.fname && this.formData.lname && this.formData.address && this.formData.contact && this.formData.email && this.formData.password && this.formData.city && this.formData.state && this.formData.zipcode;
  }

}
