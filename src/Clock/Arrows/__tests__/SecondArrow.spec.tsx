import { mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';
import SecondArrow from '../SecondArrow';

it('has expected style rule', () => {
  const props = {
    position: 36,
    circleDuration: 60000,
  };
  const wrapper = mount(<SecondArrow {...props} />);
  expect(wrapper.find('AnimatedStyledSecond')).toHaveStyleRule(
    'transform',
    'rotate(36deg)'
  );
});
