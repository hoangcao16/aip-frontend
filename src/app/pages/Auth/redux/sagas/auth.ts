import { put, take } from 'redux-saga/effects';
import * as apis from './../../services/apis';
import { loginSuccess, loginError, LoginAction, LoginSuccessAction, LOGOUT } from '../actions';
import { AppError } from '../../../../models/common';
import { setToken } from '../../../../helpers/token';
import { LoginResponse } from '../../types';
import history from 'src/history';
import login from '../../pages/login';
import { NotificationSuccess, NotificationError } from 'src/components/Notification/Notification';

const TOKEN_KEY = 'auth-n-token';
const IS_SELECTED = 'is_selected';
const SELECT = 'select';

export function* loginAsync(action: LoginAction) {
  try {
    const loginPayload = yield apis.login(action.payload);
    // console.log("loginPayload", loginPayload);
    
    if(loginPayload.rc && loginPayload.rc.code === 0) {
      NotificationSuccess("Thành công", loginPayload.rc.desc)
    } else {
      NotificationError("Có lỗi", loginPayload.rc.desc)
    }
    localStorage.setItem(TOKEN_KEY, JSON.stringify(loginPayload || {}));
    

    yield put(loginSuccess(loginPayload));
  } catch (error) {
    console.log("function*loginAsync -> error", error)
    yield put(loginError(new AppError(error.message)));
  }
}

export function loginSuccessAsync(action: LoginSuccessAction) {
  setToken(action.payload?.token);
  if (action.payload?.token && window.location.pathname === '/login') {
    // history.push('/quan-ly-ho-so-nhan-su/ho-so-nhan-su/' + action.payload.employee.id);
    history.push('/selection');
  }
}

export function* loginCheckerAsync() {
  while (1) {
    const savedToken = localStorage.getItem(TOKEN_KEY);
    if (savedToken && savedToken !== '{}') {
      const loginResponse: LoginResponse = JSON.parse(savedToken);
      yield put(loginSuccess(loginResponse));
    }
    yield take(LOGOUT);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(IS_SELECTED);
    localStorage.removeItem(SELECT);
  }
}
