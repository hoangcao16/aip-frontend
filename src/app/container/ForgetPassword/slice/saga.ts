import { all, call, put, takeEvery } from 'redux-saga/effects';
import { forgetpasswordActions as actions } from '.';
import { authService } from 'services/authService';
import {
  NotificationSuccess,
  NotificationError,
} from 'app/components/Notification/Notification';
function* handleRegister(action) {
  try {
    const response = yield call(authService.register, action.payload);
    if (response.data.rc.code === 0) {
      NotificationSuccess('Send Email Successfully', response.data.rc.desc);
      yield put(actions.forgetPasswordSuccess(response.data));
    } else if (response.data.rc.code !== 0) {
      NotificationError('Send Email Fail', response.data.rc.desc);
    }
  } catch (err: any) {
    yield put(actions.forgetPasswordFail(err.response));
    console.log(err);
  }
}

function* watchRegister() {
  yield takeEvery(actions.forgetPasswordRequest, handleRegister);
}

export function* forgetpasswordSaga() {
  yield all([watchRegister()]);
}
