import { ActionReducerMap } from '@ngrx/store';
import * as videoReducer from '../modules/video-text/store/videotext.reducer';
import * as Auth from '../modules/auth/store/auth.reducer';


export interface AppState {
authReduce: Auth.State;
videoTextReducer: videoReducer.State;
}


// @ts-ignore

// @ts-ignore
export const appReducer: ActionReducerMap<AppState> = {
  authReduce: Auth.authReducer,
  videoTextReducer: videoReducer.videoTextReducer
};
