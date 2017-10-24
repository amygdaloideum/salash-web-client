import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { configureStore, buildInitialState } from './store';

// Initialize store
const store = configureStore(buildInitialState());

render(<App store={store} />, document.getElementById('root'));
