import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Clock from '../Clock/Clock';

const StyledPlanetWrapper = styled.div`
  color: white;
  margin: 15px;
  display: inline-block;
  vertical-align: middle;
  h4 {
    text-align: center;
  }
`;

export interface PlanetProps {
  title: string;
  secondDuration: number;
}

export default class Planet extends React.PureComponent<PlanetProps> {
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
    const { title, secondDuration } = this.props;
    return (
      <StyledPlanetWrapper>
        <Clock
          secondDuration={secondDuration}
          hour={this.getCurrentHour()}
          minute={this.getCurrentMinute()}
          second={this.getCurrentSecond()}
        />
        <h4>{title}</h4>
      </StyledPlanetWrapper>
    );
  }
}
