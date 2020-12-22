import React from 'react';
import Form from '../../form-components/Form';
import {styled, connect} from 'frontity';
import {size} from '../../../functions/size';
import FormStep from '../../form-components/FormStep';
import Container from '../../reusable/Container';
import RadioInputVertical from '../../form-components/RadioInputVertical';
import RadioGroup from '../../form-components/RadioGroup';
import FlyingObjsContainer from '../../reusable/FlyingObjsContainer';
import upload from '../../../assets/images/upload.png';
import FormConditionalInput from '../../form-components/FormConditionalInput';
import FileInput from '../../form-components/FileInput';
import Appraiser from '../../form-components/Appraiser';
import {Li, Ol, P, Span} from '../../form-components/StyledComponent';
import Button from '../../form-components/Button';
import TextArea from '../../form-components/TextArea';
import LastStep from '../../form-components/LastStep';
import last_step from '../../../assets/images/last-step.png';
import intro_ball_1 from '../../../assets/images/flying-1.png';
import intro_ball_2 from '../../../assets/images/flying-2.png';
import Input from '../../form-components/Input';
import RadioInput from '../../form-components/RadioInput';
import W50 from '../../form-components/W50';
import Select from '../../form-components/Select';
import Alert from '../../form-components/Alert';
import Link from '../../reusable/Link';
import FormFilter from '../../form-components/FormFilter';
import useStoredFormValue from '../../../hooks/useStoredFormValue';
import useMedia from '../../../hooks/useMedia';
import FormRepeatableInput from '../../form-components/FormRepeatableInput';

const pageName = 'e';
const EPage = ({className, actions, state}) => {
  const data = state.source.get(state.router.link);
  const formData = data.isReady && !data.isError ? state.source[data.type][data.id].acf : {};
  const getEValues = useStoredFormValue(pageName);
  const section1Values = getEValues(formData.section_1?.section_name);
  
  React.useEffect(() => {
    actions.theme.setSubHeader(formData.sub_header);
  }, [formData]);
  return <div className={className}>
    <Form>
      <FormStep pageName={pageName} activeTheme={formData.section_1?.section_theme} stepName={formData.section_1?.section_name}>
        <FlyingObjsContainer childrenList={[
          {
            imageUrl: intro_ball_2,
            left: '10%',
            level: 1,
            top: '55%',
            type: 'image',
            width: 5,
            alt: 'alt',
          },
          {
            imageUrl: intro_ball_1,
            left: '80%',
            level: 1,
            top: '5%',
            type: 'image',
            width: 9,
            alt: 'alt',
          }]}/>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-left'}>{formData.section_1?.title}</h1>
          <h2 className={'form-headline-2'}>{formData.section_1?.subtitle}</h2>
        </div>
        <Input type={'text'} name={'address'} {...formData.section_1?.address_input}/>
        <W50>
          <Input type={'text'} name={'city'} {...formData.section_1?.city_input}/>
          <Input type={'text'} name={'postal_code'} {...formData.section_1?.postal_code_input}/>
        </W50>
        <Select
          className={'3333333'}
          name={'property'}
          {...formData.section_1?.property_dropdown}/>
        <Button icon={true} className={'next-step'} label={'Next'}/>
      </FormStep>
      <FormStep pageName={pageName} activeTheme={formData.section_2?.section_theme} stepName={formData.section_2?.section_name}>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-left'}>{formData.section_2?.title}</h1>
          <h2 className={'form-headline-2'}>{formData.section_2?.subtitle}</h2>
        </div>
        <Appraiser wide>
          <div className="row">
            <div className="col-left">
              <p className={'form-headline-1 text-left'}>
                Halton<br/>
                Region
              </p>
            </div>
            <div className="col-right">
              <RadioGroup className={'vertical-radio'} radioText={'*Click to call'}>
                <RadioInputVertical value={'(416) 652-3456'} name={'call'} label={'Cross-town Appraisal Ltd.'} number={'(416) 652-3456'}/>
                <RadioInputVertical value={'(905) 479-4400'} name={'call'} label={'Metrowide Appraisal Services Inc.'} number={'(905) 479-4400'}/>
                <RadioInputVertical value={'(416) 871-9224'} name={'call'} label={'Home Value Inc.'} number={'(416) 871-9224'}/>
                <RadioInputVertical value={'(905) 639-0235'} name={'call'} label={'Walker & Walker Appraisal Limited'} number={'(905) 639-0235'}/>
              </RadioGroup>
              <P.Dark>*Disclaimer - If the city you are looking for is not listed please contact your BDM directly or email us at info@oppono.com</P.Dark>
            </div>
          </div>
          <div className="btn-group">
            <Button className={'next-step'} label={'Alert this appraiser'}/>
            <Link href={'/dashboard/'}><Button focusable={false} className={'bordered'} label={'Back to the Dashboard'}/></Link>
          </div>
        </Appraiser>
      </FormStep>
      <FormStep pageName={pageName} activeTheme={formData.section_3?.section_theme} stepName={formData.section_3?.section_name}>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-left'}>{formData.section_3?.title}</h1>
          <h2 className={'form-headline-2'}>{formData.section_3?.subtitle}</h2>
          <h2 className={'form-headline-3'}>From: Oppono (appraisals@oppono.com) To: Metrowide Appraisal Services Inc. (info@metrowideappraisal.com)</h2>
          <br/>
          <h2 className={'form-headline-3'}>Hi, I would like to send a mortgage appraisal request on behalf of my client. My client is requesting a:</h2>
        </div>
        <div className={'form-wide-container'}>
          <RadioGroup className={'request-type'} checked={'first-mortgage'}>
            <RadioInput label={'1st mortgage'} value={'first-mortgage'} name={`request_type`} type={'radio'}/>
            <RadioInput label={'2nd mortgage'} value={'second-mortgage'} name={`request_type`} type={'radio'}/>
            <RadioInput label={'HELOC'} value={'heloc'} name={`request_type`} type={'radio'}/>
          </RadioGroup>
          <Alert>
            <div className="col-4">
              <P.F29>Property details</P.F29>
              <P.D>{section1Values('address')}</P.D>
              <P.D>{section1Values('city')}, {section1Values('postal_code')}</P.D>
            </div>
            <div className="col-6">
              <W50>
                <Input type={'number'} name={'home_value'} {...formData.section_3?.property_value_input}/>
                <Input type={'number'} name={'amount_wanted'} {...formData.section_3?.amount_wanted_input}/>
              </W50>
            </div>
          </Alert>
          <Alert>
            <div className="col-4">
                <P.F29>Borrower details</P.F29>
              </div>
              <div className="col-6">
                <W50>
                  <Input type={'text'} name={'borrower_fname'} {...formData.section_3?.borrower_first_name_input}/>
                  <Input type={'text'} name={'borrower_lname'} {...formData.section_3?.borrower_last_name_input}/>
                  <Input type={'email'} name={'borrower_email'} {...formData.section_3?.borrower_email_input}/>
                  <Input type={'phone'} name={'borrower_phone'} {...formData.section_3?.borrower_phone_input}/>
                </W50>
              </div>
            </Alert>
            <Alert>
              <div className="col-4">
                <P.F29>Broker details</P.F29>
              </div>
              <div className="col-6">
                <W50>
                  <Input type={'email'} name={'broker_email'} {...formData.section_3?.broker_email_input}/>
                  <Input type={'phone'} name={'broker_phone'} {...formData.section_3?.broker_phone_input}/>
                </W50>
              </div>
            </Alert>
        </div>
        
        <div className="btn-group">
          <Button className={'bordered prev-step'} label={'Back'}/>
          <Button className={'next-step'} label={'I’m ready to send'}/>
        </div>
      </FormStep>
      <FormStep pageName={pageName} activeTheme={formData.section_4?.section_theme} stepName={formData.section_4?.section_name}>
        <LastStep>
          <img src={formData.section_4?.image.url} alt={formData.section_4?.image.alt}/>
          <div style={{flexBasis: '45%'}} className="text tablet-center">
            <h1 className={'form-headline-1'}>{formData.section_4?.title}</h1>
            <p className={'form-headline-3'}>{formData.section_4?.subtitle}</p>
            <div className="btn-group">
              <Link href={'/dashboard/'}><Button focusable={false} className={'wide bordered reset-form'} label={'Back to the dashboard'}/></Link>
            </div>
          </div>
        </LastStep>
      </FormStep>
    </Form>
  </div>;
};

export default styled(connect(EPage))`
width: 100%;
height: 100%;

${RadioGroup}.request-type{
  margin-right: auto;
  margin-left: auto;
}
`;