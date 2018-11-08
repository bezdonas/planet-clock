import styled, { Keyframes, StyledComponentClass } from 'styled-components';

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

export interface ArrowComponentProps {
  position: number;
  circleDuration: number;
  color: string;
}

export type PlanetTheme = {
  background: string;
  foreground: string;
};

export type PlanetConfig = {
  title: string;
  description?: string;
  theme: PlanetTheme;
  secondDuration: number;
} & Time;
