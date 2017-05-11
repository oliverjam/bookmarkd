import * as actions from './index';
import * as snackActions from './snackbarActions';
import * as types from './../constants';
import expect from 'expect';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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
});

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('Should return two actions asynchronously', () => {
    //thunk test
    const expectedActions = [
      { type: types.SHOW_MESSAGE, message: 'message' },
      { type: types.HIDE_MESSAGE, message: '' },
    ];

    const store = mockStore({ message: '' });
    store.dispatch(
      snackActions.showSnackbarWithTimeout(expectedActions[0].message)
    );
    setTimeout(function() {
      expect(store.getActions()).toEqual(expectedActions);
    }, 1000);
  });
});
