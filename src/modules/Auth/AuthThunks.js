import api from '../../util/api';
import { push } from 'react-router-redux'
import { ActionCreators as AuthActionCreators } from './AuthReducer';
import { ActionCreators as UserActionCreators } from '../User/UserReducer';

export function requestToken(code) {
  return dispatch => {
    dispatch(AuthActionCreators.tokenRequested.create());
    return api.get(`auth/facebook?code=${code}`)
      .then(({ token, user }) => {
        dispatch(AuthActionCreators.tokenRecieved.create(token));
        dispatch(UserActionCreators.userRecieved.create(user));
        localStorage.setItem('token', token);
        return token;
      });
  }
}

export function logOutUser() {
  return dispatch => {
    cookie.remove('token');
    dispatch(logout());
  }
}
