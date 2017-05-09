import { combineReducers } from 'redux';
import { themeReducer as theme } from './themeReducer';
import { userReducer as user } from './userReducer';
import { bookReducer as books } from './bookReducer';
import { snackbarReducer as message } from './snackbarReducer.js';

const reducers = {
  theme,
  user,
  books,
  message,
};

export default combineReducers(reducers);
