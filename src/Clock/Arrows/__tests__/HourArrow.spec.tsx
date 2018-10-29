import { mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';
import HourArrow from '../HourArrow';

it('has expected style rule', () => {
  const props = {
    position: 176,
    circleDuration: 30000,
  };
  const wrapper = mount(<HourArrow {...props} />);
  const AnimatedStyledHour = wrapper.find('AnimatedStyledHour');
  expect(AnimatedStyledHour).toHaveStyleRule('transform', 'rotate(176deg)');
  expect(AnimatedStyledHour).toHaveStyleRule(
    'animation',
    'cCwVsE 30000ms infinite'
  );
});
