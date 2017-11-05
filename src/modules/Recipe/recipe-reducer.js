import ActionCreator from '../../util/action-creator';

export const ActionCreators = {
  recipesRecieved: new ActionCreator('RECIPES_RECIEVED'),
  recipeRecieved: new ActionCreator('RECIPE_RECIEVED'),
  recipeDeleted: new ActionCreator('RECIPE_DELETED'),
  recipeInteractedWith: new ActionCreator('RECIPE_INTERACTED_WITH'),
  recipeUninteractedWith: new ActionCreator('RECIPE_UNINTERACTED_WITH'),
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
    case ActionCreators.recipeInteractedWith.type:
      const newInteractState = { list: [...state.list], recipe: {...state.recipe} };
      newInteractState.recipe.interactions[action.payload.type] = true
      return newInteractState;
    case ActionCreators.recipeUninteractedWith.type:
      const newUninteractState =  { list: [...state.list], recipe: {...state.recipe} };
      newUninteractState.recipe.interactions[action.payload.type] = false
      return newUninteractState;
    default:
      return state;
  }
};

export const getRecipeById = (state, id) => state.recipes.list.find(r => r.id === id);

export default reducer;
