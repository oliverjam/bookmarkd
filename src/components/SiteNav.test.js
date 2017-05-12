import React from 'react';
import { shallow } from 'enzyme';
import SiteNav from './SiteNav';

const wrapper = shallow(<SiteNav />);

describe('SiteNav', () => {
  it('renders without crashing', () => {
    // expect(2).toEqual(3);
    expect(typeof wrapper.props()).toBeTruthy;
  });
});
