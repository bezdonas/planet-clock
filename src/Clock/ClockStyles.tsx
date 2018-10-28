import styled from 'styled-components';

const clockDiameter = 200;
const clockColor = 'rgb(255, 255, 255)';

export const StyledClockWrapper = styled.div`
  margin: 20px;
  display: inline-block;
  color: ${clockColor};
  .backdrop-outer {
    padding: 10px;
    border: 2px solid ${clockColor};
    border-radius: 50%;
  }
  .backdrop-inner {
    position: relative;
    width: ${clockDiameter}px;
    height: ${clockDiameter}px;
    :after {
      // center dot
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -6px 0 0 -6px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: ${clockColor};
    }
  }
`;

const StyledArrow = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
`;

export const StyledHour = styled(StyledArrow)`
  width: 8px;
  margin-left: -4px;
  height: ${clockDiameter / 3}px;
  padding-bottom: ${clockDiameter / 3}px;
  top: ${clockDiameter / 6}px;
  :after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 50%;
    left: 0;
    right: 0;
    background: ${clockColor};
    border-radius: 25%;
  }
`;

export const StyledMinute = styled(StyledArrow)`
  width: 4px;
  margin-left: -2px;
  height: ${clockDiameter / 2}px;
  padding-bottom: ${clockDiameter / 2}px;
  :after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 50%;
    left: 0;
    right: 0;
    background: ${clockColor};
    border-radius: 25%;
  }
`;

export const StyledSecond = styled(StyledArrow)`
  width: 2px;
  margin-left: -1px;
  height: ${clockDiameter / 2}px;
  padding-bottom: ${clockDiameter / 2}px;
  :after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 40%;
    left: 0;
    right: 0;
    background: ${clockColor};
    border-radius: 25%;
  }
`;
