import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import * as authActions from './auth.actions';
import 'firebase/auth';
import 'firebase/firestore';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable()
export class AuthEffects{
  constructor(private AngularFireAUth: AngularFireAuth) {
  }

  @Effect()
  authLogin = this.actions$.pipe(
    ofType(authActions.LOGIN_START),
    switchMap((authData: authActions.LoginStart) => {
      return this.AngularFireAUth.signInWithEmailAndPassword(authData.payload.email, authData.payload.password);
      }

    )
  );
}
