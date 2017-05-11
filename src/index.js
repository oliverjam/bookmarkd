import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';

import thunk from 'redux-thunk';

import { offline } from 'redux-offline';
import offlineConfig from 'redux-offline/lib/defaults';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';

import rootReducer from './reducers';
import App from './components/App';
import defaultState from './defaultState.js';

const middleware = [thunk, promiseMiddleware];

const enhancer = compose(
  applyMiddleware(...middleware),
  devToolsEnhancer(),
  offline(offlineConfig)
);

const store = createStore(rootReducer, defaultState, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
