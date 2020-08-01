import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {AuthModule} from './modules/auth/auth.module';
import {ProfileModule} from './modules/profile-page/profile.module';
import {LoggerModule} from './modules/logger/logger.module';


const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
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

];

@NgModule({
  imports: [
    AuthModule,
    ProfileModule,
    LoggerModule,

    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
