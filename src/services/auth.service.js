/* eslint-disable class-methods-use-this */
import TokenService from './token.service';

class AuthService {
  login(email, password) {
    return { data: { email, password } };
    // return api
    //   .post('/auth/signin', {
    //     username,
    //     password
    //   })
    //   .then((response) => {
    //     if (response.data.accessToken) {
    //       TokenService.setUser(response.data);
    //     }

    //     return response.data;
    //   });
  }

  logout() {
    TokenService.removeUser();
  }

  register(username, email, password) {
    // return api.post('/auth/signup', {
    //   username,
    //   email,
    //   password
    // });
    return { username, email, password }
  }
}

export default new AuthService();
