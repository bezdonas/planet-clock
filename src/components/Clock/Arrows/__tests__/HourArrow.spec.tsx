import { mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';
import HourArrow from '../HourArrow';

describe('Check passed styles', () => {
  it('has expected style rule 1', () => {
    const props = {
      position: 176,
      circleDuration: 30000,
      color: '#fff',
    };
    const wrapper = mount(<HourArrow {...props} />);
    const AnimatedStyledHour = wrapper.find('AnimatedStyledHour');
    expect(AnimatedStyledHour).toHaveStyleRule('transform', 'rotate(176deg)');
    expect(AnimatedStyledHour).toHaveStyleRule(
      'animation',
      expect.stringContaining('30000ms infinite')
    );
  });
  it('has expected style rule 2', () => {
    const props = {
      position: 132,
      circleDuration: 214444,
      color: '#fff',
    };
    const wrapper = mount(<HourArrow {...props} />);
    const AnimatedStyledHour = wrapper.find('AnimatedStyledHour');
    expect(AnimatedStyledHour).toHaveStyleRule('transform', 'rotate(132deg)');
    expect(AnimatedStyledHour).toHaveStyleRule(
      'animation',
      expect.stringContaining('214444ms infinite')
    );
  });
});
