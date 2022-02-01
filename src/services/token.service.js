/* eslint-disable class-methods-use-this */
import Cookies from 'js-cookie';

const TokenService = {
  getRefreshToken() {
    return Cookies.get('refreshToken');
  },

  getAccessToken() {
    return Cookies.get('accessToken');
  },
  setTokens(tokens) {
    Cookies.set('accessToken', JSON.stringify(tokens.accessToken));
    Cookies.set('refreshToken', JSON.stringify(tokens.refreshToken));
  },
  setAccessToken(token) {
    Cookies.set('accessToken', JSON.stringify(token));
  },

  setRefreshToken(token) {
    Cookies.set('refreshToken', JSON.stringify(token));
  },

  getUser() {
    return JSON.parse(Cookies.get('user'));
  },

  setUser(user) {
    console.log(JSON.stringify(user));
    localStorage.setItem('user', JSON.stringify(user));
  },

  removeUser() {
    localStorage.removeItem('user');
  }
};

export default TokenService;
