import React from 'react';
import Form from '../../form-components/Form';
import Input from '../../form-components/Input';
import {connect, styled} from 'frontity';
import Container from '../../reusable/Container';
import {size} from '../../../functions/size';
import missing from '../../../assets/images/missing.png';
import Select from '../../form-components/Select';
import RadioInput from '../../form-components/RadioInput';
import RadioGroup from '../../form-components/RadioGroup';
import FormStep from '../../form-components/FormStep';
import Button from '../../form-components/Button';
import FileInput from '../../form-components/FileInput';
import W50 from '../../form-components/W50';
import TextArea from '../../form-components/TextArea';
import intro_ball_1 from '../../../assets/images/form_1_img.png';
import intro_ball_2 from '../../../assets/images/form_2_img.png';
import FlyingObjsContainer from '../../reusable/FlyingObjsContainer';
import ProductsTable from '../../form-components/ProductsTable';
import {Li, Ol, P, Span} from '../../form-components/StyledComponent';
import Alert from '../../form-components/Alert';
import Finalize, {Bottom, FinalizeChild, FinalizeTable, Top} from '../../form-components/Finalize';
import useMedia from '../../../hooks/useMedia';
import FormConditionalInput from '../../form-components/FormConditionalInput';
import {numberToOrdinal} from '../../../functions/numberToOrdinal';
import FormFilter from '../../form-components/FormFilter';
import FormRepeatableInput from '../../form-components/FormRepeatableInput';
import ProductsMobileOption from '../../form-components/ProductsMobileOption';
import LastStep from '../../form-components/LastStep';
import upload from '../../../assets/images/upload.png';
import Appraiser from '../../form-components/Appraiser';
import RadioInputVertical from '../../form-components/RadioInputVertical';
import last_step from '../../../assets/images/last-step.png';
import useStoredFormValue from '../../../hooks/useStoredFormValue';
import intro_ball_3 from '../../../assets/images/fly-image-4.png';
import intro_ball_4 from '../../../assets/images/fly-image-3.png';

const pageName = 'd-2';
const D2Page = ({className, state, actions}) => {
  const data = state.source.get(state.router.link);
  const formData = data.isReady && !data.isError ? state.source[data.type][data.id].acf : {};
  const getD2Values = useStoredFormValue(pageName);
  const
    section1Values = getD2Values(formData.section_1?.section_name),
    section2Values = getD2Values(formData.section_2?.section_name),
    section3Values = getD2Values(formData.section_3?.section_name);
  const media = useMedia();
  
  React.useEffect(() => {
    actions.theme.setSubHeader(formData.sub_header);
  }, [formData]);
  const CheckMark = () => <svg className="table-checkmark" viewBox="0 0 18 12">
    <path fill="none" stroke="#d2f5e9" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="20" strokeWidth="2" d="M1 5.167v0L6.895 11 17 1"/>
  </svg>;
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
          name={'property'}
          {...formData.section_1?.property_dropdown}/>
        <Select
          name={'property_details_1'}
          {...formData.section_1?.property_details_1_dropdown}/>
        <Select
          name={'property_details_2'}
          {...formData.section_1?.property_details_2_dropdown}/>
        <Button icon={true} className={'next-step'} label={'Next'}/>
      </FormStep>
      <FormStep pageName={pageName} activeTheme={formData.section_2?.section_theme} stepName={formData.section_2?.section_name}>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-left'}>{formData.section_2?.title}</h1>
        </div>
        <Input type={'text'} name={'home_value'} {...formData.section_2?.estimated_value_input}/>
        <Input type={'text'} name={'home_value'} {...formData.section_2?.down_payment_input}/>
        <RadioGroup radioText={formData.section_2?.appraisal_report_yes_no.label}>
          <RadioInput label={formData.section_2?.appraisal_report_yes_no.yes} value={'yes'} name={'have_appraisal_report'} type={'radio'}/>
          <RadioInput label={formData.section_2?.appraisal_report_yes_no.no} value={'no'} name={'have_appraisal_report'} type={'radio'}/>
        </RadioGroup>
        <div className="btn-group">
          <Button className={'bordered prev-step'} label={'Back'}/>
          <Button icon={true} className={'next-step'} label={'Next'}/>
        </div>
      </FormStep>
      <FormStep pageName={pageName} activeTheme={formData.section_3?.section_theme} stepName={formData.section_3?.section_name}>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-left'}>{formData.section_3?.title}</h1>
          <h1 className={'form-headline-2'}>{formData.section_3?.subtitle}</h1>
        </div>
        <FormRepeatableInput question={formData.section_3?.applicant_amount_label} number={4} initial={1} name={'applicants_number'}>
          <W50>
            <Input type={'text'} name={'applicant_fname_{{number}}'} {...formData.section_3?.applicant.first_name_input}/>
            <Input type={'text'} name={'applicant_lname_{{number}}'} {...formData.section_3?.applicant.last_name_input}/>
            <Input type={'email'} name={'applicant_mail_{{number}}'} {...formData.section_3?.applicant.email_input}/>
            <Input type={'phone'} name={'applicant_phone_{{number}}'} {...formData.section_3?.applicant.phone_input}/>
          </W50>
          <RadioGroup radioText={formData.section_3?.applicant.score_label} checked={'650+'}>
            <RadioInput label={'<650'} value={'<650'} name={`applicant_score_{{number}}`} type={'radio'}/>
            <RadioInput label={'650+'} value={'650+'} name={`applicant_score_{{number}}`} type={'radio'}/>
            <RadioInput label={'680+'} value={'680+'} name={`applicant_score_{{number}}`} type={'radio'}/>
          </RadioGroup>
        </FormRepeatableInput>
        <div className="btn-group">
          <Button className={'bordered prev-step'} label={'Back'}/>
          <Button icon={true} label={'Next'} className={'next-step'}/>
        </div>
      </FormStep>
      <FormStep pageName={pageName} activeTheme={formData.section_4?.section_theme} stepName={formData.section_4?.section_name}>
        <div className="form-text-wrapper wide-text">
          <h1 className={'form-headline-1 text-left'}>{formData.section_4?.title}</h1>
          <h2 className={'form-headline-3'}>
            You are refinancing your {section1Values('property')}, {section1Values('property_details_1')} home which is located
            at <br/> {section1Values('address')}, {section1Values('city')}, {section1Values('postal_code')}</h2>
        </div>
        <Finalize>
          <Top>
            {media !== 'mobile'
              ? <FinalizeChild>
                <P.Num>5.74%</P.Num>
                <P.Dark>*Variable Rate</P.Dark>
              </FinalizeChild>
              : <FinalizeChild className={'full'} order={1}>
                <P.Dark>*Variable Rate</P.Dark>
                <P.Dark>*Payment interest based on balance</P.Dark>
                <P.Num>5.74%</P.Num>
              </FinalizeChild>}
            
            <FinalizeChild order={2}>
              <P.Cost>$400,000</P.Cost>
              <P.Dark>*Maximum mortgage amount</P.Dark>
            </FinalizeChild>
            <FinalizeChild className={'wide'} order={3}>
              <P.Cost>$2,200</P.Cost>
              <P.Dark>*Monthly mortgage payment</P.Dark>
            </FinalizeChild>
          </Top>
          <Bottom>
            {media !== 'mobile'
              ? <FinalizeChild order={1}>
                {[...Array(+section3Values('applicants_number') || 0).keys()].map((index, personIndex) => {
                    const applicantFName = section3Values(`applicant_fname_${index + 1}`);
                    const applicantLName = section3Values(`applicant_lname_${index + 1}`);
                    const applicantScore = section3Values(`applicant_score_${index + 1}`);
                    return <P.D key={`person-desktop-${personIndex}`}>{applicantFName} {applicantLName} {applicantScore}</P.D>;
                  },
                )}
                <P.D>Your mortgage request is for {(+section2Values('home_value') - (+section2Values('mortgage_value_1') || 0))}</P.D>
                <P.D>Your property value is ${+section2Values('home_value')}</P.D>
                <P.D>Your down payment is ${+section2Values('down_payment')}</P.D>
                <P.D>Your LTV is {(1 - ((+section2Values('mortgage_value_1') || 0) / +section2Values('home_value'))) * 100}%</P.D>
              </FinalizeChild>
              : <FinalizeChild className={'full'} order={1}>
                <FinalizeTable>
                  <tbody>
                  {[...Array(+section3Values('applicants_number') || 0).keys()].map((index, personIndex) => {
                      const applicantFName = section3Values(`applicant_fname_${index + 1}`);
                      const applicantLName = section3Values(`applicant_lname_${index + 1}`);
                      const applicantScore = section3Values(`applicant_score_${index + 1}`);
                      return <tr key={`person-mobile-${personIndex}`}>
                        <P.Dark as={'td'}>{applicantFName} {applicantLName}</P.Dark>
                        <P.D as={'td'}> {applicantScore}</P.D>
                      </tr>;
                    },
                  )}
                  <tr>
                    <P.Dark as={'td'}>Mortgage request</P.Dark>
                    <P.D as={'td'}>{(+section2Values('home_value') - (+section2Values('mortgage_value_1') || 0))}</P.D>
                  </tr>
                  <tr>
                    <P.Dark as={'td'}>Property Value</P.Dark>
                    <P.D as={'td'}>${+section2Values('home_value')}</P.D>
                  </tr>
                  <tr>
                    <P.Dark as={'td'}>Down Payment</P.Dark>
                    <P.D as={'td'}>${+section2Values('down_payment')}</P.D></tr>
                  <tr>
                    <P.Dark as={'td'}>LTV</P.Dark>
                    <P.D as={'td'}>{(1 - ((+section2Values('mortgage_value_1') || 0) / +section2Values('home_value'))) * 100}%</P.D>
                  </tr>
                  </tbody>
                </FinalizeTable>
              </FinalizeChild>}
  
            <FinalizeChild order={2} className={'full m-border'}>
              <FinalizeTable>
                <tbody>
                <tr>
                  <P.Dark as={'td'}>Lender Fee</P.Dark>
                  <P.D as={'td'}>2.00%</P.D>
                </tr>
                <tr>
                  <P.Dark as={'td'}>Credit Score</P.Dark>
                  <P.D as={'td'}>680+</P.D>
                </tr>
                </tbody>
              </FinalizeTable>
            </FinalizeChild>
            <FinalizeChild order={3} className={'wide m-pr-40'}>
              <P.Border>Lower than 75% LTV or $150,000 on single family homes</P.Border>
              <P.Border>Interest paid only on outstanding loan balance</P.Border>
              <P.Border>Pay off at anytime prior to maurity</P.Border>
              <P.Border>Type of properties will follow existing credit policies</P.Border>
              <P.Border>Fully open - No Prepayment penalty</P.Border>
              <P.Border>Minimum Draw - $2,500.00</P.Border>
              <P.Border>Admin Fees on Each Draw - $75.00</P.Border>
              <P.Border>Draws must be paid to same bank account</P.Border>
              <P.Border>No income verification</P.Border>
            </FinalizeChild>
          </Bottom>
        </Finalize>
        <div className="btn-group">
          <Button label={'I’m good to go'} className={'next-step small'}/>
          <Button className={'bordered reset-form small'} label={'No, edit the details'}/>
        </div>
      </FormStep>
      <FormStep pageName={pageName} activeTheme={formData.section_5?.section_theme} stepName={formData.section_5?.section_name}>
        <div className="upload-step-wrapper">
          <FlyingObjsContainer childrenList={
            [
              {
                imageUrl: upload,
                left: '40%',
                level: 1,
                top: '7%',
                type: 'image',
                width: 8,
                alt: 'alt',
              },
            ]}/>
          <h1 className={'form-headline-1 text-left'}>{formData.section_5?.title}</h1>
          <FormConditionalInput name={'mortgages_1'} showOn={'yes'} checked={'yes'} {...formData.section_5?.have_appraisal_report_yes_no}>
            <FileInput label={formData.section_5?.appraisal_report_upload_label} acceptText={'PDF, JPG, or PNG'}/>
            <Appraiser>
              <P.D>Select an appraiser</P.D>
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
                  <Button label={'Alert'}/>
                </div>
              </div>
            </Appraiser>
          </FormConditionalInput>
          <hr/>
          <TextArea name={'additional_notes'} {...formData.section_5?.additional_notes_input}/>
          <div className="btn-group">
            <Button className={'next-step'} label={'I want my pre-approval'}/>
          </div>
        </div>
      </FormStep>
      <FormStep pageName={pageName} activeTheme={formData.section_6?.section_theme} stepName={formData.section_6?.section_name}>
        <LastStep>
          <img src={formData.section_6?.image.url} alt={formData.section_6?.image.alt}/>
          <div style={{flexBasis: '20%'}} className="text">
            <h1 className={'form-headline-1 text-left'}>{formData.section_6?.title}</h1>
            <p className={'form-headline-3'}>{formData.section_6?.subtitle}</p>
            
            <Ol>
              <Li>Login into your <Span.Green>Filogix</Span.Green> Expert account</Li>
              <Li>Select your <Span.White>Client</Span.White> and click <Span.Green>Lender Submit</Span.Green> in the left side panel.</Li>
              <Li>Choose <Span.White>Private</Span.White> under <Span.Green>Lender Type</Span.Green>, <Span.White>Oppono</Span.White> under <Span.Green>Lender</Span.Green>,
                and <Span.White>Electronic</Span.White> under <Span.Green>Submission Method.</Span.Green></Li>
              <Li>Copy your reference number <Span.White>#034933</Span.White> into the <Span.Green>Lender Notes</Span.Green> section then press <Span.Green>Submit.</Span.Green></Li>
            </Ol>
            <div className="btn-group">
              <Button className={'wide'} label={'Connect to Filogix'}/>
              <Button className={'wide bordered reset-form'} label={'No, edit the details'}/>
            </div>
          </div>
        </LastStep>
      </FormStep>
    </Form>
  </div>;
};

export default styled(connect(D2Page))`
width: 100%;
height: 100%;
${Bottom}{
  padding-top: 0;
  .full{
    @media(max-width: 991px){
    flex-basis: 72%;
    width: 72%;
    margin-left: auto;
    }
    @media(max-width: 575px){
        flex-basis: 100%;
    width: 100%;
    }
  }
}
.wide-text{
  max-width: ${size(800)};
  .form-headline-3{
    max-width: ${size(400)};
    @media(max-width: 575.98px){
      max-width: 90%;
    }
  }
}

`;