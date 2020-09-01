import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {VideoTextComponent} from './video-text.component';
import {MatSliderModule} from '@angular/material/slider';
import {VideoEditorComponent} from '../../components/video-editor/video-editor.component';
import {SharedModule} from '../../components/shared/shared.module';
import {VideosComponent} from '../../components/videos/videos.component';
import { VideoTextHomeComponent } from './video-text-list/video-text-home.component';
import { VideoTextItemComponent } from './video-text-list/video-text-item/video-text-item.component';








@NgModule({
  declarations: [
    VideoTextComponent,
    VideoEditorComponent,
    VideosComponent,
    VideoTextHomeComponent,
    VideoTextItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: '', component: VideoTextHomeComponent},
      {path: 'id', component: VideoTextComponent}
      ]),
    MatSliderModule,
    SharedModule

  ]
})
export class VideoTextModule {}
