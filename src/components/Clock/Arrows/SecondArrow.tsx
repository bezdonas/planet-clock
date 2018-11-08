import React from 'react';
import styled from 'styled-components';
import {
  getRotateAnimation,
  positionArrowComponent,
  animateArrowComponent,
  thematizeArrowComponent,
} from './ArrowHelpers';
import { clockDiameter, degsPerCircle, secsPerCircle } from '../ClockConstants';
import Arrow from './Arrow';
import { ArrowComponentProps } from 'types';

const StyledSecond = styled(Arrow)`
  width: 2px;
  margin-left: -1px;
  height: ${clockDiameter / 2}px;
  padding-bottom: ${clockDiameter / 2}px;
  :after {
    bottom: 40%;
  }
`;

export default class SecondArrow extends React.PureComponent<
  ArrowComponentProps
> {
  public render() {
    const { position, circleDuration, color } = this.props;
    const ThemedSecond = thematizeArrowComponent(StyledSecond, color);
    const AnimatedStyledSecond = animateArrowComponent({
      positionedArrow: positionArrowComponent(ThemedSecond, position),
      rotateAnimation: getRotateAnimation(position, position + degsPerCircle),
      duration: circleDuration,
      steps: secsPerCircle,
    });
    AnimatedStyledSecond.displayName = 'AnimatedStyledSecond'; // for tests
    return <AnimatedStyledSecond />;
  }
}
