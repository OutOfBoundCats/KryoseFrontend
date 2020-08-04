import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';

import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as fromApp from '../app/ReduxStore/app.reducer';
import {StoreModule} from '@ngrx/store';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';





@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        SignInComponent,
        SignUpComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        StoreModule.forRoot(fromApp.appReducer),
        BrowserAnimationsModule
    ],
    providers: [],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
