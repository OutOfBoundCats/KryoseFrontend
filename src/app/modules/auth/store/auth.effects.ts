import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import {switchMap, catchError, map, tap, take} from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import * as authActions from './auth.actions';
import 'firebase/auth';
import 'firebase/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {createEffects} from '@ngrx/effects/src/effects_module';

@Injectable()
export class AuthEffects{
  constructor(private AngularFireAUth: AngularFireAuth, private actions$: Actions,
              private http: HttpClient,
              private router: Router) {
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
    take(1),
    ofType(authActions.SIGNUP),
    tap( (authData: authActions.Signup) => {
      console.log('SignUp Effect');
      console.log(authData.payload.email);
      console.log(authData.payload.password);
      return this.AngularFireAUth.createUserWithEmailAndPassword(authData.payload.email, authData.payload.password);
      }

    )
  );

}
