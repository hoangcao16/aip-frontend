import { takeEvery, all, put, call } from 'redux-saga/effects';
import { recognitionActions as actions } from '.';
import { docRecognitionService } from 'services/documentRecognitionService';

function* handleRecognitionId(action) {
  try {
    const response = yield call(
      docRecognitionService.recognitionId,
      action.payload,
    );
    console.log(response);
    yield put(actions.recognitionIdSuccess(response.data));
  } catch (err: any) {
    yield put(actions.recognitionIdFail(err));
    console.log(err);
  }
}
function* handleRecognitionPassport(action) {
  try {
    const response = yield call(docRecognitionService.passport, action.payload);
    console.log(response);
    yield put(actions.recognitionPassportSuccess(response.data));
  } catch (err: any) {
    yield put(actions.recognitionPassportFail(err));
    console.log(err);
  }
}
function* handleRecognitionDriver(action) {
  try {
    const response = yield call(
      docRecognitionService.driverLicense,
      action.payload,
    );
    console.log(response);
    yield put(actions.recognitionDriversSuccess(response.data));
  } catch (err: any) {
    yield put(actions.recognitionDriversFail(err));
    console.log(err);
  }
}

function* watchRecognitionId() {
  yield takeEvery(actions.recognitionIdRequest, handleRecognitionId);
}
function* watchRecognitionPassport() {
  yield takeEvery(
    actions.recognitionPassportRequest,
    handleRecognitionPassport,
  );
}
function* watchRecognitionDrivers() {
  yield takeEvery(actions.recognitionDriversRequest, handleRecognitionDriver);
}
export function* recognitionSaga() {
  yield all([
    watchRecognitionId(),
    watchRecognitionPassport(),
    watchRecognitionDrivers(),
  ]);
}
