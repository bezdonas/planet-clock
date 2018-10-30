import styled from 'styled-components';
import { clockColor } from '../ClockConstants';

export default styled.div`
  will-change: transform;
  position: absolute;
  top: 0;
  left: 50%;
  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: ${clockColor};
    border-radius: 25%;
  }
`;
