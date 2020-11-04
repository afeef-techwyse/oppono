import React from 'react';
import {css, styled} from 'frontity';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import SpriteSheet from './SpriteSheet';
import useCombinedRefs from '../../hooks/useCombinedRefs';

const FlyingObj = React.forwardRef(({className, type, frames, imageUrl, alt, isVertical = false, duration = 2, yoyo = false, repeat = -1, repeatDelay = 0, paused = false, left, top, width, level, timelineAddCallback, isStart, isEnd, loopStartIndex = 0}, forwardedRef) => {
  
  const innerRef = React.useRef(null);
  const combinedRef = useCombinedRefs(forwardedRef, innerRef);
  
  React.useEffect(() => {
    if (isStart) {
      timelineAddCallback?.(gsap.fromTo(combinedRef.current, {left}, {left: `+=${-level * 30}%`, ease: 'linear', duration: .25}));
    }
    else if (isEnd) {
      timelineAddCallback?.(gsap.fromTo(combinedRef.current, {left: `-=${-level * 30}%`}, {left, ease: 'linear', duration: .25}));
    }
    else {
      timelineAddCallback?.(gsap.fromTo(combinedRef.current, {left: `-=${-level * 30}%`}, {left: `+=${-level * 60}%`, ease: 'linear', duration: .5}));
    }
  }, []);
  console.log(isStart, isEnd);
  return (
    type === 'image' ?
      <div ref={combinedRef} className={className} style={{width, top, left}}>
        <img className={'flying-obj'} src={imageUrl} alt={alt}/>
      </div> :
      <SpriteSheet
        ref={combinedRef}
        duration={duration}
        className={className + ' flying-obj'}
        width={width}
        frames={frames}
        alt={alt}
        imageUrl={imageUrl}
        yoyo={yoyo}
        repeatDelay={repeatDelay}
        paused={paused}
        loopStartIndex={loopStartIndex}
        css={css`top: ${top};left: ${left};`}
      />
  );
});

FlyingObj.propTypes = {
  width: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  frames: PropTypes.number,
  duration: PropTypes.number,
  repeat: PropTypes.number,
  repeatDelay: PropTypes.number,
  paused: PropTypes.bool,
  isVertical: PropTypes.bool,
  yoyo: PropTypes.bool,
  className: PropTypes.string,
  alt: PropTypes.string,
  type: PropTypes.oneOf(['spriteSheet', 'image']),
  level: PropTypes.number,
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
img.flying-obj{
  width: 100%;
  height: auto;
}
`;