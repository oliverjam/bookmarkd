import React from 'react';
import { shallow } from 'enzyme';
import Browse from './Browse';

const wrapper = shallow(<Browse />);

describe('Browse', () => {
  it('renders without crashing', () => {
    expect(typeof wrapper.props().title).toEqual('string');
  });
});
