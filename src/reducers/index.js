import { combineReducers } from 'redux';
import { themeReducer as theme } from './themeReducer';

const reducers = {
  theme,
};

export default combineReducers(reducers);
