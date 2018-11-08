import { shallow } from 'enzyme';
import * as React from 'react';
import Grid from '../Grid';

it('Check snapshot', () => {
  const wrapper = shallow(<Grid>Hello world!</Grid>);
  expect(wrapper).toMatchSnapshot();
});
