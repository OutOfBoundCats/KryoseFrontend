import {Action} from '@ngrx/store';

export const LOGIN_START = '[Auth] Login Start';
export const SIGNIN = '[Auth] SignIn';
export const LOGIN_FAIL = '[Auth] Login Fail';
export const LOGOUT = '[Auth] Logout';
export const SIGNUP = '[Auth] Signup';
export const SIGNUPDESTROY = '[Auth] SignupDestroy';
export const SIGNINFAIL = '[Auth] SignInFail';

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
export class SignIn implements Action {
  readonly type = SIGNIN;

  constructor(public payload: { email: string; password: string }) {}

}
export class SignInFail implements Action {
  readonly type = SIGNINFAIL;

  constructor(public payload: string) {}
}

export type AuthActions =  Signup | LoginFail | SignupDestroy | SignIn |SignInFail;
