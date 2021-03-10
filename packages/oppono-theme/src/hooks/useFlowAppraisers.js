import React from 'react';
import debounce from '../functions/debounce';
import opponoApi from '../opponoApi';

export default function useFlowAppraisers() {
  const [appraiser, setAppraiser] = React.useState(null);
  
  const onChange = debounce((event) => {
    const postalCode = event.target.value;
    if (postalCode.length < 3) {
      setAppraiser({});
      return;
    }
    const data = new FormData();
    data.append('postal_code', postalCode.trim().slice(0, 3));
    opponoApi.post('/appraiser-lookup', data)
      .then(response =>
        response.data.length !== 1
          ? setAppraiser({})
          : setAppraiser(response.data[0]),
      );
  }, 1000);
  return [appraiser, onChange];
}