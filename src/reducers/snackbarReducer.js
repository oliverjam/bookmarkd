import { SNACKBAR_MESSAGE } from '../constants';

export const snackbarReducer = (state = {}, action) => {
  switch (action.type) {
    case SNACKBAR_MESSAGE:
      return {
        ...state,
        snackbarMessage: action.message,
      };
    default:
      return state;
  }
};
