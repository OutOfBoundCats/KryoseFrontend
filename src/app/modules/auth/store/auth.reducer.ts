import * as AuthActions from './auth.actions';
import {User} from '../../../Models/user.model';
import {Action} from '@ngrx/store';

export interface State {
  user: User;
  authError: string;
  loading: boolean;
  authSignInError: string;
}

const initialState: State = {
  user: null,
  authError: null,
  loading: false,
  authSignInError: null
};
// tslint:disable-next-line:typedef
export function authReducer(
  state = initialState,
  action: AuthActions.AuthActions
) {
  switch (action.type) {
    case AuthActions.SIGNUP:
      return {
        ...state,
        user: null
      };
    case AuthActions.SIGNUPFAIL:
      return {
        ...state,
        user: null,
        authError: action.payload
      };
    case AuthActions.SIGNUPDESTROY:
      return {
        ...state,
        user: null,
        authError: null
      };
    case AuthActions.SIGNIN:
      return {
        ...state,
        user: null,
        authError: null
      };
    case AuthActions.SIGNINFAIL:
      return {
        ...state,
        user: null,
        authSignInError: action.payload
      };
    default:
      return state;
  }


}
