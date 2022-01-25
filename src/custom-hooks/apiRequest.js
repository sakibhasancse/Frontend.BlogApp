import axios from 'axios';
import { size } from 'lodash';

const apiRequest = async ({ method = 'GET', API_URL, formData = {}, headers = {} }) => {
  try {
    const requestData = {
      url: API_URL,
      method
    };

    if (size(formData)) requestData.data = formData;
    if (size(headers)) requestData.headers = headers;

    return await axios(requestData);
  } catch (error) {
    return { error: error?.message || 'Internal service error' };
  }
};
export default apiRequest;
