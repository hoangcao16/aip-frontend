import apiClient from 'services/apiService';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import moment from 'moment';

export const authService = {
  login(data) {
    return apiClient.request({
      method: 'POST',
      url: '/aipaccountsvc/users/auth/login',
      data,
    });
  },
  changePassword(data) {
    return apiClient.request({
      method: 'POST',
      url: '/aipaccountsvc/users/change-password',
      data,
    });
  },
  register(data) {
    return apiClient.request({
      method: 'POST',
      url: '/aipaccountsvc/users/register',
      data,
    });
  },
  forget(data) {
    return apiClient.request({
      method: 'POST',
      url: '/aipaccountsvc/users/auth/forget',
      data,
    });
  },
  updatePassword(data) {
    return apiClient.request({
      method: 'POST',
      url: `/aipaccountsvc/users/resetPassword/${data?.id}`,
      data,
    });
  },
  setAccessToken(token: string) {
    return localStorage.setItem('access_token', token);
  },
  getAccessToken() {
    return localStorage.getItem('access_token');
  },
  removeAccessToken() {
    return localStorage.removeItem('access_token');
  },
  setUserId(id: string) {
    return localStorage.setItem('userId', id);
  },
  getUserId() {
    return localStorage.getItem('userId');
  },
  removeUserId() {
    return localStorage.removeItem('userId');
  },
  getDecodedAccessToken() {
    const token = this.getAccessToken();
    if (token) {
      try {
        return jwtDecode<JwtPayload>(token);
      } catch (err) {
        return null;
      }
    }
    return null;
  },
  checkAccessToken() {
    const decodedAccessToken = this.getDecodedAccessToken();
    if (!decodedAccessToken) {
      return null;
    }
    console.log('Check auto refresh token at', moment().toString());
    if (!decodedAccessToken) {
      return null;
    }
    // Access token is expired, redirect to login page
    if (
      decodedAccessToken.exp &&
      moment().isAfter(moment(decodedAccessToken.exp * 1000))
    ) {
      this.removeAccessToken();
      this.removeUserId();
      window.location.href = '/';
    }
  },
  autoRefreshAccessToken() {
    const decodedAccessToken = this.getDecodedAccessToken();
    if (!decodedAccessToken) {
      return null;
    }
    const intervalId = setInterval(() => {
      console.log('Check auto refresh token at', moment().toString());
      // const decodedAccessToken = this.getDecodedAccessToken();

      if (!decodedAccessToken) {
        return null;
      }
      // Access token is expired, redirect to login page
      if (
        decodedAccessToken.exp &&
        moment().isAfter(moment(decodedAccessToken.exp * 1000))
      ) {
        this.removeAccessToken();
        this.removeUserId();
        clearInterval(intervalId);
        window.location.href = '/';
      }
    }, 60000);
  },
};
