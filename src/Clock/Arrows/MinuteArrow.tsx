import React from 'react';
import styled from 'styled-components';
import {
  getRotateAnimation,
  positionArrowComponent,
  animateArrowComponent,
} from './helpers';
import { clockColor, clockDiameter, degsPerCircle } from '../ClockConstants';

const StyledMinute = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 4px;
  margin-left: -2px;
  height: ${clockDiameter / 2}px;
  padding-bottom: ${clockDiameter / 2}px;
  :after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 50%;
    left: 0;
    right: 0;
    background: ${clockColor};
    border-radius: 25%;
  }
`;

export interface MinuteArrowProps {
  position: number;
  circleDuration: number;
}

export default class MinuteArrow extends React.PureComponent<MinuteArrowProps> {
  public render() {
    const { position, circleDuration } = this.props;
    const AnimatedStyledMinute = animateArrowComponent({
      positionedArrow: positionArrowComponent(StyledMinute, position),
      rotateAnimation: getRotateAnimation(position, position + degsPerCircle),
      duration: circleDuration,
    });
    AnimatedStyledMinute.displayName = 'AnimatedStyledMinute'; // for tests
    return <AnimatedStyledMinute />;
  }
}
