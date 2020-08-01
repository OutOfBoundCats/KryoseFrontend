import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {ProfilePageComponent} from './profile-page.component';





@NgModule({
  declarations: [ProfilePageComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: ProfilePageComponent }])
  ]
})
export class ProfileModule {}
