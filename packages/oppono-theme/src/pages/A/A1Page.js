import React from 'react';
import Form from '../../components/form-components/Form';
import {connect, styled} from 'frontity';
import {size} from '../../functions/size';
import FormStep from '../../components/form-components/FormStep';
import Button from '../../components/form-components/Button';
import FlyingObjsContainer from '../../components/reusable/FlyingObjsContainer';
import {Wysiwyg, P} from '../../components/form-components/StyledComponent';
import Input from '../../components/form-components/Input';
import Select from '../../components/form-components/Select';
import W50 from '../../components/form-components/W50';
import intro_ball_1 from '../../assets/images/form_1_img.png';
import intro_ball_2 from '../../assets/images/form_2_img.png';
import Finalize, {Bottom, FinalizeChild, FinalizeTable, Top} from '../../components/form-components/Finalize';
import useMedia from '../../hooks/useMedia';
import LastStep from '../../components/form-components/LastStep';
import useStoredFormValue from '../../hooks/useStoredFormValue';
import useProductsTable from '../../hooks/useProductsTable';
import useFlowAppraisers from '../../hooks/useFlowAppraisers';
import Link from '../../components/reusable/Link';
import RadioGroup from '../../components/form-components/RadioGroup';
import RadioInput from '../../components/form-components/RadioInput';
import FormConditionalInput from '../../components/form-components/FormConditionalInput';
import FormRepeatableInput from '../../components/form-components/FormRepeatableInput';
import ProductsTable from '../../components/form-components/ProductsTable';
import FormFilter from '../../components/form-components/FormFilter';
import ProductsMobileOption from '../../components/form-components/ProductsMobileOption';
import FileInput from '../../components/form-components/FileInput';
import Appraiser from '../../components/form-components/Appraiser';
import {numberWithCommas} from '../../functions/numberWithCommas';
import upload from '../../assets/images/upload.png';
import TextArea from '../../components/form-components/TextArea';


const pageName = 'a-1';
const A1Page = ({className, setCurrentTheme, state, actions, formData}) => {
  
  const getA1Values = useStoredFormValue(pageName);
  const
    section1Values = getA1Values(formData.section_1?.section_name),
    section2Values = getA1Values(formData.section_2?.section_name),
    section3Values = getA1Values(formData.section_3?.section_name);
  
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
  const [appraiser, postalCodeOnChange] = useFlowAppraisers();
  
  const selectedProduct = React.useRef('');
  const [productsTable, productsFilter] = useProductsTable(state.theme.stepResponse);
  const mortgage = ((+section2Values('mortgage_value_1') || 0) + (+section2Values('mortgage_value_2') || 0) + (+section2Values('outstanding_amount_value')) || 0) || 0;
  const refNumber = state.theme.stepResponse.data?.['sf-lead-id'] || '';
  return <div className={className}>
    <Form setCurrentTheme={setCurrentTheme} endPoint={'/refinance'}>
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
        <Input type={'text'} name={'address'} serverErrorMessage={state.theme.errors?.['address']} {...formData.section_1?.address_input}/>
        <W50>
          <Input type={'text'} name={'city'} value={appraiser?.title} serverErrorMessage={state.theme.errors?.['city']} {...formData.section_1?.city_input}/>
          <Input type={'text'} name={'postal_code'} serverErrorMessage={state.theme.errors?.['postal_code']} {...formData.section_1?.postal_code_input} onChange={postalCodeOnChange}/>
        </W50>
        <Select
          name={'property_type'} serverErrorMessage={state.theme.errors?.['property_type']}
          {...formData.section_1?.property_dropdown}/>
        <Select
          name={'property_details_1'} serverErrorMessage={state.theme.errors?.['property_details_1']}
          {...formData.section_1?.property_details_1_dropdown}/>
        <Select
          name={'property_details_2'} serverErrorMessage={state.theme.errors?.['property_details_2']}
          {...formData.section_1?.property_details_2_dropdown}/>
        <Button icon={true} className={'next-step'} label={'Next'}/>
      </FormStep>
      <FormStep apiStepNumber={2} pageName={pageName} activeTheme={formData.section_2?.section_theme} stepName={formData.section_2?.section_name}>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-left'}>{formData.section_2?.title}</h1>
        </div>
        <Input type={'number'} name={'home_value'} serverErrorMessage={state.theme.errors?.['home_value']} {...formData.section_2?.estimated_value_input}/>
  
        <FormConditionalInput name={'have_mortgage_1'} serverErrorMessage={state.theme.errors?.['have_mortgage_1']} showOn={'1'} checked={'0'} {...formData.section_2?.any_mortgage_yes_no}>
          <Input type={'number'} name={'mortgage_value_1'} serverErrorMessage={state.theme.errors?.['mortgage_value_1']} {...formData.section_2?.first_mortgage_amount_input}/>
        </FormConditionalInput>
  
        <FormConditionalInput name={'have_mortgage_2'} serverErrorMessage={state.theme.errors?.['have_mortgage_2']} showOn={'1'} checked={'0'} {...formData.section_2?.second_mortgage_yes_no}>
          <Input type={'number'} name={'mortgage_value_2'} serverErrorMessage={state.theme.errors?.['mortgage_value_2']} {...formData.section_2?.second_mortgage_amount_input}/>
        </FormConditionalInput>
  
        <FormConditionalInput name={'have_outstanding_amount'} serverErrorMessage={state.theme.errors?.['have_outstanding_amount']} showOn={'1'}
                              checked={'0'} {...formData.section_2?.outstanding_balance_yes_no}>
          <Input type={'number'} name={'outstanding_amount_value'}
                 serverErrorMessage={state.theme.errors?.['outstanding_amount_value']} {...formData.section_2?.outstanding_balance_amount_input}/>
        </FormConditionalInput>
  
        <div className="btn-group">
          <Button className={'bordered prev-step'} label={'Back'}/>
          <Button icon={true} className={'next-step'} label={'Next'}/>
        </div>
      </FormStep>
      <FormStep apiStepNumber={3} pageName={pageName} activeTheme={formData.section_3?.section_theme} stepName={formData.section_3?.section_name}
                sendSteps={[
                  formData.section_1?.section_name,
                  formData.section_2?.section_name,
                  formData.section_3?.section_name,
                ]}>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-left'}>{formData.section_3?.title}</h1>
          <h1 className={'form-headline-2 primary'}>{formData.section_3?.subtitle}</h1>
        </div>
        <FormRepeatableInput question={formData.section_3?.applicant_amount_label} number={4} initial={1} name={'applicants_number'} serverErrorMessage={state.theme.errors?.['applicants_number']}>
          <W50>
            <Input type={'text'} name={'applicant_fname_{{number}}'} serverErrorMessage={state.theme.errors?.['applicant_fname_{{number}}']} {...formData.section_3?.applicant.first_name_input}/>
            <Input type={'text'} name={'applicant_lname_{{number}}'} serverErrorMessage={state.theme.errors?.['applicant_lname_{{number}}']} {...formData.section_3?.applicant.last_name_input}/>
            <Input type={'text'} pattern={'^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'} name={'applicant_mail_{{number}}'}
                   serverErrorMessage={state.theme.errors?.['applicant_mail_{{number}}']} {...formData.section_3?.applicant.email_input}/>
            <Input type={'phone'} name={'applicant_phone_{{number}}'} serverErrorMessage={state.theme.errors?.['applicant_phone_{{number}}']} {...formData.section_3?.applicant.phone_input}/>
          </W50>
          <RadioGroup radioText={formData.section_3?.applicant.score_label} checked={'650+'}>
            <RadioInput label={'<650'} value={'<650'} serverErrorMessage={state.theme.errors?.['applicant_score_{{number}}']} name={`applicant_score_{{number}}`} type={'radio'}/>
            <RadioInput label={'650+'} value={'650+'} serverErrorMessage={state.theme.errors?.['applicant_score_{{number}}']} name={`applicant_score_{{number}}`} type={'radio'}/>
            <RadioInput label={'680+'} value={'680+'} serverErrorMessage={state.theme.errors?.['applicant_score_{{number}}']} name={`applicant_score_{{number}}`} type={'radio'}/>
          </RadioGroup>
        </FormRepeatableInput>
        <div className="btn-group">
          <Button className={'bordered prev-step'} label={'Back'}/>
          <Button icon={true} label={'Next'} className={'next-step'}/>
        </div>
      </FormStep>
      <FormStep endPoint={null} pageName={pageName}
                activeTheme={formData.section_4?.section_theme}
                stepName={formData.section_4?.section_name}>
        <div className="form-text-wrapper wide-text">
          <h1 className={'form-headline-1 text-left'}>{formData.section_4?.title}</h1>
          <h2 className={'form-headline-3 primary'}>
            You are refinancing your {section1Values('property')}, {section1Values('property_details_1')} home which is located
            at <br/> {section1Values('address')}, {section1Values('city')}, {section1Values('postal_code')}</h2>
        </div>
        <Finalize>
          <Top>
            {media !== 'mobile'
              ? <FinalizeChild order={3}>
                <P.D>Borrowers</P.D>
                {[...Array(+section3Values('applicants_number') || 0).keys()].map((index, personIndex) => {
                    const applicantFName = section3Values(`applicant_fname_${index + 1}`);
                    const applicantLName = section3Values(`applicant_lname_${index + 1}`);
                    const applicantScore = section3Values(`applicant_score_${index + 1}`);
                    return <P.Dark key={`person-desktop-${personIndex}`}>{applicantFName} {applicantLName} {applicantScore}</P.Dark>;
                  },
                )}
              </FinalizeChild>
              : <FinalizeChild className={'full m-mt-24'} order={3}>
                <FinalizeTable>
                  <tbody>
                  {[...Array(+section3Values('applicants_number') || 0).keys()].map((index, personIndex) => {
                      const applicantFName = section3Values(`applicant_fname_${index + 1}`);
                      const applicantLName = section3Values(`applicant_lname_${index + 1}`);
                      const applicantScore = section3Values(`applicant_score_${index + 1}`);
                      return <tr key={`person-desktop-${personIndex}`}>
                        <P.Dark as={'td'}>{applicantFName} {applicantLName}</P.Dark>
                        <P.D as={'td'}>{applicantScore}</P.D>
                      </tr>;
                    },
                  )}
                  </tbody>
                </FinalizeTable>
              </FinalizeChild>}
            
            <FinalizeChild className={'wide'} order={1}>
              <P.D>Summary</P.D>
            </FinalizeChild>
          </Top>
          <Bottom>
            {media === 'mobile'
              ? null : <FinalizeChild order={1}>
              </FinalizeChild>}
            <FinalizeChild order={3} className={'m-pr-40 full m-border'}>
              <P.Border>Your mortgage request is ${numberWithCommas({mortgage})}</P.Border>
              <P.Border>Your property value is ${numberWithCommas(+section2Values('home_value'))}</P.Border>
            </FinalizeChild>
            <FinalizeChild order={3} className={'wide m-pr-40'}>
              <P.Border>Your down payment is ${numberWithCommas(+section2Values('home_value')) - mortgage}</P.Border>
              <P.Border>Your LTV is {(mortgage / +section2Values('home_value') * 100).toFixed(1)}%</P.Border>
            </FinalizeChild>
          </Bottom>
        </Finalize>
        <div className="btn-group">
          <Button label={'I’m good to go'} className={'next-step small'}/>
          <Button className={'bordered reset-form small'} label={'No, edit the details'}/>
        </div>
      </FormStep>
      <FormStep apiStepNumber={4} pageName={pageName} activeTheme={formData.section_5?.section_theme} stepName={formData.section_5?.section_name}>
        
        <input ref={selectedProduct} type={'hidden'} name={`product_name`}/>
        
        <div className="form-text-wrapper wide-text">
          <h1 className={'form-headline-1 text-left'}>{formData.section_5?.title}</h1>
          <h2 className={'form-headline-3 primary'}>{formData.section_5?.subtitle}</h2>
        </div>
        
        {state.theme.stepResponse.data?.data
          ? media !== 'mobile'
            ? <FormFilter className={'form-wide-container'} filters={productsFilter}>
              {Object.entries(state.theme.stepResponse.data?.data).map(([type, {products}], index) =>
                <ProductsTable key={type} dataFilter={type}>
                  <thead>
                  <tr>
                    <th scope={'col'}>
                      <p className={'circle'}>{index + 1}</p>
                      <p>{type}</p>
                      <p className={'dark'}>Variable rates</p>
                      <div className="table-arrows">
                    <span className={'prev disabled'}>
                      <svg viewBox="0 0 49 16">
                        <path fill="none" stroke="#bfb6b4" strokeWidth="2" strokeMiterlimit="20" d="M48.723 8.678H1"/>
                        <path fill="none" stroke="#bfb6b4" strokeWidth="2" strokeMiterlimit="20" d="M8.299 15.976v0L1 8.678C3.846 5.827 5.452 4.23 8.299 1.379"/>
                      </svg>
                    </span>
                        <span className={'slides-numbers'}>
                      <span className="current-page">1</span>
                      <span className="slash">/</span>
                      <span className="total-pages">1</span>
                    </span>
                        <span className={'next'}>
                      <svg viewBox="0 0 49 17">
                        <path fill="none" stroke="#bfb6b4" strokeMiterlimit="20" strokeWidth="2" d="M0 8.677h47.723"/>
                        <path fill="none" stroke="#bfb6b4" strokeWidth="2" d="M40.424 15.976v0l7.299-7.299c-2.847-2.85-4.452-4.447-7.299-7.298"/>
                      </svg>
                    </span>
                      </div>
                    </th>
                    {
                      products.map(({ID, title, fields: {rate}}) =>
                        <th scope={'col'} key={ID}>
                          <p>${numberWithCommas(monthlyPayments(mortgage, rate / 100))} / month</p>
                          <p className={'number'}>{rate}%</p>
                          <Button onClick={() => {
                            selectedProduct.current.value = title;
                            setTimeout(() => actions.theme.setValidateAndNextCallback(new Date().getTime()), 100);
                          }} className={'small next-step'} label={'I want this deal'}/>
                        </th>,
                      )
                    }
                  </tr>
                  </thead>
                  <tbody>
                  <tr className={'head'}>
                    <td scope={'row'} className={'dark'}>Fixed Rate</td>
                    {products.map(({ID, fields: {rate}}) => <td key={ID} className={'details'} data-label="Fixed Rate">{(rate * 1.25).toFixed(2)}%</td>)}
                  </tr>
                  <tr className={'head'}>
                    <td scope={'row'} className={'dark'}>Lender Fee</td>
                    {products.map(({ID, fields: {fee}}) => <td key={ID} className={'details'} data-label="Lender Fee">{fee}%</td>)}
                  </tr>
                  <tr className={'head'}>
                    <td scope={'row'} className={'dark'}>LTV</td>
                    {products.map(({ID, fields: {maximum_ltv}}) => <td key={ID} className={'details'} data-label="LTV">{maximum_ltv}%</td>)}
                  </tr>
                  <tr className={'head last-head'}>
                    <td scope={'row'} className={'dark'}>Credit Score</td>
                    {products.map(({ID, fields: {beacon_score}}) => <td key={ID} className={'details'} data-label="beacon_score">{beacon_score}</td>)}
                  </tr>

                  {
                    productsTable[type] && Object.entries(productsTable[type]).map(([id, {name, specificationProducts}]) =>
                      <tr key={id}>
                        <td scope={'row'}>{name}</td>
                        {products.map(({ID}) => specificationProducts.indexOf(ID) >= 0 ? <td key={ID}><CheckMark/></td> : <td key={ID}/>)}
                      </tr>)
                  }
                  </tbody>
                </ProductsTable>)}
            </FormFilter>
            : <div className="mortgage-options-mobile">
              <FormFilter filters={productsFilter}>
                {Object.entries(state.theme.stepResponse.data?.data).map(([type, {products}, index]) =>
                  <div key={type} data-filter={type}>
                    {
                      products.map(({ID, title, fields: {rate, fee, maximum_ltv, beacon_score, specifications}}, productIndex) =>
                        <ProductsMobileOption key={ID}>
                          <div className="mortgage-title">
                            <p className={'circle'}>{productIndex + 1}</p>
                            <p>{type}</p>
                            <p className={'dark'}>Variable rates</p>
                          </div>
                          <div className="mortgage-head">
                            <p className={'number'}>{rate}%</p>
                            <p>${numberWithCommas(monthlyPayments(mortgage, rate / 100))} / month</p>
                            <Button onClick={() => {
                              selectedProduct.current.value = title;
                              setTimeout(() => actions.theme.setValidateAndNextCallback(new Date().getTime()), 100);
                            }} className={'small next-step'} label={'I want this deal'}/>
                          </div>
                          <div className="mortgage-body">
                            <div className={'m-row m-head'}>
                              <p>Fixed Rate</p>
                              <p>{(rate * 1.25).toFixed(2)}%</p>
                            </div>
                            <div className={'m-row m-head'}>
                              <p>Lender Fee</p>
                              <p>{fee}%</p>
                            </div>
                            <div className={'m-row m-head  m-head'}>
                              <p>LTV</p>
                              <p>{maximum_ltv}%</p>
                            </div>
                            <div className={'m-row m-head  m-head last-head'}>
                              <p>Credit Score</p>
                              <p>{beacon_score}</p>
                            </div>
                            {
                              specifications.slice(0, 4).map(({term_id, name}) =>
                                <div key={term_id} className={'m-row'}>
                                  <p>{name}</p>
                                  <p><CheckMark/></p>
                                </div>,
                              )
                            }
                            {
                              specifications.length > 4
                                ? <>
                                  <div className={'show-all-specs'}>
                                    Show all specifications
                                    <svg viewBox="0 0 8 4">
                                      <path fill="none" stroke="#d2f5e9" strokeMiterlimit="20" d="M1 .5v0l3 3c1.172-1.17 1.828-1.83 3-3"/>
                                    </svg>
                                  </div>
                                  <div className="remaining-specs">
                                    {
                                      specifications.slice(4).map(({term_id, name}) =>
                                        <div key={term_id} className={'m-row'}>
                                          <p>{name}</p>
                                          <p><CheckMark/></p>
                                        </div>,
                                      )
                                    }
                                  </div>
                                </>
                                : null
                            }

                          </div>
                        </ProductsMobileOption>,
                      )
                    }
                  </div>,
                )}
              </FormFilter>
            </div>
          : null
        }
      </FormStep>
      <FormStep apiStepNumber={5} pageName={pageName} activeTheme={formData.section_6?.section_theme} stepName={formData.section_6?.section_name}>
        <div className="upload-step-wrapper">
          <img src={upload}/>
          <h1 className={'form-headline-1 text-left'}>{formData.section_6?.title}</h1>
          <FormConditionalInput name={'mortgages_1'} serverErrorMessage={state.theme.errors?.['mortgages_1']} showOn={'1'} checked={'0'} {...formData.section_6?.have_appraisal_report_yes_no}>
            <FileInput name='appraisal_report_file' label={formData.section_6?.appraisal_report_upload_label} acceptText={'PDF, JPG, or PNG'}/>
            <Appraiser>
              <P.D>Select an appraiser</P.D>
              <div className="row">
                <div className="col-left">
                  <p className={'form-headline-1 text-left'} dangerouslySetInnerHTML={{__html: appraiser?.fields.bdm.name}}/>
                </div>
                <div className="col-right">
                  <RadioGroup className={'vertical-radio'} radioText={'*Click to call'}>
                    {appraiser?.fields.preferred_appraisal_company.map(({post_name}, index) => {
                      return <AppraiserInput key={index} appraiserName={post_name}/>;
                    })}
                  </RadioGroup>
                  <P.Dark>*Disclaimer - If the city you are looking for is not listed please contact your BDM directly or email us at info@oppono.com</P.Dark>
                  <Button label={'Alert'}/>
                </div>
              </div>
            </Appraiser>
          </FormConditionalInput>
          <hr/>
          <TextArea name={'additional_notes'} serverErrorMessage={state.theme.errors?.['additional_notes']} {...formData.section_6?.additional_notes_input}/>
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
            <Wysiwyg dangerouslySetInnerHTML={{__html: formData.section_7?.steps.replace('{{number}}', refNumber)}}/>
            <div className="btn-group">
              <Link className={'wide bordered'} href={'https://expert.filogix.com/expert/view/SignOn'}>
                <Button className={'wide filled'} label={'Connect to Filogix'}/>
              </Link>
              <Link className={'wide bordered'} href={'/dashboard'}>
                <Button className={'wide bordered'} label={'back to Dashboard'}/>
              </Link>
            </div>
          </div>
        </LastStep>
      </FormStep>
    </Form>
  </div>;
};

export default styled(connect(A1Page))`
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

  hr {
    max-width: 100% !important;
  }

  .underline {
    text-decoration: underline;
  }
`;