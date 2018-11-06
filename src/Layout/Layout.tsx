import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledLayoutWrapper = styled.div`
  font-family: sans-serif;
  background: rgb(0, 0, 0);
  box-sizing: border-box;
  min-height: 100vh;
  text-align: center;
  @media (min-width: 1635px) {
    padding-top: 35vh;
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
