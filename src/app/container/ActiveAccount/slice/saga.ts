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
    if (response.data.rc.code === 0) {
      NotificationSuccess('Thành công', response.data.rc.desc);
      yield put(actions.activeAccountSuccess(response.data));
    } else if (response.data.rc.code !== 0) {
      NotificationError('Có lỗi', response.data.rc.desc);
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
