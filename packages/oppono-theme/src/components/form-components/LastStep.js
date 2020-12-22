import React from 'react';
import intro_ball_1 from '../../assets/images/flying-1.png';
import {Li, Ol, Span} from './StyledComponent';
import Button from './Button';
import {size} from '../../functions/size';
import {styled} from 'frontity';
import Container from '../reusable/Container';

const LastStep = ({className, children}) => {
  return (
    <div className={className + ' form-wide-container'}>
      <Container>
        {children}
      </Container>
    </div>
  );
};

export default styled(LastStep)`
//  padding-top: ${size(50)};
// @media(max-width: 991.98px){
//   padding-top: 0;
// }
${Container}{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
@media(max-width: 991.98px){
  flex-direction: column;
}
}

img{
  flex-basis: 40%;
  width: 40%;
  height: auto;
  object-fit: cover;
  max-width: ${size(260)};
  @media(max-width: 991.98px){
    margin-bottom: ${size(60)};
    margin-left: ${size(-32)};
  }
  @media(max-width: 991.98px){
    margin-left: 0;
  }
}
.text{
  text-align: left;
  ol{
    padding-left: ${size(10)};
    @media(max-width: 991.98px){
      padding-left: 0;
    }
  }
  &.tablet-center{
    .form-headline-3,.form-headline-1{
    text-align: left;
      @media(max-width: 991.98px){
        text-align: center;
        max-width: 80%;
        margin-right: auto;
        margin-left: auto;
      }
    }
  }
}
.form-headline-3{
  margin-top: ${size(18)};
  margin-bottom: ${size(25)};
  @media(max-width: 991.98px){
    margin-bottom: 0;
  }
}
.btn-group{
  justify-content: flex-start;
  @media(max-width: 991.98px){
    justify-content: center;
  }
  @media(max-width: 575.98px){
    flex-direction: column;
    align-items: center;
  }
  
  button{
    margin: ${size(10)} ${size(10)} 0;
    @media(max-width: 991.98px){
      margin: ${size(40)} ${size(25)} 0;
      padding: ${size(21)} ${size(40)};
    }
    @media(max-width: 575.98px){
      margin: ${size(40)} 0 0;
    }
  }
}
`;

