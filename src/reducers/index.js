import { combineReducers } from 'redux';
import { themeReducer as theme } from './themeReducer';
import { userReducer as user } from './userReducer';

const reducers = {
  theme,
  user,
};

export default combineReducers(reducers);
