import React from 'react';
import {styled} from 'frontity';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import gsap from 'gsap';
import Container from './reusable/Container';
import sacr from '../assets/sprite-sheets/sarcastic.png';
import {size} from '../functions/size';

const Header = ({className}) => {
  return (
    <header className={className + ' header'}>
      <Container>
        {/*<img src={sacr} alt=""/>*/}
        <div className="menu-ul">
        
        </div>
      </Container>
    
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default styled(Header)`
img{
width: 100%;
height: ${size(100)};
}
`;