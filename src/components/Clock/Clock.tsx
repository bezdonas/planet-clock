import React from 'react';
import styled, { StyledComponentClass } from 'styled-components';
import {
  defaultBackground,
  defaultForeground,
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
import { Durations, Time } from 'src/types';

const StyledClockWrapper = styled.div`
  color: ${defaultBackground};
  .backdrop-outer {
    padding: 10px;
    background: ${defaultBackground};
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
      background: ${defaultForeground};
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

export const thematizeClockWrapper = (
  ClockWrapper: StyledComponentClass<{}, {}>,
  background: string,
  foreground: string
): StyledComponentClass<{}, {}> => styled(ClockWrapper)`
  .backdrop-outer {
    background: ${background};
    border-radius: 50%;
  }
  .backdrop-inner {
    :after {
      background: ${foreground};
    }
  }
`;

export type ClockProps = {
  secondDuration: number;
  background: string;
  foreground: string;
} & Time;

export default class Clock extends React.PureComponent<ClockProps> {
  public render() {
    const {
      hour,
      minute,
      second,
      secondDuration,
      background,
      foreground,
    } = this.props;
    const durations = getDurations(secondDuration);
    const startingPositions = timeToDegrees(hour, minute, second);
    const ThemedClockWrapper = thematizeClockWrapper(
      StyledClockWrapper,
      background,
      foreground
    );

    return (
      <ThemedClockWrapper>
        <div className="backdrop-outer">
          <div className="backdrop-inner">
            <HourArrow
              position={startingPositions.hour}
              circleDuration={durations.day}
              color={foreground}
            />
            <MinuteArrow
              position={startingPositions.minute}
              circleDuration={durations.hour}
              color={foreground}
            />
            <SecondArrow
              position={startingPositions.second}
              circleDuration={durations.minute}
              color={foreground}
            />
          </div>
        </div>
      </ThemedClockWrapper>
    );
  }
}
