// Import Actions
import { TOGGLE_ADD_RECIPE } from './AppActions';

// Initial State
const initialState = {
  showAddRecipe: false
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
      case TOGGLE_ADD_RECIPE:
        return {
          showAddRecipe: !state.showAddRecipe,
        };

    default:
      return state;
  }
};

/* Selectors */
export const getShowAddRecipe = state => state.app.showAddRecipe;

// Export Reducer
export default AppReducer;
