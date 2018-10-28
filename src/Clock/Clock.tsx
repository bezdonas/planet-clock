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
import { IClock } from 'src/types/Clock';

export const getDurations = (secondDuration: number): IClock.Durations => {
  const minuteDuration: number = secondDuration * 60;
  const hourDuration: number = minuteDuration * 60;
  const dayDuration: number = hourDuration * 12;
  return {
    minute: minuteDuration,
    hour: hourDuration,
    day: dayDuration,
  };
};

export const timeToDegrees = (
  hour: number,
  minute: number,
  second: number
): IClock.Time => {
  return {
    second: Math.round(degsPerSec * second),
    minute: Math.round(degsPerMin * (minute + second / secsPerCircle)),
    hour: Math.round(degsPerHour * (hour + minute / minsPerCircle)),
  };
};

const getRotateAnimation = (from: number, to: number): Keyframes => {
  return keyframes`
    from {
      transform: rotate(${from}deg);
    }
    to {
      transform: rotate(${to}deg);
    }
  `;
};

const positionArrowComponent = (
  styledArrow: StyledComponentClass<{}, {}>,
  position: number
): StyledComponentClass<{}, {}> =>
  styled(styledArrow)`
    transform: rotate(${position}deg);
  `;

const animateArrowComponent = (
  settings: IClock.AnimateArrowComponentArgs
): StyledComponentClass<{}, {}> => {
  const { positionedArrow, rotateAnimation, duration, steps } = settings;
  const stepsSetting = steps ? `steps(${steps})` : '';
  return styled(positionedArrow)`
    animation: ${rotateAnimation} ${duration}ms ${stepsSetting} infinite;
  `;
};

const generateAnimatedArrows = (
  startingPositions: IClock.Time,
  durations: IClock.Durations
): IClock.AnimatedArrows => {
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
    steps: 60,
  });
  AnimatedStyledSecond.displayName = 'AnimatedStyledSecond'; // for tests

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
  AnimatedStyledMinute.displayName = 'AnimatedStyledMinute'; // for tests

  const AnimatedStyledHour = animateArrowComponent({
    positionedArrow: positionArrowComponent(StyledHour, startingPositions.hour),
    rotateAnimation: getRotateAnimation(
      startingPositions.hour,
      startingPositions.hour + degsPerCircle
    ),
    duration: durations.day,
  });
  AnimatedStyledHour.displayName = 'AnimatedStyledHour'; // for tests

  return {
    AnimatedStyledSecond,
    AnimatedStyledMinute,
    AnimatedStyledHour,
  };
};

export type ClockProps = {
  secondDuration: number;
} & IClock.Time;

export default class Clock extends React.PureComponent<ClockProps> {
  public render() {
    const { hour, minute, second, secondDuration } = this.props;
    const durations = getDurations(secondDuration);
    const startingPositions = timeToDegrees(hour, minute, second);
    const {
      AnimatedStyledSecond,
      AnimatedStyledMinute,
      AnimatedStyledHour,
    } = generateAnimatedArrows(startingPositions, durations);

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
