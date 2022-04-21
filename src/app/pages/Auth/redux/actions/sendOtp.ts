
import {SendOtpInput, SendOtpResponse  } from '../../types';
import { ActionBase, AppError } from '../../../../models/common';


export const SEND_OTP = 'SEND_OTP';
export const SEND_OTP_SUCCESS = 'SEND_OTP_SUCCESS';
export const SEND_OTP_ERROR = 'SEND_OTP_ERROR';


export interface SendOtpAction extends ActionBase<SendOtpInput> { }
export const sendOtp = (payload: SendOtpInput): SendOtpAction => ({
  type: SEND_OTP,
  payload,
});

export interface SendOtpSuccessAction extends ActionBase<SendOtpResponse> { }
export const sendOtpSuccess = (payload: SendOtpResponse): SendOtpSuccessAction => ({
  type: SEND_OTP_SUCCESS,
  payload,
});

export interface SendOtpErrorAction extends ActionBase<SendOtpResponse> { }
export const sendOtpError = (error: AppError): SendOtpErrorAction => ({
  type: SEND_OTP_ERROR,
  error,
});