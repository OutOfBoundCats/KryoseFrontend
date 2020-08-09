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

@Injectable()
export class AuthEffects{

  errorMessage = null;
  constructor(private AngularFireAUth: AngularFireAuth, private actions$: Actions,
              private http: HttpClient,
              private router: Router,
              private store: Store<ApppStore.AppState>) {
  }

  // @Effect()
  // authLogin = this.actions$.pipe(
  //   ofType(authActions.LOGIN_START),
  //   switchMap((authData: authActions.LoginStart) => {
  //     return this.AngularFireAUth.signInWithEmailAndPassword(authData.payload.email, authData.payload.password);
  //     }
  //
  //   )
  // );

  @Effect()
  signup = this.actions$.pipe(
    ofType(authActions.SIGNUP),
    switchMap( (authData: authActions.Signup) => {
      console.log('SignUp Effect');
      console.log(authData.payload.email);
      console.log(authData.payload.password);
      // return  this.AngularFireAUth.createUserWithEmailAndPassword(authData.payload.email, authData.payload.password).then(value => {
      //   console.log('success');
      //   return of(new AuthActions.LoginFail('Success account has been created'));
      // }).catch((error) => {
      //   console.log(error);
      //   console.log(error.message.toString());
      //   this.errorMessage = error.message.toString();
      //   console.log('assigned value to variable  ' + this.errorMessage);
      //   alert(typeof error.message.toString());
      //   return of(new AuthActions.LoginFail(this.errorMessage));
      // } );
      return from(this.AngularFireAUth.createUserWithEmailAndPassword(authData.payload.email, authData.payload.password)).pipe(
        map(() => {
          return new AuthActions.LoginFail('Success account has been created');
        } ),
        catchError(errorResp => {
           console.log(errorResp);
           return of(new AuthActions.LoginFail(errorResp));
        } )
      );
      // if (this.errorMessage){
      //   console.log(this.errorMessage + 'this from if block');
      //   return of(new AuthActions.LoginFail(this.errorMessage));
      // }else if (this.errorMessage === null){
      //   console.log(this.errorMessage + 'this from else block');
      //   return of(new AuthActions.LoginFail('Success account has been created'));
      // }

      }

    )
  );



}
