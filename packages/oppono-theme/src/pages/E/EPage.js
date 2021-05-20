import React from 'react';
import {Address} from "../../components/form-components/Address";
import Form from '../../components/form-components/Form';
import {connect, styled} from 'frontity';
import FormStep from '../../components/form-components/FormStep';
import RadioGroup from '../../components/form-components/RadioGroup';
import RadioInputVertical from "../../components/form-components/RadioInputVertical";
import FlyingObjsContainer from '../../components/reusable/FlyingObjsContainer';
import Appraiser from '../../components/form-components/Appraiser';
import {P} from '../../components/form-components/StyledComponent';
import Button from '../../components/form-components/Button';
import LastStep from '../../components/form-components/LastStep';
import intro_ball_1 from '../../assets/images/flying-1.png';
import intro_ball_2 from '../../assets/images/flying-2.png';
import Input from '../../components/form-components/Input';
import RadioInput from '../../components/form-components/RadioInput';
import W50 from '../../components/form-components/W50';
import Select from '../../components/form-components/Select';
import Alert from '../../components/form-components/Alert';
import Link from '../../components/reusable/Link';
import {size} from '../../functions/size';
import useStoredFormValue from '../../hooks/useStoredFormValue';
import AppraiserInput from '../../components/AppraiserInput';
import debounce from '../../functions/debounce';
import opponoApi from '../../opponoApi';

const pageName = 'e';
const EPage = ({className, setCurrentTheme, actions, state, formData}) => {
  
  const getEValues = useStoredFormValue(pageName);
  const section1Values = getEValues(formData.section_1?.section_name);
  const section2Values = getEValues(formData.section_2?.section_name);
  const appraiser = state.theme.appraiser;
  const [postalCodeErrorMessage, setPostalCodeErrorMessage] = React.useState('');
  
  React.useEffect(() => {
    actions.theme.setSubHeader(formData.sub_header);
  }, [formData]);
  React.useEffect(() => {
    actions.theme.setLeadId();
  }, []);
  
  const selectedAppraiser = JSON.parse(section2Values('selected-appraiser')||'{}')
  
  return <div className={className}>
    <Form setCurrentTheme={setCurrentTheme}>
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
          <h2 className={'form-headline-2 primary'}>{formData.section_1?.subtitle}</h2>
        </div>
        <Address
            address={{name: 'address', noScroll: true, ...formData.section_1?.address_input}}
            city={{name: 'city', ...formData.section_1?.city_input}}
            postalCode={{name: 'postal_code', ...formData.section_1?.postal_code_input}}
            postalCodeOnChange={debounce((postalCode) => {
              if (postalCode.length < 2) {
                actions.theme.setAppraiser({});
                setPostalCodeErrorMessage('no appraisers found for this postal code');
                return;
              }
              const data = new FormData();
              data.append('postal_code', postalCode.trim().slice(0, 3));
              opponoApi.post('/appraiser-lookup', data)
                  .then(response => {
                    console.log(response);
                    if (response.data.length !== 1) {
                      actions.theme.setAppraiser({});
                      setPostalCodeErrorMessage('no appraisers found for this postal code');
                    } else {
                      actions.theme.setAppraiser({...response.data[0], city: response.data[0].title});
                      setPostalCodeErrorMessage('');
                    }
                  });
            }, 1000)}
        />
        <Button icon={true} className={'next-step'} label={'Next'}/>
      </FormStep>
      <FormStep pageName={pageName} activeTheme={formData.section_2?.section_theme} stepName={formData.section_2?.section_name}>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-left'}>{formData.section_2?.title}</h1>
          <h2 className={'form-headline-2 primary'}>{formData.section_2?.subtitle}</h2>
        </div>
        {appraiser?.fields
            ? <Appraiser wide>
              <div className="row">
                <div className="col-left">
                  <p className={'form-headline-1 text-left'} dangerouslySetInnerHTML={{__html: appraiser?.fields?.bdm.name}}/>
                </div>
                <div className="col-right">
                  <RadioGroup className={'vertical-radio'} radioText={'*Click to call'}>
                    {appraiser?.fields?.preferred_appraisal_company.map((appraiser, index) => {
                      const endpoint = `/appraiser/${appraiser.post_name}`;
                      const appraiserSource = state.source.get(endpoint);
                      const appraiserData = state.source[appraiserSource.type]?.[appraiserSource.id];
                      !appraiserSource.isReady && !appraiserSource.isFetching && actions.source.fetch(endpoint)
                      return <AppraiserInput
                          key={index} name={'selected-appraiser'}
                          value={JSON.stringify(appraiserData?.acf || index)}
                          label={appraiserData?.acf.company || 'Getting Info...'}
                          number={appraiserData?.acf.phone}/>;
                    })}
                  </RadioGroup>
                  <P.Dark>*Disclaimer - If the city you are looking for is not listed please contact your BDM directly
                    or email us at info@oppono.com</P.Dark>
                </div>
              </div>
              <div className="btn-group">
                <Link href={'/dashboard/'}><Button focusable={false} className={'bordered'} label={'Back to the Dashboard'}/></Link>
                <Button className={'next-step'} label={'Alert this appraiser'}/>
              </div>
            </Appraiser>
            : <Appraiser wide>
              <div className="row">
                <div className="col-left">
                  <p className={'form-headline-1 text-left'}>NO APPRAISERS</p>
                </div>
                <div className="col-right">
                  <P.Dark>Can not find any appraisers for
                    the {section1Values('city')} {section1Values('postal_code')}</P.Dark>
                </div>
              </div>
              <div className="btn-group">
                <Button className={'prev-step'} label={'Select other area'}/>
              </div>
            </Appraiser>
        }
      </FormStep>
      <FormStep pageName={pageName} activeTheme={formData.section_3?.section_theme} stepName={formData.section_3?.section_name}>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-left'}>{formData.section_3?.title}</h1>
          <h2 className={'form-headline-2 primary'}>{formData.section_3?.subtitle}</h2>
          <h2 className={'form-headline-3 primary'}>From: Oppono (appraisals@oppono.com) To: {selectedAppraiser.company}
            Services Inc. ({selectedAppraiser.email})</h2>
          <br/>
          <h2 className={'form-headline-3 primary'}>Hi, I would like to send a mortgage appraisal request on behalf of
            my client. My client is requesting a:</h2>
        </div>
        <div className={'form-wide-container'}>
          <RadioGroup className={'request-type fix-filter-e'} checked={'first-mortgage'}>
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
                <Input type={'text'} pattern={'^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'} name={'borrower_email'} {...formData.section_3?.borrower_email_input}/>
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
                <Input type={'text'} pattern={'^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'} name={'broker_email'} {...formData.section_3?.broker_email_input}/>
                <Input type={'phone'} name={'broker_phone'} {...formData.section_3?.broker_phone_input}/>
              </W50>
            </div>
          </Alert>
        </div>
        
        <div className="btn-group">
          <Button className={'bordered prev-step'} label={'Back'}/>
          <Button className={'next-step'} label={'Send message'}/>
        </div>
      </FormStep>
      <FormStep pageName={pageName} activeTheme={formData.section_4?.section_theme} stepName={formData.section_4?.section_name}>
        <LastStep>
          <img src={formData.section_4?.image.url} alt={formData.section_4?.image.alt}/>
          <div style={{flexBasis: '45%'}} className="text tablet-center">
            <h1 className={'form-headline-1 primary'}>{formData.section_4?.title}</h1>
            <p className={'form-headline-3 primary'}>{formData.section_4?.subtitle}</p>
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
  
  .fix-filter-e {
    margin-bottom: ${size(22)};
    border-bottom: ${size(1)} solid #bfb6b4;
    max-width: 80%;
    padding-bottom: ${size(22)};
    align-items: center;
  }
  
  .vertical-radio {
    label a {
      color: #0e9564;
    }
  }
  
  ${RadioGroup}.request-type {
    margin-right: auto;
    margin-left: auto;
  }
`;
