import { takeEvery, all, put, call } from 'redux-saga/effects';
import { tokenaccessActions as actions } from '.';
import { tokenService } from 'services/tokenService';
import {
  NotificationSuccess,
  NotificationError,
} from 'app/components/Notification/Notification';
function* handlegetToken() {
  try {
    const response = yield call(tokenService.getToken);

    if (response.data.rc.code === 0) {
      NotificationSuccess(
        'Get Access Token Successfully',
        response.data.rc.desc,
      );
      yield put(actions.getTokenSuccess(response.data?.item));
    } else if (response.data.rc.code !== 0) {
      NotificationError('Get Access Token Fail', response.data.rc.desc);
      yield put(actions.getTokenFail(response.data));
    }
  } catch (err: any) {
    yield put(actions.getTokenFail(err.response));
    console.log(err);
  }
}

function* watchGetToken() {
  yield takeEvery(actions.getTokenRequest, handlegetToken);
}
export function* tokenaccessSaga() {
  yield all([watchGetToken()]);
}
