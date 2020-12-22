import React from 'react';
import {css, Global, styled, connect, useConnect} from 'frontity';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import gsap from 'gsap';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
import useCombinedRefs from '../../hooks/useCombinedRefs';
import {size} from '../../functions/size';
import FormStep from './FormStep';
import StepsProgress from './StepsProgress';

gsap.registerPlugin(ScrollToPlugin);
const Form = React.forwardRef(({className, children, wide}, forwardedRef) => {
  const innerRef = React.useRef(null);
  const combinedRef = useCombinedRefs(forwardedRef, innerRef);
  const [activeStep, setActiveStep] = React.useState(0);
  const initial = React.useRef(true);
  const reversed = React.useRef(true);
  const {actions, state} = useConnect();
  
  
  const resetCallback = () => {
    reversed.current = true;
    setActiveStep(0);
  };
  const nextCallback = () => {
    initial.current = false;
    reversed.current = false;
    setActiveStep(prevState => prevState + 1);
  };
  const prevCallback = () => {
    reversed.current = true;
    setActiveStep(prevState => prevState - 1);
  };
  
  React.useEffect(() => {
    gsap.to(window, {scrollTo: 0, duration: 0.2});
  }, [activeStep]);
  
  
  React.useEffect(() => {
    combinedRef.current.querySelector('input:not([type=hidden]), select')?.focus();
    let stepsCounter = 0;
    React.Children.forEach(children, (child) => {
      child.type === FormStep && stepsCounter++;
    });
    actions?.theme.setActiveStep({total: stepsCounter});
  
  }, []);
  return (<>
      <Global styles={css`html{overflow-y: scroll}`}/>
      <div ref={combinedRef} className={classnames(className, {wide})}>
        {state.theme.activeStep.total > 1 ? <StepsProgress/> : null}
        {React.Children.map(children, (child, index) => {
          return index === activeStep || true ? React.cloneElement(child,
            {
              ...child.props,
              active: activeStep === index,
              stepIndex: index,
              initial: initial.current,
              nextCallback,
              prevCallback,
              resetCallback,
            }) : null;
          },
        )}
      </div>
    </>
   
  );
});

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  wide: PropTypes.bool,
};


export default styled(connect(Form))`
&.wide{
  max-width: 100%;
}
padding-top: ${size(200)};
position: relative;
${StepsProgress}{
  position: fixed;
  height: 30%;
  top: 50%;
  left: ${size(50)};
  transform: translateY(-50%);
  z-index: 100;
  @media(max-width: 991.98px){
    left: ${size(33)};
  }
  
  @media(max-width: 575.98px){
    display: none;
  }
}

`;
