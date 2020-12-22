import React from 'react';
import Form from '../form-components/Form';
import Input from '../form-components/Input';
import {connect, styled} from 'frontity';
import Container from '../reusable/Container';
import {size} from '../../functions/size';
import missing from '../../assets/images/missing.png';
import Select from 'react-select';
import RadioInput from '../form-components/RadioInput';
import RadioGroup from '../form-components/RadioGroup';
import Switch from '@frontity/components/switch';
import Header from '../Header';
import Footer from '../Footer';
import SignInPage from './formspages/SignInPage';
import SignUpPage from './formspages/SignUpPage';
import FirstExample from './formspages/FirstExample';
import SecondExample from './formspages/SecondExample';
import ThirdExample from './formspages/ThirdExample';
import EPage from './E/EPage';
import A1Page from './A/A1Page';
import A2Page from './A/A2Page';
import A3Page from './A/A3Page';
import C1Page from './C/C1Page';
import BPage from './B/BPage';
import C2Page from './C/C2Page';
import C3Page from './C/C3Page';
import DPage from './D/DPage';
import ThreePage from './3/3';
import FourPage from './4/4';
import D1Page from './D/D1Page';
import D2Page from './D/D2Page';
import D3Page from './D/D3Page';


const FormsPage = (props) =>
  <div className={props.className}>
    <Header hasProgress={props.state.theme.activeStep.total > 1}/>
    <Switch>
      <SignInPage when={props.state.router.link.startsWith('/sign-in/')}/>
      <SignUpPage when={props.state.router.link.startsWith('/create-account/')}/>
      <A1Page when={props.state.router.link.startsWith('/form/a-i/')}/>
      <A2Page when={props.state.router.link.startsWith('/form/a-ii/')}/>
      <A3Page when={props.state.router.link.startsWith('/form/a-iii/')}/>
      <BPage when={props.state.router.link.startsWith('/form/b/')}/>
      <C1Page when={props.state.router.link.startsWith('/form/c-i/')}/>
      <C2Page when={props.state.router.link.startsWith('/form/c-ii/')}/>
      <C3Page when={props.state.router.link.startsWith('/form/c-iii/')}/>
      <D1Page when={props.state.router.link.startsWith('/form/d-i/')}/>
      <D2Page when={props.state.router.link.startsWith('/form/d-ii/')}/>
      <D3Page when={props.state.router.link.startsWith('/form/d-iii/')}/>
      <DPage when={props.state.router.link.startsWith('/form/d/')}/>
      <EPage when={props.state.router.link.startsWith('/form/e/')}/>
      <ThreePage when={props.state.router.link.startsWith('/form/qualifyfor/')}/>
      <FourPage when={props.state.router.link.startsWith('/form/securebeloc/')}/>
      <FirstExample when={props.state.router.link.startsWith('/form/firstexample/')}/>
      <SecondExample when={props.state.router.link.startsWith('/form/secondexample/')}/>
      <ThirdExample when={props.state.router.link.startsWith('/form/thirdexample/')}/>
    </Switch>
    <Footer/>
  </div>
;

export default styled(connect(FormsPage))`
>div{
min-height: 100vh;
height: 100%;
padding-bottom: ${size(150)};
overflow: hidden;
}
`;