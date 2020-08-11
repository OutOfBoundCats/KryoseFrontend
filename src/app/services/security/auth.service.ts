import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as ApppStore from '../../ReduxStore/app.reducer';
import {User} from '../../Models/user.model';
import * as AuthActions from '../../modules/auth/store/auth.actions';
import {from} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class AuthService {

  myIdToken: string;
  myRefreshToken: string;
  myUser: User;
  constructor(private AngularFireAUth: AngularFireAuth, private router: Router, private store: Store<ApppStore.AppState>) { }

  // tslint:disable-next-line:typedef
  SignIn(email: string , password: string): void{
    this.AngularFireAUth.signInWithEmailAndPassword(email, password).then(
      (AuthResult) => {
        this.myRefreshToken = AuthResult.user.refreshToken;
        AuthResult.user.getIdToken().then(
          (idToken) => {
            this.myIdToken = idToken;
          }
        );
      }
    ).then(
      () => {
        this.myUser = new User(email, null, this.myIdToken, this.myRefreshToken, null);
        this.store.dispatch(new AuthActions.SignInSuccess(this.myUser));
      }
    ).catch(
      (error) => {
        this.store.dispatch(new AuthActions.SignInFail(error));
      }
    );
  }
}
