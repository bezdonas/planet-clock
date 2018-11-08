import { mount, shallow } from 'enzyme';
import * as React from 'react';
import 'jest-styled-components';
import Clock, { getDurations, timeToDegrees } from '../Clock';
import {
  degsPerSec,
  degsPerMin,
  degsPerHour,
  secsPerCircle,
  minsPerCircle,
} from '../ClockConstants';

describe('Check starting arrow positions', () => {
  it('several random time tests', () => {
    [1, 2, 3, 4, 5].forEach(() => {
      const props = {
        secondDuration: 1000,
        hour: Math.floor(Math.random() * 12),
        minute: Math.floor(Math.random() * 60),
        second: Math.floor(Math.random() * 60),
        background: '#fff',
        foreground: '#000',
      };
      const wrapper = shallow(<Clock {...props} />);

      expect(wrapper.find('SecondArrow').prop('position')).toEqual(
        Math.round(degsPerSec * props.second)
      );
      expect(wrapper.find('MinuteArrow').prop('position')).toEqual(
        Math.round(degsPerMin * (props.minute + props.second / secsPerCircle))
      );
      expect(wrapper.find('HourArrow').prop('position')).toEqual(
        Math.round(degsPerHour * (props.hour + props.minute / minsPerCircle))
      );
    });
  });
  it('fixed time test 14:22:16', () => {
    const props = {
      secondDuration: 1000,
      hour: 2,
      minute: 22,
      second: 16,
      background: '#fff',
      foreground: '#000',
    };
    const wrapper = mount(<Clock {...props} />);

    expect(wrapper.find('SecondArrow').prop('position')).toEqual(96);
    expect(wrapper.find('MinuteArrow').prop('position')).toEqual(134);
    expect(wrapper.find('HourArrow').prop('position')).toEqual(71);
  });
});

describe('getDurations method', () => {
  it('returns expected data for normal secondDuration', () => {
    expect(getDurations(1000)).toEqual({
      minute: 60000,
      hour: 3600000,
      day: 43200000,
    });
  });

  it('returns expected data for unnormal secondDuration', () => {
    expect(getDurations(300)).toEqual({
      minute: 18000,
      hour: 1080000,
      day: 12960000,
    });
  });
});

describe('timeToDegrees method', () => {
  it('returns correct positions for 7:46:13', () => {
    expect(timeToDegrees(7, 46, 13)).toEqual({
      hour: 233,
      minute: 277,
      second: 78,
    });
  });

  it('returns correct positions for 11:23:54', () => {
    expect(timeToDegrees(11, 23, 54)).toEqual({
      hour: 342,
      minute: 143,
      second: 324,
    });
  });
});
