import { LOGIN_SUCCESS, LOGIN_FAIL } from '@/redux/actions';
import { apiRequest } from '@/custom-hooks';
import { getApiBaseUrl } from '@/utils';
import TokenService from '@/services/token.service';

const API_URL = getApiBaseUrl();

const userLogin = ({ email, password }) =>
  apiRequest('POST', `${API_URL}/auth`, { email, password }).then((data) => {
    if (data && !data?.error) {
      TokenService.setAccessToken(data?.accessToken);
      TokenService.setRefreshToken(data?.refreshToken);
      console.log('User', data);
      return {
        type: 'LOGIN_SUCCESS',
        payload: data
      };
    }
    return {
      type: 'LOGIN_FAIL'
    };
  });

export default userLogin;
