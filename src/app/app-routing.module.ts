import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {AuthModule} from './modules/auth/auth.module';
import {ProfileModule} from './modules/profile-page/profile.module';
import {LoggerModule} from './modules/logger/logger.module';
import {VideoTextModule} from './modules/video-text/video-text.module';
import { MatSliderModule } from '@angular/material/slider';


const appRoutes: Routes = [
  { path: '', redirectTo: '/auth/signin', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => AuthModule
  },
  {
    path: 'dashboard',
    loadChildren: () => ProfileModule
  }
  , {
    path: 'logger',
    loadChildren: () => LoggerModule
  },
  {
    path: 'videotext',
    loadChildren: () => VideoTextModule
  }

];

@NgModule({
  imports: [
    MatSliderModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
