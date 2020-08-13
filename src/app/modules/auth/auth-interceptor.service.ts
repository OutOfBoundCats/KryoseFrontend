import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {AuthService} from '../../services/security/auth.service';
import {Store} from '@ngrx/store';
import * as ApppStore from '../../ReduxStore/app.reducer';
import {Observable} from 'rxjs';
import {exhaustMap, map, take} from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
  constructor(private authService: AuthService, private store: Store<ApppStore.AppState>) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select('authReduce').pipe(
      take(1),
      map(authState => {
        return authState.user;
      }),
      exhaustMap(user => {
        if (!user){
          return next.handle(req);
        }
        const modifiedReq = req.clone({
          params: new HttpParams().set('auth', user.token)
        });
      })
    );

  }
}
