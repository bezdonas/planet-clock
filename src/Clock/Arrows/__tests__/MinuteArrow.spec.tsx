import { mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';
import MinuteArrow from '../MinuteArrow';

it('has expected style rule', () => {
  const props = {
    position: 42,
    circleDuration: 60000,
  };
  const wrapper = mount(<MinuteArrow {...props} />);
  expect(wrapper.find('AnimatedStyledMinute')).toHaveStyleRule(
    'transform',
    'rotate(42deg)'
  );
});

it('matches snapshot', () => {
  const props = {
    position: 221,
    circleDuration: 12500,
  };
  const wrapper = mount(<MinuteArrow {...props} />);
  expect(wrapper).toMatchSnapshot();
});
