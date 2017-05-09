import { SNACKBAR_MESSAGE } from '../constants';

export const snackbarMessage = ({ message }) => {
  return {
    type: SNACKBAR_MESSAGE,
    message,
  };
};
