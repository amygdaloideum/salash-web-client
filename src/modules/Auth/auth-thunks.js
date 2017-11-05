import api from '../../util/api';
import { push } from 'react-router-redux'
import { ActionCreators as AuthActionCreators } from './auth-reducer';

export function requestToken(code) {
  return dispatch => {
    dispatch(AuthActionCreators.tokenRequested.create());
    return api.get(`auth/facebook?code=${code}`)
      .then(({ token, user }) => {
        dispatch(AuthActionCreators.tokenRecieved.create({ token, user }));
        localStorage.setItem('auth', JSON.stringify({ token, user }));
        return token;
      });
  }
}

export function signOutUser() {
  return dispatch => {
    localStorage.removeItem("auth");
    return dispatch(AuthActionCreators.userSignedOut.create());
  }
}
