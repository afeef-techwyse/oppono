import React from "react";
import { styled } from "frontity";
import PropTypes from "prop-types";
import classnames from "classnames";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { CustomEase } from "gsap/CustomEase";
import useCombinedRefs from "../../hooks/useCombinedRefs";
import { size } from "../../functions/size";
import Link from "../reusable/Link";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(CustomEase);
const RadioInputVertical = React.forwardRef(
  (
    {
      className,
      type = "radio",
      value,
      required,
      readOnly,
      disabled,
      label,
      number,
      name,
      checked = false,
      onChange,
    },
    forwardedRef
  ) => {
    const innerRef = React.useRef(null);
    const combinedRef = useCombinedRefs(forwardedRef, innerRef);
    const [focused, setFocused] = React.useState(false);
    const labelRef = React.useRef(null);

    return (
      <div
        ref={combinedRef}
        className={classnames("radio-input", className, { focused, checked })}
      >
        <label>
          <div className="radio-text" ref={labelRef}>
            {label}
          </div>
          <Link href={`tel:4542548`}>{number}</Link>
          <input
            type={type}
            value={value}
            name={name}
            checked={checked}
            required={required}
            readOnly={readOnly}
            disabled={disabled}
            onFocus={() => {
              gsap.to(window, {
                duration: 0.5,
                scrollTo: {
                  y: combinedRef.current,
                  offsetY:
                    window.innerWidth < 768
                      ? 200
                      : (window.innerHeight -
                          combinedRef.current.getBoundingClientRect().height) /
                        2,
                },
              });
              setFocused(true);
            }}
            onBlur={() => {
              setFocused(false);
            }}
            onChange={onChange}
          />
        </label>
      </div>
    );
  }
);

RadioInputVertical.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(["radio", "checkbox"]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  number: PropTypes.string,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default styled(RadioInputVertical)`
  .radio-text {
    font-size: ${size(14)};
    font-weight: 300;
    line-height: ${size(24)};
    cursor: pointer;
    color: #bfb6b4;
  }
  a {
    color: #ffffff;
    font-size: ${size(16)};
    font-weight: 400;
    line-height: ${size(24)};
    padding-bottom: ${size(2)};
    border-bottom: ${size(1)} solid rgba(191, 182, 180, 0.5);
  }
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  label {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    max-width: ${size(520)};
    padding-left: ${size(29)};
    &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: ${size(21)};
      height: ${size(21)};
      border-radius: ${size(21)};
      border: ${size(1)} solid rgba(191, 182, 180, 0.5);
    }
  }

  &.focused {
    label {
      &:after {
        border-color: #297fff;
      }
    }
  }

  &.checked {
    label {
      &:after {
        background: #bfb6b4;
        border-width: 0;
      }
    }
  }
`;
