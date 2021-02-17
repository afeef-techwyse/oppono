import React from 'react';
import {styled} from 'frontity';
import img1 from '../../assets/images/fly-image-1.png';
import {size} from '../../functions/size';
import Link from '../reusable/Link';

const NeedHelp = ({className, lineOne = 'Need Help?', lineTwo = 'Contact Us', link}) => {
  return (
    <div className={className}>
      <img src={img1} alt="FlyImg"/>
      <Link href={link}><p className={'primary'}>{lineOne}<br/>{lineTwo}</p></Link>
    </div>
  );
};

export default styled(NeedHelp)`
max-width: fit-content!important;
position: relative;
margin-top: ${size(140)};
p{
  color: #bfb6b4;
  font-size: ${size(80)};
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: ${size(80)};
  text-align: center;
  display: inline-block;
  border-bottom: ${size(1)} solid rgba(191, 182, 180, 0.2);
  
  @media(max-width: 991.98px){
    font-size: ${size(45)};
    line-height: ${size(48)};
  }
  @media(max-width: 575.98px){
    font-size: ${size(40)};
    line-height: ${size(48)};
  }
}

img{
  width: ${size(92)};
  height: ${size(110)};
  object-fit: contain;
  position: absolute;
  left: -5%;
  top: 4%;
  z-index: -1;
      transform: translate(-50%,-50%);
 @media(max-width: 991.98px){
   width: ${size(52)};
  height: ${size(62)};
  }
  @media(max-width: 575.98px){
   width: ${size(58)};
  height: ${size(69)};
  }
}

`;