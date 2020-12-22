import React from 'react';
import RadioGroup from './RadioGroup';
import RadioInput from './RadioInput';
import PropTypes from 'prop-types';

const FormConditionalInput = ({label, yes = 'Yes', no = 'No', showOn = 'yes', children, checked, name}) => {
  const [value, setValue] = React.useState(checked);
  return (
    <React.Fragment>
      <RadioGroup checked={checked} radioText={label}>
        <RadioInput onChange={() => setValue('yes')} label={yes} value={'yes'} name={name} type={'radio'}/>
        <RadioInput onChange={() => setValue('no')} label={no} value={'no'} name={name} type={'radio'}/>
      </RadioGroup>
      {value === showOn ? (children[0] ? children[0] : children) : (children[1] ? children[1] : null)}
    </React.Fragment>
  );
};

FormConditionalInput.propTypes = {
  label: PropTypes.string.isRequired,
  yes: PropTypes.string,
  no: PropTypes.string,
  showOn: PropTypes.string,
  checked: PropTypes.string,
  name: PropTypes.string,
};

export default FormConditionalInput;