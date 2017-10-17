import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { configureStore } from './store';

// Initialize store
const store = configureStore(window.__INITIAL_STATE__);

render(<App store={store} />, document.getElementById('root'));
