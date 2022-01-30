import { apiRequest } from '@/custom-hooks';
import { getApiBaseUrl } from '@/utils';
import TokenService from '@/services/token.service';

const API_URL = getApiBaseUrl();

const signUpRequest = (formData) => async (dispatch) => {
  try {
    const result = await apiRequest('POST', `${API_URL}/auth/signup`, formData);
    if (result && !result?.error) {
      TokenService.setAccessToken(result?.accessToken);

      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: result
      });
      return result;
    }
    dispatch({
      type: 'REGISTER_FAIL'
    });
    return result;
  } catch (error) {
    return { error: error?.message ? error.message : 'Internal Server Error' };
  }
};

export default signUpRequest;
