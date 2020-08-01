import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {VideoTextComponent} from './video-text.component';




@NgModule({
  declarations: [VideoTextComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: VideoTextComponent }])
  ]
})
export class VideoTextModule {}
