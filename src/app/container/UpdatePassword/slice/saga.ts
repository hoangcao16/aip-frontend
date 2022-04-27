import { all, call, put, takeEvery } from 'redux-saga/effects';
import { updatepasswordActions as actions } from '.';
import { authService } from 'services/authService';
import {
  NotificationSuccess,
  NotificationError,
} from 'app/components/Notification/Notification';
function* handleUpdatePassword(action) {
  try {
    const response = yield call(authService.updatePassword, action.payload);
    if (response.data.rc.code === 0) {
      NotificationSuccess(
        'Update Password Successfully',
        response.data.rc.desc,
      );
      yield put(actions.updatePasswordSuccess(response.data));
    } else if (response.data.rc.code !== 0) {
      NotificationError('Update Password Fail', response.data.rc.desc);
    }
  } catch (err: any) {
    yield put(actions.updatePasswordFail(err.response));
    console.log(err);
  }
}

function* watchUpdatePassword() {
  yield takeEvery(actions.updatePasswordRequest, handleUpdatePassword);
}

export function* updatepasswordSaga() {
  yield all([watchUpdatePassword()]);
}
