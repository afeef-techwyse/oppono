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
`;