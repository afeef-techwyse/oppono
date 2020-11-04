import React from 'react';
import PropTypes from 'prop-types';
import useStateWithRef from '../hooks/useStateWithRef';

import {styled, css} from 'frontity';

import noiseSrc from '../assets/images/noise.png';
import img1 from '../assets/images/fly-image-1.png';
import img2 from '../assets/images/fly-image-2.png';
import img3 from '../assets/images/fly-image-3.png';
import img4 from '../assets/images/fly-image-4.png';
import img5 from '../assets/images/fly-image-5.png';
import img6 from '../assets/images/fly-image-6.png';
import img7 from '../assets/images/fly-image-7.png';
import img8 from '../assets/images/fly-image-8.png';
import sprite1 from '../assets/sprite-sheets/sprite-slide-1.png';
import sprite2 from '../assets/sprite-sheets/sprite-slide-2.png';
import homeSprite1 from '../assets/sprite-sheets/home-slider/home_slide_01.png';
import homeSprite2 from '../assets/sprite-sheets/home-slider/home_slide_02.png';
import homeSprite3 from '../assets/sprite-sheets/home-slider/home_slide_03.png';
import homeSprite4 from '../assets/sprite-sheets/home-slider/home_slide_04.png';
import homeSprite5 from '../assets/sprite-sheets/home-slider/home_slide_05.png';
import homeSprite6 from '../assets/sprite-sheets/home-slider/home_slide_06.png';
import homeSprite7 from '../assets/sprite-sheets/home-slider/home_slide_07.png';


import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import CustomEase from 'gsap/CustomEase';

import SwiperCore, {Navigation, Pagination, Keyboard, Mousewheel, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import {size} from '../functions/size';

import Container from './reusable/Container';
import SpriteSheet from './reusable/SpriteSheet';
import Header from './Header';
import Footer from './Footer';
import FlyingObj from './reusable/FlyingObj';

SwiperCore.use([Navigation, Pagination, Keyboard, Mousewheel, A11y]);
gsap.registerPlugin(SplitText, DrawSVGPlugin, CustomEase);

const Slider = styled(Swiper)`
z-index: 5;
width: 100%;
position: relative;
overflow: visible !important;
.swiper-wrapper, .swiper-slide{
  //transition: none !important;
}
.title-wrapper{
  position: relative;
   @media(max-width: 991.98px){
    margin-left: ${size(32)};
  }
  @media(max-width: 575.98px){
      margin-left: ${size(21)};
  }
    .slide-number{
    color: #b5d2ff;
    font-size: ${size(10)};
    font-weight: 700;
    width: ${size(23)};
    height: ${size(23)};
    border: 1px solid rgba(181, 210, 255, 0.4);
    border-radius: 50%;
    position: absolute;
    left: ${size(-35)};
    top: ${size(30)};
    display: flex;
    align-items: center;
    justify-content: center;
    @media(max-width: 575.98px){
      font-size: ${size(8)};
      left: ${size(-24)};
      width: ${size(16)};
      top: ${size(12)};
      height: ${size(16)};
    }
  }
.title{
  color: #b5d2ff;
  font-size: ${size(80)};
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: ${size(95)};
  text-align: left;
  white-space: pre-wrap;
  @media(max-width: 991.98px){
    font-size: ${size(60)};
    line-height: ${size(70)};
  }
  @media(max-width: 575.98px){
      font-size: ${size(32)};
      line-height: ${size(36)};
  }
}
}

.btn{
  width: auto;
  max-width: fit-content;
  padding: 0 ${size(32)};
  height: ${size(64)};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${size(32)};
  background-color: #fe412d;
  color: #ffffff;
  font-size: ${size(16)};
  font-weight: 500;
  text-decoration: none;
  margin-top: ${size(24)};
  cursor: pointer;
  white-space: nowrap;
  &:hover, &:active, &:focus{
    text-decoration: none;
  }
  
  svg{
    width: ${size(13)};
    height: ${size(13)};
    margin-left: ${size(8)};
  }
  @media(max-width: 991.98px){
    margin-left: ${size(32)};
    height: ${size(56)};
  }
  @media(max-width: 575.98px){
    display: none;
  }
}

`;

const createSlideAnimation = (slide, paused = true) => {
  if (!slide) return;
  const
    slideAnimationTl = gsap.timeline({paused}),
    title = slide.querySelector('.title'),
    btn = slide.querySelector('.btn'),
    slideNumber = slide.querySelector('.slide-number'),
    btnText = btn.querySelector('.text'),
    btnEnter = btn.querySelectorAll('.enter-arrow path');
  let splitted = false;
  if (title.classList.contains('splitted')) splitted = true;
  const titleWords = !splitted && new SplitText(title, {type: 'words'}),
    btnChars = !splitted && new SplitText(btnText, {type: 'chars'});
  
  title.classList.add('splitted');
  btnText.classList.add('splitted');
  
  slideAnimationTl
    .fromTo(splitted ? title.children : titleWords.words, {autoAlpha: 0, y: 20}, {autoAlpha: 1, y: 0, stagger: 0.06})
    
    .fromTo(btn, {autoAlpha: 0, y: 10}, {autoAlpha: 1, y: 0}, '-=.4')
    
    .fromTo(btn, {width: 0}, {width: 'auto', ease: 'power2.in'}, '-=.3')
    .fromTo(slideNumber, {autoAlpha: 0, scale: 0}, {autoAlpha: 1, scale: 1}, '<')
    
    .fromTo(splitted ? btnText.children : btnChars.chars, {autoAlpha: 0, y: 10}, {autoAlpha: 1, y: 0, stagger: 0.05, duration: .3}, '-=.1')
    .fromTo(btnEnter, {drawSVG: 0}, {drawSVG: '100%', stagger: .3}, '-=.1');
  return slideAnimationTl;
};


const Test = ({className, active = false}) => {
  const nextBtnRef = React.useRef(null);
  const prevBtnRef = React.useRef(null);
  const paginationRef = React.useRef(null);
  const flyingWrapperRef = React.useRef(null);
  const slidesNumbers = React.useRef(null);
  const footer = React.useRef(null);
  const header = React.useRef(null);
  const welcomeMessage = React.useRef(null);
  const [swiperRef, setSwiperRef] = React.useState(null);
  const [slideFlyingObjectsPlaying, setSlideFlyingObjectsPlaying] = React.useState([]);
  
  const slidesAnimation = React.useRef({});
  const slidesTransition = React.useRef(0);
  const initialTimeline = React.useRef(gsap.timeline({paused: !active}));
  const flyingObjectsAnimation = React.useRef(gsap.timeline({paused: true}));
  
  const [currentSlide, setCurrentSlide, currentSlideRef] = useStateWithRef(0);
  
  const swiperInit = (swiper) => {
    
    
    const {slides} = swiper;
    for (let i = 0; i < slides?.length; i++) {
  
      slidesAnimation.current[i] = createSlideAnimation(slides[i]);
  
    }
    setSwiperRef(swiper);
  };

  
  const slidesObj = [
    {
      title: 'I’ve got everything,<br/>I just want to apply',
      btn: {
        text: 'Let\'s Go',
        link: '#',
      },
      flyingObjects: [
        {
          type: 'spriteSheet',
          imageUrl: homeSprite1,
          frames: 211,
          loopStartIndex: 29,
          repeat: -1,
          yoyo: false,
          width: '25%',
          duration: 6,
          top: '38%',
          left: 70,
          alt: '',
          level: 2,
        },
      ],
      mobileObj: {
        type: 'spriteSheet',
        imageUrl: homeSprite1,
        frames: 211,
        loopStartIndex: 29,
        repeat: -1,
        yoyo: false,
        width: '60%',
        duration: 6,
      },
    },
    {
      title: 'want to know what<br/>my client qualifies for',
      btn: {
        text: 'Let\'s Go',
        link: '#',
      },
      flyingObjects: [
        {
          type: 'spriteSheet',
          imageUrl: homeSprite2,
          frames: 91,
          repeat: -1,
          yoyo: false,
          width: '20%',
          duration: 3,
          top: '57%',
          left: 72,
          alt: '',
          level: 2,
        },
      ],
      mobileObj: {
        type: 'spriteSheet',
        imageUrl: homeSprite2,
        frames: 91,
        repeat: -1,
        yoyo: false,
        width: '60%',
        duration: 3,
      },
    },
    {
      title: 'What do I<br/>qualify for?',
      btn: {
        text: 'Let\'s Go',
        link: '#',
      },
      flyingObjects: [
        {
          type: 'spriteSheet',
          imageUrl: homeSprite3,
          frames: 230,
          repeat: -1,
          yoyo: false,
          width: '30%',
          duration: 6,
          top: '26%',
          left: 62,
          alt: '',
          level: 2,
        },
      ],
      mobileObj: {
        type: 'spriteSheet',
        imageUrl: homeSprite3,
        frames: 230,
        repeat: -1,
        yoyo: false,
        width: '60%',
        duration: 6,
      },
    },
    {
      title: 'I want to see Oppono’s<br/>lending areas',
      btn: {
        text: 'Let\'s Go',
        link: '#',
      },
      flyingObjects: [
        {
          type: 'spriteSheet',
          imageUrl: homeSprite4,
          frames: 181,
          loopStartIndex: 31,
          repeat: -1,
          yoyo: false,
          width: '25%',
          duration: 6,
          top: '40%',
          left: 75,
          alt: '',
          level: 2,
        },
      ],
      mobileObj: {
        type: 'spriteSheet',
        imageUrl: homeSprite4,
        frames: 181,
        loopStartIndex: 29,
        repeat: -1,
        yoyo: false,
        width: '47%',
        duration: 6,
      },
    },
    {
      title: 'Just browse through<br/>the rates & products',
      btn: {
        text: 'Let\'s Go',
        link: '#',
      },
      flyingObjects: [
        {
          type: 'spriteSheet',
          imageUrl: homeSprite5,
          frames: 151,
          repeat: -1,
          yoyo: false,
          width: '20%',
          duration: 6,
          top: '5%',
          left: 76,
          alt: '',
          level: 2,
        },
      ],
      mobileObj: {
        type: 'spriteSheet',
        imageUrl: homeSprite5,
        frames: 151,
        repeat: -1,
        yoyo: false,
        width: '40%',
        duration: 6,
      },
    },
    {
      title: 'I’m looking for a secured<br/>business line of credit',
      btn: {
        text: 'Let\'s Go',
        link: '#',
      },
      flyingObjects: [
        {
          type: 'spriteSheet',
          imageUrl: homeSprite6,
          frames: 133,
          repeat: -1,
          yoyo: false,
          width: '12%',
          duration: 6,
          top: '2%',
          left: 65,
          alt: '',
          level: 2,
        },
      ],
      mobileObj: {
        type: 'spriteSheet',
        imageUrl: homeSprite6,
        frames: 133,
        repeat: -1,
        yoyo: false,
        width: '28%',
        duration: 6,
      },
    },
    {
      title: 'I’m looking for a secured<br/>business line of credit',
      btn: {
        text: 'Let\'s Go',
        link: '#',
      },
      flyingObjects: [
        {
          type: 'spriteSheet',
          imageUrl: homeSprite7,
          frames: 151,
          loopStartIndex: 60,
          repeat: -1,
          yoyo: false,
          width: '25%',
          duration: 3,
          top: '4%',
          left: 80,
          alt: '',
          level: 2,
        },
      ],
      mobileObj: {
        type: 'spriteSheet',
        imageUrl: homeSprite7,
        frames: 151,
        loopStartIndex: 43,
        repeat: -1,
        yoyo: false,
        width: '60%',
        duration: 6,
      },
    },
  ];
  // const flyingWrapperPositionHandler = () => {
  //   flyingWrapperRef.current.style.top = '0px';
  //   flyingWrapperRef.current.style.top = -flyingWrapperRef.current.getBoundingClientRect().top + 'px';
  //   flyingWrapperRef.current.style.height = window.innerHeight + 'px';
  // };
  
  
  React.useEffect(() => {
    const keyHandler = event => {
      if (event.key === 'Enter' && !event.repeat) {
        console.log(currentSlideRef.current);
      }
    };
    window.addEventListener('keydown', keyHandler);
    // window.addEventListener('resize', flyingWrapperPositionHandler);
    return () => {
      window.removeEventListener('keydown', keyHandler);
      // window.removeEventListener('resize', flyingWrapperPositionHandler);
    };
    
  }, []);
  
  React.useEffect(() => {
    const slideAnimationTl = createSlideAnimation(swiperRef?.slides[0], false);
    if (!slideAnimationTl) return;
    const
      nextArrow = nextBtnRef.current.querySelectorAll('svg path'),
      prevArrow = prevBtnRef.current.querySelectorAll('svg path'),
      footerLeft = footer.current.querySelectorAll('.footer-left .guid'),
      headerLinks = header.current.querySelector('.menu-right'),
      footerRight = footer.current.querySelectorAll('.footer-right a'),
      // paginationDots = paginationRef.current.querySelectorAll('.swiper-pagination-bullet'),
      welcomeTitle = welcomeMessage.current.querySelectorAll('.title'),
      welcomeSubtitle = welcomeMessage.current.querySelectorAll('.subtitle'),
      welcomeTitleWords = new SplitText(welcomeTitle, {type: 'words'}),
      welcomeSubtitleWords = new SplitText(welcomeSubtitle, {type: 'words'})
    ;
    initialTimeline.current.clear();
    initialTimeline.current
      .fromTo(flyingWrapperRef.current, {yPercent: 100}, {yPercent: 0})
      .fromTo(welcomeTitleWords.words, {autoAlpha: 0, y: 10}, {autoAlpha: 1, y: 0, stagger: 0.06}, '0')
      .fromTo(welcomeSubtitleWords.words, {autoAlpha: 0, y: 10}, {autoAlpha: 1, y: 0, stagger: 0.06}, '>-=.35')
      .addLabel('initial-slide')
      .fromTo(slidesNumbers.current, {autoAlpha: 0, scale: 0}, {autoAlpha: 1, scale: 1}, 'initial-slide')
      .fromTo(headerLinks, {autoAlpha: 0, y: 10}, {autoAlpha: 1, y: 0, stagger: 0.05}, '1')
      .call(() => {
        setSlideFlyingObjectsPlaying(prevState => {
          const newState = [...prevState];
          newState[0] = true;
          return newState;
        });
      }, null, 'initial-slide-=1')
      .fromTo(nextArrow, {drawSVG: 0}, {drawSVG: '100%', stagger: 0.5}, 'initial-slide+=.5')
      .fromTo(prevArrow, {drawSVG: 0}, {drawSVG: '100%', stagger: 0.5}, 'initial-slide+=.5')
      .fromTo(footerLeft, {autoAlpha: 0, y: 10}, {autoAlpha: 1, y: 0, stagger: 0.1}, 'initial-slide+=1')
      .fromTo(footerRight, {autoAlpha: 0, y: 10}, {autoAlpha: 1, y: 0, stagger: 0.1}, '>-=.35')
      .fromTo(paginationRef.current, {autoAlpha: 0, y: 10, xPercent: -50}, {autoAlpha: 1, y: 0, stagger: 0.1}, '<')
      .call(() => initialTimeline.current.remove(slideAnimationTl))
      .add(slideAnimationTl, 'initial-slide')
    ;
    
  }, [swiperRef]);
  
  React.useEffect(() => {
    initialTimeline.current.paused(!active);
  }, [active]);
  
  return (
    <div className={className}>
      <div className="noise">
        <div className="noise-bg"/>
      </div>
      <Header ref={header}/>
      <div ref={flyingWrapperRef} className="flying-obj-wrapper" slot={'wrapper-start'}>
        {
          slidesObj.map((slide, slideIndex) => slide.flyingObjects?.map((obj, objIndex) =>
            <FlyingObj
              ref={el => obj.ref = el}
              key={`slide-${slideIndex}-obj-${objIndex}`}
              {...obj}
              paused={!slideFlyingObjectsPlaying[slideIndex]}
              left={obj.left + 100 * slideIndex + '%'}
              isStart={slideIndex === 0}
              isEnd={slideIndex === slidesObj.length - 1}
              timelineAddCallback={(tl) => {
                flyingObjectsAnimation.current.add(tl, slideIndex === 0 ? 0 : (slideIndex - 1) * .25);
              }}
            />,
          ))
        }
      </div>
      <div className="vertical-center">
        <Container>
          <div ref={welcomeMessage} className="welcome-text">
            <h3 className={'title'}>Thanks for choosing us.</h3>
            <h2 className={'subtitle'}>Select an option:</h2>
          </div>
        </Container>
        <Slider
          speed={1500}
          a11y
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            prevEl: prevBtnRef.current,
            nextEl: nextBtnRef.current,
          }}
          pagination={{clickable: true, el: paginationRef.current}}
          onSwiper={swiperInit}
          keyboard
          mousewheel
          virtualTranslate
          onSetTransition={(swiper, transition) => {
            slidesTransition.current = transition / 1000;
          }}
          onSetTranslate={(swiper, translate) => {
            gsap.set(swiper.$wrapperEl, {x: translate});
            gsap.to(flyingWrapperRef.current, {
              x: translate,
              duration: slidesTransition.current,
              ease: CustomEase.create('custom', 'M0,0 C0.25,0.1 0.25,1 1,1 '),
            });
            gsap.to(flyingObjectsAnimation.current, {
              progress: -translate / (swiper.virtualSize - window.innerWidth),
              duration: slidesTransition.current,
              ease: CustomEase.create('custom', 'M0,0 C0.25,0.1 0.25,1 1,1 '),
            });
          }}
          onTransitionEnd={(swiper) => {
            const {realIndex, previousIndex} = swiper;
            if (realIndex === currentSlideRef.current) return;
            slidesAnimation.current[realIndex].progress(0).play();
            slidesAnimation.current[previousIndex].progress(1).paused(true).progress(0);
            setCurrentSlide(realIndex);
            setSlideFlyingObjectsPlaying(prevState => {
              const newState = [...prevState];
    
              newState[realIndex] = true;
              return newState;
            });
          }}
        >
          <div className={'swiper-arrows'} slot={'container-start'}>
            <Container>
              <span className={'prev'} ref={prevBtnRef}>
                <svg viewBox="0 0 99 10">
    <path fill="none" stroke="#b5d2ff" d="M99 5H0"/>
    <path fill="none" stroke="#b5d2ff" d="M5 0L0 5 L5 10"/>
</svg>
              </span>
              <span ref={slidesNumbers} className={'slides-numbers'}>
                {currentSlide + 1}<span> /</span> {slidesObj.length}</span>
              <span className={'next'} ref={nextBtnRef}>
                <svg viewBox="0 0 99 10">
    <path fill="none" stroke="#b5d2ff" d="M0 5H99"/>
    <path fill="none" stroke="#b5d2ff" d="M94 10L99 5L94 0"/>
</svg>
              </span>
            </Container>
          </div>
  
          {
            slidesObj.map((slide, slideIndex) =>
              <SwiperSlide key={`slide-${slideIndex}`}>
                <Container>
                  <FlyingObj
                    {...slide.mobileObj}
                    isStart={false}
                    isEnd={false}
                    className={'mobile-icon'}
                    paused={!slideFlyingObjectsPlaying[slideIndex]}
                  />
                  <div className="title-wrapper">
                    <span className={'slide-number'}>{slideIndex + 1}</span>
                    <div className={'title'} dangerouslySetInnerHTML={{__html: slide.title}}/>
                  </div>
                  <a className={'btn'} href={slide.btn.link + slideIndex}>
                    <span className="text">{slide.btn.text}</span>
                    <svg className={'enter-arrow'} viewBox="0 0 13 13">
                      <path stroke="white" strokeWidth="2.5" fill="none" d="M11.8 0V7.8H1.0"/>
                      <path stroke="white" strokeWidth="2.5" fill="none" d="M6.4 3 L1.8 7.8 6.4 12.3"/>
                    </svg>
                  </a>
                </Container>
              </SwiperSlide>,
            )
          }
        </Slider>
        <div ref={paginationRef}/>
        <Container className={'btn-mobile-container'}>
          <a className={'btn-mobile'} href={slidesObj[currentSlide].btn.link + currentSlide}>
            {slidesObj[currentSlide].btn.text}
          </a>
        </Container>
      </div>
      <Footer ref={footer}/>
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
  opacity: 0.25;
  .noise-bg{
    width: calc(100% + 20rem);
    height: calc(100% + 20rem);
    position: absolute;
    background: url(${noiseSrc}) 50%;
    left: -10rem;
    top: -10rem;
    will-change: transform;
  }
}
.vertical-center{
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: stretch;
  height: 100%;
  flex-direction: column;
  z-index: 0;
  @media(max-width: 575.98px){
    justify-content: flex-start;
    padding-top: ${size(110)};
  }
  .container{
    @media(min-width: 992px){
      padding-left: ${size(120)};
    }
  }
}
.welcome-text{
z-index: 4;
position: relative;
  margin-bottom: ${size(45)};
  @media(max-width: 991.98px){
    margin-bottom: ${size(128)};
  }
  @media(max-width: 575.98px){
    margin-bottom: ${size(21)};
  }
  .title{
    color: #b5d2ff;
    font-size: ${size(40)};
    font-weight: 400;
    @media(max-width: 991.98px){
      font-size: ${size(35)};
    }
    @media(max-width: 575.98px){
      font-size: ${size(32)};
    }
  }
  .subtitle{
    color: rgba(181, 210, 255, 0.4);
    font-size: ${size(29)};
    font-weight: 400;
    @media(max-width: 991.98px){
     font-size: ${size(24)};
    }
    @media(max-width: 575.98px){
      font-size: ${size(20)};
    }
  }
}
.swiper-arrows{
  position: absolute;
  width: 100%;
  bottom: 100%;
  right: 0;
  z-index: 5;
  @media(max-width: 575.98px){
    display: none;
  }
  ${Container}{
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .prev,.next{
    cursor: pointer;
    transition: margin .4s ease, width .4s ease,opacity .4s ease;
    overflow: hidden;
    width: ${size(99)};
    position: relative;
    height: ${size(30)};
    display: flex;
    align-items: center;
    svg{
      position:absolute;
      width: ${size(99)};
      height: ${size(10)};
    }
    &.swiper-button-disabled{
    cursor: not-allowed;
      opacity: .4;
      width: ${size(50)};
    }
  }
  .prev{
    svg{
      left: 0;
    }
  }
  .next{
    svg{
      right: 0;
    }
    &.swiper-button-disabled{
      margin-right: ${size(49)};
    }
  }
  
  
  .slides-numbers{
    color: #b5d2ff;
    font-size: ${size(12)};
    font-weight: 500;
    font-style: normal;
    letter-spacing: normal;
    line-height: ${size(95)};
    text-align: left;
    margin: 0 ${size(15)};
    span{
      margin-left: ${size(9)};
      margin-right: ${size(5)};
    }
  }
}
.swiper-pagination-bullets {
  position: absolute;
  bottom: ${size(80)};
  left: 50%;
  display: flex;
  z-index: 9;
  @media(max-width: 991.98px){
     bottom: ${size(70)};
  }
  @media(max-width: 575.98px){
   bottom: ${size(186)};
  }
  .swiper-pagination-bullet{
    width: ${size(8)};
    height: ${size(8)};
    @media(max-width: 575.98px){
      width: ${size(21)};
      height: ${size(21)};
     }
    border-radius: 50%;
    background-color: rgba(181, 210, 255, 0.4);
    margin: 0 ${size(5)};
    cursor: pointer;
    transition: 400ms ease;
    &:hover{
      background-color: rgba(181, 210, 255, 0.7);
    }
    &.swiper-pagination-bullet-active{
      background-color: #b5d2ff;
    }
  }
}
.btn-mobile-container{
 position: absolute;
    bottom: ${size(113)};
    z-index: 9;
  @media(min-width: 576px){
     display: none;
  }
  .btn-mobile{
    width: 100%;
    height: ${size(56)};
    border-radius:  ${size(32)};
    background-color: #fe412d;
    font-size:  ${size(16)};
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
}
.mobile-icon{
  @media(min-width: 576px){
    display: none;
  }
     position: relative;
      margin: 0 auto;
      display: block;
      margin-bottom: ${size(24)};
}

.flying-obj-wrapper{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @media(max-width: 575.98px){
    display: none;
  }
}
`;