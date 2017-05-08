import { CACHE_BOOK } from '../constants/index';

export const bookReducer = (state = [], action) => {
  switch (action.type) {
    case CACHE_BOOK:
      return state.map(book => {
        if (book.id !== action.id) return book;
        return { ...book, saved: action.payload };
      });
    default:
      return state;
  }
};
