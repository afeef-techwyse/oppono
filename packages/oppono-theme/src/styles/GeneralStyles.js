import React from 'react';
import {css, Global} from 'frontity';
import {size} from '../functions/size';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GeneralStyles = (props) =>
  <Global styles={css`
    * {
      box-sizing: border-box;
      font-style: normal;
      letter-spacing: normal;
      line-height: normal;
    }

    html {
      font-size: 10px;
    }

    body {
      font-family: "Suisse Int 'l", sans-serif;
    }

    #root {
      height: 100vh;
    }

    html, body, div, span, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    abbr, address, cite, code,
    del, dfn, em, img, ins, kbd, q, samp,
    small, strong, sub, sup, var,
    b, i,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      font-size: 100%;
      vertical-align: baseline;
      background: transparent;
    }

    body {
      line-height: 1;
    }

    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
      display: block;
    }

    nav ul {
      list-style: none;
    }

    blockquote, q {
      quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }

    .biggest-number {
      text-align: center;
      @media (max-width: 575.98px) {
        text-align: left;
      }

      p {
        color: #bfb6b4;
        font-size: ${size(136)};
        font-weight: 500;
        line-height: ${size(180)};
        display: inline-block;
        position: relative;
        @media (max-width: 991.98px) {
          font-size: ${size(80)};
        }
        @media (max-width: 575.98px) {
          font-size: ${size(77)};
        }
      }

      sup {
        color: #bfb6b4;
        font-size: ${size(25)};
        font-weight: 400;
        line-height: ${size(34)};
        position: absolute;
        right: 100%;
        top: 20%;
        @media (max-width: 991.98px) {
          font-size: ${size(18)};
          line-height: ${size(48)};
        }
      }
    }

    hr {
      height: ${size(1)};
      background: rgba(191, 182, 180, 0.2);
      width: 100%;
      margin-top: ${size(40)};
      margin-bottom: ${size(40)};
      border: none;
      max-width: 80% !important;
    }

    a {
      margin: 0;
      padding: 0;
      font-size: 100%;
      vertical-align: baseline;
      background: transparent;
      text-decoration: none;

      &:hover, &:focus, &:active {
        text-decoration: none;
      }
    }

    .btn-group {
      display: flex;
      justify-content: center;

      button {
        margin-right: 0;
        margin-left: 0;
      }

      button:first-of-type {
        margin-right: ${size(55)};
      }

      @media (max-width: 575px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        button {
          margin-top: 30px;

          &:first-of-type {
            margin-right: 0;
            margin-bottom: 0;
          }
          &:not(:first-of-type){
            margin-top: ${size(20)}!important;
          }
        }
      }
    }

    .form-headline-1 {
      color: #bfb6b4;
      font-size: ${size(40)};
      font-weight: 500;
      line-height: ${size(48)};
      text-align: center;
        //max-width: ${size(438)};
      @media (max-width: 991.98px) {
        font-size: ${size(35)};
      }
      @media (max-width: 575.98px) {
        font-size: ${size(32)};
        line-height: ${size(40)};
      }
    }

    .form-headline-2 {
        //max-width: ${size(390)};
      color: rgba(191, 182, 180);
      font-size: ${size(29)};
      font-weight: 400;
      line-height: ${size(40)};
      margin-top: ${size(8)};
      opacity: .5;
      @media (max-width: 991.98px) {
        font-size: ${size(24)};
      }
      @media (max-width: 575.98px) {
        font-size: ${size(20)};
      }
    }

    .form-headline-3 {
        //max-width: ${size(390)};
      color: rgba(191, 182, 180);
      font-size: ${size(18)};
      font-weight: 400;
      line-height: ${size(25)};
      margin-top: ${size(6)};
      opacity: .5;
      @media (max-width: 575.98px) {
        font-size: ${size(16)};
        line-height: ${size(24)};
      }
    }

    .form-group {
      margin-top: ${size(55)};
      @media (max-width: 991.98px) {
        margin-top: ${size(40)};
      }
      @media (max-width: 575.98px) {
        margin-top: ${size(55)};
      }

      .label-text {
        @media (max-width: 575.98px) {
          line-height: ${size(24)};
        }
      }
    }

    .agree-checkbox {
      position: relative;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      margin-top: 82px;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 575.98px) {
        margin-top: 48px;
      }

      .text {
        font-size: 18px;
        font-weight: 500;
        line-height: 25px;
        color: rgba(191, 182, 180, 0.5);
        margin-left: 12px;
        @media (max-width: 575.98px) {
          font-size: ${size(16)};
        }

        a {
          color: #0e9564;
        }
      }

      /* Hide the browser's default checkbox */

      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 100%;
        width: 100%;
        z-index: 9;
      }

      /* Create a custom checkbox */

      .checkmark {
        width: 22px;
        height: 22px;
        border: 1px solid rgba(191, 182, 180, 0.2);
        transition: border-color 400ms;
        display: inline-block;
        position: relative;
        @media (max-width: 575.98px) {
          width: 20px;
          height: 20px;
        }
      }

      input:focus + .checkmark {
        border-color: #bfb6b4;
      }

      /* Create the checkmark/indicator (hidden when not checked) */

      .checkmark:after {
        content: "";
        position: absolute;
        display: none;
      }

      /* Show the checkmark when checked */

      input:checked ~ .checkmark:after {
        display: block;
      }

      /* Style the checkmark/indicator */

      .checkmark:after {
        left: 7px;
        top: 2px;
        width: 5px;
        height: 10px;
        border: solid #fe412d;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }

    .form-sub-text {
      color: rgba(191, 182, 180, 0.5);
      font-size: ${size(18)};
      font-weight: 500;
      line-height: ${size(25)};
      text-align: center;
      margin-top: ${size(14)};

      a {
        color: #0e9564;
      }
    }

    .waiting-screen {
      position: fixed;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 99999999;
      background-color: rgba(0, 0, 0, .7);
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: ${size(20)};
      display: none;

      &.active {
        display: flex;
      }
    }

    .text-left {
      text-align: left !important;
    }

    .text-right {
      text-align: right !important;
    }

    .text-center {
      text-align: center !important;
    }

    /* Chrome, Safari, Edge, Opera */

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */

    input[type=number] {
      -moz-appearance: textfield;
    }

    html {
      cursor: auto !important;
    }

    .m-mt-24 {
      margin-top: ${size(24)} !important;
    }

    .animation ${Header}, .animation ${Footer} {
      background: none !important;
      opacity: 0 !important;
    }
  `}/>
;

export default GeneralStyles;