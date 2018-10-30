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

const StyledHour = styled(Arrow)`
  width: 8px;
  margin-left: -4px;
  height: ${clockDiameter / 3}px;
  padding-bottom: ${clockDiameter / 3}px;
  top: ${clockDiameter / 6}px;
  :after {
    bottom: 50%;
  }
`;

export interface ArrowComponentProps {
  position: number;
  circleDuration: number;
}

export default class HourArrow extends React.PureComponent<
  ArrowComponentProps
> {
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
