import { put, take } from 'redux-saga/effects';
import * as apis from './../../services/apis';
import { ChangePasswordAction, changePasswordError, changePasswordSuccess, hideChangePasswordForm } from '../actions';
import { AppError } from '../../../../models/common';
import { NotificationSuccess, NotificationError } from 'src/components/Notification/Notification';

export function* changePasswordAsync(action: ChangePasswordAction) {
    try {
        const rs = yield apis.changePassword(action.payload);
        yield put(changePasswordSuccess(rs.rc));
        yield put(hideChangePasswordForm());
        if (rs.rc && rs.rc.code === 0) {
            NotificationSuccess("Thành công", rs.rc.desc)
        } else {
            NotificationError("Có lỗi", rs.rc.desc)
        }
    } catch (error) {
        yield put(changePasswordError(new AppError(error.message)));
    }
}