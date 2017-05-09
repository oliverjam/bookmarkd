import { combineReducers } from 'redux';
import { themeReducer as theme } from './themeReducer';
import { userReducer as user } from './userReducer';
import { bookReducer as books } from './bookReducer';
import { snackbarReducer as snackbarMessage } from './snackbarReducer.js';

const reducers = {
  theme,
  user,
  books,
  snackbarMessage,
};

export default combineReducers(reducers);
