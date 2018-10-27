import React from 'react';
import styled, { keyframes, StyledComponentClass } from 'styled-components';
import {
  degPerCircle,
  degPerSecond,
  degPerMinute,
  degPerHour,
} from './Degrees';
import {
  StyledClockWrapper,
  StyledHour,
  StyledMinute,
  StyledSecond,
} from './ClockStyles';

export interface ClockProps {
  secondDuration: number;
  hour: number;
  minute: number;
  second: number;
}

export default class Clock extends React.PureComponent<ClockProps> {
  getRotateAnimation = (from: number, to: number) => {
    return keyframes`
      from {
        transform: rotate(${from}deg);
      }
      to {
        transform: rotate(${to}deg);
      }
    `;
  };

  getAnimatedArrowComponent = (
    styledArrow: StyledComponentClass<{}, {}>,
    startingDeg: number,
    duration: number,
    steps?: number
  ) => {
    const rotateSecond = this.getRotateAnimation(
      startingDeg,
      startingDeg + degPerCircle
    );
    const stepsString = steps ? `steps(${steps})` : '';
    return styled(styledArrow)`
      transform: rotate(${startingDeg}deg);
      animation: ${rotateSecond} ${duration}ms ${stepsString} infinite;
    `;
  };

  getDurations = (secondDuration: number) => {
    const minuteDuration: number = secondDuration * 60;
    const hourDuration: number = minuteDuration * 60;
    const dayDuration: number = hourDuration * 12;
    return {
      minuteDuration,
      hourDuration,
      dayDuration,
    };
  };

  public render() {
    const { hour, minute, second, secondDuration } = this.props;
    const { minuteDuration, hourDuration, dayDuration } = this.getDurations(
      secondDuration
    );

    const startingSecondDeg: number = second * degPerSecond;
    const secondStepsPerMinute = 60;
    const AnimatedStyledSecond = this.getAnimatedArrowComponent(
      StyledSecond,
      startingSecondDeg,
      minuteDuration,
      secondStepsPerMinute
    );
    AnimatedStyledSecond.displayName = 'AnimatedStyledSecond'; // for tests

    const startingMinuteDeg: number = minute * degPerMinute;
    const AnimatedStyledMinute = this.getAnimatedArrowComponent(
      StyledMinute,
      startingMinuteDeg,
      hourDuration
    );
    AnimatedStyledMinute.displayName = 'AnimatedStyledMinute'; // for tests

    const startingHourDeg: number = hour * degPerHour;
    const AnimatedStyledHour = this.getAnimatedArrowComponent(
      StyledHour,
      startingHourDeg,
      dayDuration
    );
    AnimatedStyledHour.displayName = 'AnimatedStyledHour'; // for tests

    return (
      <StyledClockWrapper>
        1s = {secondDuration}
        ms
        <div className="backdrop-outer">
          <div className="backdrop-inner">
            <AnimatedStyledHour />
            <AnimatedStyledMinute />
            <AnimatedStyledSecond />
          </div>
        </div>
      </StyledClockWrapper>
    );
  }
}
