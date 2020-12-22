import React from 'react';
import {Global, css} from 'frontity';
import BGGreen from '../assets/images/bg-green.png';
import BGBlue from '../assets/images/bg-blue.png';
import BGLightGreen from '../assets/images/bg-light-green.png';
import BGGray from '../assets/images/bg-gray.png';
import BGBlack from '../assets/images/bg-black.png';
import {P} from '../components/form-components/StyledComponent';

const Themes = () => <Global styles={css`
:root{
--oppono-bg-image: url(${BGGray})!important;
}
[class*="-theme"],header, body, .loading-page,.floating-menu{
  background-repeat: no-repeat!important;
  background-size: cover!important;
  background-position: top center;
  transition: background-image 400ms;
  background-attachment: fixed;
  background-image: var(--oppono-bg-image);
}
.loading-page{
width: 100%;
    position: fixed;
    height: 100%;
  //background-image:url(${BGGray})!important;
    top: 0;
    left: 0;
    z-index: 9999999;
     background-repeat: no-repeat!important;
  background-size: cover!important;
  background-position: top center;
  transition: background-image 400ms;
  background-attachment: fixed;
}
.green-theme{
  --oppono-bg-image: url(${BGGreen})!important;

  .loading-page{
  --oppono-bg-image: url(${BGGreen})!important;
  }
  .primary{
    color: #d2f5e9!important;
    &.oppono-btn:hover{
    border-color: #fe412d !important;
      color: #ffffff !important;
    }
  }
  ${P.D},${P.Dark},${P.Cost},${P.Num}{
    color: #d2f5e9!important;
  }
  .primary-border{
   border-color: #d2f5e9!important;
  }
  .primary-bg{
    background: #d2f5e9!important;
  }
  .primary-fill{
     fill: #d2f5e9!important;
  }
  .primary-stroke{
     stroke: #d2f5e9!important;
  }
}
.blue-theme{
  --oppono-bg-image: url(${BGBlue})!important;

.loading-page{
  --oppono-bg-image: url(${BGBlue})!important;
  }
  .primary-input{
    .label-text,input,input::placeholder,textarea,textarea::placeholder{
      color: #b5d2ff!important;
    }
    textarea{
      &:focus{
        border-color: #b5d2ff;!important;
      }
    }
    &:after{
        background: #b5d2ff!important;
    }
  }
  .primary{
      &.oppono-btn:hover{
        border-color: #fe412d !important;
        color: #ffffff !important;
      }
    color: #b5d2ff!important;
  }
  .primary-border{
   border-color: #b5d2ff!important;
  }
  .primary-bg{
    background: #b5d2ff!important;
  }
  .primary-fill{
     fill: #b5d2ff!important;
  }
  .primary-stroke{
     stroke: #b5d2ff!important;
  }
}
.light-green-theme{
  --oppono-bg-image: url(${BGLightGreen})!important;
.primary{
    color: #b5d2ff!important;
    &.oppono-btn{
      border-color: #b5d2ff !important;
      &:hover{
        border-color: #fe412d !important;
        color: #ffffff !important;
      }
    }
  }
.loading-page{
  --oppono-bg-image: url(${BGLightGreen})!important;
  }
}
.black-theme{
  --oppono-bg-image: url(${BGBlack})!important;

.loading-page{
  --oppono-bg-image: url(${BGBlack})!important;
  }
}
.gray-theme{
  --oppono-bg-image: url(${BGGray})!important;

.loading-page{
  --oppono-bg-image: url(${BGGray})!important;
  }
  .primary{
  &.oppono-btn:hover{
    border-color: #fe412d !important;
    color: #ffffff !important;
  }
    color: #bfb6b4!important;
  }
  .primary-border{
   border-color: #bfb6b4!important;
  }
  .primary-bg{
    background: #bfb6b4!important;
  }
  .primary-fill{
     fill: #bfb6b4!important;
  }
  .primary-stroke{
     stroke: #bfb6b4!important;
  }
}
`}/>;

export default Themes;