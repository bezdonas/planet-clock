import { mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';
import SecondArrow from '../SecondArrow';

it('has expected style rules', () => {
  const props = {
    position: 36,
    circleDuration: 60000,
  };
  const wrapper = mount(<SecondArrow {...props} />);
  const AnimatedStyledSecond = wrapper.find('AnimatedStyledSecond');
  expect(AnimatedStyledSecond).toHaveStyleRule('transform', 'rotate(36deg)');
  expect(AnimatedStyledSecond).toHaveStyleRule(
    'animation',
    'dMQpSm 60000ms steps(60) infinite'
  );
});
