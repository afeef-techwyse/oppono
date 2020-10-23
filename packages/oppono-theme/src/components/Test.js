import React from 'react';
import {styled} from 'frontity';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import {size} from '../functions/size';
import noiseSrc from '../assets/images/noise.png';


const Test = ({className}) => {
  
  return (
    <div className={className}>
      <div className="noise"><div className="noise-bg"></div></div>
    </div>
  );
};
Test.prototype = {
  className: PropTypes.string,
};
export default styled(Test)`
position: relative;
background:#071d6a;
background: radial-gradient(circle at top left, #144388 ,#071d6a 40%);
height: 100vh;
width: 100%;
overflow: hidden;
.noise{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    z-index: 0;
    .noise-bg{
    width: calc(100% + 20rem);
    height: calc(100% + 20rem);
    background-position: 50%;
    position: absolute;
    background: url(${noiseSrc});
    left: -10rem;
    top: -10rem;
    will-change: transform;
    animation: noise 1s steps(2) infinite;
    }
    @keyframes noise{0%{transform:translate3d(0,9rem,0)}10%{transform:translate3d(-1rem,-4rem,0)}20%{transform:translate3d(-8rem,2rem,0)}30%{transform:translate3d(9rem,-9rem,0)}40%{transform:translate3d(-2rem,7rem,0)}50%{transform:translate3d(-9rem,-4rem,0)}60%{transform:translate3d(2rem,6rem,0)}70%{transform:translate3d(7rem,-8rem,0)}80%{transform:translate3d(-9rem,1rem,0)}90%{transform:translate3d(6rem,-5rem,0)}to{transform:translate3d(-7rem,0,0)}}
}
`;