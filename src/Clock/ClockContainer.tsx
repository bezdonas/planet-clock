import React from 'react';
import Clock from './Clock';
import moment from 'moment';
import styled from 'styled-components';

const StyledClocksContainer = styled.div`
  align-self: center;
  justify-self: center;
  color: white;
  h4 {
    text-align: center;
  }
`;
export default class ClockContainer extends React.PureComponent {
  getCurrentHour = () => {
    return moment().hour();
  };
  getCurrentMinute = () => {
    return moment().minute();
  };
  getCurrentSecond = () => {
    return moment().second();
  };
  public render() {
    return (
      <StyledClocksContainer>
        <Clock
          secondDuration={1000}
          hour={this.getCurrentHour()}
          minute={this.getCurrentMinute()}
          second={this.getCurrentSecond()}
        />
        <Clock
          secondDuration={500}
          hour={this.getCurrentHour()}
          minute={this.getCurrentMinute()}
          second={this.getCurrentSecond()}
        />
      </StyledClocksContainer>
    );
  }
}
