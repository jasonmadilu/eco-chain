import { createModel } from '@rematch/core';
import history from '../../../app/components/history';

export interface UserAuthenticationDto {
  email: string;
  password: string;
}

type AuthState = {
  loginTryout: string,
  isUserConnected: boolean,
};

export const auth = createModel ({
  state: {
    loginTryout: 'none',
    isUserConnected: false,
  },
  reducers: {
    connectUser: (state: AuthState): AuthState => ({...state, isUserConnected: true }),
    loginResults: (state: AuthState, payload: string): AuthState => ({...state, loginTryout: payload}),
    deconnectUser: (state: AuthState): AuthState => ({...state, isUserConnected: false })
  },
  effects: {
    login(dto: UserAuthenticationDto) {
      if (dto.email === "admin" && dto.password === "adminpassword") {
        this.connectUser();
        localStorage.setItem('hdm:admin:auth-token', dto.email);
        this.loginResults('success');
        history.push('/');
      } else {
        this.loginResults('failed');
      }
    },

    logout() {
      this.deconnectUser();
      this.loginResults('none');
      localStorage.clear();
    }
  }
});