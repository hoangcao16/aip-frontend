import { put } from 'redux-saga/effects';
import { NotificationError, NotificationSuccess } from 'src/components/Notification/Notification';
import history from 'src/history';
import { AppError } from '../../../../models/common';
import * as apis from '../../services/apis';
import { forgetError, forgetSuccess, ForgetAction, ForgetSuccessAction } from '../actions';

const TOKEN_KEY = 'auth-n-token';

export function* forgetAsync(action: ForgetAction) {
  try {
    const forgetPayload = yield apis.forget(action.payload);
    if(forgetPayload.rc && forgetPayload.rc.code === 0) {
      NotificationSuccess("Thành công", forgetPayload.rc.desc)
      yield put(forgetSuccess(forgetPayload.item));
    } else {
      NotificationError("Có lỗi", forgetPayload.rc.desc)
    }

    
  } catch (error) {
    console.log("function*forgetAsync -> error", error)
    yield put(forgetError(new AppError(error.message)));
  }
}

export function forgetSuccessAsync(action: ForgetSuccessAction) {
  // history.push('/check-forget/' + action.payload?.id + "/" + action.payload?.expireTime);
  history.push('/forget')
} 

