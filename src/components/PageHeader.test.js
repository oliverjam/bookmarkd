import React from 'react';
import { shallow } from 'enzyme';
import { PageHeader } from './PageHeader';

import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();

const wrapper = shallow(<PageHeader />, {
  context: { store: mockStore() },
});

describe('PageHeader', () => {
  it('renders without crashing', () => {
    // expect(2).toEqual(3);
    expect(typeof wrapper.props()).toBeTruthy;
  });
});
