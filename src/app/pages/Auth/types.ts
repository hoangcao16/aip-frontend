export interface LoginInput {
  username: string;
  password: string;
}
export interface RC {
  code: number;
  desc: string;
}

export interface ResponseBase {
  rc: RC;
}
export interface User {
  email: string;
  fullname: string;
  id: string;
  username: string;
  photo: string;
  full_name: string;
  is_change_pass: string;
  phone: string;
  create_time: number;
  update_time: number;
  deleted_time?: number;
  is_deleted: string;
}
export interface LoginResponse extends ResponseBase {
  user: User;
  token: string;
  permission: string[];
  is_manager: boolean | number;
  is_admin: boolean | number;
  is_hr: boolean | number;
  is_create_for_other: boolean | number;
}

export interface RegisterInput {
  username: string;
  password: string;
  fullname: string;
  email: string;
  phone: string;
}

export interface ForgetInput {
  email: string;
}

export interface SendOtpInput {
  code: string;
  id: string;
}

export interface UpdatePassInput {
  code: string;
  id: string;
}

export interface RegisterResponse extends ResponseBase {
  username: string;
  password: string;
  fullname: string;
  email: string;
}

export interface ForgetResponse extends ResponseBase {
  email: string;
  id: string;
  expireTime: number;
}

export interface SendOtpResponse extends ResponseBase {
  email: string;
  id: string;
  expireTime: number;
}
