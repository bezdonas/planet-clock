import { shallow } from 'enzyme';
import * as React from 'react';
import Layout from '../Layout';

describe('Check snapshots', () => {
  it('Filled Layout', () => {
    const wrapper = shallow(<Layout>Hello world!</Layout>);
    expect(wrapper).toMatchSnapshot();
  });
});
