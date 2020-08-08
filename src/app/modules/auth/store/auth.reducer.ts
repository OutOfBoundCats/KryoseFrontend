import * as AuthActions from './auth.actions';
import {User} from '../../../Models/user.model';

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
  action: AuthActions.AuthActions
) {



}
