import { snackbarReducer } from './snackbarReducer';
import * as types from './../constants/index.js';

describe('snackbarReducer', () => {
  it('should show a message', () => {
    const action = {
      type: types.SHOW_MESSAGE,
      message: 'He is the one',
    };

    const initialState = '';
    const expectedState = 'He is the one';

    expect(snackbarReducer(initialState, action)).toEqual(expectedState);
  });

  it('should hide a message', () => {
    const action = {
      type: types.HIDE_MESSAGE,
    };

    const initialState = 'Dont think you are, know you are';
    const expectedState = '';

    expect(snackbarReducer(initialState, action)).toEqual(expectedState);
  });
});
