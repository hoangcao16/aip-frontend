import apiAiClient from 'services/apiAIService';
export const faceMatchingService = {
  faceMatching(data) {
    return apiAiClient.request({
      method: 'POST',
      url: '/face_verification',
      data,
    });
  },
};
