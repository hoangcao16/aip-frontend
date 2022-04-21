import { combineReducers } from 'redux';
import auth, { LoginState } from './auth';
import changePassword, { ChangePasswordState } from './changePassword';
import changePasswordFrom, { ChangePasswordFormState } from './from';
import register, { RegisterState } from './register';
import forget, { ForgetState } from './forget';
import sendOtp, { SendOtpState } from './sendOtp';
import updatePassword, { UpdatePasswordState } from './updatePassword';

export interface AuthModuleState {
  auth: LoginState;
  changePassword: ChangePasswordState;
  changePasswordFrom: ChangePasswordFormState;
  register: RegisterState;
  forget: ForgetState;
  sendOtp: SendOtpState;
  updatePassword: UpdatePasswordState;
}

export default combineReducers<AuthModuleState>({
  auth,
  changePassword,
  changePasswordFrom,
  register,
  forget,
  sendOtp,
  updatePassword
});
