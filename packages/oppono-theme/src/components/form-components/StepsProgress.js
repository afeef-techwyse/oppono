import React from "react";
import {connect, styled} from "frontity";
import {size} from "../../functions/size";
import classnames from "classnames";

const StepsProgress = styled(
    connect(({className, state, horizontal = false}) => {
      const [active, setActive] = React.useState(0);
      return (
          <div className={className} style={{flexDirection:horizontal?'row':'column'}}>
            {
              [
                ...Array(state.theme.activeStep.total || 0).keys(),
              ].map((index) =>
                  <div key={index}
                       className={classnames('step-indicator',
                           {
                             active: index === state.theme.activeStep.current,
                             finished: index < state.theme.activeStep.current
                           })}
                       style={{
                         height: horizontal
                             ? "100%"
                             : 100 / state.theme.activeStep.total + "%",
                         width: !horizontal
                             ? "100%"
                             : 100 / state.theme.activeStep.total + "%",
                         margin: horizontal ? '0 2px':'2px 0'
                       }}
                  >
                    <div className="step-name">{state.theme.activeStep.allStepsNames[index]}</div>
                  </div>
              )
            }
          
          </div>
      );
    })
)`
  position: relative;
  width: ${({horizontal}) => (horizontal ? "" : size(2))};
  height: ${({horizontal}) => (!horizontal ? "" : size(2))};
  background-color: rgba(191, 182, 180, 0.1);
  display: flex;
  //align-items: stretch;
  //justify-content: stretch;
  
  &:after {
    content: "";
    width: ${({horizontal}) => (horizontal ? "120%" : size(20))};
    height: ${({horizontal}) => (!horizontal ? "120%" : size(20))};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    cursor: pointer;
  }
  
  .step-indicator {
    position: relative;
    width: 100%;
    transition: transform 500ms;
    background-color: yellow;
    box-sizing: border-box;
    
    .step-name {
      position: absolute;
      left: ${size(30)};
      font-size: ${size(22)};
      padding-left: 8px !important;;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
      //opacity: 0;
      transition: opacity 400ms;
      color: yellow;
      font-size: ${size(16)};
      font-weight: 400;
      text-align: center;
      text-transform: uppercase;
      white-space: nowrap;
    }
    
    &.active {
      background-color: #bfb6b4;
      
      .step-name {
        color: #bfb6b4;
        
      }
    }
    
    &.finished {
      background-color: #1a921a;
      
      .step-name {
        color: #1a921a;
        
      }
    }
    
  }
  
  &:hover {
    .current {
      background-color: green;
    }
    
    .step-name {
      opacity: 1;
    }
  }
`;

export default StepsProgress;
