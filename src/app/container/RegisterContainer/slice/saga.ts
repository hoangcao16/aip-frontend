import { all, call, put, takeEvery } from 'redux-saga/effects';
import { authregisterActions as actions } from '.';
import { authService } from 'services/authService';

function* handleRegister(action) {
  try {
    const response = yield call(authService.register, action.payload);
    console.log(response);
    if (response.data.rc === 0) {
      yield put(actions.registerSuccess(response.data));
    } else if (response.data.rc !== 0) {
    }
  } catch (err: any) {
    yield put(actions.registerFail(err.response));
    console.log(err);
  }
}

function* watchRegister() {
  yield takeEvery(actions.registerRequest, handleRegister);
}

export function* authregisterSaga() {
  yield all([watchRegister()]);
}
