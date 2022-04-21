import { put, take } from 'redux-saga/effects';
import * as apis from '../../services/apis';
import { updatePassSuccess, updatePassError, UpdatePassAction } from '../actions';
import { AppError } from '../../../../models/common';
import history from 'src/history';
import { NotificationSuccess, NotificationError } from 'src/components/Notification/Notification';

export function* updatePasswordAsync(action: UpdatePassAction) {
    try {

        const updatePasswordPayload = yield apis.updatePassword(action.payload);
        if(updatePasswordPayload.rc && updatePasswordPayload.rc.code === 0) {
            NotificationSuccess("Thành công", updatePasswordPayload.rc.desc)
            yield put(updatePassSuccess(updatePasswordPayload.item));
            } else {
            NotificationError("Có lỗi", updatePasswordPayload.rc.desc)
            }

        
    } catch (error) {
        yield put(updatePassError(new AppError(error.message)));
    }
}

export function updatePasswordSuccessAsync(action: UpdatePassAction) {
    history.push('/login');
  } 