import callApi from '../../util/api';

export function fetchUser(id) {
  return (dispatch) => {
    return callApi(`users/${id}`).then(res => dispatch(addUser(res.user)));
  };
}
