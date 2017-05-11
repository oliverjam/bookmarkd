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
    dispatch(showSnackbar(message));

    setTimeout(() => dispatch(hideSnackbar()), 5000);
  };
}
