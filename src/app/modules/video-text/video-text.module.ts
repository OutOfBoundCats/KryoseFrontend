import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {VideoTextComponent} from './video-text.component';
import {MatSliderModule} from '@angular/material/slider';
import {TexteditorComponent} from '../../components/texteditor/texteditor.component';
import {VideoEditorComponent} from '../../components/video-editor/video-editor.component';
import {SidebarComponent} from '../../components/shared/sidebar/sidebar.component';




@NgModule({
  declarations: [
    VideoTextComponent,
    TexteditorComponent,
    VideoEditorComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: VideoTextComponent}]),
    MatSliderModule
  ]
})
export class VideoTextModule {}
