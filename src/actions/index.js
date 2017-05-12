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

export const fetchBook = async (url, id) => {
  const saved = await fetch(url).then(
    res => (res.status === 200 ? true : false)
  );
  // const saved = await caches
  //   .open('books-cache')
  //   .then(cache => cache.add(url).then(() => true));
  // console.log('I am working ', id, url);
  return {
    type: CACHE_BOOK,
    id,
    payload: saved,
  };
};

export const addBook = ({ slug }) => ({
  type: ADD_BOOK,
  slug,
});

export const updateCurrentLocation = ({ slug, location }) => ({
  type: UPDATE_CURRENT_LOCATION,
  slug,
  location,
});
