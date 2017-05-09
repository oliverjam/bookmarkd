import { combineReducers } from 'redux';
import { themeReducer as theme } from './themeReducer';
import { userReducer as user } from './userReducer';
import { bookReducer as books } from './bookReducer';
import { snackbarReducer } from './snackbarReducer.js';

const reducers = {
  theme,
  user,
  books,
  snackbarReducer,
};

export default combineReducers(reducers);
