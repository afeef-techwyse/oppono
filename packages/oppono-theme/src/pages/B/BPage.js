import React from 'react';
import Form from '../../components/form-components/Form';
import Input from '../../components/form-components/Input';
import {connect, styled} from 'frontity';
import {beaconScore} from "../../functions/beaconScore";
import {size} from '../../functions/size';
import Select from '../../components/form-components/Select';
import RadioInput from '../../components/form-components/RadioInput';
import RadioGroup from '../../components/form-components/RadioGroup';
import FormStep from '../../components/form-components/FormStep';
import Button from '../../components/form-components/Button';
import FileInput from '../../components/form-components/FileInput';
import W50 from '../../components/form-components/W50';
import TextArea from '../../components/form-components/TextArea';
import intro_ball_1 from '../../assets/images/form_1_img.png';
import intro_ball_2 from '../../assets/images/form_2_img.png';
import FlyingObjsContainer from '../../components/reusable/FlyingObjsContainer';
import {Li, Ol, P, Span, Wysiwyg} from '../../components/form-components/StyledComponent';
import Alert from '../../components/form-components/Alert';
import Finalize, {Bottom, FinalizeChild, FinalizeTable, Top} from '../../components/form-components/Finalize';
import useMedia from '../../hooks/useMedia';
import FormConditionalInput from '../../components/form-components/FormConditionalInput';
import FormRepeatableInput from '../../components/form-components/FormRepeatableInput';
import LastStep from '../../components/form-components/LastStep';
import upload from '../../assets/images/upload.png';
import Appraiser from '../../components/form-components/Appraiser';
import useStoredFormValue from '../../hooks/useStoredFormValue';
import useFlowAppraisers from '../../hooks/useFlowAppraisers';
import AppraiserInput from '../../components/AppraiserInput';
import {numberWithCommas} from '../../functions/numberWithCommas';
import Link from '../../components/reusable/Link';

const pageName = 'b';
const BPage = ({className, setCurrentTheme, state, actions, formData}) => {
  
  const getBValues = useStoredFormValue(pageName);
  const
      section1Values = getBValues(formData.section_1?.section_name),
      section2Values = getBValues(formData.section_2?.section_name),
      section3Values = getBValues(formData.section_4?.section_name),
      section4Values = getBValues(formData.section_5?.section_name);
  
  const media = useMedia();
  
  React.useEffect(() => {
    actions.theme.setSubHeader(formData.sub_header);
  }, [formData]);
  
  React.useEffect(() => {
    actions.theme.setLeadId();
    actions.theme.setStepResponse({});
  }, []);
  
  React.useEffect(() => {
    actions.theme.checkUser();
  }, [state.theme.user.logged]);
  const [[appraiser], postalCodeOnChange] = useFlowAppraisers();
  const [businessAppraiser, businessPostalCodeOnChange] = useFlowAppraisers();
  const getAppraiser = () => section2Values('business_address_same_as_property') === '1' ? businessAppraiser : appraiser;
  const mortgage = ((+section3Values('purchase_price')) - (+section3Values('down_payment'))) || 0;
  const firstProduct = state.theme.stepResponse.data?.data?.beloc.products[0] || {};
  const refNumber = React.useRef('');
  state.theme.stepResponse.data?.['reference-number'] && (refNumber.current = state.theme.stepResponse.data?.['reference-number'])
  
  const control = React.useRef(null);
  
  
  React.useEffect(() => {
    var fields = [
          // { element: "search", field: "", mode: pca.fieldMode.SEARCH },
        
          // { element: "street-address", field: "Line1", mode: pca.fieldMode.POPULATE },
          // { element: "street-address2", field: "Line2", mode: pca.fieldMode.POPULATE },
          // { element: "city", field: "City", mode: pca.fieldMode.POPULATE },
          // { element: "state", field: "ProvinceName", mode: pca.fieldMode.POPULATE },
          // { element: "postcode", field: "PostalCode" },
          // { element: "country", field: "CountryName", mode: pca.fieldMode.COUNTRY },
          //
          // { element: "multi-unit", field: "{AcMua}", mode: pca.fieldMode.POPULATE },
          // { element: "residential-business", field: "{AcRbdi}", mode: pca.fieldMode.POPULATE }
        ],
        options = {
          key: "EG91-MA35-KW64-JT49"
        };
        
        const setForm = ()=>{
      if (window.pca&&window.addressComplete) {
        // console.log(control.current);
        window.addressComplete.listen('load', function(control) {
          console.log(control);
          control.listen("populate", function (address) {
            //add custom code here
            console.log('hi');
          });
        });
        control.current = new window.pca.Address(fields, options);
      }
      else {
        requestAnimationFrame(setForm);
      }
    }
    // requestAnimationFrame(setForm)
    
  }, []);
  
  return <div className={className}>
    <Form setCurrentTheme={setCurrentTheme} endPoint={'/beloc'}>
      <FormStep apiStepNumber={1} pageName={pageName} activeTheme={formData.section_1?.section_theme} stepName={formData.section_1?.section_name}>
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
        <Input noScroll type={'text'} name={'business_name'} {...formData.section_1?.legal_business_name_input}/>
        <Select
            name={'business_type'}
            {...formData.section_1?.type_of_business_dropdown}/>
        
        <Input type={'text'} id={'search'} name={'business_address'} {...formData.section_1?.address_input}/>
        <W50>
          <Input value={businessAppraiser?.title} type={'text'} name={'business_city'} {...formData.section_1?.city_input}/>
          <Input onChange={businessPostalCodeOnChange()} type={'text'} name={'business_postal_code'} {...formData.section_1?.postal_code_input}/>
        
        </W50>
        
        <Button icon={true} className={'next-step'} label={'Next'}/>
      </FormStep>
      <FormStep apiStepNumber={2} pageName={pageName} activeTheme={formData.section_2?.section_theme} stepName={formData.section_2?.section_name}>
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
          <h1 className={'form-headline-1 text-left'}>{formData.section_2?.title}</h1>
        </div>
        <FormConditionalInput name={'business_address_same_as_property'} showOn={'0'} checked={'0'} {...formData.section_2?.same_business_address_yes_no}>
          <>
            <Input type={'text'} name={'address'} {...formData.section_2?.address_input}/>
            <W50>
              <Input type={'text'} name={'city'} value={appraiser?.title} {...formData.section_1?.city_input}/>
              <Input type={'text'} name={'postal_code'} {...formData.section_1?.postal_code_input} onChange={postalCodeOnChange}/>
            </W50>
          </>
        </FormConditionalInput>
        <Select
            name={'property_type'}
            {...formData.section_2?.property_dropdown}/>
        <Select
            name={'property_details_1'}
            {...formData.section_2?.property_details_1_dropdown}/>
        <Select
            name={'property_details_2'}
            {...formData.section_2?.property_details_2_dropdown}/>
        <Button icon={true} className={'next-step'} label={'Next'}/>
      </FormStep>
      <FormStep apiStepNumber={3} pageName={pageName} activeTheme={formData.section_3?.section_theme} stepName={formData.section_3?.section_name}>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-left'}>{formData.section_3?.title}</h1>
        </div>
        
        <W50>
          <Input type={'number'} name={'purchase_price'} {...formData.section_3?.purchase_price_input}/>
          <Input type={'number'} name={'down_payment'} {...formData.section_3?.down_payment_input}/>
        </W50>
        
        <div className="btn-group">
          <Button className={'bordered prev-step'} label={'Back'}/>
          <Button icon={true} className={'next-step'} label={'Next'}/>
        </div>
      </FormStep>
      <FormStep sendSteps={[
        formData.section_1?.section_name,
        formData.section_2?.section_name,
        formData.section_3?.section_name,
      ]} apiStepNumber={4} pageName={pageName} activeTheme={formData.section_4?.section_theme} stepName={formData.section_4?.section_name}>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-left'}>{formData.section_4?.title}</h1>
          <h1 className={'form-headline-2 primary'}>{formData.section_4?.subtitle}</h1>
        </div>
        <FormRepeatableInput question={formData.section_4?.applicant_amount_label} number={4} initial={1} name={'applicants_number'}>
          <W50>
            <Input type={'text'} name={'applicant_fname_{{number}}'} {...formData.section_4?.applicant.first_name_input}/>
            <Input type={'text'} name={'applicant_lname_{{number}}'} {...formData.section_4?.applicant.last_name_input}/>
            <Input type={'text'} pattern={'^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'} name={'applicant_mail_{{number}}'} {...formData.section_4?.applicant.email_input}/>
            <Input type={'phone'} name={'applicant_phone_{{number}}'} {...formData.section_4?.applicant.phone_input}/>
          </W50>
          <RadioGroup radioText={formData.section_4?.applicant.score_label} checked={'<650'}>
            <RadioInput label={'<650'} value={'<650'} name={`applicant_score_{{number}}`} type={'radio'}/>
            <RadioInput label={'650-679'} value={'650-679'} name={`applicant_score_{{number}}`} type={'radio'}/>
            <RadioInput label={'680-749'} value={'680-749'} name={`applicant_score_{{number}}`} type={'radio'}/>
            <RadioInput label={'750-799'} value={'750-799'} name={`applicant_score_{{number}}`} type={'radio'}/>
            <RadioInput label={'800+'} value={'800+'} name={`applicant_score_{{number}}`} type={'radio'}/>
          </RadioGroup>
        </FormRepeatableInput>
        <div className="btn-group">
          <Button className={'bordered prev-step'} label={'Back'}/>
          <Button icon={true} label={'Next'} className={'next-step'}/>
        </div>
      </FormStep>
      <FormStep apiStepNumber={5} pageName={pageName} activeTheme={formData.section_5?.section_theme} stepName={formData.section_5?.section_name}>
        <input type={'hidden'} name={`product_name`} value={firstProduct.title}/>
        <input type={'hidden'} name={`maximun_mortgage`} value={Math.round(+section3Values('purchase_price') * firstProduct.fields?.maximum_ltv / 100)}/>
        
        <div className="form-text-wrapper wide-text">
          <h1 className={'form-headline-1 text-left'}>{formData.section_5?.title}</h1>
          <h2 className={'form-headline-2 primary'}>{formData.section_5?.subtitle}</h2>
          <h2 className={'form-headline-3 primary'}>
            You are requesting a secured business equity line of credit against
            your {section2Values('property')}, {section2Values('property_details_1')} home which is located
            at <br/> {section2Values('business_address_same_as_property') === '1' ? section1Values('business_address') : section2Values('address')}, {section2Values('business_address_same_as_property') === '1' ? section1Values('business_city') : section2Values('city')}, {section2Values('business_address_same_as_property') === '1' ? section1Values('business_postal_code') : section2Values('postal_code')}
          </h2>
        </div>
        <Finalize>
          <Top>
            {media !== 'mobile'
                ? <FinalizeChild>
                  <P.D>Your Info</P.D>
                  {[...Array(+section4Values('applicants_number') || 0).keys()].map((index, personIndex) => {
                        const applicantFName = section4Values(`applicant_fname_${index + 1}`);
                        const applicantLName = section4Values(`applicant_lname_${index + 1}`);
                        const applicantScore = section4Values(`applicant_score_${index + 1}`);
                        return <P.D key={`person-desktop-${personIndex}`}>{applicantFName} {applicantLName} {applicantScore}</P.D>;
                      },
                  )}
                </FinalizeChild>
                : <FinalizeChild className={'full m-mt-24'} order={3}>
                  <FinalizeTable>
                    <tbody>
                    {[...Array(+section4Values('applicants_number') || 0).keys()].map((index, personIndex) => {
                          const applicantFName = section4Values(`applicant_fname_${index + 1}`);
                          const applicantLName = section4Values(`applicant_lname_${index + 1}`);
                          const applicantScore = section4Values(`applicant_score_${index + 1}`);
                          return <tr key={`person-mobile-${personIndex}`}>
                            <P.Dark as={'td'}>{applicantFName} {applicantLName}</P.Dark>
                            <P.D as={'td'}> {applicantScore}</P.D>
                          </tr>;
                        },
                    )}
                    </tbody>
                  </FinalizeTable>
                </FinalizeChild>}
            
            <FinalizeChild order={1}>
              <P.Dark>*Fixed Rate</P.Dark>
              <P.Dark>*Payment interest based on balance</P.Dark>
              <P.Num>{(+firstProduct.fields?.rate + 0.25).toFixed?.(2)}%</P.Num>
              <Button label={'I’m good to go'} className={'next-step'}/>
            </FinalizeChild>
            <FinalizeChild order={2} className={'wide'}>
              <Button className={'bordered prev-step'} label={'No, edit the details'}/>
            </FinalizeChild>
          </Top>
          <Bottom>
            {media !== 'mobile'
                ? <FinalizeChild order={1}>
                  <P.D>Your BELOC request is for ${numberWithCommas(mortgage)}</P.D>
                  <P.D>Your property value is ${numberWithCommas(+section3Values('purchase_price'))}</P.D>
                  <P.D>Your LTV is {((mortgage) / +section3Values('purchase_price') * 100).toFixed?.(1)}%</P.D>
                </FinalizeChild>
                : <FinalizeChild className={'full'} order={1}>
                  <FinalizeTable>
                    <tbody>
                    <tr>
                      <P.Dark as={'td'}>BELOC Request</P.Dark>
                      <P.D as={'td'}>${numberWithCommas(mortgage)}</P.D>
                    </tr>
                    <tr>
                      <P.Dark as={'td'}>Property Value</P.Dark>
                      <P.D as={'td'}>${numberWithCommas(+section3Values('purchase_price'))}</P.D>
                    </tr>
                    <tr>
                      <P.Dark as={'td'}>LTV</P.Dark>
                      <P.D as={'td'}>{((mortgage) / +section3Values('purchase_price') * 100).toFixed?.(1)}%</P.D>
                    </tr>
                    </tbody>
                  </FinalizeTable>
                </FinalizeChild>}
            
            <FinalizeChild order={2} className={'full m-border'}>
              <FinalizeTable>
                <tbody>
                <tr>
                  <P.Dark as={'td'}>Lender Fee</P.Dark>
                  <P.D as={'td'}>{firstProduct.fields?.fee}%</P.D>
                </tr>
                <tr>
                  <P.Dark as={'td'}>Credit Score</P.Dark>
                  <P.D as={'td'}>{beaconScore(firstProduct.fields?.beacon_score)}</P.D>
                </tr>
                </tbody>
              </FinalizeTable>
            </FinalizeChild>
            <FinalizeChild order={3} className={'wide m-pr-40'}>
              {firstProduct.fields?.specifications.map(({term_id, name}) => <P.Border key={term_id}>{name}</P.Border>)}
            </FinalizeChild>
          </Bottom>
        </Finalize>
        <div className="btn-group">
          <Button label={'I’m good to go'} className={'next-step small'}/>
          <Button className={'bordered reset-form small'} label={'No, edit the details'}/>
        </div>
      </FormStep>
      <FormStep apiStepNumber={6} pageName={pageName} activeTheme={formData.section_6?.section_theme} stepName={formData.section_6?.section_name}>
        <div className="upload-step-wrapper">
          <img src={upload}/>
          <h1 className={'form-headline-1 text-left'}>{formData.section_6?.title}</h1>
          <FormConditionalInput noScroll name={'mortgages_1'} showOn={'1'} checked={'0'} {...formData.section_6?.have_appraisal_report_yes_no}>
            <FileInput name='appraisal_report_file' label={formData.section_6?.appraisal_report_upload_label} acceptText={'PDF, JPG, or PNG'}/>
            <Appraiser>
              <P.D>Select an appraiser</P.D>
              <div className="row">
                <div className="col-left">
                  <p className={'form-headline-1 text-left'} dangerouslySetInnerHTML={{__html: getAppraiser()?.fields?.bdm.name}}/>
                </div>
                <div className="col-right">
                  <RadioGroup className={'vertical-radio'} radioText={'*Click to call'}>
                    {getAppraiser()?.fields?.preferred_appraisal_company.map(({post_name}, index) => {
                      return <AppraiserInput key={index} appraiserName={post_name}/>;
                    })}
                  </RadioGroup>
                  <P.Dark>*Disclaimer - If the city you are looking for is not listed please contact your BDM directly
                    or email us at info@oppono.com</P.Dark>
                  <Button label={'Alert'}/>
                </div>
              </div>
            </Appraiser>
          </FormConditionalInput>
          <hr/>
          <TextArea name={'additional_notes'} {...formData.section_6?.additional_notes_input}/>
          <div className="btn-group">
            <Button className={'next-step'} label={'I want my pre-approval'}/>
          </div>
        </div>
      </FormStep>
      <FormStep pageName={pageName} activeTheme={formData.section_7?.section_theme} stepName={formData.section_7?.section_name}>
        <LastStep>
          <img src={formData.section_7?.image.url} alt={formData.section_7?.image.alt}/>
          <div style={{flexBasis: '60%'}} className="text">
            <h1 className={'form-headline-1 text-left'}>{formData.section_7?.title}</h1>
            <p className={'form-headline-3 primary'}>{formData.section_7?.subtitle}</p>
            <Wysiwyg dangerouslySetInnerHTML={{__html: formData.section_7?.steps.replace('{{number}}', refNumber.current)}}/>
            <div className="btn-group">
              <Link className={'wide bordered'} href={'https://expert.filogix.com/expert/view/SignOn'}>
                <Button className={'wide filled'} label={'Connect to Filogix'}/>
              </Link>
              <Link className={'wide bordered'} href={'/dashboard'}>
                <Button className={'wide bordered'} label={'Back to Dashboard'}/>
              </Link>
            </div>
          </div>
        </LastStep>
      </FormStep>
    </Form>
  </div>;
};

export default styled(connect(BPage))`
  width: 100%;
  height: 100%;
  
  ${Bottom} {
    padding-top: 0;
    
    .full {
      @media (max-width: 991px) {
        flex-basis: 72%;
        width: 72%;
        margin-left: auto;
      }
      @media (max-width: 575px) {
        flex-basis: 100%;
        width: 100%;
      }
    }
  }
  
  .wide-text {
    max-width: ${size(800)};
    
    .form-headline-3 {
      max-width: ${size(400)};
      @media (max-width: 575.98px) {
        max-width: 90%;
      }
    }
  }

`;