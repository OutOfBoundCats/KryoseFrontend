import {Action} from '@ngrx/store';
import {User} from '../../../Models/user.model';

export const LOGIN_START = '[Auth] Login Start';
export const SIGNIN = '[Auth] SignIn';
export const SIGNUPFAIL = '[Auth] Login Fail';
export const LOGOUT = '[Auth] Logout';
export const SIGNUP = '[Auth] Signup';
export const SIGNUPDESTROY = '[Auth] SignupDestroy';
export const SIGNINFAIL = '[Auth] SignInFail';
export const SIGNINSUCCESS = '[Auth] SignINSuccess';

export class Signup implements Action {
  readonly type = SIGNUP;

  constructor(public payload: { email: string;  password: string; }) {}
}

export class SignupFail implements Action {
  readonly type = SIGNUPFAIL;

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
export class SignInSuccess implements Action {
  readonly type = SIGNINSUCCESS;

  constructor(public payload: User) {}
}

export type AuthActions =  Signup | SignupFail | SignupDestroy | SignIn |SignInFail |SignInSuccess;
