import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';

import rootReducer from './reducers';
import App from './components/App';
import './index.css';
import defaultState from './defaultState.js';

const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(promiseMiddleware),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
