import React from 'react';
import {fixContainer} from './functions/fix-container';
import Intro from './components/Intro';
import Styles from './styles';
import Test from './components/Test';

const Root = () => {
  const [initialDone, setInitialDone] = React.useState(false);
  React.useEffect(() => {
    fixContainer();
    window.addEventListener('resize', fixContainer);
    return () => window.removeEventListener('resize', fixContainer);
  }, []);
  
  return <>
    <Styles/>
    <Intro setInitialDone={setInitialDone}/>
    <Test active={initialDone}/>
  </>
    ;
};
export default Root;