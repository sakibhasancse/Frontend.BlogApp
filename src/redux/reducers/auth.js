import TokenService from '@/services/token.service';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REFRESH_TOKEN
} from '../actions/types';
const accessToken = TokenService.getAccessToken();
const refreshToken = TokenService.getRefreshToken();

const initialState =
  accessToken && refreshToken
    ? { isLoggedIn: true, refreshToken, accessToken }
    : { isLoggedIn: false, refreshToken: null, accessToken: null };

export default function (state = initialState, action) {
  const { type, payload } = action;
  console.log({ type, payload, state });
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        ...payload
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    case REFRESH_TOKEN:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
}
