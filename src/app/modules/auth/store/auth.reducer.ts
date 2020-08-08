import * as AuthActions from './auth.actions';
import {User} from '../../../Models/user.model';
import {Action} from '@ngrx/store';

export interface State {
  user: User;
  authError: string;
  loading: boolean;
}

const initialState: State = {
  user: null,
  authError: null,
  loading: false
};
// tslint:disable-next-line:typedef
export function authReducer(
  state = initialState,
  action: Action
) {
  switch (action.type) {
    case AuthActions.SIGNUP:
      return state;
    default:
      return state;
  }


}
