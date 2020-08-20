import {NgModule} from '@angular/core';


import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {TextAudioComponent} from './text-audio.component';


@NgModule({
  declarations: [
    TextAudioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: TextAudioComponent}]),

  ]
})
export class TextAudioModule {}
