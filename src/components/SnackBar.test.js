import React from 'react';
import { shallow } from 'enzyme';
import SnackBar from './SnackBar';

const wrapper = shallow(<SnackBar />);

describe('SnackBar', () => {
  it('renders without crashing', () => {
    // expect(2).toEqual(3);
    expect(typeof wrapper.props()).toBeTruthy;
  });
});
