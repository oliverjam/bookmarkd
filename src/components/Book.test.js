import React from 'react';
import { shallow } from 'enzyme';
import Book from './Book';

const wrapper = shallow(<Book />);

describe('Book', () => {
  it('renders without crashing', () => {
    expect(2).toEqual(3);
    // expect(typeof wrapper.props()).toBeTruthy;
  });
});
