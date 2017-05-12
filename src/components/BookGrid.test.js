import React from 'react';
import { shallow } from 'enzyme';
import { BookGrid } from './BookGrid';

const wrapper = shallow(<BookGrid books={[]} />);

describe('BookGrid', () => {
  it('renders without crashing', () => {
    // expect(2).toEqual(2);
    expect(typeof wrapper.props()).toBeTruthy;
  });
});
