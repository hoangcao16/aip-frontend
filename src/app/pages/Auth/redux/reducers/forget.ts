import * as actions from '../actions';
import { ForgetAction, ForgetSuccessAction, ForgetErrorAction } from '../actions';
import { ForgetResponse } from '../../types';
import { AppError } from '../../../../models/common';

export interface ForgetState {
  loading: boolean;
  data?: ForgetResponse;
  error?: AppError;
}

const initialState = {
  loading: false,
};

export default (state = initialState, action: ForgetAction | ForgetSuccessAction | ForgetErrorAction): ForgetState => {
  
  switch (action.type) {
    case actions.FORGET:
      return {
        ...state,
        loading: true,
      };

    case actions.FORGET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload as ForgetResponse,
      };
    case actions.FORGET_ERROR:
      return {
        ...state,
        loading: false,
        data: action.payload as ForgetResponse,
      };

    default:
      return state;
  }
};
