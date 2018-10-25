import { shallow } from 'enzyme';
import * as React from 'react';
import App from './App';

describe('Smoke', () => {
  it('app renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
