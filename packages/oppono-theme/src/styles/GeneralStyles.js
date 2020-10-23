import React from 'react';
import {Global, css} from 'frontity';

const GeneralStyles = (props) => <Global styles={css`
html{
  font-size: 10px;
}
body{
  font-family: "Suisse Int 'l",sans-serif;
}
`}/>
;

export default GeneralStyles;