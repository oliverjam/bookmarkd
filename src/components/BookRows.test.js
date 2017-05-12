import React from 'react';
import { shallow } from 'enzyme';
import { BookRows } from './BookRows';

import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();

const wrapper = shallow(<BookRows books={[]} />, {
  context: { store: mockStore() },
});

describe('BookRows', () => {
  it('renders without crashing', () => {
    // expect(2).toEqual(3);
    expect(typeof wrapper.props()).toBeTruthy;
  });
});
