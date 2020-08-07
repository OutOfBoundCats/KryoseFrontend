import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(authForm: NgForm) {
    const email = authForm.value.inputEmail;
    const password = authForm.value.inputPassword;
    console.log('email is ' +email);
    console.log(password);
  }
}
