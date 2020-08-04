import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {AuthComponent} from './auth.component';
import {SignInComponent} from '../../components/sign-in/sign-in.component';
import {SignUpComponent} from '../../components/sign-up/sign-up.component';




@NgModule({
  declarations: [AuthComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AuthComponent }])
  ]
})
export class AuthModule {}
