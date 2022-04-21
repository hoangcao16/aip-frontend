import { put, take } from 'redux-saga/effects';
import * as apis from '../../services/apis';
import { registerSuccess, registerError, RegisterAction, RegisterSuccessAction, LOGOUT } from '../actions';
import { AppError } from '../../../../models/common';
import { setToken } from '../../../../helpers/token';
import { LoginResponse } from '../../types';
import history from 'src/history';
import register from '../../pages/register';
import { NotificationSuccess, NotificationError } from 'src/components/Notification/Notification';

const TOKEN_KEY = 'auth-n-token';

export function* registerAsync(action: RegisterAction) {
  try {
    const registerPayload = yield apis.register(action.payload);
    if(registerPayload.rc && registerPayload.rc.code === 0) {
      NotificationSuccess("Thành công", registerPayload.rc.desc)
      yield put(registerSuccess(registerPayload));
    } else {
      NotificationError("Có lỗi", registerPayload.rc.desc)
    }

    
  } catch (error) {
    console.log("function*registerAsync -> error", error)
    yield put(registerError(new AppError(error.message)));
  }
}

export function registerSuccessAsync(action: RegisterSuccessAction) {
  history.push('/');
}

