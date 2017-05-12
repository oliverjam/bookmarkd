import React from 'react';
import { shallow } from 'enzyme';
import { MyLibrary } from './MyLibrary';

import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();

const wrapper = shallow(<MyLibrary myBooksSlugs={[]} books={[]} />, {
  context: { store: mockStore() },
});

describe('MyLibrary', () => {
  it('renders without crashing', () => {
    // expect(2).toEqual(3);
    expect(typeof wrapper.props()).toBeTruthy;
  });
});
