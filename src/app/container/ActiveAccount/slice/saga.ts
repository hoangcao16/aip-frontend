import { all, call, put, takeEvery } from 'redux-saga/effects';
import { activeaccountActions as actions } from '.';
import { authService } from 'services/authService';
import {
  NotificationSuccess,
  NotificationError,
} from 'app/components/Notification/Notification';
function* handleRegister(action) {
  const { userActiveId, navigate } = action.payload;
  try {
    const response = yield call(authService.active, userActiveId);
    if (response.data.rc.code === 0) {
      NotificationSuccess('Active Account Successfully', response.data.rc.desc);
      yield put(actions.activeAccountSuccess(response.data));
      navigate('/login');
    } else if (response.data.rc.code !== 0) {
      NotificationError('Active Account Fail', response.data.rc.desc);
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
