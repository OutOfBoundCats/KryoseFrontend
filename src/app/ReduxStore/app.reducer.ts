import { ActionReducerMap } from '@ngrx/store';

import * as VideoText from '../modules/video-text/store/videotext.reducer';
import * as Auth from '../modules/auth/store/auth.reducer';


export interface AppState {
authReduce: Auth.State;

}


// @ts-ignore

export const appReducer: ActionReducerMap<AppState> = {
  authReduce: Auth.authReducer
};
