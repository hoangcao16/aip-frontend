import { LoginInput, LoginResponse, 
  RegisterInput, RegisterResponse, 
  ForgetInput, ForgetResponse,
  SendOtpInput, SendOtpResponse
} from '../types';
import { POST, PUT } from './../../../services';

export const login = (data?: LoginInput): Promise<LoginResponse> => {
  return POST('aipaccountsvc/users/auth/login', data);
};

export const changePassword = async (data?: any): Promise<any> => {
  return POST('aipaccountsvc/users/change-password', data);
};

export const register = (data?: RegisterInput): Promise<RegisterResponse> => {
  return POST('aipaccountsvc/users/register', data);
};

export const forget = (data?: ForgetInput): Promise<ForgetResponse> => {
  return POST('aipaccountsvc/users/auth/forget', data);
};

export const sendOtp = (data?: SendOtpInput): Promise<SendOtpResponse> => {
  return POST('aipaccountsvc/users/check', data);
};

export const updatePassword = (data?: SendOtpInput): Promise<SendOtpResponse> => {
  return POST('aipaccountsvc/users/resetPassword/' + data?.id, data);
};

