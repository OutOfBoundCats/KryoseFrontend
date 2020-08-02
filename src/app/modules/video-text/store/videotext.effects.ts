import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


import * as videoTextActions from './videotext.actions';



@Injectable()
// @ts-ignore
// tslint:disable-next-line:class-name
export class videotexesEffects {


  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router
  ) {}
  // @Effect()
// code below


}


