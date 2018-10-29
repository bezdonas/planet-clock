import { mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';
import MinuteArrow from '../MinuteArrow';

it('has expected style rule', () => {
  const props = {
    position: 42,
    circleDuration: 50000,
  };
  const wrapper = mount(<MinuteArrow {...props} />);
  const AnimatedStyledMinute = wrapper.find('AnimatedStyledMinute');
  expect(AnimatedStyledMinute).toHaveStyleRule('transform', 'rotate(42deg)');
  expect(AnimatedStyledMinute).toHaveStyleRule(
    'animation',
    'jNoktf 50000ms infinite'
  );
});
