import React from 'react';
import {connect} from 'frontity';
import RadioInputVertical from './form-components/RadioInputVertical';

export default connect(({appraiserName, className, state, actions, ...props}) => {
  if (!appraiserName) {
    return <RadioInputVertical
      className={className}
      value={'000000'}
      name={'call'}
      label={'No data'}
      number={'000000'}/>;
  }
  const endpoint = `/appraiser/${appraiserName}`;
  const appraiser = state.source.get(endpoint);
  const appraiserData = state.source[appraiser.type]?.[appraiser.id];
  
  React.useEffect(() => {!appraiser.isReady && !appraiser.isFetching && actions.source.fetch(endpoint);}, []);
  
  return <RadioInputVertical
    value={appraiserData?.acf.phone}
    name={'call'}
    label={appraiserData?.acf.company || 'Getting Info...'}
    number={appraiserData?.acf.phone}
    {...props}/>;
});
