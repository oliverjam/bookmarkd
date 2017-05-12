import { SHOW_MESSAGE, HIDE_MESSAGE } from '../constants';

const showSnackbar = message => ({
  type: SHOW_MESSAGE,
  message,
});

const hideSnackbar = () => ({
  type: HIDE_MESSAGE,
  message: '',
});

export function showSnackbarWithTimeout(message) {
  return function(dispatch) {
    setTimeout(() => {
      dispatch(showSnackbar(message));
      setTimeout(() => dispatch(hideSnackbar()), 4000);
    }, 2000);
  };
}
