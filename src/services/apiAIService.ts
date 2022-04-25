import axios from 'axios';
import { config_AI } from '../config';
import { authService } from './authService';

const apiAiClient = axios.create(config_AI.api);

// Request interceptor
apiAiClient.interceptors.request.use(
  (config: any) => {
    const accessToken = localStorage.getItem('access_token');

    if (accessToken) {
      // config.headers.common.Authorization = `${accessToken}`;
      config.headers['client-id'] = '27ff5a35-1d34-4811-bd2f-1a28505ea7a4';
      config.headers['client-secret'] =
        'Wpo13R61OL9zMSlocxoa0vusMt78hEh8XIAHe7VtQrQ';
    }

    config.headers.common['Content-Type'] = 'application/json';
    config.headers.common['Accept'] = 'application/json';
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Response interceptor
apiAiClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log(error);
    // Clear local storage data and redirect to login page if request is 401 - Unauthorized
    if (error.response.status === 401) {
      authService.removeAccessToken();
      window.location.href = '/';
    }

    return Promise.reject(error);
  },
);

export default apiAiClient;
