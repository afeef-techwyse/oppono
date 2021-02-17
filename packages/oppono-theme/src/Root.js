import React from 'react';
import {connect} from 'frontity';
import Switch from '@frontity/components/switch';
import {fixContainer} from './functions/fix-container';
import Intro from './components/Intro';
import Styles from './styles';
import HomeSlider from './components/HomeSlider';
import FormsPage from './components/pages/FormsPage';
import ContactPage from './components/pages/ContactPage';
import MapPage from './components/pages/MapPage';
import Missing404 from './components/pages/Missing404';
import {Transition, TransitionGroup} from 'react-transition-group';
import gsap from 'gsap';
import ProductsSlider from './components/form-components/ProductsSlider';
import AboutUsPage from './components/form-components/AboutUsPage';

const isDeveloping = false;

const Root = ({state}) => {
  const [initialDone, setInitialDone] = React.useState(false);
  const data = state.source.get(state.router.link);
  const page = data.isReady && !data.isError ? state.source[data.type][data.id] : {};
  
  React.useEffect(() => {
    fixContainer();
    state.router.link !== '/' && setInitialDone(true);
    window.addEventListener('resize', fixContainer);
    return () => window.removeEventListener('resize', fixContainer);
  }, []);
  console.log(state.router.link, page);
  const duration = 2;
  return <>
    <Styles/>
    {data.isHome && !(isDeveloping || initialDone) ? <Intro setInitialDone={setInitialDone}/> : null}
    
    <TransitionGroup>
      <Transition
        key={state.router.link}
        timeout={duration * 1000}
        
        onEnter={node => {
          console.log(node);
          gsap.killTweensOf(node);
          gsap.set(node, {
            position: 'fixed',
            yPercent: 100,
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
          });
          gsap.to(node, {
            duration,
            yPercent: 0,
            onComplete: () => {
              gsap.set(node, {clearProps: 'all'});
              node.classList.remove('animation');
            },
          });
          requestAnimationFrame(() => node.classList.add('animation'));
        }}
        
        onExit={node => {
          gsap.killTweensOf(node);
          gsap.set(node, {
            position: 'fixed',
            yPercent: 0,
            top: 0,
            left: 0,
            zIndex: 10,
            width: '100vw',
            height: '100vh',
          });
          gsap.to(node, {
            duration,
            position: 'fixed',
            yPercent: -100,
          });
          requestAnimationFrame(() => node.classList.add('animation'));
        }}
      >
        <Switch>
          <div className={'loading-page'} when={data.isFetching}/>
          
          <AboutUsPage when={state.router.link.startsWith('/about-us/')}/>
          <ContactPage when={state.router.link.startsWith('/contact/')}/>
          <HomeSlider
            link={data.link}
            active={!data.isHome || isDeveloping || initialDone}
            when={page.template === 'page-templates/slider-template.php'}
          />
          <FormsPage when={page.template === 'page-templates/form-template.php' || state.router.link.startsWith('/d/')}/>
          <ProductsSlider when={state.router.link.startsWith('/products/')}/>
          <MapPage when={state.router.link.startsWith('/map/')}/>
          <Missing404 when={data.is404}/>
        </Switch>
      </Transition>
    
    </TransitionGroup>
  </>;
};
export default connect(Root);