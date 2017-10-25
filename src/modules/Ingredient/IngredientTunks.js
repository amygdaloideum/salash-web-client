import api from '../../util/api';
import { ActionCreators } from './IngredientReducer';

export function fetchIngredients(name) {
  return dispatch => {
    return api.get(`ingredients?name=${name}`).then(ingredients => {
      return dispatch(ActionCreators.ingredientsRecieved.create(ingredients));
    });
  };
}

export function fetchReport(id) {
  return dispatch => {
    return api.get(`ingredients/${id}`).then(report => {
      return dispatch(ActionCreators.reportRecieved.create(report));
    });
  };
}