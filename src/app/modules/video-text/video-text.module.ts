import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {VideoTextComponent} from './video-text.component';
import {MatSliderModule} from '@angular/material/slider';
import {TexteditorComponent} from '../../components/texteditor/texteditor.component';
import {VideoEditorComponent} from '../../components/video-editor/video-editor.component';
import {ProfileModule} from '../profile-page/profile.module';







@NgModule({
  declarations: [
    VideoTextComponent,
    TexteditorComponent,
    VideoEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: VideoTextComponent}]),
    MatSliderModule,
    ProfileModule

  ]
})
export class VideoTextModule {}
