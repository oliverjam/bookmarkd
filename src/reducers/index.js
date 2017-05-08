import { combineReducers } from 'redux';
import { themeReducer as theme } from './themeReducer';
import { userReducer as user } from './userReducer';
import { bookReducer as books } from './bookReducer';

const reducers = {
  theme,
  user,
  books,
};

export default combineReducers(reducers);
