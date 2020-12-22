import React from 'react';
import {styled} from 'frontity';
import {size} from '../../functions/size';

const Container = ({className, children}) => {
  return (
    <div className={className + ' container'}>
      {children}
    </div>
  );
};

export default styled(Container)`
margin: 0 auto;
width: 100%;
padding: 0 ${size(15)};
@media(min-width: 992px){
  width: 83%;
  max-width: 1920px;
}
@media(max-width: 991.98px){
  padding: 0 ${size(33)};
}
`;