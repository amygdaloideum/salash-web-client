/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';

// Pages
import startPage from './modules/App/pages/StartPage/StartPage';
import RecipeSearchPage from './modules/Recipe/pages/RecipeSearchPage/RecipeSearchPage';
import RecipeListPage from './modules/Recipe/pages/RecipeListPage/RecipeListPage';
import RecipeDetailPage from './modules/Recipe/pages/RecipeDetailPage/RecipeDetailPage';
import RecipeCreationPage from './modules/Recipe/pages/RecipeCreationPage/RecipeCreationPage';
import RecipeCreatedPage from './modules/Recipe/pages/RecipeCreatedPage/RecipeCreatedPage';
import RecipeDeletedPage from './modules/Recipe/pages/RecipeDeletedPage/RecipeDeletedPage';
import RecipeEditPage from './modules/Recipe/pages/RecipeEditPage/RecipeEditPage';
import LoginPage from './modules/Auth/pages/LoginPage/LoginPage';
import LoginLandingPage from './modules/Auth/pages/LoginLandingPage/LoginLandingPage';
import SignupPage from './modules/Auth/pages/SignupPage/SignupPage';
import UserPage from './modules/User/pages/UserPage';
import NotFoundPage from './modules/Auth/pages/NotFoundPage/NotFoundPage';

const requireAuth = (nextState, replace, user) => {
  if (!user.id) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

export default user => (
  <Route path="/" component={App}>
    <IndexRoute component={startPage} />
    <Route path="/find" component={RecipeSearchPage} />
    <Route path="/search" component={RecipeListPage} />
    <Route path="/recipes/:id" component={RecipeDetailPage} />
    <Route path="/create" component={RecipeCreationPage}
    />
    <Route path="/created" component={RecipeCreatedPage} />
    <Route path="/recipes/deleted" component={RecipeDeletedPage} />
    <Route
      path="/recipes/edit/:cuid" component={RecipeEditPage}
      onEnter={(nextState, replace) => requireAuth(nextState, replace, user)}
    />
    <Route path="/login" component={LoginPage} />
    <Route path="/facebook" component={LoginLandingPage} />
    <Route path="/signup" component={SignupPage} />
    <Route path="/user/:id" component={UserPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
