import { ADD_BOOK, UPDATE_CURRENT_LOCATION } from '../constants';

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_BOOK:
      const bookIndex = state.books.findIndex(book => {
        return action.slug === 'alice';
      });

      if (bookIndex >= 0) {
        return state;
      }

      return {
        ...state,
        books: [...state.books, { slug: action.slug }],
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
