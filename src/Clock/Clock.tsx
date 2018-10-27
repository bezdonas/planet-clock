import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  degPerCircle,
  degPerSecond,
  degPerMinute,
  degPerHour,
} from './Degrees';

const clockDiameter = 200;
const clockColor = 'rgb(255, 255, 255)';

const StyledClockWrapper = styled.div`
  margin: 20px;
  display: inline-block;
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
      // center dot
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

const StyledArrow = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
`;

const StyledHour = styled(StyledArrow)`
  width: 8px;
  margin-left: -4px;
  height: ${clockDiameter / 3}px;
  padding-bottom: ${clockDiameter / 3}px;
  top: ${clockDiameter / 6}px;
  :after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 50%;
    left: 0;
    right: 0;
    background: ${clockColor};
    border-radius: 25%;
  }
`;

const StyledMinute = styled(StyledArrow)`
  width: 4px;
  margin-left: -2px;
  height: ${clockDiameter / 2}px;
  padding-bottom: ${clockDiameter / 2}px;
  :after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 50%;
    left: 0;
    right: 0;
    background: ${clockColor};
    border-radius: 25%;
  }
`;

const StyledSecond = styled(StyledArrow)`
  width: 2px;
  margin-left: -1px;
  height: ${clockDiameter / 2}px;
  padding-bottom: ${clockDiameter / 2}px;
  :after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 40%;
    left: 0;
    right: 0;
    background: ${clockColor};
    border-radius: 25%;
  }
`;

export interface ClockProps {
  secondDuration: number;
  hour: number;
  minute: number;
  second: number;
}

export default class Clock extends React.PureComponent<ClockProps> {
  public render() {
    const { hour, minute, second, secondDuration } = this.props;
    const startingHourDeg: number = hour * degPerHour;
    const startingMinuteDeg: number = minute * degPerMinute;
    const startingSecondDeg: number = second * degPerSecond;
    const minuteDuration: number = secondDuration * 60;
    const hourDuration: number = minuteDuration * 60;
    const dayDuration: number = hourDuration * 12;

    const rotateHour = keyframes`
      from {
        transform: rotate(${startingHourDeg}deg);
      }
      to {
        transform: rotate(${startingHourDeg + degPerCircle}deg);
      }
    `;
    const rotateMinute = keyframes`
      from {
        transform: rotate(${startingMinuteDeg}deg);
      }
      to {
        transform: rotate(${startingMinuteDeg + degPerCircle}deg);
      }
    `;
    const rotateSecond = keyframes`
      from {
        transform: rotate(${startingHourDeg}deg);
      }
      to {
        transform: rotate(${startingHourDeg + degPerCircle}deg);
      }
    `;

    const AnimatedStyledHour = styled(StyledHour)`
      transform: rotate(${startingHourDeg}deg);
      animation: ${rotateHour} ${dayDuration}ms infinite;
    `;
    AnimatedStyledHour.displayName = 'AnimatedStyledHour'; // for tests
    const AnimatedStyledMinute = styled(StyledMinute)`
      transform: rotate(${startingMinuteDeg}deg);
      animation: ${rotateMinute} ${hourDuration}ms infinite;
    `;
    AnimatedStyledMinute.displayName = 'AnimatedStyledMinute'; // for tests
    const AnimatedStyledSecond = styled(StyledSecond)`
      transform: rotate(${startingSecondDeg}deg);
      animation: ${rotateSecond} ${minuteDuration}ms steps(60) infinite;
    `;
    AnimatedStyledSecond.displayName = 'AnimatedStyledSecond'; // for tests

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
