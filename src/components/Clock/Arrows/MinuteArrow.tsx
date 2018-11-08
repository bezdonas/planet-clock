import React from 'react';
import styled from 'styled-components';
import {
  getRotateAnimation,
  positionArrowComponent,
  animateArrowComponent,
  thematizeArrowComponent,
} from './ArrowHelpers';
import { clockDiameter, degsPerCircle } from '../ClockConstants';
import Arrow from './Arrow';
import { ArrowComponentProps } from 'types';

const StyledMinute = styled(Arrow)`
  width: 4px;
  margin-left: -2px;
  height: ${clockDiameter / 2}px;
  padding-bottom: ${clockDiameter / 2}px;
  :after {
    bottom: 50%;
  }
`;

export default class MinuteArrow extends React.PureComponent<
  ArrowComponentProps
> {
  public render() {
    const { position, circleDuration, color } = this.props;
    const ThemedMinute = thematizeArrowComponent(StyledMinute, color);
    const AnimatedStyledMinute = animateArrowComponent({
      positionedArrow: positionArrowComponent(ThemedMinute, position),
      rotateAnimation: getRotateAnimation(position, position + degsPerCircle),
      duration: circleDuration,
    });
    AnimatedStyledMinute.displayName = 'AnimatedStyledMinute'; // for tests
    return <AnimatedStyledMinute />;
  }
}
