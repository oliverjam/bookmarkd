import { combineReducers } from 'redux';
import { themeReducer as theme } from './themeReducer';
import { fetchBook as books } from './bookReducer';

const reducers = {
  theme,
  books,
};

export default combineReducers(reducers);
