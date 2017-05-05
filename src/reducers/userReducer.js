import { ADD_BOOK } from '../constants';

export const userReducer = (state = {}, action) => {
  // console.log('state in userReducer', state);
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.book],
      };
    default:
      return state;
  }
};
