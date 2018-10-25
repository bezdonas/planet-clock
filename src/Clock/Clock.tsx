import React from 'react';

export interface ClockProps {
  test?: String;
}

export default class Clock extends React.PureComponent<ClockProps, String> {
  public render() {
    return <div>I am clock!</div>;
  }
}
