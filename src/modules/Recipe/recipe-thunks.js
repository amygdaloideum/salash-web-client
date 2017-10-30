import api from '../../util/api';
import { browserHistory } from 'react-router';
import draftToHtml from 'draftjs-to-html';
import { ActionCreators } from './recipe-reducer';

export function createRecipe(recipeFormData) {
  const formData = { ...recipeFormData };
  if (formData.instructions) {
    formData.instructions = draftToHtml(formData.instructions);
  }
  return dispatch => {
    return uploadImage(formData)
    .then(recipe => api.post('recipes', recipe))
    .then(res => {
      console.log(res);
    });
  };
}

export function getRecipe(id) {
  return dispatch => api.get(`recipes/${id}`)
    .then(recipe => dispatch(ActionCreators.recipeRecieved.create(recipe)));
}

export function getLatestRecipes() {
  return dispatch => {
    return api.get('recipes/latest')
    .then(recipes => {
      return dispatch(ActionCreators.recipesRecieved.create(recipes));
    });
  };
}

function uploadImage(recipe) {
  return new Promise((resolve, reject) => {
    if (recipe.image) {
      api.post('images', { image: recipe.image.file }, { multipart: true })
        .then(response => {
          recipe.image = response;
          resolve(recipe);
        });
    } else {
      resolve(recipe);
    }
  });
}
