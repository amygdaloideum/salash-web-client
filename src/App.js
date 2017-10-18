/**
 * Root Component
 */
import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// Import Routes
import routes from './routes';

// Base stylesheet
import './styles/main.sass';

export default function App(props) {
  return (
    <Provider store={props.store}>
      <Router history={syncHistoryWithStore(browserHistory, props.store)}>
        {routes(props.store.getState().auth.user)}
      </Router>
    </Provider>
  );
}
