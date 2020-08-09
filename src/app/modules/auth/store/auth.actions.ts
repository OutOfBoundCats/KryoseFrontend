import {Action} from '@ngrx/store';

export const LOGIN_START = '[Auth] Login Start';
export const LOGIN = '[Auth] Login';
export const LOGIN_FAIL = '[Auth] Login Fail';
export const LOGOUT = '[Auth] Logout';
export const SIGNUP = '[Auth] Signup';
export const SIGNUPDESTROY = '[Auth] SignupDestroy';

export class Signup implements Action {
  readonly type = SIGNUP;

  constructor(public payload: { email: string;  password: string; }) {}
}

export class LoginFail implements Action {
  readonly type = LOGIN_FAIL;

  constructor(public payload: string) {}
}

export class SignupDestroy implements Action {
  readonly type = SIGNUPDESTROY;


}

export type AuthActions =  Signup | LoginFail | SignupDestroy;
