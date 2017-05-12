import React from 'react';
import { shallow } from 'enzyme';
import BookGrid from './BookGrid';

import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();

const wrapper = shallow(<BookGrid />, { context: { store: mockStore() } });

describe('BookGrid', () => {
  it('renders without crashing', () => {
    // expect(2).toEqual(3);
    expect(typeof wrapper.props()).toBeTruthy;
  });
});
