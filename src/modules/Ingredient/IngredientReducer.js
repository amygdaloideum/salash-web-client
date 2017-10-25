import ActionCreator from '../../util/action-creator';

export const ActionCreators = {
  ingredientsRecieved: new ActionCreator('INGREDIENTS_RECIEVED'),
  reportRecieved: new ActionCreator('REPORT_RECIEVED'),
};

const initialState = [];

const IngredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionCreators.ingredientsRecieved.type:
      return action.payload;
    default:
      return state;
  }
};

export default IngredientReducer;
