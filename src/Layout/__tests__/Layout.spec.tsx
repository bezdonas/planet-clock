import { shallow } from 'enzyme';
import * as React from 'react';
import Layout from '../Layout';

it('Check snapshot', () => {
  const wrapper = shallow(<Layout>Hello world!</Layout>);
  expect(wrapper).toMatchSnapshot();
});
