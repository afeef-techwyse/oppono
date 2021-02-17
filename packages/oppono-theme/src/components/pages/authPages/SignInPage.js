import React from 'react';
import Form from '../../form-components/Form';
import Input from '../../form-components/Input';
import {connect, styled} from 'frontity';
import Container from '../../reusable/Container';
import {size} from '../../../functions/size';
import Button from '../../form-components/Button';
import intro_ball_1 from '../../../assets/images/intro_ball_1.png';
import intro_ball_2 from '../../../assets/images/intro_ball_2.png';
import FormStep from '../../form-components/FormStep';
import FlyingObjsContainer from '../../reusable/FlyingObjsContainer';
import Link from '../../reusable/Link';


const SignInPage = ({className, state, actions}) => {
  const pageName = 'sign-in';
  const data = state.source.get(state.router.link);
  const formData = data.isReady && !data.isError ? state.source[data.type][data.id].acf : {};
  
  React.useEffect(() => {
    actions.theme.setSubHeader(formData.sub_header);
  }, [formData]);
  
  return <div className={className}>
    <Container>
      <Form>
        <FormStep endPoint={'/signin'} pageName={pageName} isSignIn activeTheme={formData.section_1?.section_theme} stepName={formData.section_1?.section_name}>
          <div className="form-text-wrapper">
            <h1 className={'form-headline-1 text-center'}>{formData.section_1?.title}</h1>
            <h2 className={'form-sub-text'}>Not a member yet? <Link href={'/create-account/'}>Sign up now!</Link></h2>
          </div>
          <FlyingObjsContainer childrenList={[
            {
              imageUrl: intro_ball_1,
              left: '1%',
              level: 1,
              top: '55%',
              type: 'image',
              width: 10,
              alt: 'alt',
            },
            {
              imageUrl: intro_ball_2,
              left: '70%',
              level: 1,
              top: '5%',
              type: 'image',
              width: 5,
              alt: 'alt',
            }]}/>
          <Input type={'text'} pattern={'^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'} name={'username'} {...formData.section_1?.user_name_input}/>
  
          <Input type={'password'} className={'password-field'} name={'password'} {...formData.section_1?.password_input}/>
          <Link className={'forgot-password'} href="">I forgot my password</Link>
  
          <div className="agree-checkbox">
            <input type="checkbox"/>
            <span className="checkmark"/>
            <span className={'text'}>I agree the <Link href="#">terms and conditions</Link></span>
          </div>
          {
            state.theme.errors?.general_error
              ?
              <p className={'error-message'}>
                {state.theme.errors?.general_error.code}
              </p>
              : null
          }
          <Button className={'next-step'} label={'Enter'}/>
        </FormStep>
      </Form>
    </Container>
  </div>;
};

export default styled(connect(SignInPage))`
width: 100%;
position: relative;
.form-text-wrapper{
  @media(max-width: 991.98px){
    margin-left: auto;
  }
}

.password-field.invalid + .forgot-password{
margin-top: ${size(35)};
}
.forgot-password{
  color: rgba(191, 182, 180, 0.5);
  font-size: ${size(18)};
  font-weight: 500;
  line-height: ${size(25)};
  margin-top: ${size(17)};
  display: block;
  transition:margin .3s;
}
`;