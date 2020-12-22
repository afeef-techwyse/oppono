import React from 'react';
import Form from '../../form-components/Form';
import Input from '../../form-components/Input';
import {styled, connect} from 'frontity';
import Container from '../../reusable/Container';
import {size} from '../../../functions/size';
import missing from '../../../assets/images/missing.png';
import Select from 'react-select';
import RadioInput from '../../form-components/RadioInput';
import RadioGroup from '../../form-components/RadioGroup';
import Button from '../../form-components/Button';
import floating_ball_1 from '../../../assets/images/intro_ball_1.png';
import floating_ball_2 from '../../../assets/images/intro_ball_2.png';
import gsap from 'gsap';
import FormStep from '../../form-components/FormStep';
import FlyingObjsContainer from '../../reusable/FlyingObjsContainer';
import intro_ball_1 from '../../../assets/images/intro_ball_1.png';
import intro_ball_2 from '../../../assets/images/intro_ball_2.png';
import Link from '../../reusable/Link';
import useStoredFormValue from '../../../hooks/useStoredFormValue';


const SignInPage = ({className, state, actions}) => {
  const pageName = 'sign-in';
  const data = state.source.get(state.router.link);
  const formData = data.isReady && !data.isError ? state.source[data.type][data.id].acf : {};
  console.log(formData);
  
  React.useEffect(() => {
    actions.theme.setSubHeader(formData.sub_header);
  }, [formData]);
  
  return <div className={className}>
    <Container>
      <Form>
        <FormStep pageName={pageName} activeTheme={formData.section_1?.section_theme} stepName={formData.section_1?.section_name}>
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
          <Input type={'text'} name={'username'} {...formData.section_1?.user_name_input}/>
          
          <Input type={'password'} name={'password'} {...formData.section_1?.password_input}/>
          <Link className={'forgot-password'} href="">I forgot my password</Link>
          
          <div className="agree-checkbox">
            <input type="checkbox"/>
            <span className="checkmark"/>
            <span className={'text'}>I agree the <Link href="#">terms and conditions</Link></span>
          </div>
          
          <Link href={'/dashboard/'}><Button focusable={false} label={'Enter'}/></Link>
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

.forgot-password{
  color: rgba(191, 182, 180, 0.5);
  font-size: ${size(18)};
  font-weight: 500;
  line-height: ${size(25)};
  margin-top: ${size(17)};
  display: block;
}
`;