import React from 'react';
import {connect, css, styled} from 'frontity';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import gsap from 'gsap';
import Container from './reusable/Container';
import {size} from '../functions/size';
import SpriteSheet from './reusable/SpriteSheet';
import introLogoSrc from '../assets/sprite-sheets/intro-logo.png';
import darkLogo from '../assets/sprite-sheets/dark-logo.png';
import lightLogo from '../assets/images/logo-palette-1.png';
import mobileLogo from '../assets/images/mobile-logo.png';
import Link from './reusable/Link';
import Button from './form-components/Button';
import {allowPageScroll, preventPageScroll} from '../functions/prevent_allowPageScroll';
import StepsProgress from './form-components/StepsProgress';

const SubHeader = styled(connect(({state, className}) => {
  return <div className={classnames(className, 'sub-menu')}>
    <p className={'back'}>
      <svg viewBox="0 0 6 8">
        <path fill="none" className={'primary-stroke'} stroke="#b5d2ff" strokeMiterlimit="20" d="M3 8V0"/>
        <path fill="none" className={'primary-stroke'} stroke="#b5d2ff" strokeMiterlimit="20" d="M6 3v0L3 0 0 3"/>
      </svg>
      <Link className={'primary'} href={'/'}>Back To Home</Link>
    </p>
    
    <div>
      <p className={'first-title primary'}>{state.theme.subHeader.part_1}</p>
      <p className={'second-title primary'}>{state.theme.subHeader.part_2}</p>
    </div>
  </div>;
}))`
width: 100%;
border-top: 1px solid rgba(191, 182, 180, 0.1);
display: flex;
height:${size(66)};
padding-top: ${size(15)};
@media(max-width: 575.98px){
  justify-content: space-between;
  padding-top: ${size(10)};
}
.back{
  margin-right: ${size(160)};
  display: inline-block;
  @media(max-width: 575.98px){
    margin-right: 0;
  }
  a{
    opacity: .5;
    font-size: ${size(12)};
    font-weight: 500;
    line-height: ${size(16)};
  }
  svg{
    width: ${size(6)};
    height: ${size(8)};
    margin-right: ${size(12)};
      @media(max-width: 575.98px){
  margin-right: ${size(8)};
}
  }
}
.first-title{
  font-size: ${size(12)};
  font-weight: 500;
  line-height: ${size(16)};
  opacity: .5;
}
.second-title{
  font-size: ${size(10)};
  font-weight: 500;
  line-height: ${size(16)};
  margin-top: ${size(2)};
  letter-spacing: ${size(.44)};
}
`;


const Header = React.forwardRef(({className, hasSubMenu = true, hasProgress = false}, forwardRef) => {
  const [menuOpened, setMenuOpened] = React.useState(false);
  const menuHandler = value => {
    setMenuOpened(value);
    value ? preventPageScroll() : allowPageScroll();
  };
  return (
    <header ref={forwardRef} className={className + ' header'}>
      <Container>
        <div className="menu-content">
          <div className="menu-left">
            <Link href={'/'}>
              <img src={lightLogo} alt={'logo'} className={'logo'}/>
              <img src={mobileLogo} alt={'logo'} className={'mobile-logo'}/>
            </Link>
          </div>
          <div className="menu-right">
            <div className="links">
              <Link className={'primary'} href={'/sign-in/'}>I’m a member</Link>
            </div>
            <Link className={'signup-btn'} href={'/create-account/'}><Button className={'primary-border primary'} focusable={false} label={'Sign up'}/></Link>
            <div onClick={() => menuHandler(true)} className={'three-dots'}><span className={'primary-bg'}/> <span className={'primary-bg'}/> <span className={'primary-bg'}/></div>
          </div>
        </div>
        {hasSubMenu ? <SubHeader/> : null}
        {hasProgress ? <StepsProgress horizontal/> : null}
      </Container>
      <div className={classnames('floating-menu', {menuOpened})}>
        <Container>
          <svg onClick={() => menuHandler(false)} className={'close-menu'} viewBox="0 0 20 20">
            <path fill="none" stroke="#b5d2ff" className={'primary-stroke'} strokeMiterlimit="20" strokeWidth="2" d="M1.053 18.957L19.502.507"/>
            <path fill="none" stroke="#b5d2ff" className={'primary-stroke'} strokeMiterlimit="20" strokeWidth="2" d="M1.053.508l18.449 18.449"/>
          </svg>
          <div className="links">
            <Link onClick={() => menuHandler(false)} className={'primary'} href="/">Home</Link>
            <Link onClick={() => menuHandler(false)} className={'primary'} href={'/products/'}>Products & Rates</Link>
            <Link onClick={() => menuHandler(false)} className={'primary'} href={'/form/e/'}>Lending Areas</Link>
            <Link onClick={() => menuHandler(false)} className={'primary'} href={'/sign-in/'}>Member Login</Link>
            <Link onClick={() => menuHandler(false)} className={'primary'} href="/">Search</Link>
            <Link onClick={() => menuHandler(false)} className={'primary'} href={'/contacts/'}>Get in Touch</Link>
          </div>
        </Container>
      </div>
    </header>
  );
});

Header.propTypes = {
  className: PropTypes.string,
  hasSubMenu: PropTypes.bool,
  hasProgress: PropTypes.bool,
};

export default styled(Header)`
position: fixed;
z-index: 100;
width: 100%;
.menu-content{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${size(74)};
  .menu-left{
    .logo{
      max-width: ${size(131)};
      @media(max-width: 575.98px){
        display: none;
      }
    }
    .mobile-logo{
      @media (min-width:576px){
        display: none;
      }
      width: ${size(24)};
      height: ${size(24)};
      object-fit: contain;
    }
     @media(max-width: 991.98px){
       z-index: 9;
      }
  }
  .menu-right{
    display: flex;
    align-items: center;
    .links{
      color: #b5d2ff;
      font-size: ${size(16)};
      font-weight: 500;
      font-style: normal;
      margin-left: ${size(30)};
    }
    .signup-btn{
      margin: 0 ${size(22)};
    }
    ${Button}{
    margin-top: 0;
    padding: ${size(8)} ${size(22)};
    @media(max-width: 575.98px){
      display: none;
    }
  }
    .three-dots{
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-left: ${size(40)};
      cursor: pointer;
      width: ${size(20)};
      span{
        border-radius: 50%;
        width: ${size(3)};
        height: ${size(3)};
        background-color: #b5d2ff;
        margin: ${size(2)} 0;
      }
    }
  }
}
.floating-menu{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: opacity 200ms,visibility 200ms;
  opacity: 0;
  visibility: hidden;
  ${Container}{
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media(max-width: 991.98px){
    display: block;
    padding-top: ${size(160)};
  }
  @media(max-width: 575.98px){
    padding-top: ${size(133)};
  }
}
  &.menuOpened{
    opacity: 1;
    transition: opacity 200ms,visibility 200ms;
    visibility: visible;
  }
  .close-menu{
    position: absolute;
    right: ${size(15)};
    top: ${size(37)};
    transform: translateY(-50%);
    width: ${size(19)};
    height: ${size(19)};
    cursor: pointer;
    @media(max-width: 991.98px){
       right: ${size(25)};
       transform: translate(-50%,-50%);
      }
  }
  .logo{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${size(96)};
    border-bottom: ${size(1)} solid #b5d2ff;
    img{
      width: unset;
      height: ${size(26)};
    }
  }
  .links{
    display: flex;
    flex-direction: column;
    align-items: center;

    a{
      color: #b5d2ff;
      font-size: ${size(60)};
      font-weight: 500;
      margin-bottom: ${size(19)};
      transition: opacity 300ms;
      &:last-of-type{
        margin-bottom: 0;
      }
      &:hover{
        opacity: .6;
      }
      @media(max-width: 991.98px){
        font-size: ${size(32)};
        margin-bottom: ${size(40)};
      }
    }
  }
}
${StepsProgress}{
  display: none;
  @media(max-width: 575.98px){
    margin-bottom: ${size(40)};
    display: block;
    .current .step-name{
      top: ${size(12)};
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
`;