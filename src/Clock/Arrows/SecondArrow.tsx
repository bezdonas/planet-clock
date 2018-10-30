import React from 'react';
import styled from 'styled-components';
import {
  getRotateAnimation,
  positionArrowComponent,
  animateArrowComponent,
} from './ArrowHelpers';
import { clockDiameter, degsPerCircle, secsPerCircle } from '../ClockConstants';
import Arrow from './Arrow';
import { ArrowComponentProps } from 'types/Clock';

const StyledSecond = styled(Arrow)`
  width: 2px;
  margin-left: -1px;
  height: ${clockDiameter / 2}px;
  padding-bottom: ${clockDiameter / 2}px;
  :after {
    bottom: 40%;
  }
`;

export interface ArrowComponentProps {
  position: number;
  circleDuration: number;
}

export default class SecondArrow extends React.PureComponent<
  ArrowComponentProps
> {
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
