import {
  LoginInput, RegisterInput,  
  LoginResponse, RegisterResponse,
  UpdatePassInput,
  ForgetInput, ForgetResponse} from '../../types';
import { ActionBase, AppError, ResponseBase } from '../../../../models/common';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';

export const FORGET = 'FORGET';
export const FORGET_SUCCESS = 'FORGET_SUCCESS';
export const FORGET_ERROR = 'FORGET_ERROR';

export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const UPDATE_PASSWORD_SUCCESS = 'UPDATE_PASSWORD_SUCCESS';
export const UPDATE_PASSWORD_ERROR = 'UPDATE_PASSWORD_ERROR';




export interface LoginAction extends ActionBase<LoginInput> { }
export const login = (payload: LoginInput): LoginAction => ({
  type: LOGIN,
  payload,
});

export interface LoginSuccessAction extends ActionBase<LoginResponse> { }
export const loginSuccess = (payload: LoginResponse): LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  payload,
});

export interface LoginErrorAction extends ActionBase<LoginResponse> { }
export const loginError = (error: AppError): LoginErrorAction => ({
  type: LOGIN_ERROR,
  error,
});

export interface LogoutAction extends ActionBase<{}> { }
export const logout = (): LogoutAction => ({
  type: LOGOUT,
});

export interface RegisterAction extends ActionBase<RegisterInput> { }
export const register = (payload: RegisterInput): RegisterAction => ({
  type: REGISTER,
  payload,
});

export interface RegisterSuccessAction extends ActionBase<RegisterResponse> { }
export const registerSuccess = (payload: RegisterResponse): RegisterSuccessAction => ({
  type: REGISTER_SUCCESS,
  payload,
});

export interface RegisterErrorAction extends ActionBase<RegisterResponse> { }
export const registerError = (error: AppError): RegisterErrorAction => ({
  type: REGISTER_ERROR,
  error,
});

export interface ForgetAction extends ActionBase<ForgetInput> { }
export const forget = (payload: ForgetInput): ForgetAction => ({
  type: FORGET,
  payload,
});

export interface ForgetSuccessAction extends ActionBase<ForgetResponse> { }
export const forgetSuccess = (payload: ForgetResponse): ForgetSuccessAction => ({
  type: FORGET_SUCCESS,
  payload,
});

export interface ForgetErrorAction extends ActionBase<ForgetResponse> { }
export const forgetError = (error: AppError): ForgetErrorAction => ({
  type: FORGET_ERROR,
  error,
});


export interface UpdatePassAction extends ActionBase<UpdatePassInput> { }
export const updatePass = (payload: UpdatePassInput): UpdatePassAction => ({
  type: UPDATE_PASSWORD,
  payload,
});

export interface UpdatePassSuccessAction extends ActionBase<ResponseBase> { }
export const updatePassSuccess = (payload: ResponseBase): UpdatePassSuccessAction => ({
  type: UPDATE_PASSWORD_SUCCESS,
  payload,
});

export interface UpdatePassErrorAction extends ActionBase<ResponseBase> { }
export const updatePassError = (error: AppError): UpdatePassErrorAction => ({
  type: UPDATE_PASSWORD_ERROR,
  error,
});

