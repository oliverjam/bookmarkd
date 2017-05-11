import * as actions from './index';
import * as snackActions from './snackbarActions';
import * as types from './../constants';

describe('Action tests', () => {
  const expectedSlug = {
    slug: 'slug',
  };

  it('Should create an action to change theme', () => {
    const expectedTheme = 'green';
    const expectedThemeAction = {
      type: types.CHANGE_THEME,
      theme: expectedTheme,
    };
    expect(actions.changeTheme('green')).toEqual(expectedThemeAction);
  });

  it('Should return an action with a matching slug', () => {
    const expectedBookAction = {
      type: types.ADD_BOOK,
      slug: expectedSlug,
    };
    expect(actions.addBook(expectedBookAction)).toEqual(expectedBookAction);
  });

  it('Should return an action with a new location', () => {
    const expectedLocation = 'location';
    const expectedNewLocation = {
      type: types.UPDATE_CURRENT_LOCATION,
      location: expectedLocation,
      slug: expectedSlug,
    };
    expect(actions.updateCurrentLocation(expectedNewLocation)).toEqual(
      expectedNewLocation
    );
  });
  it('Should return a two actions asynchronously', () => {
    //thunk test
  })
});
