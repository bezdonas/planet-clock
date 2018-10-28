import { mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';
import HourArrow from '../HourArrow';

it('has expected style rule', () => {
  const props = {
    position: 176,
    circleDuration: 60000,
  };
  const wrapper = mount(<HourArrow {...props} />);
  expect(wrapper.find('AnimatedStyledHour')).toHaveStyleRule(
    'transform',
    'rotate(176deg)'
  );
});
