import React from 'react';
import {connect} from 'frontity';
import RadioInputVertical from './form-components/RadioInputVertical';

export default connect(({appraiserName, className, state, actions, ...props}) => {
  
  return <RadioInputVertical
      className={className}
    {...props}/>;
});
