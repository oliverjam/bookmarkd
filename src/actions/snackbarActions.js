import { SNACKBAR_MESSAGE } from '../constants';

export const snackbarMessage = ({ message }) => ({
  type: SNACKBAR_MESSAGE,
  message,
});
