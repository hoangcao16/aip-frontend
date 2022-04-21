import * as actions from '../actions';
import { SendOtpAction, SendOtpSuccessAction, SendOtpErrorAction } from '../actions';
import { SendOtpResponse } from '../../types';
import { AppError } from '../../../../models/common';

export interface SendOtpState {
  loading: boolean;
  data?: SendOtpResponse;
  error?: AppError;
}

const initialState = {
  loading: false,
};

export default (state = initialState, action: SendOtpAction | SendOtpSuccessAction | SendOtpErrorAction): SendOtpState => {
  
  switch (action.type) {
    case actions.SEND_OTP:
      return {
        ...state,
        loading: true,
      };

    case actions.SEND_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload as SendOtpResponse,
      };
    case actions.SEND_OTP_ERROR:
      return {
        ...state,
        loading: false,
        data: action.payload as SendOtpResponse,
      };

    default:
      return state;
  }
};
