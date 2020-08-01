import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {VideoTextComponent} from './video-text.component';
import {MatSliderModule} from '@angular/material/slider';




@NgModule({
  declarations: [VideoTextComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: VideoTextComponent}]),
    MatSliderModule
  ]
})
export class VideoTextModule {}
