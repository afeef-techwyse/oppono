import React from 'react';
import {connect} from 'frontity';
import Switch from '@frontity/components/switch';
import {fixContainer} from './functions/fix-container';
import Intro from './components/Intro';
import Styles from './styles';
import HomeSlider from './components/HomeSlider';
import FormsPage from './components/pages/FormsPage';
import TestTheming from './components/TestTheming';
import Chat from './components/pages/contact/Chat';
import Mail from './components/pages/contact/Mail';
import ContactPage from './components/pages/ContactPage';
import TwoPage from './components/pages/2/2';
import MapPage from './components/pages/MapPage';

const isDeveloping = false;

const Root = ({state}) => {
  const [initialDone, setInitialDone] = React.useState(false);
  const data = state.source.get(state.router.link);
  
  React.useEffect(() => {
    fixContainer();
    state.router.link !== '/' && setInitialDone(true);
    window.addEventListener('resize', fixContainer);
    return () => window.removeEventListener('resize', fixContainer);
  }, []);
  
  return <div className={state.theme.activeTheme}>
    <Styles/>
    {data.isHome && !(isDeveloping || initialDone) ? <Intro setInitialDone={setInitialDone}/> : null}
    <Switch>
      <div className={'loading-page'} when={data.isFetching}/>
      <HomeSlider
        active={!data.isHome || isDeveloping || initialDone}
        when={state.router.link.match(/^(\/$|\/a\/|\/c\/|\/d\/|\/dashboard\/|\/contacts\/)/)}
      />
      <FormsPage when={state.router.link.match(/^(\/form\/|\/create-account\/|\/sign-in\/)/)}/>
      <ContactPage when={state.router.link.startsWith('/contact/')}/>
      <TestTheming when={state.router.link.startsWith('/test-theming/')}/>
      <TwoPage when={state.router.link.startsWith('/products/')}/>
      <MapPage when={state.router.link.startsWith('/map/')}/>
    </Switch>
  </div>;
};
export default connect(Root);