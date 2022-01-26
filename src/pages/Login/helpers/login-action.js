import { LOGIN_SUCCESS, LOGIN_FAIL } from '@/redux/actions';
import { apiRequest } from '@/custom-hooks';
import { getApiBaseUrl } from '@/utils';

const API_URL = getApiBaseUrl();

const userLogin = (email, password) => (dispatch) =>
  apiRequest('POST', `${API_URL}/auth`, { email, password }).then((data) => {
    console.log(data);
    if (!data && data.error) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data }
      });
    } else {
      dispatch({
        type: LOGIN_FAIL
      });
    }

    return Promise.resolve();
  });

export default userLogin;
