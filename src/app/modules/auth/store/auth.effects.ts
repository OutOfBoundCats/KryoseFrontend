import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import {switchMap, catchError, map, tap, take, mergeMap} from 'rxjs/operators';
import {from, of, pipe} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import * as authActions from './auth.actions';
import 'firebase/auth';
import 'firebase/firestore';

import {AngularFireAuth} from '@angular/fire/auth';
import {createEffects} from '@ngrx/effects/src/effects_module';
import {Store} from '@ngrx/store';
import * as ApppStore from '../../../ReduxStore/app.reducer';
import * as AuthActions from './auth.actions';
import {User} from '../../../Models/user.model';
import {AuthService} from '../../../services/security/auth.service';


@Injectable()
export class AuthEffects{

  errorMessage = null;
  constructor(private AngularFireAUth: AngularFireAuth, private actions$: Actions,
              private http: HttpClient,
              private router: Router,
              private store: Store<ApppStore.AppState>,
              private MyAuthService: AuthService) {
  }



  @Effect()
  signup = this.actions$.pipe(
    ofType(authActions.SIGNUP),
    switchMap( (authData: authActions.Signup) => {
      console.log('SignUp Effect');
      console.log(authData.payload.email);
      console.log(authData.payload.password);
      // use from to convert Promise to observable so we can use pipe to transform data
      return from(this.AngularFireAUth.createUserWithEmailAndPassword(authData.payload.email, authData.payload.password)).pipe(
        map(() => {
          return new AuthActions.SignupFail('Success account has been created.Please Sign In');
        } ),
        catchError(errorResp => {
           console.log(errorResp);
           return of(new AuthActions.SignupFail(errorResp));
        } )
      );
      }
    )
  );

  // @Effect()
  // signin = this.actions$.pipe(
  //   ofType(authActions.SIGNIN),
  //   switchMap( (authData: authActions.SignIn) => {
  //       let myIdToken: string;
  //       let myRefreshToken: string;
  //       console.log('SignIn Effect');
  //       console.log(authData.payload.email);
  //       console.log(authData.payload.password);
  //       // use from to convert Promise to observable so we can use pipe to transform data
  //       return from(this.AngularFireAUth.signInWithEmailAndPassword(authData.payload.email, authData.payload.password)).pipe(
  //         map((returnResult) => {
  //           // we get refresh token here
  //           console.log(returnResult.user.refreshToken);
  //           myRefreshToken = returnResult.user.refreshToken;
  //           // we get id token here
  //           returnResult.user.getIdToken().then(function(idToken) {
  //             console.log('is token is ' + idToken);
  //             myIdToken = idToken;
  //             console.log('Id token is ' + myIdToken);
  //             const myUser1 = new User(authData.payload.email, null, myIdToken, myRefreshToken, null);
  //             // return (new AuthActions.SignInSuccess(myUser1));
  //             // return new AuthActions.SignInSuccess(myUser1);
  //           });
  //           // return new AuthActions.SignInFail('Success');
  //           // console.log('Id token is ' + myIdToken);
  //           // const myUser = new User(authData.payload.email, null, myIdToken, myRefreshToken, null);
  //           // return new AuthActions.SignInSuccess(myUser);
  //         } ),
  //         catchError(errorResp => {
  //           console.log(errorResp);
  //           return of(new AuthActions.SignInFail(errorResp.message));
  //         } )
  //       );
  //     }
  //   )
  // );



}
