import React, { ReactNode } from 'react';
import styled from 'styled-components';
import starsBackgroundDataUrl from './starsBackground';

const StyledGridWrapper = styled.div`
  font-family: sans-serif;
  background: url(${starsBackgroundDataUrl}) repeat 50% 50% #000;
  box-sizing: border-box;
  min-height: 100vh;
  text-align: center;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(8, 1fr);
  }
`;

export interface GridProps {
  children: ReactNode;
}

export default class Grid extends React.PureComponent<GridProps> {
  public render() {
    return <StyledGridWrapper>{this.props.children}</StyledGridWrapper>;
  }
}
