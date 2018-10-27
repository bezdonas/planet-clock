import { mount } from 'enzyme';
import * as React from 'react';
import Clock from '../Clock';
import { degPerSecond, degPerMinute, degPerHour } from '../Degrees';
import 'jest-styled-components';

describe('Check arrow positions', () => {
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
