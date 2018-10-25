import React, { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export default class Layout extends React.PureComponent<LayoutProps> {
  public render() {
    return this.props.children;
  }
}
