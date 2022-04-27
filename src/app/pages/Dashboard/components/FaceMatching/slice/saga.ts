import { takeEvery, all, put, call } from 'redux-saga/effects';
import { facematchingActions as actions } from '.';
import { faceMatchingService } from 'services/faceMatchingService';
function* handleFaceMatching(action) {
  try {
    const response = yield call(
      faceMatchingService.faceMatching,
      action.payload,
    );
    yield put(actions.faceMatchingSuccess(response.data));
  } catch (err: any) {
    yield put(actions.faceMatchingFail(err));
    console.log(err);
  }
}

function* watchFaceMatching() {
  yield takeEvery(actions.faceMatchingRequest, handleFaceMatching);
}
export function* facematchingSaga() {
  yield all([watchFaceMatching()]);
}
