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
  expirationTime: Date;
  uid: string;
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
        this.uid = AuthResult.user.uid;
        // add time in miliseconds
        this.expirationTime = new Date(new Date().getTime() + 3600000 );
        console.log(this.expirationTime);
      }
    ).then(
      () => {
        this.myUser = new User(email, this.uid, this.myIdToken, this.myRefreshToken, this.expirationTime);
        localStorage.setItem('userData', JSON.stringify(this.myUser));
        this.store.dispatch(new AuthActions.SignInSuccess(this.myUser));
      }
    ).catch(
      (error) => {
        this.store.dispatch(new AuthActions.SignInFail(error));
      }
    );
  }
  // tslint:disable-next-line:typedef
  autoLogin(){
    const StoredUserData:{
       email: string,
       id: string,
       idtoken: string,
       refreshtoken: string,
       tokenExpirationDate: Date
    } = JSON.parse(localStorage.getItem('userData'));
    if (!StoredUserData){
      return;
    }
    // create User from stored user data
    const myUser = new User(
      StoredUserData.email,
      StoredUserData.id,
      StoredUserData.idtoken,
      StoredUserData.refreshtoken,
      new Date(StoredUserData.tokenExpirationDate)
    );
    const CurrentTime = new Date().getTime();
    if (myUser.token && CurrentTime < (new Date(StoredUserData.tokenExpirationDate).getTime())  ){
      this.store.dispatch(new AuthActions.SignInSuccess(myUser));
    }else{
      // evoke logout action
      // this.store.dispatch(new AuthActions.)
    }

  }
}
