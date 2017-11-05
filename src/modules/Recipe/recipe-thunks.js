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
    return uploadImage({ recipe: formData })
      .then(({ recipe }) => api.post('recipes', recipe))
      .then(res => {
        browserHistory.push('/recipes/created');
      });
  };
}

export function updateRecipe(id, recipeFormData) {
  const formData = { ...recipeFormData };
  if (formData.instructions) {
    formData.instructions = draftToHtml(formData.instructions);
  }
  return dispatch => {
    return deleteImage(recipeFormData, id)
      .then(uploadImage)
      .then(({ recipe, id }) => api.put(`recipes/${id}`, recipe))
      .then(res => {
        console.log(res);
      });
  };
}

export function deleteRecipe(id) {
  return dispatch => {
    return api.delete(`recipes/${id}`)
      .then(res => {
        dispatch(ActionCreators.recipeDeleted.create(id));
        browserHistory.push('/recipes/deleted');
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

export function interactWithRecipe(type, id) {
  return dispatch => api.post(`interactions/${type}/${id}`)
    .then(recipe => dispatch(ActionCreators.recipeInteractedWith.create({type, id})));
}

export function unInteractWithRecipe(type, id) {
  return dispatch => api.delete(`interactions/${type}/${id}`)
    .then(recipe => dispatch(ActionCreators.recipeUninteractedWith.create({type, id})));
}

function uploadImage({ recipe, id }) {
  return new Promise((resolve, reject) => {
    if (recipe.image) {
      api.post('images', { image: recipe.image.file }, { multipart: true })
        .then(response => {
          recipe.image = response;
          resolve({ recipe, id });
        });
    } else {
      resolve({ recipe, id });
    }
  });
}

function deleteImage(recipe, id) {
  return new Promise((resolve, reject) => {
    if (recipe.image) {
      api.delete(`images/${id}`)
        .then(response => {
          resolve({ recipe, id });
        });
    } else {
      resolve({ recipe, id });
    }
  });
}
