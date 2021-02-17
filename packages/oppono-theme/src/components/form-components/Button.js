import React from 'react';
import {styled} from 'frontity';
import PropTypes from 'prop-types';
import {size} from '../../functions/size';

const Button = React.forwardRef(({className, label, href, icon = false, onClick, focusable = true, disabled = false}, forwardedRef) => {
  return (
    <button tabIndex={focusable ? null : -1} className={`oppono-btn ${className}`} type={'button'} onClick={onClick} disabled={disabled} aria-disabled={disabled}>
      <span className="text">{label}</span>
      {icon ? <svg className={'enter-arrow'} viewBox="0 0 13 13">
        <path stroke="white" strokeWidth="2.5" fill="none" d="M11.8 0V7.8H1.0"/>
        <path stroke="white" strokeWidth="2.5" fill="none" d="M6.4 3 L1.8 7.8 6.4 12.3"/>
      </svg> : null}
    </button>
  );
});

Button.propTypes = {
  label: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.bool,
  onClick: PropTypes.func,
};

export default styled(Button)`
  outline: none;
  text-decoration: none;
  width: auto;
  max-width: fit-content;
  padding: ${size(21)} ${size(40)};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${size(100)};
  background: transparent;
  border: 1px solid #fe412d;
  color: #ffffff;
  font-size: ${size(16)};
  font-weight: 500;
  margin: ${size(24)} auto 0;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 400ms, border-color 400ms, color 400ms, opacity 400ms;
  .text{
    text-decoration: none;
  }
  @media(max-width: 575.98px){
    width: 80%;
    max-width: unset;
  }
  &:hover, &:active, &:focus{
    background: #fe412d;
    border-color: #fe412d !important;
    color: #ffffff !important;
    svg{
      width: ${size(13)};
    }
  }
  &.filled{
   background: #fe412d;
    border-color: #fe412d !important;
    color: #ffffff !important;
    &:hover{
      background: transparent;
      border: 1px solid #fe412d;
    }
  }
  &.small{
    padding: ${size(9)} ${size(20)};
  }
  &.bordered{

  }
  &.underlined{
    border-radius: 0;
    padding: 0;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(191, 182, 180, 0.5);
    &.big-text{
      font-size: 40px;
    }
  }
  &.wide{
    padding: ${size(23)} ${size(76)};
  }
   &.wide-vertical{
    padding: ${size(12)} ${size(50)};
  }
 
  svg{
    transition: width 400ms;
    width: 0;
    height: ${size(13)};
    margin-left: ${size(8)};
    overflow: hidden;
  }
  
  &:disabled{
    cursor: not-allowed;
  }
`;