import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  //recupere les donnees de saisies

  /* firstname: string = "";
   lastname:string ="";
  email:string=""
  password:undefined;
  passwor_confirm:any;

   names: string[] = ["daouda"];*/
  user: User = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    _id: '',
    password_confirm: ""

  }
  signupForm: FormGroup;
  firstname: FormControl;
  lastname: FormControl;
  email: FormControl;
  password: FormControl;
  password_confirm: FormControl
  constructor(private fb: FormBuilder) {
    this.firstname = fb.control("", [Validators.required, Validators.minLength(2)]);
    this.lastname = fb.control("", [Validators.required, Validators.minLength(2)])
    this.email = fb.control("", [Validators.email, Validators.required])
    this.password = fb.control("", [Validators.required, Validators.minLength(6)])
    this.password_confirm = fb.control("", [Validators.required, Validators.minLength(6)])

    this.signupForm = fb.group(
     {
      firstname:  this.firstname,
      lastname: this.lastname,
     email: this.email,
      password: this.password,
      password_confirm: this.password
     }
    )

  }

  ngOnInit(): void {
  }
  handleSubmit() {
    console.log(this.signupForm)
    //console.log("utilisateur lambda  : ", this.user)
  }




}

