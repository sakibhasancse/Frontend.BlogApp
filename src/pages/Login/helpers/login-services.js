import Cookies from 'js-cookie';
export const setToken = (response) => {
  const { tokens = {}, error = '' } = response
  const { accessToken = {}, refreshToken = {} } = tokens
  if (error) {
    return {
      status: false,
      msg: error
    };
  }
  if (!accessToken) {
    return false;
  }
  Cookies.set('accessToken', accessToken);
  Cookies.set('refreshToken', refreshToken);
  return { accessToken };
}

