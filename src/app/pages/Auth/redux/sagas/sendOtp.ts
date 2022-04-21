import { put } from 'redux-saga/effects';
import { NotificationError, NotificationSuccess } from 'src/components/Notification/Notification';
import history from 'src/history';
import { AppError } from '../../../../models/common';
import * as apis from '../../services/apis';
import {sendOtpSuccess, SendOtpSuccessAction, sendOtpError, SendOtpAction } from '../actions';

const TOKEN_KEY = 'auth-n-token';

export function* sendOtpAsync(action: SendOtpAction) {
  try {
    const forgetPayload = yield apis.sendOtp(action.payload);
    if(forgetPayload.rc && forgetPayload.rc.code === 0) {
      NotificationSuccess("Thành công", forgetPayload.rc.desc)
      yield put(sendOtpSuccess(forgetPayload.item));
    } else {
      NotificationError("Có lỗi", forgetPayload.rc.desc)
    }

    
  } catch (error) {
    console.log("function*forgetAsync -> error", error)
    yield put(sendOtpError(new AppError(error.message)));
  }
}

export function sendOtpSuccessAsync(action: SendOtpSuccessAction) {
  history.push('/change-pass/' + action.payload?.id);
} 

