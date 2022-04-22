import { all, call, put, takeEvery } from 'redux-saga/effects';
import { activeaccountActions as actions } from '.';
import { authService } from 'services/authService';
import {
  NotificationSuccess,
  NotificationError,
} from 'app/components/Notification/Notification';
function* handleRegister(action) {
  try {
    const response = yield call(authService.active, action.payload);
    console.log(response);
    if (response.rc.code === 0) {
      NotificationSuccess('Thành công', response.rc.desc);
      yield put(actions.activeAccountSuccess(response));
    } else if (response.rc.code !== 0) {
      NotificationError('Có lỗi', response.rc.desc);
    }
  } catch (err: any) {
    yield put(actions.activeAccountFail(err.response));
    console.log(err);
  }
}

function* watchRegister() {
  yield takeEvery(actions.activeAccountRequest, handleRegister);
}

export function* activeaccountSaga() {
  yield all([watchRegister()]);
}
