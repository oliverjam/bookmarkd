import React from 'react';
import { shallow } from 'enzyme';
import PageLayout from './PageLayout';

import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();

const wrapper = shallow(<PageLayout />, {
  context: { store: mockStore() },
});

describe('PageLayout', () => {
  it('renders without crashing', () => {
    // expect(2).toEqual(3);
    expect(typeof wrapper.props()).toBeTruthy;
  });
});
