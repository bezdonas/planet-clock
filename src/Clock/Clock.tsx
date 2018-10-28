import React from 'react';
import styled, {
  keyframes,
  Keyframes,
  StyledComponentClass,
} from 'styled-components';
import {
  degsPerCircle,
  degsPerSec,
  degsPerMin,
  degsPerHour,
  secsPerCircle,
  minsPerCircle,
} from './ClockConstants';
import {
  StyledClockWrapper,
  StyledHour,
  StyledMinute,
  StyledSecond,
} from './ClockStyles';

// TODO: refactor interfaces for functions
export const getRotateAnimation = (from: number, to: number): Keyframes => {
  return keyframes`
    from {
      transform: rotate(${from}deg);
    }
    to {
      transform: rotate(${to}deg);
    }
  `;
};

export const positionArrowComponent = (
  styledArrow: StyledComponentClass<{}, {}>,
  position: number
): StyledComponentClass<{}, {}> => {
  return styled(styledArrow)`
    transform: rotate(${position}deg);
  `;
};

interface AnimateArrowComponentArgs {
  positionedArrow: StyledComponentClass<{}, {}>;
  rotateAnimation: Keyframes;
  duration: number;
  steps?: number;
}
export const animateArrowComponent = (
  settings: AnimateArrowComponentArgs
): StyledComponentClass<{}, {}> => {
  const { positionedArrow, rotateAnimation, duration, steps } = settings;
  const stepsString = steps ? `steps(${steps})` : '';
  return styled(positionedArrow)`
    animation: ${rotateAnimation} ${duration}ms ${stepsString} infinite;
  `;
};

interface GetDurationsResult {
  minute: number;
  hour: number;
  day: number;
}
export const getDurations = (secondDuration: number): GetDurationsResult => {
  const minuteDuration: number = secondDuration * 60;
  const hourDuration: number = minuteDuration * 60;
  const dayDuration: number = hourDuration * 12;
  return {
    minute: minuteDuration,
    hour: hourDuration,
    day: dayDuration,
  };
};

interface TimeToDegreesResult {
  second: number;
  minute: number;
  hour: number;
}
export const timeToDegrees = (
  hour: number,
  minute: number,
  second: number
): TimeToDegreesResult => {
  return {
    second: Math.round(degsPerSec * second),
    minute: Math.round(degsPerMin * (minute + second / secsPerCircle)),
    hour: Math.round(degsPerHour * (hour + minute / minsPerCircle)),
  };
};

export interface ClockProps {
  secondDuration: number;
  hour: number;
  minute: number;
  second: number;
}

export default class Clock extends React.PureComponent<ClockProps> {
  public render() {
    const { hour, minute, second, secondDuration } = this.props;
    const durations = getDurations(secondDuration);
    const startingPositions = timeToDegrees(hour, minute, second);

    const AnimatedStyledSecond = animateArrowComponent({
      positionedArrow: positionArrowComponent(
        StyledSecond,
        startingPositions.second
      ),
      rotateAnimation: getRotateAnimation(
        startingPositions.second,
        startingPositions.second + degsPerCircle
      ),
      duration: durations.minute,
      steps: secsPerCircle,
    });
    AnimatedStyledSecond.displayName = 'AnimatedStyledSecond';

    const AnimatedStyledMinute = animateArrowComponent({
      positionedArrow: positionArrowComponent(
        StyledMinute,
        startingPositions.minute
      ),
      rotateAnimation: getRotateAnimation(
        startingPositions.minute,
        startingPositions.minute + degsPerCircle
      ),
      duration: durations.hour,
    });
    AnimatedStyledMinute.displayName = 'AnimatedStyledMinute';

    const AnimatedStyledHour = animateArrowComponent({
      positionedArrow: positionArrowComponent(
        StyledHour,
        startingPositions.hour
      ),
      rotateAnimation: getRotateAnimation(
        startingPositions.hour,
        startingPositions.hour + degsPerCircle
      ),
      duration: durations.day,
    });
    AnimatedStyledHour.displayName = 'AnimatedStyledHour';

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
