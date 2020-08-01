import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {LoggerComponent} from './logger.component';





@NgModule({
  declarations: [LoggerComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: LoggerComponent }])
  ]
})
export class LoggerModule {}
