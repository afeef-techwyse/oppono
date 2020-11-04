import React from 'react';
import {css, styled} from 'frontity';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import gsap from 'gsap';
import Container from './reusable/Container';
import {size} from '../functions/size';
import SpriteSheet from './reusable/SpriteSheet';
import introLogoSrc from '../assets/sprite-sheets/intro-logo.png';
import darkLogo from '../assets/sprite-sheets/dark-logo.png';
import lightLogo from '../assets/images/logo-palette-1.png';


const Header = React.forwardRef(({className}, forwardRef) => {
  return (
    <header ref={forwardRef} className={className + ' header'}>
      <Container>
        <div className="menu-content">
          <div className="menu-left">
            <img src={lightLogo} alt={'logo'} className={'logo'}/>
          </div>
          <div className="menu-right">
            <div className="links">
              <a href="#">I’m a member</a>
            </div>
            <a href="#" className="signup-btn">Sign up</a>
            <div className={'three-dots'}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </Container>
      <div className="floating-menu">
        <Container>
          <div className="logo-hidden">
            <SpriteSheet
              className={'logo'}
              imageUrl={darkLogo}
              frames={52}
              repeat={0}
              width={size(131)}
              duration={3}
            />
            
            <svg className={'close-menu'} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <path fill="none" stroke="#b5d2ff" strokeMiterlimit="20" strokeWidth="2" d="M1.053 18.957L19.502.507"/>
              <path fill="none" stroke="#b5d2ff" strokeMiterlimit="20" strokeWidth="2" d="M1.053.508l18.449 18.449"/>
            </svg>
          </div>
          
          <div className="links">
            <a href="#">Home</a>
            <a href="#">Products & Rates</a>
            <a href="#">Lending Areas</a>
            <a href="#">Member Login</a>
            <a href="#">Search</a>
            <a href="#">Get in Touch</a>
          </div>
        </Container>
      </div>
    
    </header>
  );
});

Header.propTypes = {
  className: PropTypes.string,
};

export default styled(Header)`
position: fixed;
width: 100%;
z-index: 9;
// img{
//   width: 100%;
//   height: ${size(100)};
// }
.menu-content{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 74px;
  .menu-left{
    .logo{
      max-width: ${size(131)};
      @media(max-width: 575.98px){
         display: none;
        }
    }
  }
  .menu-right{
    display: flex;
    align-items: center;
    .links{
      a{
        color: #b5d2ff;
        font-size: ${size(16)};
        font-weight: 500;
        font-style: normal;
        margin-left: ${size(30)};
      }
    }
    .signup-btn{
      color: #b5d2ff;
      font-size: ${size(16)};
      font-weight: 500;
      width: fit-content;
      padding: 0 ${size(22)};
      height: ${size(36)};
      border-radius: ${size(18)};
      border: ${size(1)} solid #b5d2ff;
      margin-left: ${size(36)};
      display: flex;
      align-items: center;
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
      width: 10px;
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
display: none;
position: fixed;
left: 0;
top: 0;
width: 100%;
height: 100%;
  background-color: #000;
.close-menu{
 cursor: pointer;
}
.logo{
display: flex;
align-items: center;
justify-content: space-between;
height: 96px;
border-bottom: 1px solid #b5d2ff;
img{
  width: unset;
  height: ${size(26)};
}
}
.links{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 65px;
    
    a{
      color: #b5d2ff;
      font-size: 32px;
      font-weight: 500;
      margin-top: 20px;
      margin-bottom: 20px;
    }
}
}
`;