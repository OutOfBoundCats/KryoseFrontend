import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { ProfilePageComponent } from './modules/profile-page/profile-page.component';
import { AudioTextComponent } from './modules/audio-text/audio-text.component';
import { VideoTextComponent } from './modules/video-text/video-text.component';
import { TextAudioComponent } from './modules/text-audio/text-audio.component';
import { ScreenshotComponent } from './modules/screenshot/screenshot.component';
import { LoggerComponent } from './modules/logger/logger.component';
import { AuthComponent } from './modules/auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ProfilePageComponent,
    AudioTextComponent,
    VideoTextComponent,
    TextAudioComponent,
    ScreenshotComponent,
    LoggerComponent,
    AuthComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
      AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
