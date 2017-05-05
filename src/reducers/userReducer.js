import { ADD_BOOK, UPDATE_CURRENT_LOCATION } from '../constants';

export const userReducer = (state = {}, action) => {
  // console.log('state in userReducer', state);
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.book],
      };
    case UPDATE_CURRENT_LOCATION:
      const updatedBooks = state.books.map(book => {
        if (book.slug === action.slug) {
          book.location = action.location;
          return book;
        }
        return book;
      });
      return {
        ...state,
        books: updatedBooks,
      };
    default:
      return state;
  }
};
