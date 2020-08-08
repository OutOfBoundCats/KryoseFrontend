import {Action} from '@ngrx/store';

export const LOGIN_START = '[Auth] Login Start';
export const LOGIN = '[Auth] Login';
export const LOGIN_FAIL = '[Auth] Login Fail';
export const LOGOUT = '[Auth] Logout';
export const SIGNUP = '[Auth] Signup';

export class Signup implements Action {
  readonly type = SIGNUP;

  constructor(public payload: { email: string;  password: string; }) {}
}

export type AuthActions =  Signup;
