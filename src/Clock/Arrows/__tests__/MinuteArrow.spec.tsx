import { mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';
import MinuteArrow from '../MinuteArrow';

describe('Check passed styles', () => {
  it('has expected style rule 1', () => {
    const props = {
      position: 42,
      circleDuration: 50000,
      color: '#fff',
    };
    const wrapper = mount(<MinuteArrow {...props} />);
    const AnimatedStyledMinute = wrapper.find('AnimatedStyledMinute');
    expect(AnimatedStyledMinute).toHaveStyleRule('transform', 'rotate(42deg)');
    expect(AnimatedStyledMinute).toHaveStyleRule(
      'animation',
      expect.stringContaining('50000ms infinite')
    );
  });
  it('has expected style rule 2', () => {
    const props = {
      position: 13,
      circleDuration: 753210,
      color: '#fff',
    };
    const wrapper = mount(<MinuteArrow {...props} />);
    const AnimatedStyledMinute = wrapper.find('AnimatedStyledMinute');
    expect(AnimatedStyledMinute).toHaveStyleRule('transform', 'rotate(13deg)');
    expect(AnimatedStyledMinute).toHaveStyleRule(
      'animation',
      expect.stringContaining('753210ms infinite')
    );
  });
});
