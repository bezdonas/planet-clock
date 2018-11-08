import React from 'react';
import styled from 'styled-components';
import Clock from '../Clock/Clock';
import { Time } from 'src/types';
import { PlanetTheme } from 'src/types';

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
  secondDuration: number;
  description?: string;
  theme: PlanetTheme;
} & Time;

export default class Planet extends React.PureComponent<PlanetProps> {
  public render() {
    const { title, secondDuration, hour, minute, second, theme } = this.props;
    let clockProps = {
      secondDuration,
      hour,
      minute,
      second,
      ...theme,
    };

    return (
      <StyledPlanetWrapper>
        <Clock {...clockProps} />
        <h4>{title}</h4>
      </StyledPlanetWrapper>
    );
  }
}
