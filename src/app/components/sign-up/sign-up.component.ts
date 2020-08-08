import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase/app';
import * as ApppStore from '../../ReduxStore/app.reducer';

// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import * as AuthActions from '../../modules/auth/store/auth.actions';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  private errorCode: String | number;

  constructor(private AngularFireAUth: AngularFireAuth, private router: Router, private store: Store<ApppStore.AppState>) { }


  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit(authForm: NgForm) {
    const email = authForm.value.inputEmail;
    const password = authForm.value.inputPassword;
    console.log('email is ' + email);
    console.log(password);
    // tslint:disable-next-line:only-arrow-functions typedef
    this.store.dispatch(new AuthActions.Signup({email : email, password : password}));
    // this.AngularFireAUth.createUserWithEmailAndPassword(email, password).then(function() {
    //   this.router.navigateByUrl('/signin');
    // });
  }
}
