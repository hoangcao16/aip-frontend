import apiClient from 'services/apiService';

export const feedbackService = {
  sendFeedBack(data) {
    return apiClient.request({
      method: 'POST',
      url: '/aipcoresvc/feedback',
      data,
    });
  },
};
