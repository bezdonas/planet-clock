import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledLayoutWrapper = styled.div`
  font-family: sans-serif;
  background: rgb(0, 0, 0);
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

export interface LayoutProps {
  children: ReactNode;
}

export default class Layout extends React.PureComponent<LayoutProps> {
  public render() {
    return <StyledLayoutWrapper>{this.props.children}</StyledLayoutWrapper>;
  }
}
