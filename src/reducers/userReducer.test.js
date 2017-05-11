import { userReducer } from './userReducer';
import * as types from './../constants/index.js';

describe('userReducer', () => {
  it('should add a new book', () => {
    const action = {
      type: types.ADD_BOOK,
      slug: 'robin-hood',
    };

    const initialState = {
      userID: 'johny',
      books: [],
    };

    const expectedState = {
      userID: 'johny',
      books: [{ slug: 'robin-hood' }],
    };

    expect(userReducer(initialState, action)).toEqual(expectedState);
  });

  it('should not add a book if it already exists', () => {
    const action = {
      type: types.ADD_BOOK,
      slug: 'robin-hood',
    };

    const initialState = {
      userID: 'johny',
      books: [{ slug: 'robin-hood' }],
    };

    const expectedState = {
      userID: 'johny',
      books: [{ slug: 'robin-hood' }],
    };

    expect(userReducer(initialState, action)).toEqual(expectedState);
  });

  it('should not add a book if it already exists', () => {
    const action = {
      type: types.UPDATE_CURRENT_LOCATION,
      slug: 'robin-hood',
      location: 'page123',
    };

    const initialState = {
      userID: 'johny',
      books: [{ slug: 'terminator', location: 'page1' }],
      books: [{ slug: 'robin-hood', location: 'page122' }],
    };

    const expectedState = {
      userID: 'johny',
      books: [{ slug: 'terminator', location: 'page1' }],
      books: [{ slug: 'robin-hood', location: 'page123' }],
    };

    expect(userReducer(initialState, action)).toEqual(expectedState);
  });
});
