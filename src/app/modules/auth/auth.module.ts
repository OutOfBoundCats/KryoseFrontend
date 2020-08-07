import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {AuthComponent} from './auth.component';
import {SignInComponent} from '../../components/sign-in/sign-in.component';
import {SignUpComponent} from '../../components/sign-up/sign-up.component';

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../../../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';



@NgModule({
  declarations: [AuthComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AuthComponent,
    children: [
      {path: 'signin', component: SignInComponent},
      {path: 'signup', component: SignUpComponent}
      ]
    }]
    ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ]
})
export class AuthModule {}
