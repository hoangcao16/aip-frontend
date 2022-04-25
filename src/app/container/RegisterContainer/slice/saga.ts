import { all, call, put, takeEvery } from 'redux-saga/effects';
import { authregisterActions as actions } from '.';
import { authService } from 'services/authService';
import {
  NotificationSuccess,
  NotificationError,
} from 'app/components/Notification/Notification';
function* handleRegister(action) {
  try {
    const response = yield call(authService.register, action.payload);
    console.log(response);
    if (response.data.rc.code === 0) {
      NotificationSuccess('Thành công', response.data.rc.desc);
      yield put(actions.registerSuccess(response.data));
    } else if (response.data.rc.code !== 0) {
      NotificationError('Có lỗi', response.data.rc.desc);
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
