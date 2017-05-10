import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';

import thunk from 'redux-thunk';

import { offline } from 'redux-offline';
import offlineConfig from 'redux-offline/lib/defaults';

import rootReducer from './reducers';
import App from './components/App';
import defaultState from './defaultState.js';

const enhancer = compose(
  applyMiddleware(promiseMiddleware, thunk),
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),
  offline(offlineConfig)
);

const store = createStore(rootReducer, defaultState, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
