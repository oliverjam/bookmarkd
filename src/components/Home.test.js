import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

const wrapper = shallow(<Home />);

describe('Home', () => {
  it('renders without crashing', () => {
    // expect(2).toEqual(2);
    expect(typeof wrapper.props()).toBeTruthy;
  });
});
