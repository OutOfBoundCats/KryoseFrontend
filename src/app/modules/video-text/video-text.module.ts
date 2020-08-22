import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {VideoTextComponent} from './video-text.component';
import {MatSliderModule} from '@angular/material/slider';
import {VideoEditorComponent} from '../../components/video-editor/video-editor.component';
import {SharedModule} from '../../components/shared/shared.module';
import {HttpClientModule} from '@angular/common/http';








@NgModule({
  declarations: [
    VideoTextComponent,
    VideoEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: VideoTextComponent}]),
    MatSliderModule,
    SharedModule,
    HttpClientModule,

  ]
})
export class VideoTextModule {}
