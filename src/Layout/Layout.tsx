import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledLayoutWrapper = styled.div`
  font-family: sans-serif;
  background: rgb(0, 0, 0);
  height: 100vh;
  text-align: center;
  :after {
    content: '';
    height: 100vh;
    display: inline-block;
    vertical-align: middle;
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
