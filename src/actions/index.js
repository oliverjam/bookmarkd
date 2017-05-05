import { CHANGE_THEME } from '../constants/index';
import { ADD_BOOK /*UPDATE_CURRENT_LOCATION*/ } from '../constants/index';

export const changeTheme = theme => ({
  type: CHANGE_THEME,
  theme,
});

export const addBook = book => ({
  type: ADD_BOOK,
  book,
});
