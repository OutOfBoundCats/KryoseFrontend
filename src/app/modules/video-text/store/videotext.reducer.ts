import * as videoActions from './videotext.actions';
import * as videoTextActions from './videotext.actions';

export interface State {
  VideosCurrentTime: string;
  TranscriptCurrentTime: string;

}
const initialState: State = {
  VideosCurrentTime: null,
  TranscriptCurrentTime: null
};

// tslint:disable-next-line:typedef
export function videoTextReducer(
  state = initialState,
  action: videoActions.videoTextActions
) {
  switch (action.type) {
    case videoTextActions.UPDATE_CURRENT_TIME:
      return {
        ...state,
        VideosCurrentTime: action.payload.VideosCurrentTime
      };
    case videoTextActions.UPDATE_TRANSCRIPT_CURRENT_TIME:
      return {
        ...state,
        TranscriptCurrentTime: action.payload.TranscriptCurrentTime
      };
  }

  return state;
}
