import { CACHE_BOOK } from '../constants/index';

export const fetchBook = (state = [], action) => {
  switch (action.type) {
    case CACHE_BOOK:
      //get the Book
      const saved =
        caches
          .keys()
          .then(res => res[0])
          .then(myCache =>
            caches.open(myCache).then(cache => cache.add(action.url))
          ) || true;
      console.log('I am working ', action.id, action.url);
      return [...state]; //add prop to tell user book saved
      break;

    default:
      return state;
  }
};
