import React from 'react';
import styled from 'styled-components';
import Clock from '../Clock/Clock';
import { Time } from 'src/types/Clock';

const StyledPlanetWrapper = styled.div`
  color: white;
  margin: 15px;
  align-self: center;
  justify-self: center;
  h4 {
    text-align: center;
  }
`;

export type PlanetProps = {
  title: string;
  description?: string;
  secondDuration: number;
} & Time;

export default class Planet extends React.PureComponent<PlanetProps> {
  public render() {
    const { title, secondDuration, hour, minute, second } = this.props;
    return (
      <StyledPlanetWrapper>
        <Clock
          secondDuration={secondDuration}
          hour={hour}
          minute={minute}
          second={second}
        />
        <h4>{title}</h4>
      </StyledPlanetWrapper>
    );
  }
}
