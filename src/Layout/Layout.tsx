import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledLayoutWrapper = styled.div`
  background: rgb(0, 0, 0);
  display: grid;
  height: 100vh;
`;

export interface LayoutProps {
  children: ReactNode;
}

export default class Layout extends React.PureComponent<LayoutProps> {
  public render() {
    return <StyledLayoutWrapper>{this.props.children}</StyledLayoutWrapper>;
  }
}
