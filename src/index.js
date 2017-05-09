import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
import { offline } from 'redux-offline';
import offlineConfig from 'redux-offline/lib/defaults';

import rootReducer from './reducers';
import App from './components/App';
import './index.css';
import defaultState from './defaultState.js';

//======
// import { offline } from 'redux-offline';
// import batch from 'redux-offline/lib/defaults/batch';
import retry from 'redux-offline/lib/defaults/retry';
import discard from 'redux-offline/lib/defaults/discard';

function logReduxOffline() {
  console.log('log', arguments);
}

const myConfig = {
  ...offlineConfig,
  retry,
  discard,
  effect: (effect, action) => logReduxOffline(effect, action),
  // detectNetwork: callback => logReduxOffline(callback),
  // persist: store => logReduxOffline(store),
};
// ========

const enhancer = compose(
  applyMiddleware(promiseMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),
  // offline(offlineConfig)
  offline(myConfig)
);

const store = createStore(rootReducer, defaultState, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
