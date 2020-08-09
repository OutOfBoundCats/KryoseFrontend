import { Component, OnInit } from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as ApppStore from '../../ReduxStore/app.reducer';

import * as AuthActions from '../../modules/auth/store/auth.actions';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signINForm: FormGroup;
  constructor(private AngularFireAUth: AngularFireAuth, private router: Router, private store: Store<ApppStore.AppState>) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit(signINForm: NgForm) {
    const email = signINForm.value.inputEmail;
    const password = signINForm.value.inputPassword;
    console.log(email +' ' + password);
    this.store.dispatch(new AuthActions.SignIn({email, password}));
  }
}
