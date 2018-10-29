import React from 'react';
import { mount } from 'enzyme';
import { positionArrowComponent, animateArrowComponent } from '../helpers';
import styled, { keyframes } from 'styled-components';
import 'jest-styled-components';

describe('positionArrowComponent method', () => {
  it('passes rotation into styled-component 1', () => {
    const StyledClass = positionArrowComponent(styled.div``, 55);
    const wrapper = mount(<StyledClass />);
    expect(wrapper).toHaveStyleRule('transform', 'rotate(55deg)');
  });
  it('passes rotation into styled-component 2', () => {
    const StyledClass = positionArrowComponent(styled.div``, 132);
    const wrapper = mount(<StyledClass />);
    expect(wrapper).toHaveStyleRule('transform', 'rotate(132deg)');
  });
});

describe('animateArrowComponent method', () => {
  const keyframesExample = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;
  it('passes correct animation into styled-component with steps', () => {
    const StyledClass = animateArrowComponent({
      positionedArrow: styled.div``,
      rotateAnimation: keyframesExample,
      duration: 30,
      steps: 60,
    });
    const wrapper = mount(<StyledClass />);
    expect(wrapper).toHaveStyleRule(
      'animation',
      'iVXCSc 30ms steps(60) infinite'
    );
  });
  it('passes correct animation into styled-component w/o steps', () => {
    const StyledClass = animateArrowComponent({
      positionedArrow: styled.div``,
      rotateAnimation: keyframesExample,
      duration: 50,
    });
    const wrapper = mount(<StyledClass />);
    expect(wrapper).toHaveStyleRule(
      'animation',
      expect.stringContaining('50ms infinite')
    );
  });
});
