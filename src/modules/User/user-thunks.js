import api from '../../util/api';
import { ActionCreators } from './user-reducer';

export function fetchUser(id) {
  return dispatch => {
    return api.get(`users/${id}`)
      .then(res => dispatch(ActionCreators.userRecieved.create(res)));
  };
}
