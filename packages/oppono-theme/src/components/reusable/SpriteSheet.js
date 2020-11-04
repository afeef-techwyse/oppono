import React from 'react';
import {styled} from 'frontity';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import gsap from 'gsap';

const SpriteSheet = React.forwardRef(({className, frames, imageUrl, alt, loopStartIndex = 0, isVertical = false, duration = 2, yoyo = false, repeat = -1, repeatDelay = 5, paused = false}, forwardedRef) => {
  const image = React.useRef(null);
  const spriteSheetRef = React.useRef(gsap.timeline({paused}));
  
  React.useEffect(() => {
    spriteSheetRef.current
      .fromTo(image.current, {xPercent: 0}, {xPercent: -100 * (loopStartIndex) / frames, ease: `steps(${loopStartIndex})`, duration: duration * loopStartIndex / (frames - 1)})
      .fromTo(image.current, {xPercent: -100 * (loopStartIndex) / frames}, {
        xPercent: -100 * (frames - 1) / frames,
        ease: `steps(${frames - loopStartIndex - 1})`,
        duration: duration * 1 - (loopStartIndex / (frames - 1)),
        yoyo,
        repeat,
        repeatDelay,
        immediateRender: false,
      });
  }, []);
  
  React.useEffect(() => {
    spriteSheetRef.current.paused(paused);
  }, [paused]);
  
  
  return (
    <div ref={forwardedRef} className={className}>
      <img ref={image} className={classnames({vertical: isVertical})} src={imageUrl} alt={alt}/>
    </div>
  );
});

SpriteSheet.propTypes = {
  width: PropTypes.string.isRequired,
  frames: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  duration: PropTypes.number,
  repeat: PropTypes.number,
  repeatDelay: PropTypes.number,
  paused: PropTypes.bool,
  isVertical: PropTypes.bool,
  yoyo: PropTypes.bool,
  className: PropTypes.string,
  loopStartIndex: PropTypes.number,
  alt: PropTypes.string,
};

export default styled(SpriteSheet)`
overflow:hidden;
width: ${({width}) => width};
height: auto;
img{
  width: ${({frames}) => 100 * frames + '%'};
  height: auto;
}
`;