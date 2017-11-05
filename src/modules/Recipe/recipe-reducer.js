import ActionCreator from '../../util/action-creator';

export const ActionCreators = {
  recipesRecieved: new ActionCreator('RECIPES_RECIEVED'),
  recipeRecieved: new ActionCreator('RECIPE_RECIEVED'),
  recipeDeleted: new ActionCreator('RECIPE_DELETED'),
};

const initialState = {
  list: [],
  recipe: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionCreators.recipesRecieved.type:
      return { ...state, list: action.payload };
    case ActionCreators.recipeRecieved.type:
      return { ...state, recipe: action.payload };
    default:
      return state;
  }
};

export const getRecipeById = (state, id) => state.recipes.list.find(r => r.id === id);

export default reducer;
