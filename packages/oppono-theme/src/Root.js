import React from 'react';
import {connect} from 'frontity';
import Switch from '@frontity/components/switch';
import debounce from "./functions/debounce";
import {fixContainer} from './functions/fix-container';
import Intro from './components/Intro';
import Styles from './styles';
import HomeSlider from './components/HomeSlider';
import FormsPage from './pages/FormsPage';
import ContactPage from './pages/ContactPage';
import MapPage from './pages/MapPage';
import Missing404 from './pages/Missing404';
import {Transition, TransitionGroup} from 'react-transition-group';
import {gsap} from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import ProductsSlider from './components/ProductsSlider';
import AboutUsPage from './pages/AboutUsPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';

gsap.registerPlugin(ScrollToPlugin);

const isDeveloping = false;

const Root = ({state}) => {
  const [initialDone, setInitialDone] = React.useState(false);
  const data = state.source.get(state.router.link);
  const page = data.isReady && !data.isError ? state.source[data.type][data.id] : {};
  
  React.useEffect(() => {
    fixContainer();
    state.router.link !== '/' && setInitialDone(true);
    window.addEventListener('resize', fixContainer);
    function getHeightOfViewPort() {
      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    getHeightOfViewPort()
    const debounced = debounce(function () {
      getHeightOfViewPort()
    } , 500)
    window.addEventListener('resize', debounced);
    return () => {
      window.removeEventListener('resize', fixContainer);
      window.removeEventListener('resize', debounced);
  
    }
  }, []);
  const duration = .75;
  return <>
    <Styles/>
    {data.isHome && !(isDeveloping || initialDone) ? <Intro setInitialDone={setInitialDone}/> : null}
    
    <TransitionGroup>
      <Transition
        key={state.router.link}
        timeout={duration * 1000}
        
        onEnter={node => {
          gsap.killTweensOf(node);
          gsap.set(node, {
            position: 'fixed',
            yPercent: 100,
            top: 0,
            left: 0,
            width: '100vw',
            zIndex: 1,
            scrollTo: 0,
          });
          gsap.to(node, {
            duration,
            ease: 'power2.in',
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
            height: 'calc(var(--vh, 1vh) * 100)',
            overflow: 'hidden',
          });
          gsap.to(node, {
            duration,
            ease: 'power2.in',
            yPercent: -100,
          });
          requestAnimationFrame(() => node.classList.add('animation'));
        }}
      >
        <Switch>
          <div className={'loading-page'} when={data.isFetching}/>
  
          <AboutUsPage when={state.router.link.startsWith('/what-we-do/')}/>
          <ContactPage when={/get-in-touch/.test(page.slug)}/>
          <HomeSlider
            link={data.link}
            active={!data.isHome || isDeveloping || initialDone}
            when={page.template === 'page-templates/slider-template.php'}
          />
          <FormsPage
            link={data.link}
            when={page.template === 'page-templates/form-template.php' || state.router.link.startsWith('/d/')}/>
          <ProductsSlider link={data.link} active={true} when={state.router.link.startsWith('/products/')}/>
          <MapPage when={state.router.link.startsWith('/map/')}/>
          <TermsPage link={data.link} when={state.router.link.startsWith('/terms/')}/>
          <PrivacyPage link={data.link} when={state.router.link.startsWith('/privacy-policy/')}/>
          <Missing404 when={data.is404}/>
        </Switch>
      </Transition>
    
    </TransitionGroup>
  </>;
};
export default connect(Root);