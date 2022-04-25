import apiAiClient from 'services/apiAIService';
export const docRecognitionService = {
  recognitionId(data) {
    return apiAiClient.request({
      method: 'POST',
      url: '/id_card',
      data,
    });
  },
  passport(data) {
    return apiAiClient.request({
      method: 'POST',
      url: '/passport',
      data,
    });
  },
  driverLicense(data) {
    return apiAiClient.request({
      method: 'POST',
      url: '/driver_license',
      data,
    });
  },
};
