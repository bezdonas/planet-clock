import React from 'react';
import styled from 'styled-components';
import {
  clockColor,
  clockDiameter,
  degsPerSec,
  degsPerMin,
  degsPerHour,
  secsPerCircle,
  minsPerCircle,
  hoursPerCircle,
} from './ClockConstants';
import SecondArrow from './Arrows/SecondArrow';
import MinuteArrow from './Arrows/MinuteArrow';
import HourArrow from './Arrows/HourArrow';
import { Durations, Time } from 'src/types/Clock';

const StyledClockWrapper = styled.div`
  color: ${clockColor};
  .backdrop-outer {
    padding: 10px;
    border: 2px solid ${clockColor};
    border-radius: 50%;
  }
  .backdrop-inner {
    position: relative;
    width: ${clockDiameter}px;
    height: ${clockDiameter}px;
    :after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -6px 0 0 -6px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: ${clockColor};
    }
  }
`;

export const getDurations = (secondDuration: number): Durations => {
  const minuteDuration: number = secondDuration * secsPerCircle;
  const hourDuration: number = minuteDuration * minsPerCircle;
  const dayDuration: number = hourDuration * hoursPerCircle;
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
): Time => {
  return {
    second: Math.round(degsPerSec * second),
    minute: Math.round(degsPerMin * (minute + second / secsPerCircle)),
    hour: Math.round(degsPerHour * (hour + minute / minsPerCircle)),
  };
};

export type ClockProps = {
  secondDuration: number;
} & Time;

export default class Clock extends React.PureComponent<ClockProps> {
  public render() {
    const { hour, minute, second, secondDuration } = this.props;
    const durations = getDurations(secondDuration);
    const startingPositions = timeToDegrees(hour, minute, second);

    return (
      <StyledClockWrapper>
        <div className="backdrop-outer">
          <div className="backdrop-inner">
            <HourArrow
              position={startingPositions.hour}
              circleDuration={durations.day}
            />
            <MinuteArrow
              position={startingPositions.minute}
              circleDuration={durations.hour}
            />
            <SecondArrow
              position={startingPositions.second}
              circleDuration={durations.minute}
            />
          </div>
        </div>
      </StyledClockWrapper>
    );
  }
}
