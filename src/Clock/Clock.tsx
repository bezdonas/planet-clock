import React from 'react';
import styled from 'styled-components';

const clockDiameter = 200;
const clockColor = 'rgb(255, 255, 255)';
const StyledClockWrapper = styled.div`
  align-self: center;
  justify-self: center;
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
  .hour,
  .minute,
  .second {
    position: absolute;
    top: 0;
    left: 50%;
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
  }
  .hour {
    width: 8px;
    height: ${clockDiameter / 3}px;
    padding-bottom: ${clockDiameter / 3}px;
    top: ${clockDiameter / 6}px;
  }
  .minute {
    transform: rotate(90deg);
    width: 5px;
    height: ${clockDiameter / 2}px;
    padding-bottom: ${clockDiameter / 2}px;
  }
  .second {
    width: 2px;
    height: ${clockDiameter / 2}px;
    padding-bottom: ${clockDiameter / 2}px;
  }
`;

export interface ClockProps {
  secondDuration: number;
  startTime: string;
}

export default class Clock extends React.PureComponent<ClockProps> {
  public render() {
    return (
      <StyledClockWrapper>
        <div className="backdrop-outer">
          <div className="backdrop-inner">
            <div className="hour" />
            <div className="minute" />
            <div className="second" />
          </div>
        </div>
      </StyledClockWrapper>
    );
  }
}
