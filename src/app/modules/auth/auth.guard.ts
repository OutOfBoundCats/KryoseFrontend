import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as ApppStore from '../../ReduxStore/app.reducer';
import {map, take} from 'rxjs/operators';
import {User} from '../../Models/user.model';


@Injectable({providedIn: 'root'})
export class AuthGaurd implements CanActivate{
  constructor(private store: Store<ApppStore.AppState>, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean |
                                            UrlTree> |
                                            Promise<boolean | UrlTree> | boolean | UrlTree {
    // return this.store.select('authReduce').pipe(
    //   take(1),
    //   map(authState => {
    //     console.log(authState);
    //     return authState.user;
    //   }), map(user => {
    //     const isAuth = !!user;
    //     if (isAuth){
    //       return true;
    //     }
    //     return this.router.createUrlTree(['/auth/signin']);
    //   })
    // );

     const StoredUserData: {
      email: string,
      id: string,
      idtoken: string,
      refreshtoken: string,
      tokenExpirationDate: Date
    } = JSON.parse(localStorage.getItem('userData'));
     const myUser = new User(
      StoredUserData.email,
      StoredUserData.id,
      StoredUserData.idtoken,
      StoredUserData.refreshtoken,
      new Date(StoredUserData.tokenExpirationDate)
    );
     const CurrentTime = new Date().getTime();
     if (!StoredUserData){
      return this.router.createUrlTree(['/auth/signin']);
      //  return this.router.navigate(['/auth']);
    }else if ( myUser.token && CurrentTime < (new Date(StoredUserData.tokenExpirationDate).getTime() ) ){
      return true;
    }
  }



}
