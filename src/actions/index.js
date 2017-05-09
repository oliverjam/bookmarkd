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
  const saved = await fetch(url)
    .then(res => (res.status === 200 ? true : false))
    .catch(err => false);
  return {
    type: CACHE_BOOK,
    id,
    payload: saved,
    meta: {
      offline: {
        effect: { url, method: 'GET' },
        commit: { type: CACHE_BOOK, meta: { id } },
        rollback: { type: 'ROLLBACK', meta: { id } },
      },
    },
  };
};

export const fetchBook2 = (url, id, dispatch) => {
  console.log('dispatch', dispatch);
  return dispatch({
    type: 'NAME_CREATE_START',
    payload: true,
    meta: {
      offline: {
        // the network action to execute:
        effect: {
          url: 'http://localhost:4242/names',
          method: 'POST',
          body: JSON.stringify({ body: 'stringifies' }),
        },
        // action to dispatch when effect succeeds:
        commit: { type: 'NAME_CREATE_SUCCESS' },
        // action to dispatch if network action fails permanently:
        rollback: { type: 'NAME_CREATE_ERROR', meta: { body: 'stringifies' } },
      },
    },
  });
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
