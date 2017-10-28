import ActionCreator from '../../util/action-creator';

export const ActionCreators = {
  recipesRecieved: new ActionCreator('RECIPES_RECIEVED'),
};

const initialState = {
  recipes: [],
  recipe: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionCreators.recipesRecieved.type:
      return { ...state, recipes: action.payload};
    default:
      return state;
  }
};

export default reducer;
