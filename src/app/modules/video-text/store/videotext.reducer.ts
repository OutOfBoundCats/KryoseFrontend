import * as videoActions from './videotext.actions';

export interface State {
  authError: string;
  loading: boolean;
}
const initialState: State = {
  authError: null,
  loading: false
};

// tslint:disable-next-line:typedef
export function videoTextReducer(
  state = initialState,
  action: videoActions.videoTextActions
) {

  return state;
}
