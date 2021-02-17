import React from 'react';
import {connect, styled} from 'frontity';
import Container from '../../reusable/Container';
import {size} from '../../../functions/size';
import contact_obj from '../../../assets/images/contact-obj.png';
import FlyingObjsContainer from '../../reusable/FlyingObjsContainer';
import Input from '../../form-components/Input';
import TextArea from '../../form-components/TextArea';
import Button from '../../form-components/Button';

const Mail = (props) => {
  React.useEffect(() => {
    props.actions.theme.setActiveTheme('blue-theme');
  }, []);
  return (
    <div className={props.className}>
      <FlyingObjsContainer childrenList={
        [
          {
            imageUrl: contact_obj,
            left: '60%',
            level: 1,
            top: '28%',
            type: 'image',
            width: 18,
            alt: 'alt',
          },
        ]}/>
      <Container>
        <h1 className={'contact-title'}>Take your time,</h1>
        <h2 className={'contact-sub-title'}>We’ll get back to you asap</h2>
        <img className={'contact-obj'} src={contact_obj} alt={'Contact Icon'}/>
        <div className="contact-row">
          <div className="col-4">
            <Input label={'Name'} type={'text'} placeholder={'eg. Danny'}/>
            <Input label={'Email'} type={'text'} placeholder={'e.g. john.s@gmail.com'}/>
            <Input label={'Phone'} type={'text'} placeholder={'e.g. 416-555-6578'}/>
          </div>
          <div className="col-auto">
            <TextArea label={'Questions?'}/>
          </div>
        </div>
        <Button className={'wide'} label={'I’m ready to send'}/>
      </Container>
    </div>
  );
};

export default styled(connect(Mail))`
width: 100%;
height: 100%;
padding-top: ${size(200)};
@media(max-width: 575.98px){
padding-top: ${size(150)};
  }
.contact-obj{
  @media(min-width: 576px){
    display: none;
  }
  max-width: ${size(205)};
  display: block;
  margin: ${size(30)} auto 0;
}

.contact-row{
  display: flex;
  align-items: flex-end;
  @media(max-width: 991.98px){
      flex-direction: column;
       max-width: ${size(400)};
      margin: 0 auto;
      margin-top: ${size(25)};
    }
    @media(max-width: 575.98px){
    margin-top: 0;
  }
  .col-4{
    flex-basis: ${size(460)};
    width: ${size(460)};
    margin-right: ${size(100)};
    flex-shrink: 0;
    @media(max-width: 991.98px){
      width: 100%;
      flex-basis: 100%;
      margin-right: 0;
    }
  }
  .col-auto{
    flex: 1 1 100%;
    @media(max-width: 991.98px){
      width: 100%;
      flex-basis: 100%;
    }
  }
}
${Input}{
.normal-input{
    font-size: ${size(28)};
    height: ${size(36)};
    &::placeholder{
      font-size: ${size(28)};
    }
  }
}
textarea{
  font-size: ${size(28)};
}
${Button}{
  margin-top: ${size(78)};
  @media(max-width: 991.98px){
   padding: ${size(20)};
  }
   @media(max-width: 575.98px){
   width: 100%;
  }
}
`;