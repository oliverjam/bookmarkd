import { ADD_BOOK, UPDATE_CURRENT_LOCATION } from '../constants';

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_BOOK:
      // check if book has already been opened so that
      // we don't add to user's books
      const wasBookAlreadyOpened = state.books.some(book => {
        return book.slug === action.slug;
      });

      if (wasBookAlreadyOpened) {
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
