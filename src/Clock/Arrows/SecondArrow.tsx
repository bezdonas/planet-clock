import React from 'react';
import styled from 'styled-components';
import {
  getRotateAnimation,
  positionArrowComponent,
  animateArrowComponent,
} from './helpers';
import {
  clockColor,
  clockDiameter,
  degsPerCircle,
  secsPerCircle,
} from '../ClockConstants';

const StyledSecond = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  margin-left: -1px;
  height: ${clockDiameter / 2}px;
  padding-bottom: ${clockDiameter / 2}px;
  :after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 40%;
    left: 0;
    right: 0;
    background: ${clockColor};
    border-radius: 25%;
  }
`;

export interface SecondArrowProps {
  position: number;
  circleDuration: number;
}

export default class SecondArrow extends React.PureComponent<SecondArrowProps> {
  public render() {
    const { position, circleDuration } = this.props;
    const AnimatedStyledSecond = animateArrowComponent({
      positionedArrow: positionArrowComponent(StyledSecond, position),
      rotateAnimation: getRotateAnimation(position, position + degsPerCircle),
      duration: circleDuration,
      steps: secsPerCircle,
    });
    AnimatedStyledSecond.displayName = 'AnimatedStyledSecond'; // for tests
    return <AnimatedStyledSecond />;
  }
}
