import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
  REFRESH_TOKEN
} from './types';

export const refreshToken = (accessToken) => (dispatch) => {
  dispatch({
    type: REFRESH_TOKEN,
    payload: accessToken
  });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT
  });
};
