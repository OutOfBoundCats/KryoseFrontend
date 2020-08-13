import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';

import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as fromApp from '../app/ReduxStore/app.reducer';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './modules/auth/store/auth.effects';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {AuthInterceptorService} from './modules/auth/auth-interceptor.service';



@NgModule({
    declarations: [
        AppComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule,
        AppRoutingModule,
        StoreModule.forRoot(fromApp.appReducer),
        BrowserAnimationsModule,
        StoreDevtoolsModule.instrument({ logOnly: environment.production }),
        EffectsModule.forRoot()
    ],
    providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
