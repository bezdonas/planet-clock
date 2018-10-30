import React from 'react';
import styled from 'styled-components';
import {
  getRotateAnimation,
  positionArrowComponent,
  animateArrowComponent,
} from './ArrowHelpers';
import { clockDiameter, degsPerCircle } from '../ClockConstants';
import Arrow from './Arrow';
import { ArrowComponentProps } from 'types/Clock';

const StyledMinute = styled(Arrow)`
  width: 4px;
  margin-left: -2px;
  height: ${clockDiameter / 2}px;
  padding-bottom: ${clockDiameter / 2}px;
  :after {
    bottom: 50%;
  }
`;

export interface ArrowComponentProps {
  position: number;
  circleDuration: number;
}

export default class MinuteArrow extends React.PureComponent<
  ArrowComponentProps
> {
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
