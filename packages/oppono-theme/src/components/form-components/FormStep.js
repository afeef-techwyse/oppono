import React from 'react';
import {connect,useConnect, styled} from 'frontity';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import gsap from 'gsap';
import useCombinedRefs from '../../hooks/useCombinedRefs';
import {size} from '../../functions/size';
import useMedia from '../../hooks/useMedia';

const FormStep = ({activeTheme, pageName, stepName, className, children, active = false, initial = false, nextCallback, prevCallback, resetCallback, stepIndex}) => {
  const stepRef = React.useRef(null);
  const media = useMedia();
  const {actions} = useConnect();
  React.useEffect(() => {
    const prevBtns = stepRef.current.querySelectorAll('.prev-step');
    const nextBtns = stepRef.current.querySelectorAll('.next-step');
    const resetBtns = stepRef.current.querySelectorAll('.reset-form');
    
    for (let prevBtn of prevBtns) {
      prevBtn?.addEventListener('click', prevCallback);
    }
    for (let nextBtn of nextBtns) {
      nextBtn?.addEventListener('click', () => {
        let isValid = true;
        for (let querySelectAllElement of stepRef.current.querySelectorAll('input,select,textarea')) {
          querySelectAllElement.checkValidity() || (isValid = false);
        }
  
        if (isValid) {
          const formData = new FormData(stepRef.current);
          nextCallback();
          actions.theme.setSelectedValues({[`${pageName}-${stepName}`]: formData});
          //todo send formData to backend
        }
        else {
          const firstInvalidInput = stepRef.current.querySelector(':invalid');
          gsap.to(window, {
            duration: .5,
            scrollTo: {y: firstInvalidInput, offsetY: (window.innerHeight - firstInvalidInput.getBoundingClientRect().height) / 2},
          });
        }
      });
    }
    for (let resetBtn of resetBtns) {
      resetBtn?.addEventListener('click', resetCallback);
    }
    return () => {
      for (let prevBtn of prevBtns) {
        prevBtn?.removeEventListener('click', prevCallback);
      }
      for (let nextBtn of nextBtns) {
        nextBtn?.removeEventListener('click', nextCallback);
      }
      for (let resetBtn of resetBtns) {
        resetBtn?.removeEventListener('click', resetCallback);
      }
    };
  
  }, [media]);
  
  React.useEffect(() => {
    if (active) {
      if (initial) {
  
        gsap.timeline()
          .set(stepRef.current, {autoAlpha: 1, height: 'auto', duration: .5, y: 0})
          .from(stepRef.current.children, {autoAlpha: 0, y: 30, stagger: 0.1, clearProps: 'all'});
      }
      else {
        setTimeout(() =>
            gsap.timeline()
              .fromTo(stepRef.current, {autoAlpha: 0, display: 'none'}, {autoAlpha: 1, display: 'block', duration: .001})
              .fromTo(stepRef.current, {height: 0, y: 300}, {height: 'auto', duration: .5, y: 0})
              .fromTo(stepRef.current.children, {autoAlpha: 0, y: 30}, {autoAlpha: 1, y: 0, stagger: 0.1})
          , 1000);
      }
    }
    else {
      if (!initial) {
        let tl = gsap.timeline({paused: true})
          // .set(stepRef.current, {display: 'none'})
          // .set(stepRef.current, {autoAlpha: 0})
  
          .fromTo(stepRef.current, {autoAlpha: 0, display: 'none'}, {autoAlpha: 1, display: 'block', duration: .001})
          .fromTo(stepRef.current, {height: 0, y: 300}, {height: 'auto', duration: .5, y: 0})
          .fromTo(stepRef.current.children, {autoAlpha: 0, y: 30}, {autoAlpha: 1, y: 0, stagger: 0.1})
          .progress(1);
        tl.timeScale(tl.duration()).reverse();
      }
    }
    active && actions.theme.setActiveStep({stepName, current: stepIndex});
    active && actions.theme.setActiveTheme(activeTheme);
  }, [active]);
  
  
  return (
    <form ref={stepRef} onSubmit={e => e.preventDefault()} className={classnames(className, {active})} style={{visibility: active ? 'visible' : 'hidden'}}>
      {children}
    </form>
  );
};

FormStep.propTypes = {
  className: PropTypes.string,
  stepIndex: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
  initial: PropTypes.bool,
  reversed: PropTypes.bool,
  formTl: PropTypes.any,
  nextCallback: PropTypes.func.isRequired,
  prevCallback: PropTypes.func.isRequired,
  resetCallback: PropTypes.func.isRequired,
  activeTheme: PropTypes.string,
};

export default styled(connect(FormStep))`
opacity: 0;
position: relative;
top: 0;
left: 0;
width: 100%;
margin: 0 auto;
z-index: 0;
height: 0;
// > *:not(.form-text-wrapper) {
//   @media(max-width: 991.98px){
//       padding-left: ${size(32)};
//   }
//   @media(max-width: 575.98px){
//       padding-left: 0;
//   }
// }
> *:not(.form-text-wrapper):not(.form-wide-container):not(.appraiser-wide) {
    max-width: ${size(580)};
    margin-right: auto;
    margin-left: auto;
  @media(max-width: 991.98px){
      max-width: ${size(400)};
  }
  @media(max-width: 575.98px){
      max-width: 84%;
  }
}
.form-text-wrapper{
    max-width: ${size(720)};
    margin-right: auto;
    margin-left: auto;
    margin-bottom: ${size(82)};
  @media(max-width: 991.98px){
      margin-bottom: ${size(55)};
      margin-left: ${size(32)};
  }
}
div.upload-step-wrapper{
max-width: ${size(720)}!important;
margin-right: auto!important;
margin-left: auto!important;
@media(max-width: 991.98px){
  max-width: ${size(720)}!important;
  margin-left: ${size(32)}!important;
  margin-right: ${size(32)}!important;
}
}
&.active{
  z-index: 5;
}
button{
margin-top: ${size(80)};
}
`;