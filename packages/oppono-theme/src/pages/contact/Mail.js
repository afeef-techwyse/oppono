import React from 'react';
import {connect, styled} from 'frontity';
import Container from '../../components/reusable/Container';
import {size} from '../../functions/size';
import contact_obj from '../../assets/images/contact-obj.png';
import FlyingObjsContainer from '../../components/reusable/FlyingObjsContainer';
import Input from '../../components/form-components/Input';
import TextArea from '../../components/form-components/TextArea';
import Button from '../../components/form-components/Button';

const Mail = ({className, state, actions}) => {
  const data = state.source.get(state.router.link);
  const pageData = data.isReady && !data.isError ? state.source[data.type][data.id].acf : {};
  console.log(pageData);
  React.useEffect(() => {
    actions.theme.setSubHeader(pageData.sub_header);
  }, [pageData]);
  
  return (
    <div className={className}>
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
        {pageData.section_1?.title ? <h1 className={'contact-title'}>{pageData.section_1?.title}</h1> : null}
        {pageData.section_1?.sub_title ? <h2 className={'contact-sub-title'}>{pageData.section_1?.sub_title}</h2> : null}
    
        <img className={'contact-obj'} src={contact_obj} alt={'Contact Icon'}/>
        <div className="contact-row">
          <div className="col-4">
            <Input type={'text'} {...pageData.section_1?.name_input}/>
            <Input type={'text'} {...pageData.section_1?.email_input}/>
            <Input type={'text'} {...pageData.section_1?.phone_input}/>
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