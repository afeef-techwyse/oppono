import React from 'react';
import Form from '../../form-components/Form';
import Input from '../../form-components/Input';
import {connect, styled} from 'frontity';
import Container from '../../reusable/Container';
import {size} from '../../../functions/size';
import {gsap} from 'gsap';
import missing from '../../../assets/images/missing.png';
import Select from 'react-select';
import RadioInput from '../../form-components/RadioInput';
import RadioGroup from '../../form-components/RadioGroup';
import FormStep from '../../form-components/FormStep';
import Button from '../../form-components/Button';
import FileInput from '../../form-components/FileInput';
import Link from '../../reusable/Link';
import useStoredFormValue from '../../../hooks/useStoredFormValue';
import useMedia from '../../../hooks/useMedia';
import FormConditionalInput from '../../form-components/FormConditionalInput';

const SignUpPage = ({className, state, actions}) => {
  
  const pageName = 'sign-up';
  const data = state.source.get(state.router.link);
  const formData = data.isReady && !data.isError ? state.source[data.type][data.id].acf : {};
  const section1Values = useStoredFormValue(pageName)(formData.section_1?.section_name);
  const [password, setPassword] = React.useState('');
  console.log(formData);
  console.log(section1Values('fname'));
  React.useEffect(() => {
    actions.theme.setSubHeader(formData.sub_header);
  }, [formData]);
  
  return <div className={className}>
    <Form>
      <FormStep pageName={pageName} activeTheme={formData.section_1?.section_theme} stepName={formData.section_1?.section_name}>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-center'}>{formData.section_1?.title}</h1>
          <h2 className={'form-sub-text'}>Already a member? <Link href='/sign-in/'> Sign in</Link></h2>
        </div>
        <Input type={'text'} name={'fname'} {...formData.section_1?.first_name_input}/>
        <Input type={'text'} name={'lname'} {...formData.section_1?.last_name_input}/>
        <Input type={'text'} name={'pref_name'} {...formData.section_1?.preferred_name_input}/>
        <Input type={'text'} name={'mortgage_license'} {...formData.section_1?.mortgage_agent_license_input}/>
        <Input type={'text'} name={'brokerage_license'} {...formData.section_1?.brokerage_license_input}/>
        
        <Button className={'bordered mt-80 next-step'} label={'Next: let’s create your account'}/>
      </FormStep>
      <FormStep pageName={pageName} activeTheme={formData.section_2?.section_theme} stepName={formData.section_2?.section_name}>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-center'}>{formData.section_2?.title.replace('{{name}}', section1Values('fname'))}</h1>
        </div>
        <Input type={'text'} name={'email'} {...formData.section_2?.email_input}/>
        <Input type={'text'} name={'phone'} {...formData.section_2?.phone_input}/>
        
        <Input type={'password'} name={'password'} onChange={e => setPassword(e.target.value)} {...formData.section_2?.password_input}/>
        <Input type={'password'} pattern={password} {...formData.section_2?.re_enter_password_input}/>
        
        <FormConditionalInput name={'worked_with_oppono'} showOn={'yes'} checked={'yes'} {...formData.section_2?.worked_with_oppono_yes_no}>
          <Input type={'text'} name={'worked_with_oppono_2'} {...formData.section_2?.worked_with_oppono_2_input}/>
        </FormConditionalInput>
        
        <div className="agree-checkbox mt-80">
          <input name={'agree'} type="checkbox"/>
          <span className="checkmark"/>
          <span className={'text'}>I agree the <Link href="#">terms and conditions</Link></span>
        </div>
        <Link href={'/dashboard/'}>
          <Button className={'mt-70'} icon={true} label={'Enter'}/>
        </Link>
      </FormStep>
    </Form>
  </div>;
};

export default styled(connect(SignUpPage))`
width: 100%;
height: 100%;
.mt-80{
  margin-top: ${size(80)};
}
.mt-70{
  margin-top: ${size(70)};
}
.form-text-wrapper{
  max-width: 100%;
  @media(max-width: 575.98px){
    margin-left: auto!important;
    margin-right: auto!important;
    max-width: 95%;
  }
}
`;