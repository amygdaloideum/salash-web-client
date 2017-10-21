import ActionCreator from '../../util/action-creator';

const initialState = {
  isBurgerMenuExpanded: false,
};

export const ActionCreators = {
  setBurgerVisibility: new ActionCreator('SET_BURGER_VISIBILITY'),
};

const AppReducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionCreators.setBurgerVisibility.type:
      const partialState = { isBurgerMenuExpanded: action.payload };
      return { ...state, ...partialState };
    default:
      return state;
  }
};

/* Selectors */
export const getBurgerVisibility = state => state.app.isBurgerMenuExpanded;

// Export Reducer
export default AppReducer;
