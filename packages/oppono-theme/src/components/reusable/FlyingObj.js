import React from 'react';
import {css, styled} from 'frontity';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import SpriteSheet from './SpriteSheet';
import useCombinedRefs from '../../hooks/useCombinedRefs';


function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}

const randomX = random(30, 60);
const randomY = random(60, 90);
const randomDelay = random(0, 1);
const randomTime = random(12, 20);
const randomTime2 = random(30, 60);
const randomAngle = random(56, 84);

const FlyingObj = React.forwardRef(({className, type, frames, imageUrl, alt, frame_x, frame_y, duration = 2, initial_duration = 0, yoyo = false, repeat = -1, repeatDelay = 0, paused = false, left, top, width, level, timelineAddCallback, isStart, isEnd, loop_start_index = 0}, forwardedRef) => {
  const innerRef = React.useRef(null);
  const combinedRef = useCombinedRefs(forwardedRef, innerRef);
  
  React.useEffect(() => {
    combinedRef.current.dataset.leve = level;
    if (type === 'image') {
      
      
      function rotate(target, direction) {
        
        gsap.to(target, {
          delay: randomDelay(),
          duration: randomTime2(),
          rotation: randomAngle(direction),
          ease: 'sine.inOut',
          onComplete: rotate,
          onCompleteParams: [target, direction * -1],
        });
      }
      
      function moveX(target, direction) {
        
        gsap.to(target, {
          duration: randomTime(),
          x: randomX(direction),
          ease: 'sine.inOut',
          onComplete: moveX,
          onCompleteParams: [target, direction * -1],
        });
      }
      
      function moveY(target, direction) {
        
        gsap.to(target, {
          duration: randomTime(),
          y: randomY(direction),
          ease: 'sine.inOut',
          onComplete: moveY,
          onCompleteParams: [target, direction * -1],
        });
      }
      
      
      moveX(combinedRef.current, Math.random() < 0.5 ? -1 : 1);
      moveY(combinedRef.current, Math.random() < 0.5 ? -1 : 1);
      rotate(combinedRef.current, Math.random() < 0.5 ? -1 : 1);
    }
    
    if (!timelineAddCallback) return;
    if (isStart) {
      timelineAddCallback?.(gsap.fromTo(combinedRef.current, {left}, {left: `+=${-level * 30}%`, ease: 'linear', duration: .25, immediateRender: true}));
    }
    else if (isEnd) {
      timelineAddCallback?.(gsap.fromTo(combinedRef.current, {left: `-=${-level * 30}%`}, {left, ease: 'linear', duration: .25, immediateRender: true}));
    }
    else {
      timelineAddCallback?.(gsap.fromTo(combinedRef.current, {left: `-=${-level * 30}%`}, {left: `+=${-level * 60}%`, ease: 'linear', duration: .5, immediateRender: true}));
    }
  }, []);
  return (
    type === 'image' ?
      <div ref={combinedRef} className={className} style={{width: typeof width === 'string' ? width : (width + '%'), top, left}}>
        <img className={'flying-obj'} src={imageUrl} alt={alt}/>
      </div> :
      <SpriteSheet
        ref={combinedRef}
        duration={duration}
        initial_duration={initial_duration}
        className={className + ' flying-obj'}
        width={typeof width === 'string' ? width : (width + '%')}
        frames={frames}
        alt={alt}
        imageUrl={imageUrl}
        yoyo={yoyo}
        repeatDelay={repeatDelay}
        paused={paused}
        loop_start_index={loop_start_index}
        frame_x={frame_x}
        frame_y={frame_y}
        css={css`top: ${top};left: ${left};`}
      />
  );
});

FlyingObj.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  imageUrl: PropTypes.string.isRequired,
  frames: PropTypes.number,
  duration: PropTypes.number,
  frame_x: PropTypes.number,
  frame_y: PropTypes.number,
  initial_duration: PropTypes.number,
  repeat: PropTypes.number,
  repeatDelay: PropTypes.number,
  paused: PropTypes.bool,
  yoyo: PropTypes.bool,
  className: PropTypes.string,
  alt: PropTypes.string,
  type: PropTypes.oneOf(['spriteSheet', 'image']),
  level: PropTypes.number,
  loop_start_index: PropTypes.number,
  top: PropTypes.string,
  left: PropTypes.string,
  timelineAddCallback: PropTypes.func,
  isStart: PropTypes.bool,
  isEnd: PropTypes.bool,
};

export default styled(FlyingObj)`
position: absolute;
height: auto;
pointer-events: none;
z-index: ${({level}) => level};
max-width: ${({width}) => width * 1920 / 100 + 'px'};
img.flying-obj{
  width: 100%;
  height: auto;
}
`;