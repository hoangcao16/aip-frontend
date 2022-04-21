import * as Actions from '../actions';
import { AppError } from 'src/models/common';
import { UpdatePassAction } from '../actions';

export interface UpdatePasswordState {
    payload?: any;
    loading: boolean;
    error?: AppError;
}

const initialState: UpdatePasswordState = {
    loading: false,
    payload: {},
};

export default (state = initialState, { type, payload, error }: UpdatePassAction): UpdatePasswordState => {
    switch (type) {
        case Actions.UPDATE_PASSWORD:
            return {
                ...state,
                payload: payload,
                error: undefined,
                loading: true,
            };

        case Actions.UPDATE_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
            };

        case Actions.UPDATE_PASSWORD_ERROR:
            return {
                ...state,
                error,
                loading: false,
            };
        default:
            return state;
    }
};
