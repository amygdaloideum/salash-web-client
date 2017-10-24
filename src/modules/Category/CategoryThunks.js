import api from '../../util/api';
import { ActionCreators } from './CategoryReducer';

export function fetchCategories() {
  return dispatch => {
    return api.get('categories').then(res => {
      dispatch(ActionCreators.categoriesRecieved.create(res.categories));
    });
  };
}