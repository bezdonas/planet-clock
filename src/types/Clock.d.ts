import styled, { Keyframes, StyledComponentClass } from 'styled-components';

export namespace IClock {
  export interface Time {
    hour: number;
    minute: number;
    second: number;
  }

  export interface Durations {
    minute: number;
    hour: number;
    day: number;
  }

  export interface AnimateArrowComponentArgs {
    positionedArrow: StyledComponentClass<{}, {}>;
    rotateAnimation: Keyframes;
    duration: number;
    steps?: number;
  }
}
