import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {ProfilePageComponent} from './profile-page.component';
import {SidebarComponent} from '../../components/shared/sidebar/sidebar.component';
import {NavbarComponent} from '../../components/shared/navbar/navbar.component';
import {AuthGaurd} from '../auth/auth.guard';





@NgModule({
  declarations: [
    ProfilePageComponent,
    SidebarComponent,
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    RouterModule.forChild([{path: '', component: ProfilePageComponent, canActivate: [AuthGaurd],}])
  ]
})
export class ProfileModule {}
