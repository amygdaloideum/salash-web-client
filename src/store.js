import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/app-reducer';
import recipes from './modules/Recipe/recipe-reducer';
import categories from './modules/Category/CategoryReducer';
import ingredients from './modules/Ingredient/IngredientReducer';
import auth from './modules/Auth/AuthReducer';
import user from './modules/User/UserReducer';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form'

const rootReducer = combineReducers({
  routing,
  form,
  app,
  recipes,
  categories,
  ingredients,
  auth,
  user
});

export const buildInitialState = () => localStorage.getItem("auth") ? {
  auth: JSON.parse(localStorage.getItem("auth")),
} : {};

export function configureStore(initialState = {}) {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // Middleware and store enhancers
  const enhancers = [
    applyMiddleware(thunk),
  ];

  const store = createStore(rootReducer, initialState, composeEnhancers(...enhancers));
  return store;
}
