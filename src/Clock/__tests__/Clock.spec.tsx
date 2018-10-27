import { mount, shallow } from 'enzyme';
import * as React from 'react';
import Clock from '../Clock';
import { degPerSecond, degPerMinute, degPerHour } from '../Degrees';
import 'jest-styled-components';

import jsdom from 'jsdom';
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

describe('Check starting arrow positions', () => {
  it('time 3:12:46', () => {
    const props = {
      secondDuration: 1000,
      hour: 3,
      minute: 12,
      second: 46,
    };
    const wrapper = mount(<Clock {...props} />);

    expect(wrapper.find('AnimatedStyledHour')).toHaveStyleRule(
      'transform',
      `rotate(${degPerHour * props.hour}deg)`
    );
    expect(wrapper.find('AnimatedStyledMinute')).toHaveStyleRule(
      'transform',
      `rotate(${degPerMinute * props.minute}deg)`
    );
    expect(wrapper.find('AnimatedStyledSecond')).toHaveStyleRule(
      'transform',
      `rotate(${degPerSecond * props.second}deg)`
    );
  });

  it('time 22:41:02', () => {
    const props = {
      secondDuration: 1000,
      hour: 22,
      minute: 41,
      second: 2,
    };
    const wrapper = mount(<Clock {...props} />);

    expect(wrapper.find('AnimatedStyledHour')).toHaveStyleRule(
      'transform',
      `rotate(${degPerHour * props.hour}deg)`
    );
    expect(wrapper.find('AnimatedStyledMinute')).toHaveStyleRule(
      'transform',
      `rotate(${degPerMinute * props.minute}deg)`
    );
    expect(wrapper.find('AnimatedStyledSecond')).toHaveStyleRule(
      'transform',
      `rotate(${degPerSecond * props.second}deg)`
    );
  });

  it('time 13:22:17', () => {
    const props = {
      secondDuration: 1000,
      hour: 13,
      minute: 22,
      second: 17,
    };
    const wrapper = mount(<Clock {...props} />);

    expect(wrapper.find('AnimatedStyledHour')).toHaveStyleRule(
      'transform',
      `rotate(${degPerHour * props.hour}deg)`
    );
    expect(wrapper.find('AnimatedStyledMinute')).toHaveStyleRule(
      'transform',
      `rotate(${degPerMinute * props.minute}deg)`
    );
    expect(wrapper.find('AnimatedStyledSecond')).toHaveStyleRule(
      'transform',
      `rotate(${degPerSecond * props.second}deg)`
    );
  });
});

describe('getDurations method', () => {
  it('returns expected data for normal secondDuration', () => {
    const props = {
      secondDuration: 1000,
      hour: 0,
      minute: 0,
      second: 0,
    };
    const wrapper = shallow(<Clock {...props} />);
    const instance = wrapper.instance() as Clock;

    expect(instance.getDurations(1000)).toEqual({
      minuteDuration: 60 * 1000,
      hourDuration: 60 * 60 * 1000,
      dayDuration: 60 * 60 * 12 * 1000,
    });
  });

  it('returns expected data for unnormal secondDuration', () => {
    const props = {
      secondDuration: 300,
      hour: 0,
      minute: 0,
      second: 0,
    };
    const wrapper = shallow(<Clock {...props} />);
    const instance = wrapper.instance() as Clock;

    expect(instance.getDurations(300)).toEqual({
      minuteDuration: 60 * 300,
      hourDuration: 60 * 60 * 300,
      dayDuration: 60 * 60 * 12 * 300,
    });
  });
});

describe('Check dynamic arrow positions', () => {
  it('stub', () => {
    // TODO: Since animation is done inside css
    // checking this stuff is not so trivial,
    // have to research/come up with smth
    expect(true).toBe(true);
  });
});
