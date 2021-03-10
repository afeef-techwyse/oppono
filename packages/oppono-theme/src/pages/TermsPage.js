import React from 'react';
import {connect, styled} from 'frontity';
import Footer from '../components/Footer';
import Header from '../components/Header';
import mapInfo from '../assets/images/map-info-bg.png';
import Input from '../components/form-components/Input';
import Button from '../components/form-components/Button';
import Container from '../components/reusable/Container';
import {size} from '../functions/size';
import Select from '../components/form-components/Select';

import cities from '../assets/cities assets/cities.json';
import opponoApi from '../opponoApi';
import debounce from '../functions/debounce';
import classnames from 'classnames';


const TermsPage = ({className, actions, state}) => {
  return (
    <div className={classnames(className, 'gray-theme')}>
      <Header hasSubMenu={false}/>
      <Container>
        <h1 className={'primary'}>Terms And Conditions</h1>
      </Container>
      <Footer/>
    </div>
  );
};

export default styled(connect(TermsPage))`

  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  ${Header}, ${Footer} {
    background: transparent;
  }

  h1 {
    font-size: ${size(50)};
    text-align: center;
  }
`;