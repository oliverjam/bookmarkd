import React from 'react';
import { shallow } from 'enzyme';
import ReaderHeader from './ReaderHeader';

const wrapper = shallow(<ReaderHeader />);

describe('ReaderHeader', () => {
  it('renders without crashing', () => {
    // expect(2).toEqual(3);
    expect(typeof wrapper.props()).toBeTruthy;
  });
});
