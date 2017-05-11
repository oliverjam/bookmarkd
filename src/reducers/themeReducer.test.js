import { themeReducer } from './themeReducer';
import * as types from './../constants/index.js';

describe('themeReducer', () => {
  it('change a theme', () => {
    const action = {
      type: types.CHANGE_THEME,
      theme: 'green',
    };

    const initialState = '';
    const expectedState = 'green';

    expect(themeReducer(initialState, action)).toEqual(expectedState);
  });
});
