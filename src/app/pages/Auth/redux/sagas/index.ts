import { all, takeLatest, fork } from 'redux-saga/effects';
import { loginAsync, loginSuccessAsync, loginCheckerAsync } from './auth';
import { registerAsync, registerSuccessAsync } from './register';
import { forgetAsync, forgetSuccessAsync } from './forget';
import { sendOtpAsync, sendOtpSuccessAsync } from './sendOtp';
import { updatePasswordAsync, updatePasswordSuccessAsync } from './updatePassword';
import { changePasswordAsync } from './changePassword';
import { LOGIN, LOGIN_SUCCESS, CHANGE_PASSWORD_ACTION, 
  REGISTER, REGISTER_SUCCESS, 
  FORGET, FORGET_SUCCESS, 
  UPDATE_PASSWORD, UPDATE_PASSWORD_SUCCESS, 
  
  SEND_OTP, SEND_OTP_SUCCESS } from '../actions';

export default function* root() {
  return all([
    yield takeLatest(LOGIN, loginAsync),
    yield takeLatest(LOGIN_SUCCESS, loginSuccessAsync),
    yield fork(loginCheckerAsync),
    yield takeLatest(CHANGE_PASSWORD_ACTION, changePasswordAsync),
    yield takeLatest(REGISTER, registerAsync),
    yield takeLatest(REGISTER_SUCCESS, registerSuccessAsync),
    yield takeLatest(FORGET, forgetAsync),
    yield takeLatest(FORGET_SUCCESS, forgetSuccessAsync),
    yield takeLatest(SEND_OTP, sendOtpAsync),
    yield takeLatest(SEND_OTP_SUCCESS, sendOtpSuccessAsync),
    yield takeLatest(UPDATE_PASSWORD, updatePasswordAsync),
    yield takeLatest(UPDATE_PASSWORD_SUCCESS, updatePasswordSuccessAsync),
  ]);
}
