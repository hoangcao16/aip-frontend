import { takeEvery, all, put, call } from 'redux-saga/effects';
import { feedbackActions as actions } from '.';
import { feedbackService } from 'services/feedbackService';
import {
  NotificationSuccess,
  NotificationError,
} from 'app/components/Notification/Notification';
function* handleFeedback(action) {
  try {
    const response = yield call(feedbackService.sendFeedBack, action.payload);

    if (response.data.rc.code === 0) {
      NotificationSuccess('Send Feedback Successfully', response.data.rc.desc);
      yield put(actions.feedbackSuccess(response.data?.item));
    } else if (response.data.rc.code !== 0) {
      NotificationError('Send Feedback Fail', response.data.rc.desc);
      yield put(actions.feedbackFail(response.data));
    }
  } catch (err: any) {
    yield put(actions.feedbackFail(err.response));
    console.log(err);
  }
}

function* watchFeedback() {
  yield takeEvery(actions.feedbackRequest, handleFeedback);
}
export function* feedbackSaga() {
  yield all([watchFeedback()]);
}
