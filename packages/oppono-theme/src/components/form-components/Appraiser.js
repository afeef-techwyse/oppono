import React from 'react';
import {size} from '../../functions/size';
import {styled} from 'frontity';
import Container from '../reusable/Container';
import classnames from 'classnames';

const Appraiser = ({className, children, wide}) => {
  return (
    <div className={classnames('radio-input', className, {'appraiser-wide':wide})}>
      {wide?<Container>
          {children}
      </Container>:<>{children}</>}
    </div>
  );
};

export default styled(Appraiser)`
padding-top: ${size(40)};
margin-top: ${size(40)};
border-top: ${size(1)} solid rgba(191, 182, 180, 0.1);
.row{
  display: flex;
  @media(max-width: 991.98px){
    flex-direction: column;
    align-items: center;
  }
}
.form-headline-1{
  @media(max-width: 991.98px){
    br{
      display: none;
    }
    text-align: center!important;
    margin-bottom: ${size(50)};
  }
  @media(max-width: 575.98px){
    text-align: left!important;
    margin-bottom: ${size(10)};
  }
}
.col-left{
  width: ${size(200)};
  margin-top: ${size(15)};
  @media(max-width: 575.98px){
    width: 100%;
  }
}
.col-right{
  flex: 1;
  @media(max-width: 991.98px){
    width: 100%;
  }
  button{
    margin: ${size(30)} 0 0;
    border-radius: 0;
    background: transparent;
    border: ${size(1)} solid rgba(191, 182, 180, 0.1);
    padding: ${size(12)} ${size(36)};
  }
}
.vertical-radio{
margin-bottom: ${size(15)};
  .radio-group{
    display: flex;
    flex-direction: column;
    .radio-input{
      padding-top: ${size(23)};
      padding-bottom: ${size(23)};
      border-bottom: ${size(1)} solid rgba(191, 182, 180, 0.1);
      @media(max-width: 575.98px){
        padding-top: ${size(16)};
        padding-bottom: ${size(16)};
      }
    }
  }
}
.form-group{
  margin-top: 0;
  max-width: 52rem;
  @media(max-width: 991.98px){
    max-width: 100%;
  }
  label{
    @media(max-width: 991.98px){
      max-width: 100%;
    }
    @media(max-width: 575.98px){
      flex-direction: column;
      align-items: flex-start;
      a{
        color: #bfb6b4;
      }
    }
  }
  .label-text{
    display: none;
  }
}
&.appraiser-wide{
padding-top: 0;
margin-top: 0;
border-top:none;
.col-left{
  width: ${size(360)};
  margin-top: ${size(15)};
  @media(max-width: 575.98px){
    width: 100%;
  }
}
.form-group{
.label-text{
    text-align: right;
    display: block;
    margin-right: ${size(10)};
    @media(max-width: 991.98px){
      margin-bottom: 0;
    }
    @media(max-width: 575.98px){
      display: none;
    }
  }
  }
}
`;

