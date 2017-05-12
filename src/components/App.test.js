import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

const wrapper = shallow(<App />);

describe('App', () => {
  it('renders without crashing', () => {
    expect(typeof wrapper.props()).toBeTruthy;
  });
});
