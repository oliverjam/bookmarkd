import { SNACKBAR_MESSAGE } from '../constants';

const showSnackbar = (message, id) => ({
  type: SNACKBAR_MESSAGE,
  id,
  message,
});

const hideSnackbar = id => ({
  type: HIDE_MESSAGE,
  message: '',
  id,
});

let nextNotificationId = 0;

export function showSnackBarWithTimeout(message) {
  return function(dispatch) {
    const id = nextNotificationId++;
    dispatch(showSnackbar(message, id));

    setTimeout(() => dispatch(hideSnackbar(id)), 2000);
  };
}
