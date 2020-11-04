import React from 'react';
import {styled} from 'frontity';

const Container = ({className, children}) => {
  return (
    <div className={className + ' container'}>
      {children}
    </div>
  );
};

export default styled(Container)`
max-width:1200px;
margin: 0 auto;
width: 100%;
padding: 0 15px;
@media(min-width: 1440px){
width: 83%;
max-width: 1920px;
}
@media(max-width: 991.98px){
  padding: 0 33px;
}
`;