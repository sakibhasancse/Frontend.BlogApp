import { apiRequest } from '@/custom-hooks';
import { getApiBaseUrl } from '@/utils';
import { setAccessToken, setRefreshToken, setTokens } from '@/services/token.service';

const API_URL = getApiBaseUrl();

const userLogin =
  ({ email, password }) =>
  async (dispatch) => {
    const result = await apiRequest('POST', `${API_URL}/auth`, { email, password });
    if (result && !result?.error) {
      setAccessToken(result?.accessToken);
      setRefreshToken(result?.refreshToken);
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

const handleUnauthorizedUser = async () => {
  try {
    let isTokenRefreshed = false;
    const existingTokens = {
      refreshToken: Cookies.get('refreshToken'),
      accessToken: Cookies.get('accessToken')
    };
    const result = await apiRequest('POST', `${API_URL}/auth/refresh`, existingTokens);

    if (result && !result?.error) {
      const tokenResult = await setTokens(data);
      if (tokenResult.accessToken) isTokenRefreshed = true;
    }
    return isTokenRefreshed;
  } catch (err) {
    return false;
  }
};
export default userLogin;
