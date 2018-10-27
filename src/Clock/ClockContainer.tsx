import React from 'react';
import Clock from './Clock';
import moment from 'moment';

export default class ClockContainer extends React.PureComponent {
  getCurrentTime = () => {
    return moment().format('hh:mm:ss');
  };
  public render() {
    return <Clock secondDuration={1000} startTime={this.getCurrentTime()} />;
  }
}
