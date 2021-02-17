import React from 'react';
import {connect, styled} from 'frontity';
import {size} from '../../functions/size';
import Switch from '@frontity/components/switch';
import Header from '../Header';
import Footer from '../Footer';
import SignInPage from './authPages/SignInPage';
import SignUpPage from './authPages/SignUpPage';
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
import D1Page from './D/D1Page';
import D2Page from './D/D2Page';
import D3Page from './D/D3Page';
import classnames from 'classnames';


const FormsPage = ({className, state, actions}) => {
    const data = state.source.get(state.router.link);
    const page = data.isReady && !data.isError ? state.source[data.type][data.id] : {};
    React.useEffect(() => {
      actions.theme.checkUser();
      !state.theme.user.logged && !/sign-in|create-account/.test(page.slug) && actions.router.set('/sign-in/');
    }, [state.theme.user.logged]);
    return <div className={classnames(className, state.theme.activeTheme)}>
      <Header hasProgress={state.theme.activeStep.total > 1}/>
      <Switch>
        <DPage when={state.router.link.startsWith('/d/')}/>
        <SignInPage when={page.slug === 'sign-in'}/>
        <SignUpPage when={page.slug === 'create-account'}/>
        <A1Page when={page.slug === 'a-i'}/>
        <A2Page when={page.slug === 'a-ii'}/>
        <A3Page when={page.slug === 'a-iii'}/>
        <BPage when={page.slug === 'b'}/>
        <C1Page when={page.slug === 'c-i'}/>
        <C2Page when={page.slug === 'c-ii'}/>
        <C3Page when={page.slug === 'c-iii'}/>
        <D1Page when={page.slug === 'd-i'}/>
        <D2Page when={page.slug === 'd-ii'}/>
        <D3Page when={page.slug === 'd-iii'}/>
        <EPage when={page.slug === 'e'}/>
        <ThreePage when={page.slug === 'qualifyfor'}/>
      
      </Switch>
      <Footer/>
    </div>;
  }
;

export default styled(connect(FormsPage))`
  > div {
    min-height: 100vh;
    height: 100%;
    padding-bottom: ${size(150)};
    overflow: hidden;
  }
`;