import { takeEvery, all, put, call } from 'redux-saga/effects';
import { authloginActions as actions } from '.';
import { authService } from 'services/authService';
import {
  NotificationSuccess,
  NotificationError,
} from 'app/components/Notification/Notification';
function* handleLogin(action) {
  // const { email, password, recaptcha_response } = action.payload;

  try {
    const response = yield call(authService.login, action.payload);
    console.log('response', response);
    if (response.rc.code === 0) {
      NotificationSuccess('Thành công', response.rc.desc);
      yield put(actions.loginSuccess(response));
    } else if (response.rc.code !== 0) {
      NotificationError('Có lỗi', response.rc.desc);
      yield put(actions.loginFail(response));
    }
  } catch (err: any) {
    yield put(actions.loginFail(err.response));
    console.log(err);
  }
}

function* watchLogin() {
  yield takeEvery(actions.loginRequest, handleLogin);
}
export function* authloginSaga() {
  yield all([watchLogin()]);
}
