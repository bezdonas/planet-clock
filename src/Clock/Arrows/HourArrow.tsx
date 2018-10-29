import React from 'react';
import styled from 'styled-components';
import {
  getRotateAnimation,
  positionArrowComponent,
  animateArrowComponent,
} from './helpers';
import { clockColor, clockDiameter, degsPerCircle } from '../ClockConstants';

const StyledHour = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 8px;
  margin-left: -4px;
  height: ${clockDiameter / 3}px;
  padding-bottom: ${clockDiameter / 3}px;
  top: ${clockDiameter / 6}px;
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

export interface HourArrowProps {
  position: number;
  circleDuration: number;
}

export default class HourArrow extends React.PureComponent<HourArrowProps> {
  public render() {
    const { position, circleDuration } = this.props;
    const AnimatedStyledHour = animateArrowComponent({
      positionedArrow: positionArrowComponent(StyledHour, position),
      rotateAnimation: getRotateAnimation(position, position + degsPerCircle),
      duration: circleDuration,
    });
    AnimatedStyledHour.displayName = 'AnimatedStyledHour'; // for tests
    return <AnimatedStyledHour />;
  }
}
