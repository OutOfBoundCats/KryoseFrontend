import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Store} from '@ngrx/store';
import * as ApppStore from '../../ReduxStore/app.reducer';

@Injectable()
export class RazorpayService {

  constructor(private http: HttpClient, private store: Store<ApppStore.AppState>) { }

  // tslint:disable-next-line:typedef
  createSubscription(){
    const url = 'http://localhost:8090/payment/createSubscription';
    this.http.get(url).subscribe(
      subscriptionInfo => {
          console.log(subscriptionInfo);
      }
    );
  }

  // tslint:disable-next-line:typedef
  fetchSubscriptions(){
    const url = 'http://localhost:8090/payment/fetchallsubscriptions';
    this.http.get(url).subscribe(
      subscriptionInfo => {
        console.log('subscriptioninfo is as below');
        console.log(subscriptionInfo);
      }
    );
  }

}
