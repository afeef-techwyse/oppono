import React from 'react';
import {connect, styled} from 'frontity';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import gsap from 'gsap';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
import useCombinedRefs from '../../hooks/useCombinedRefs';
import {size} from '../../functions/size';
import missing from '../../assets/images/missing.svg';

gsap.registerPlugin(ScrollToPlugin);


const Label = styled(connect(({className, children, state, error, fieldName, invalid}) => {
  const errorMessage = error || state.theme.errors?.[fieldName]?.code;
  return <label className={classnames(className, {invalid: invalid || state.theme.errors?.[fieldName]})} error-message={errorMessage}>
    {children}
  </label>;
}))`
display: flex;
flex-direction: column;
align-items: flex-start;
position: relative;

.label-text{
    color: #bfb6b4;
    font-size: ${size(16)};
    font-weight: 500;
    text-align: left;
    margin-bottom: ${size(7)};
    .dark{
        color: rgba(191, 182, 180, 0.5);
    }
}
&.invalid{
  &:after{
      content:'';
      background: url(${missing});
      background-size: contain;
      position: absolute;
      top: calc(100% + ${size(18)});
      left: 0;
      transform: translateY(-50%);
      width: ${size(18)};
      height: ${size(18)};
  }
  &:before{
      content: attr(error-message);
      position: absolute;
      top: calc(100% + ${size(18)});
      left: ${size(31)};
      transform: translateY(-50%);
      color: #bfb6b4;
      font-size: ${size(14)};
      font-weight: 300;
  }
   input{
        border-bottom: 1px solid #bfb6b4;
    }
}
`;

const Input = React.forwardRef(({className, name, type, value: initialValue, placeholder, pattern, required, readOnly, disabled, min, max, label, onChange, defaultValue, error}, forwardedRef) => {
  const innerRef = React.useRef(null);
  const combinedRef = useCombinedRefs(forwardedRef, innerRef);
  const inputRef = React.useRef(null);
  
  const [value, setValue] = React.useState(initialValue ?? '');
  const [focused, setFocused] = React.useState(false);
  const [visited, setVisited] = React.useState(false);
  const [invalid, setInvalid] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(error);
  const validateInput = () => {
    console.log(error);
    inputRef.current.validity.valid
      ? error || setErrorMessage('')
      : setErrorMessage('This Input is Invalid');
    inputRef.current.validity.typeMismatch && setErrorMessage('Please Add Valid Value');
    inputRef.current.validity.valueMissing && setErrorMessage('Required');
    inputRef.current.validity.patternMismatch && setErrorMessage('Incorrect Format');
    visited && setInvalid(!inputRef.current.validity.valid || error);
  };
  
  React.useEffect(() => {
    validateInput();
  }, [visited]);
  React.useEffect(() => {
    setValue(initialValue);
    setErrorMessage(error);
    error && setVisited(true);
    setTimeout(() => visited && validateInput(), 0);
  }, [initialValue, error]);
  
  
  return (
    <div ref={combinedRef} className={classnames('form-group primary-input ', className, {focused, invalid})}>
      <Label error={errorMessage} fieldName={name} invalid={invalid}>
        <div className="label-text">{label}</div>
        <input
          defaultValue={defaultValue}
          ref={inputRef}
          name={name}
          className={'normal-input'}
          type={type}
          value={value}
          placeholder={placeholder}
          required={required}
          readOnly={readOnly}
          disabled={disabled}
          max={max}
          min={min}
          pattern={pattern}
          onInvalid={() => setVisited(true)}
          onFocus={(e) => {
            gsap.to(window, {
              duration: .5,
              scrollTo: {y: combinedRef.current, offsetY: (window.innerHeight - combinedRef.current.getBoundingClientRect().height) / 2},
            });
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
            setVisited(true);
          }}
          onChange={(event) => {
            event.persist();
            visited && validateInput();
            setValue(event.target.value);
            onChange?.(event);
            const selection = inputRef.current.selectionStart;
            requestAnimationFrame(() => inputRef.current.setSelectionRange(selection, selection));
          }}
        />
      </Label>
    </div>);
});

export default styled(Input)`
position: relative;
transition: margin-bottom 400ms;

.normal-input{
    width: 100%;
    border:none;
    background: transparent;
    outline: none;
    border-bottom: 1px solid rgba(191, 182, 180, 0.1);
    height: ${size(53)};
    padding: 0 0 ${size(6)};
    caret-color: #297fff;
    color: #bfb6b4;
    font-size: ${size(40)};
    font-weight: 300;
    position: relative;
    @media(max-width: 575.98px){
        font-size: ${size(26)};
        line-height: ${size(48)};
    }
    &:focus{
        //border-bottom: 1px solid #bfb6b4;
    }
    &::placeholder{
        color: rgba(191, 182, 180);
        opacity: .4;
        font-size: ${size(40)};
        font-weight: 300;
        text-align: left;
        @media(max-width: 575.98px){
            font-size: ${size(26)};
            line-height: ${size(48)};
        }
    }
}

  &.invalid {
    &:after {
      background-color: #fe412d;
    }
  }

  &.big-input {
    ${Label} {
      align-items: center;
    }

    .normal-input {
      height: ${size(131)};
      font-size: ${size(100)};
      text-align: center;
      border-bottom-color: transparent;
      @media (max-width: 991.98px) {
        height: auto;
            font-size: ${size(26)};
            border-bottom-color:rgba(191, 182, 180, 0.1);
        }
        &:focus{
        
        }
        &::placeholder{
            text-align: center;
            font-size: ${size(100)};
            @media(max-width: 991.98px){
                font-size: ${size(26)};
            }
        }
    }
    &.has-cue{
        .cue{
            display: inline;
            color: rgba(191, 182, 180, 0.1);
            font-size: ${size(100)};
            font-weight: 300;
        }
    }
}

input[type="password"]{
    color: rgba(191, 182, 180, 0.2);
    height: ${size(40)};
    &::placeholder{
        font-size: ${size(25)};
    }
}

&.focused{
    &:after{
        width: 100%;
    }
}
&:after{
    content:'';
    position: absolute;
    height: 1px;
    width: 0;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    background: #bfb6b4;
    transition: width 400ms;
}
`;

Input.propTypes = {
  label: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'number', 'phone', 'password']).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  pattern: PropTypes.string,
};
