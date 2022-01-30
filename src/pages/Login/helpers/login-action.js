import { apiRequest } from '@/custom-hooks';
import { getApiBaseUrl } from '@/utils';
import TokenService from '@/services/token.service';

const API_URL = getApiBaseUrl();

const userLogin =
  ({ email, password }) =>
  async (dispatch) => {
    const result = await apiRequest('POST', `${API_URL}/auth`, { email, password });
    if (result && !result?.error) {
      TokenService.setAccessToken(result?.accessToken);
      TokenService.setRefreshToken(result?.refreshToken);
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: result
      });
      return result;
    }
    dispatch({
      type: 'LOGIN_FAIL'
    });
    return result;
  };
export default userLogin;
