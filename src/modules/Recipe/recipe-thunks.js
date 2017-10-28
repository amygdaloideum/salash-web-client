import api from '../../util/api';
import { browserHistory } from 'react-router';
import draftToHtml from 'draftjs-to-html';

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
    /*return api.post('recipes', formData, { multipart: true }).then(res => {
      console.log(res);
    });*/
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
