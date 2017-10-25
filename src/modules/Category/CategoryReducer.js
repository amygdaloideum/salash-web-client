import ActionCreator from '../../util/action-creator';

export const ActionCreators = {
  categoriesRecieved: new ActionCreator('CATEGORIES_RECIEVED'),
};

const initialState = [];

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionCreators.categoriesRecieved.type:
      return action.payload;
    default:
      return state;
  }
};

export default CategoryReducer;


export const getCategories = state => state.categories.data;