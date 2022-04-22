import { takeEvery, all, put, call } from 'redux-saga/effects';
import { authloginActions as actions } from '.';
import { authService } from 'services/authService';

function* handleLogin(action) {
  // const { email, password, recaptcha_response } = action.payload;

  try {
    const response = yield call(authService.login, action.payload);
    console.log('response', response);
    // if (response.data.rc === 0) {
    //   yield put(actions.loginSuccess(response.data));
    // } else if (response.data.rc !== 0) {
    //   yield put(actions.loginFail(response.data));
    // }
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
