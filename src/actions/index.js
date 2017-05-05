import {
  CHANGE_THEME,
  CACHE_BOOK,
  ADD_BOOK,
  UPDATE_CURRENT_LOCATION,
} from '../constants/index';

export const changeTheme = theme => ({
  type: CHANGE_THEME,
  theme,
});

export const fetchBook = (url, id) => {
  return {
    type: CACHE_BOOK,
    url,
    id,
  };
};

export const addBook = (book, slug) => ({
  type: ADD_BOOK,
  book,
});
