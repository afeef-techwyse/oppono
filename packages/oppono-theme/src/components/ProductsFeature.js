import React from 'react';
import {styled} from 'frontity';
import {size} from '../functions/size';
import Container from './reusable/Container';

const Col = styled.div`
width: 50%;
flex: 0 0 50%;
padding: 0 ${size(13)};
@media(max-width:991.98px) and (min-width: 576px){
  &.image{
    width: calc(50% - 3rem);
    flex: 0 0 calc(50% - 3rem);
  }
}
@media(max-width: 575.98px){
  width: 100%;
  flex-basis: 100%;
  &.image{
  margin-bottom: ${size(40)};
  }
}
`;
const Title = styled.div`
color: #d2f5e9;
font-size: ${size(40)};
font-weight: 400;
line-height: ${size(48)};
text-align: left;
padding: 0 ${size(115)};
@media(max-width:991.98px){
  font-size: ${size(28)};
  line-height: ${size(34)};
  padding: 0;

}
@media(max-width:575.98px){
  font-size: ${size(32)};
  line-height: ${size(40)};
  padding: 0;
}
`;
const Description = styled.div`
color: rgba(210, 245, 233, 0.6);
font-size: ${size(18)};
font-weight: 400;
line-height: ${size(25)};
text-align: left;
padding: 0 ${size(115)};
margin-top: ${size(23)};
@media(max-width:991.98px){
  font-size: ${size(16)};
  margin-top: ${size(16)};
  padding: 0;

}
@media(max-width:575.98px){
  font-size: ${size(18)};
  margin-top: ${size(23)};
  padding: 0;
}
`;
const AspectRation = styled.picture`
 width: 100%;
 height: 0;
 padding-top: ${({ratio}) => ratio * 100}%;
 display: block;
 position: relative;
 img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
 }
`;

const ProductsFeature = ({className, imageUrl, alt, title, description}) => {
  return (
    <div className={className}>
      <Col className={'image'}>
        <AspectRation ratio={1}>
          <img src={imageUrl} alt={alt}/>
        </AspectRation>
      </Col>
      <Col>
        <Title className={'primary'}>{title}</Title>
        <Description>{description}</Description>
      </Col>
    </div>
  );
};

export default styled(ProductsFeature)`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin: ${size(80)} ${size(-13)};
&:last-of-type{
  margin-bottom: 0;
  padding-bottom: ${size(80)};
}
@media(max-width:991.98px){
  justify-content: space-between;
}
@media(max-width: 575.98px){
  justify-content: center;
  flex-wrap: wrap;
}
`;