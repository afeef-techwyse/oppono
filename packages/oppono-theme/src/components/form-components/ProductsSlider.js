import React from 'react';
import PropTypes from 'prop-types';
import useStateWithRef from '../../hooks/useStateWithRef';
import {P} from './StyledComponent';

import {styled, css, connect} from 'frontity';
import classnames from 'classnames';


import noiseSrc from '../../assets/images/noise.png';
import img1 from '../../assets/images/fly-image-1.png';
import img2 from '../../assets/images/fly-image-2.png';
import img3 from '../../assets/images/fly-image-3.png';
import img4 from '../../assets/images/fly-image-4.png';
import img5 from '../../assets/images/fly-image-5.png';
import img6 from '../../assets/images/fly-image-6.png';
import img7 from '../../assets/images/fly-image-7.png';
import img8 from '../../assets/images/fly-image-8.png';
import sprite1 from '../../assets/sprite-sheets/sprite-slide-1.png';
import sprite2 from '../../assets/sprite-sheets/sprite-slide-2.png';
import homeSprite1 from '../../assets/sprite-sheets/home-slider/home_slide_01.png';
import homeSprite2 from '../../assets/sprite-sheets/home-slider/home_slide_02.png';
import homeSprite3 from '../../assets/sprite-sheets/home-slider/home_slide_03.png';
import homeSprite4 from '../../assets/sprite-sheets/home-slider/home_slide_04.png';
import homeSprite5 from '../../assets/sprite-sheets/home-slider/home_slide_05.png';
import homeSprite6 from '../../assets/sprite-sheets/home-slider/home_slide_06.png';
import homeSprite7 from '../../assets/sprite-sheets/home-slider/home_slide_07.png';
import vertical from '../../assets/sprite-sheets/home-slider/vertical.png';
import vertical2 from '../../assets/sprite-sheets/home-slider/vertival2.png';


import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import CustomEase from 'gsap/CustomEase';

import SwiperCore, {Navigation, Pagination, Keyboard, Mousewheel, A11y, Controller, Thumbs} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import {size} from '../../functions/size';

import Container from '../reusable/Container';
import SpriteSheet from '../reusable/SpriteSheet';
import FlyingObj from '../reusable/FlyingObj';
import Link from '../reusable/Link';
import useMedia from '../../hooks/useMedia';
import MegaloNum from './MegaloNum';
import Button from './Button';
import ProductsFeature from '../ProductsFeature';
import featureImg from '../../assets/images/product-feature-1.png';
import ProductsTable from './ProductsTable';

SwiperCore.use([Navigation, Pagination, Keyboard, Mousewheel, A11y, Controller, Thumbs]);
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
      margin-left: 2.85vh;
      margin-top: 4vh;
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
      font-size: 3.94vh;
      line-height: 4.43vh;
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

@media (max-width: 575.98px){
    padding-bottom: ${size(22)};
}
`;

const createSlideAnimation = (slide, paused = true, initial = false) => {
  if (!slide) return;
  const
    title = slide.querySelector('.title'),
    number = slide.querySelector('.number'),
    subtitle = slide.querySelector('.subtitle'),
    table = slide.querySelector('table'),
    trs = table.querySelectorAll('tr'),
    tableNumbers = table.querySelectorAll('.animate-number'),
    slideAnimationTl = gsap.timeline({paused});
  const stagger = 0.2;
  if (initial) {
    return gsap.fromTo([title, number, subtitle], {autoAlpha: 0, y: 100}, {autoAlpha: 1, y: 0, duration: 1, stagger: .3, overwrite: 'auto'});
  }
  
  
  slideAnimationTl
    .from(number, {innerHTML: 0, duration: 1, ease: 'power2.out', modifiers: {innerHTML: (value, target) => value.toFixed(target.dataset.toFixed ?? 0)}, stagger: 0.2}, '<+=0.5')
    .fromTo(trs, {yPercent: 30, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, stagger, duration: 1})
    .from(tableNumbers, {innerHTML: 0, duration: 1, ease: 'power2.out', modifiers: {innerHTML: (value, target) => value.toFixed(target.dataset.toFixed ?? 0)}, stagger: 0.2}, '<+=0.5')
  ;
  return slideAnimationTl;
};

const ProductFeaturesContainer = styled.div`
>div:nth-of-type(even){
    flex-direction:row-reverse;
  }
`;
const ProductsSlider = ({className, active = false, state, actions}) => {
  const data = state.source.get(state.router.link);
  const {page_theme, slider_top_subtitle, slider_top_title, slider: slidesObj = []} = data.isReady && !data.isError ? state.source[data.type][data.id].acf : {};
  const nextBtnRef = React.useRef(null);
  const prevBtnRef = React.useRef(null);
  const paginationRef = React.useRef(null);
  const flyingWrapperRef = React.useRef(null);
  const slidesNumbers = React.useRef(null);
  const [swiperRef, setSwiperRef] = React.useState(null);
  const [thumbsSwiper, setThumbsSwiper] = React.useState(0);
  const [slideFlyingObjectsPlaying, setSlideFlyingObjectsPlaying] = React.useState([]);
  
  const slidesAnimation = React.useRef({});
  const slidesTransition = React.useRef(0);
  const initialTimeline = React.useRef(gsap.timeline({paused: false}));
  const flyingObjectsAnimation = React.useRef(gsap.timeline({paused: true}));
  
  
  const [currentSlide, setCurrentSlide, currentSlideRef] = useStateWithRef(0);
  React.useEffect(() => {
    actions.theme.setActiveTheme(page_theme);
  
  }, [page_theme]);
  const swiperInit = (swiper) => {
    
    
    const {slides} = swiper;
    for (let i = 0; i < slides?.length; i++) {
      slidesAnimation.current[i] = createSlideAnimation(slides[i]);
    }
    setSwiperRef(swiper);
  };
  // const keyHandler = event => {
  //   if (event.key === 'Enter' && !event.repeat) {
  //     ctaRef.current.click();
  //   }
  // };
  // window.addEventListener('keydown', keyHandler);
  
  
  React.useEffect(() => {
    actions.source.fetch(state.router.link);
    flyingObjectsAnimation.current.progress(1).progress(0);
    // window.removeEventListener('keydown', keyHandler);
  }, []);
  
  React.useEffect(() => {
    const
      nextArrow = nextBtnRef.current.querySelectorAll('svg path'),
      prevArrow = prevBtnRef.current.querySelectorAll('svg path');
    initialTimeline.current.clear();
    initialTimeline.current
      .fromTo(flyingWrapperRef.current, {yPercent: 100}, {yPercent: 0})
      .addLabel('initial-slide')
      .call(() => createSlideAnimation(swiperRef?.slides?.[0], false, true))
      .call(() => slidesAnimation.current[0]?.play(0), null, '<+.3')
      .fromTo(nextArrow, {drawSVG: 0}, {drawSVG: '100%', stagger: 0.5}, 'initial-slide+=.5')
      .fromTo(prevArrow, {drawSVG: 0}, {drawSVG: '100%', stagger: 0.5}, 'initial-slide+=.5')
      .from('.swiper-slide-thumb', {y: 30, autoAlpha: 0, stagger: 0.15, duration: 1, clearProps: 'all'}, 'initial-slide')
    ;
  }, [swiperRef]);
  
  React.useEffect(() => {
    initialTimeline.current.paused(!active);
  }, [active]);
  
  return (
    <>
      <div className={className}>
        <div ref={flyingWrapperRef} className="flying-obj-wrapper">
          {
            slidesObj.map((slide, slideIndex) => slide.flying_objects.desktop?.map((obj, objIndex) => {
                return <FlyingObj
                  // ref={el => obj.ref = el}
                  key={`slide-${slideIndex}-obj-${objIndex}-${state.router.link}`}
                  width={+obj.width}
                  imageUrl={obj.image.url}
                  frames={+obj.frames}
                  duration={+obj.duration}
                  initial_duration={+obj.initial_duration}
                  frame_x={+obj.frame_x}
                  frame_y={+obj.frame_y}
                  alt={obj.image.alt}
                  type={obj.type}
                  level={+obj.level}
                  loop_start_index={+obj.loop_start_index}
                  top={obj.top}
                  paused={!slideFlyingObjectsPlaying[slideIndex]}
                  left={+obj.left + 100 * slideIndex + '%'}
                  isStart={slideIndex === 0}
                  isEnd={slideIndex === slidesObj.length - 1}
                  timelineAddCallback={(tl) => {
                    flyingObjectsAnimation.current.add(tl, slideIndex === 0 ? 0 : (slideIndex - 1) * .25);
                  }}
                />;
              },
            ))
          }
        </div>
        <Slider
          speed={1500}
          a11y
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            prevEl: prevBtnRef.current,
            nextEl: nextBtnRef.current,
          }}
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
          thumbs={{swiper: thumbsSwiper}}
          onSlideChange={({realIndex, previousIndex}) => {
            setTimeout(() => {
              slidesAnimation.current[realIndex].progress(0).play();
              slidesAnimation.current[previousIndex].progress(1).paused(true).progress(0);
            }, 750);
            setCurrentSlide(realIndex);
            setTimeout(() => setSlideFlyingObjectsPlaying(prevState => {
              const newState = [...prevState];
              newState[realIndex] = true;
              return newState;
            }), 1000);
          }}
        >
          <Container className={'swiper-arrows-container'}>
              <span className={'prev'} ref={prevBtnRef}>
                <svg viewBox="0 0 99 10">
                  <path fill="none" stroke="#b5d2ff" d="M99 5H0"/>
                  <path fill="none" stroke="#b5d2ff" d="M5 0L0 5 L5 10"/>
                </svg>
              </span>
            <span className={'next'} ref={nextBtnRef}>
                <svg viewBox="0 0 99 10">
                  <path fill="none" stroke="#b5d2ff" d="M0 5H99"/>
                  <path fill="none" stroke="#b5d2ff" d="M94 10L99 5L94 0"/>
                </svg>
              </span>
          </Container>
  
          {
            slidesObj.map((slide, slideIndex) =>
              <SwiperSlide key={`slide-${slideIndex}`}>
                <Container>
                  <MegaloNum>
                    <div className={'form-headline-1 title'} dangerouslySetInnerHTML={{__html: slide.title}}/>
                    <p animateNumber className={'number'} data-number={slide.number} data-to-fixed={2}>{slide.number}</p>
                    <div className={'form-headline-1 subtitle'} dangerouslySetInnerHTML={{__html: slide.subtitle}}/>
                  </MegaloNum>
                  <table>
                    <tbody>
                    <tr>
                      <td><P.D as={'span'} className={'animate-number'} data-to-fixed={2}>5.99</P.D><P.D as={'span'}>%</P.D></td>
                      <td><P.Dark>Fixed Rate</P.Dark></td>
                    </tr>
                    <tr>
                      <td><P.D as={'span'} className={'animate-number'} data-to-fixed={2}>1.49</P.D><P.D as={'span'}>%</P.D></td>
                      <td><P.Dark>Lender Fee</P.Dark></td>
                    </tr>
                    <tr>
                      <td><P.D as={'span'} className={'animate-number'} data-to-fixed={0}>75</P.D><P.D as={'span'}>%</P.D></td>
                      <td><P.Dark>LTV</P.Dark></td>
                    </tr>
                    </tbody>
                  </table>
                </Container>
              </SwiperSlide>,
            )
          }
        </Slider>
        <Container className={'thumbs-container'}>
          <Swiper
            className={'thumbs-swiper'}
            onSwiper={setThumbsSwiper}
            watchSlidesVisibility
            watchSlidesProgress
            ally
            keyboard
            mousewheel
            centeredSlides
            slidesPerView={2.6}
            speed={1500}
            spaceBetween={36}
            breakpoints={{
              576: {
                loopedSlides: 0,
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                centeredSlides: false,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 4,
                centeredSlides: false,
                spaceBetween: 20,
              },
            }}>
            {slidesObj.map((slide, i) =>
              <SwiperSlide
                key={`thumb-${i}`}
                onClick={() => swiperRef.slideToLoop(i, 1500, true)}
                className={classnames('swiper-slide-thumb', {active: i === swiperRef?.realIndex})}
                dangerouslySetInnerHTML={{__html: slide.pagination_title}}
              />)}
          </Swiper>
        </Container>
        <Link href={'/dashboard/'} className={'cta-btn'}><Button className={'wide'} label={'Sign up to check all products & rates'}/></Link>
        <div className="terms-text">Terms and conditions apply to all rates & products</div>
      </div>
      <Container>
        <ProductFeaturesContainer>
          <ProductsFeature
            title={'No beacon score asked, no income verification.'}
            description={'Our common-sense approach to lending means our decisions are not based on a set of nonnegotiable criteria. Instead, we look at the borrowers’ unique situation and measure their ability to meet their obligations, accompanied by an appropriate loan-to-value ratio. If the investment makes sense, we will fund it!'}
            imageUrl={featureImg}
            alt={'feature-image'}
          />
          <ProductsFeature
            title={'No beacon score asked, no income verification.'}
            description={'Our common-sense approach to lending means our decisions are not based on a set of nonnegotiable criteria. Instead, we look at the borrowers’ unique situation and measure their ability to meet their obligations, accompanied by an appropriate loan-to-value ratio. If the investment makes sense, we will fund it!'}
            imageUrl={featureImg}
            alt={'feature-image'}
          />
          <ProductsFeature
            title={'No beacon score asked, no income verification.'}
            description={'Our common-sense approach to lending means our decisions are not based on a set of nonnegotiable criteria. Instead, we look at the borrowers’ unique situation and measure their ability to meet their obligations, accompanied by an appropriate loan-to-value ratio. If the investment makes sense, we will fund it!'}
            imageUrl={featureImg}
            alt={'feature-image'}
          />
          <ProductsFeature
            title={'No beacon score asked, no income verification.'}
            description={'Our common-sense approach to lending means our decisions are not based on a set of nonnegotiable criteria. Instead, we look at the borrowers’ unique situation and measure their ability to meet their obligations, accompanied by an appropriate loan-to-value ratio. If the investment makes sense, we will fund it!'}
            imageUrl={featureImg}
            alt={'feature-image'}
          />
        </ProductFeaturesContainer>
      </Container>
    </>
  );
};
ProductsSlider.prototype = {
  className: PropTypes.string,
};
export default styled(connect(ProductsSlider))`
position: relative;
width: 100%;
overflow: hidden;
padding-top: ${size(165)};
 margin-bottom: ${size(119)};
 @media(max-width: 991.98px){
    padding-top: ${size(189)};
  }
  @media(max-width: 575.98px){
    padding-top: ${size(105)};
  }
${MegaloNum}{
  margin-bottom: 0;
  text-align: center;
  .number{
    display: inline-block;
    position: relative;
    letter-spacing: ${size(-11)};
    font-size: ${size(250)};
    &:before{
    content: '%';
    position: absolute;
    right: ${size(-20)};
    top: ${size(20)};
    color: #d2f5e9;
    font-size: ${size(25)};
    font-weight: 400;
    line-height: ${size(34)};
  }
    @media(max-width: 991.98px){
    font-size: ${size(140)};
    line-height: ${size(180)};
    }
    @media(max-width: 575.98px){
    font-size: ${size(120)};
        line-height: ${size(140)};

    }
  }
}
table{
position: absolute;
right: ${size(250)};
top: ${size(65)};
  td:first-of-type{
    padding-right: ${size(34)};
     @media(max-width: 575.98px){
    padding-right: 0;
    width: 50%;
    text-align: left;
  }
  }
    @media(max-width: 991.98px){
  right: ${size(55)};
top: ${size(40)};
  }
  @media(max-width: 575.98px){
    position: unset;
    margin: ${size(22)} auto 0;
    width: 100%;
  }
}
${Button}{
  @media(max-width: 991.98px){
    padding: ${size(10)} ${size(26)}!important;
  }
   @media(max-width: 575.98px){
    padding: ${size(18)} ${size(20)}!important;
    white-space: normal;
  }
}
.swiper-arrows-container{
position: absolute;
    height: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    z-index: 9;
  //@media(max-width: 575.98px){
  //  display: none;
  //}
  &${Container}{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
@media (max-width: 575.98px){
    &:after{
      content: '';
      height: ${size(1)};
      width: 100%;
      background-color: #d2f5e9;
      margin-top: auto;
    }
}
  }
  .prev,.next{
    cursor: pointer;
    transition: margin .4s ease, width .4s ease,opacity .4s ease;
    overflow: hidden;
    width: ${size(99)};
    height: ${size(30)};
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    @media(max-width: 575.98px){
          width: ${size(25)};
          top: 30%;
    }
    svg{
      position:absolute;
      width: ${size(99)};
      height: ${size(10)};
    }
    &.swiper-button-disabled{
    cursor: not-allowed;
      opacity: .4;
      width: ${size(50)};
      @media(max-width: 575.98px){
          width: ${size(20)};
    }
    }
  }
  .prev{
  left: 0;
       @media(max-width: 991.98px){
  left: ${size(32)};
  }
    svg{
      left: 0;
    }
  }
  .next{
  right: 0;
   @media(max-width: 991.98px){
  right: ${size(32)};
  }
    svg{
      right: 0;
    }
    &.swiper-button-disabled{
      margin-right: ${size(49)};
    }
  }


}
.swiper-pagination-bullets {
  position: relative;
  display: flex;
  z-index: 9;
      justify-content: center;
    align-items: center;
     margin-top: ${size(40)};
     margin-bottom: ${size(31)};
  @media(max-width: 991.98px){
    max-width: 90%;
    margin-right: auto;
    margin-left: auto;
  }
}
.thumbs-container{
  @media(min-width:922px){
    max-width: 100%;
    width: 100%;
  }
  @media(max-width:575.98px){
    max-width: 100%;
    width: 100%;
  }
}
.thumbs-swiper{
  margin-top: ${size(68)};
  max-width:  67%;
  @media(max-width: 991.98px){
    max-width: 100%;
  }
  @media(max-width: 575.98px){
    margin-top: ${size(10)};
  }
}
.swiper-slide-thumb{
  width: ${size(230)};
  //height: ${size(50)};
  padding-top: ${size(14)};
  cursor: pointer;
  transition: opacity 400ms ease;
  opacity: .4;
  color: #d2f5e9;
  font-size: ${size(12)};
  font-weight: 400;
  letter-spacing: ${size(.48)};
  line-height: ${size(16)};
  border-top: 1px solid #d2f5e9;
  &:hover{
    opacity: 1;
  }
  &.active{
    opacity: 1;
  }
  @media(max-width: 575.98px){
    border-top: none;
    text-align: center;
    br{
      display: none;
    }
  }
  
}
.terms-text{
  color: rgba(210, 245, 233, 0.4);
  font-size: ${size(14)};
  font-weight: 500;
  text-align: center;
   margin-top: ${size(32)};
      @media(max-width: 991.98px){
 margin-top: ${size(10)};
   }
}
.flying-obj-wrapper{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100%;
  @media(max-width: 575.98px){
    display: none;
  }
}
`;