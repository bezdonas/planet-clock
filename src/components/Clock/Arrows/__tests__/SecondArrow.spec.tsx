import { mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';
import SecondArrow from '../SecondArrow';

describe('Check passed styles', () => {
  it('has expected style rules 1', () => {
    const props = {
      position: 36,
      circleDuration: 60000,
      color: '#fff',
    };
    const wrapper = mount(<SecondArrow {...props} />);
    const AnimatedStyledSecond = wrapper.find('AnimatedStyledSecond');
    expect(AnimatedStyledSecond).toHaveStyleRule('transform', 'rotate(36deg)');
    expect(AnimatedStyledSecond).toHaveStyleRule(
      'animation',
      expect.stringContaining('60000ms steps(60) infinite')
    );
  });
  it('has expected style rules 2', () => {
    const props = {
      position: 480,
      circleDuration: 543661,
      color: '#fff',
    };
    const wrapper = mount(<SecondArrow {...props} />);
    const AnimatedStyledSecond = wrapper.find('AnimatedStyledSecond');
    expect(AnimatedStyledSecond).toHaveStyleRule('transform', 'rotate(480deg)');
    expect(AnimatedStyledSecond).toHaveStyleRule(
      'animation',
      expect.stringContaining('543661ms steps(60) infinite')
    );
  });
});
