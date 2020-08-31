import {Component, NgZone, OnInit} from '@angular/core';
import {ICustomWindow, WindowRefService} from './window-ref.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  private _window: ICustomWindow;
  public rzp: any;

  public options: any = {
    key: 'rzp_test_x5uPZk5ocLtzVW', // add razorpay key here
    name: 'The Swag Coder',
    description: 'Shopping',
    amount: 10000, // razorpay takes amount in paisa
    prefill: {
      name: 'The Swag Coder',
      email: '', // add your email id
    },
    notes: {},
    theme: {
      color: '#3880FF'
    },
    handler: this.paymentHandler.bind(this),
    modal: {
      ondismiss: (() => {
        this.zone.run(() => {
          // add current page routing if payment fails
        });
      })
    }
  };

  constructor(
    private zone: NgZone,
    private winRef: WindowRefService
  ) {
    this._window = this.winRef.nativeWindow;
  }

  ngOnInit(): void {
  }

  initPay(): void {
    this.rzp = new this.winRef.nativeWindow['Razorpay'](this.options);
    this.rzp.open();
  }
  // tslint:disable-next-line:typedef
  paymentHandler(res: any) {
    this.zone.run(() => {
      // add API call here
    });
  }
}
