import React from 'react';
import { shallow } from 'enzyme';
import SearchResults from './SearchResults';

const wrapper = shallow(<SearchResults books={[]} />);

describe('SearchResults', () => {
  it('renders without crashing', () => {
    // expect(2).toEqual(3);
    expect(typeof wrapper.props()).toBeTruthy;
  });
});
