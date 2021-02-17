import React from 'react';
import {connect, styled} from 'frontity';
import {size} from '../../functions/size';


const StepsProgress = styled(connect(({className, state, horizontal = false}) =>
  <div className={className}>
    <div className="current" style={{
      height: horizontal ? '100%' : 100 / state.theme.activeStep.total + '%',
      width: !horizontal ? '100%' : 100 / state.theme.activeStep.total + '%',
      transform: `translate${horizontal ? 'X' : 'Y'}(${state.theme.activeStep.current * 100}%)`,
    }}>
      <div className="step-name">{state.theme.activeStep.stepName}</div>
    </div>
  </div>))`
position: relative;
width: ${({horizontal}) => horizontal ? '' : size(2)};
height: ${({horizontal}) => !horizontal ? '' : size(2)};
background-color: rgba(191, 182, 180, 0.1);
&:after{
  content: '';
  width: ${({horizontal}) => horizontal ? '120%' : size(20)};
  height: ${({horizontal}) => !horizontal ? '120%' : size(20)};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  cursor: pointer;
}
.current{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #bfb6b4;
  transition: transform 500ms;
  
  .step-name{
    position: absolute;
    left: ${size(30)};
    font-size: ${size(25)};
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    opacity: 0;
    transition: opacity 400ms;
    color: #bfb6b4;
    font-size: ${size(16)};
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;
  }
}
 &:hover{
  .current{
    background-color: green;
  }
  .step-name{
    opacity: 1;
  }
}

`;

export default StepsProgress;