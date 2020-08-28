import { Action } from '@ngrx/store';

export const UPDATE_CURRENT_TIME = '[VideoToText] UpdateCurrentTime';
export const UPDATE_TRANSCRIPT_CURRENT_TIME = '[VideoToText] UpdateTranscriptCurrentTime';



export class UpdateCurrentTime implements Action {
  readonly type = UPDATE_CURRENT_TIME;

  constructor(public payload: { VideosCurrentTime: string; }) {}
}

export class UpdateTranscriptCurrentTime implements Action {
  readonly type = UPDATE_TRANSCRIPT_CURRENT_TIME;

  constructor(public payload: { TranscriptCurrentTime: string; }) {}
}

export type videoTextActions = UpdateCurrentTime | UpdateTranscriptCurrentTime ;
