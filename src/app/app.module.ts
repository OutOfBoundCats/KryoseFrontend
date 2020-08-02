import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as fromApp from '../app/ReduxStore/app.reducer';
import {StoreModule} from '@ngrx/store';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        StoreModule.forRoot(fromApp.appReducer),
        BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
