import { CHANGE_THEME, CACHE_BOOK } from '../constants/index';

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
