import * as videoActions from './videotext.actions';
import * as videoTextActions from './videotext.actions';

export interface State {
  currentTime: string;
}
const initialState: State = {
  currentTime: null,
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
        currentTime: action.payload.currentTime
      };
  }

  return state;
}
