import { Action } from '@ngrx/store';

export const UPDATE_CURRENT_TIME = '[VideoToText] UpdateCurrentTime';



export class UpdateCurrentTime implements Action {
  readonly type = UPDATE_CURRENT_TIME;

  constructor(public payload: { currentTime: string; }) {}
}

export type videoTextActions = UpdateCurrentTime ;
