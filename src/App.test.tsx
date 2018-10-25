import { shallow } from 'enzyme';
import * as React from 'react';
import App from './App';

describe('Smoke', () => {
  it('App renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
