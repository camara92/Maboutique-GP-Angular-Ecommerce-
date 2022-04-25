import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user: User = {
    email: "",
    password: "",
    _id: '',
    password_confirm: ''
  }
  signinForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(private fb: FormBuilder) {
    //crer un objet type form control
    this.email = fb.control("", [Validators.email, Validators.required])
    this.password = fb.control("", [Validators.required, Validators.minLength(6)])

    //save to the formgroup
    //Affichage du message error si conditon pas requise :
    //
    

    this.signinForm = fb.group({
      email: this.email,
      password: this.password
    })
  }

  ngOnInit(): void {
  }
  handleSubmit() {
console.log(this.signinForm)
  }
}
