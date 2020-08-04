import { ActionReducerMap } from '@ngrx/store';

import * as VideoText from '../modules/video-text/store/videotext.reducer';


export interface AppState {
videoText: VideoText.State;


}


export const appReducer: ActionReducerMap<AppState> = {
  videoText: VideoText.videoTextReducer
};
