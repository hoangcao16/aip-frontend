const config = {
  api: {
    baseURL: process.env.REACT_APP_BASE_API_URL,
    timeout: 30000,
    // withCredentials: true
  },
  acceptedFileExtentions: '.png,.docx,.jpg,.jpeg,.pdf,.doc,.xls,.xlsx',
};
export const config_AI = {
  api: {
    baseURL: process.env.REACT_APP_BASE_EKYC_API_URL,
    timeout: 30000,
  },
  acceptedFileExtentions: '.png,.docx,.jpg,.jpeg,.pdf,.doc,.xls,.xlsx',
};
export default config;
