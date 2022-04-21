import * as actions from '../actions';
import { RegisterAction, RegisterSuccessAction, RegisterErrorAction } from '../actions';
import { RegisterResponse } from '../../types';
import { AppError } from '../../../../models/common';

export interface RegisterState {
  loading: boolean;
  data?: RegisterResponse;
  error?: AppError;
}

const initialState = {
  loading: false,
};

export default (state = initialState, action: RegisterAction | RegisterSuccessAction | RegisterErrorAction): RegisterState => {
  switch (action.type) {
    case actions.REGISTER:
      return {
        ...state,
        loading: true,
      };

    case actions.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload as RegisterResponse,
      };
    case actions.REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        data: action.payload as RegisterResponse,
      };

    default:
      return state;
  }
};
