import styled, {
  keyframes,
  Keyframes,
  StyledComponentClass,
} from 'styled-components';
import { IClock } from 'src/types/Clock';

export const getRotateAnimation = (from: number, to: number): Keyframes => {
  return keyframes`
    from {
      transform: rotate(${from}deg);
    }
    to {
      transform: rotate(${to}deg);
    }
  `;
};

export const positionArrowComponent = (
  styledArrow: StyledComponentClass<{}, {}>,
  position: number
): StyledComponentClass<{}, {}> =>
  styled(styledArrow)`
    transform: rotate(${position}deg);
  `;

export const animateArrowComponent = (
  settings: IClock.AnimateArrowComponentArgs
): StyledComponentClass<{}, {}> => {
  const { positionedArrow, rotateAnimation, duration, steps } = settings;
  const stepsSetting = steps ? `steps(${steps})` : '';
  return styled(positionedArrow)`
    animation: ${rotateAnimation} ${duration}ms ${stepsSetting} infinite;
  `;
};
