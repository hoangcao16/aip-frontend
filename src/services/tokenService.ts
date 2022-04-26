import apiClient from 'services/apiService';

export const tokenService = {
  getToken() {
    return apiClient.request({
      method: 'GET',
      url: '/aipcoresvc/token',
    });
  },
};
