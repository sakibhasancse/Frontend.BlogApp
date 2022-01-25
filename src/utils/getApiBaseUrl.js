export const getApiBaseUrl = () => {
  let API_URL = process.env.REACT_APP_API_URL;
  if (process.env.NODE_ENV !== 'production') {
    API_URL = `${API_URL}/offline`;
  }
  return API_URL;
};
