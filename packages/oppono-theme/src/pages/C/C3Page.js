import React from 'react';
import Form from '../../components/form-components/Form';
import Input from '../../components/form-components/Input';
import {connect, css, styled} from 'frontity';
import {productTypeToFullName} from "../../functions/productTypeToFullName";
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
import ProductsTable from '../../components/form-components/ProductsTable';
import {Li, Ol, P, Span, Wysiwyg} from '../../components/form-components/StyledComponent';
import Alert from '../../components/form-components/Alert';
import Finalize, {Bottom, FinalizeChild, FinalizeTable, Top} from '../../components/form-components/Finalize';
import useMedia from '../../hooks/useMedia';
import FormConditionalInput from '../../components/form-components/FormConditionalInput';
import FormFilter from '../../components/form-components/FormFilter';
import FormRepeatableInput from '../../components/form-components/FormRepeatableInput';
import ProductsMobileOption from '../../components/form-components/ProductsMobileOption';
import intro_ball_3 from '../../assets/images/fly-image-4.png';
import intro_ball_4 from '../../assets/images/fly-image-3.png';
import LastStep from '../../components/form-components/LastStep';
import upload from '../../assets/images/upload.png';
import Appraiser from '../../components/form-components/Appraiser';
import useStoredFormValue from '../../hooks/useStoredFormValue';
import opponoApi from '../../opponoApi';
import useFlowAppraisers from '../../hooks/useFlowAppraisers';
import useProductsTable from '../../hooks/useProductsTable';
import {monthlyPayments} from '../../functions/monthlyPayment';
import CheckMark from '../../components/reusable/CheckMark';
import AppraiserInput from '../../components/AppraiserInput';
import {numberWithCommas} from '../../functions/numberWithCommas';
import Link from '../../components/reusable/Link';

const pageName = 'c-3';
const C3Page = ({className, setCurrentTheme, state, actions, formData}) => {
  
  const getC3Values = useStoredFormValue(pageName);
  const
    section1Values = getC3Values(formData.section_1?.section_name),
    section2Values = getC3Values(formData.section_2?.section_name),
    section4Values = getC3Values(formData.section_4?.section_name),
    section5Values = getC3Values(formData.section_5?.section_name),
    section6Values = getC3Values(formData.section_6?.section_name),
    section7Values = getC3Values(formData.section_7?.section_name);
  
  const [step1Valid, setStep1Valid] = React.useState(false);
  const media = useMedia();
  
  React.useEffect(() => {
    actions.theme.setSubHeader(formData.sub_header);
  }, [formData]);
  React.useEffect(() => {
    actions.theme.setLeadId();
    actions.theme.setStepResponse({});
    opponoApi.post('/product-qualification', {}).then(response => {
      const products = {first: response.data.first, second: response.data.second};
  
      response.data.data = products;
      actions.theme.setStepResponse(response);
      // actions.theme.setStepResponse({data:{data:products}});
    });
  }, []);
  
  React.useEffect(() => {
    actions.theme.checkUser();
  }, [state.theme.user.logged]);
  const [[appraiser], postalCodeOnChange] = useFlowAppraisers();
  
  
  const [productsTable, productsFilter] = useProductsTable(state.theme.stepResponse);
  const mortgage = ((+section5Values('mortgage_value_1') || 0) + (+section5Values('mortgage_value_2') || 0) + (+section5Values('outstanding_amount_value') || 0)) || 0;
  const firstProduct = state.theme.stepResponse.data?.data?.heloc?.products[0] || {};
    const  refNumber = React.useRef('');
  state.theme.stepResponse.data?.['reference-number']&&(refNumber.current=state.theme.stepResponse.data?.['reference-number'])
  
  return <div className={className}>
    <Form setCurrentTheme={setCurrentTheme} endPoint={'/heloc'}>
      <FormStep endPoint={null} pageName={pageName} activeTheme={formData.section_1?.section_theme} stepName={formData.section_1?.section_name}>
        <FlyingObjsContainer childrenList={[
          {
            imageUrl: intro_ball_2,
            left: '10%',
            level: 1,
            top: '55%',
            type: 'image',
            width: 10,
            alt: 'alt',
          },
          {
            imageUrl: intro_ball_1,
            left: '80%',
            level: 1,
            top: '5%',
            type: 'image',
            width: 15,
            alt: 'alt',
          }]}/>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-left'}>{formData.section_1?.title}</h1>
          <h2 className={'form-headline-2 primary'}>{formData.section_1?.subtitle}</h2>
        </div>
        <Input noScroll onChange={e => setStep1Valid(e.target.validity.valid)} className={'big-input'} type={'number'} name={'home_value'} {...formData.section_1?.home_value_input}/>
        <Button
          css={css`opacity: ${step1Valid ? 1 : 0};
            visibility: ${step1Valid ? 'visible' : 'hidden'};`}
          icon={true} className={'next-step'} label={'Next'}/>
      </FormStep>
      <FormStep endPoint={null} pageName={pageName} activeTheme={formData.section_2?.section_theme} stepName={formData.section_2?.section_name}>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-left'}>{formData.section_2?.title}</h1>
        </div>
        <FormRepeatableInput question={formData.section_2?.applicant_amount_label} number={4} initial={1} name={'applicants_number'}>
          <RadioGroup radioText={formData.section_2?.applicant.score_label} checked={'<650'}>
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
      <FormStep endPoint={null} pageName={pageName} activeTheme={formData.section_3?.section_theme} stepName={formData.section_3?.section_name}>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-left'}>{formData.section_3?.title}</h1>
        </div>
        {state.theme.stepResponse.data?.data
          ? media !== 'mobile'
            ? <FormFilter className={'form-wide-container'} filters={productsFilter}>
              {Object.entries(state.theme.stepResponse.data?.data).map(([type, {products}], index) => {
                const hasVariable = type === 'first' || type === 'second';
                return <ProductsTable products={productsTable} key={type} dataFilter={type}>
                  <thead>
                  <tr>
                    <th scope={'col'}>
                      <p className={'circle'}>{index + 1}</p>
                      <p>{productTypeToFullName(type)}</p>
                      <p className={'dark'}>{hasVariable ? 'Variable' : 'Fixed'} rates</p>
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
                      products.map(({ID, fields: {rate, maximum_ltv}}) =>
                          <th scope={'col'} key={ID}>
                            <p>${numberWithCommas(+section1Values('home_value') * maximum_ltv / 100)} max</p>
                            <p>${numberWithCommas(monthlyPayments(+section1Values('home_value') * maximum_ltv / 100, rate / 100))} /
                              month</p>
                            <p className={'number'}>{rate}%</p>
                            <Button onClick={() => actions.theme.setValidateAndNextCallback(new Date().getTime())} className={'small next-step'} label={'I want this deal'}/>
                          </th>,
                      )
                    }
                  </tr>
                  </thead>
                  <tbody>
                  {!hasVariable?null:<tr className={'head'}>
                    <td scope={'row'} className={'dark'}>Fixed Rate</td>
                    {products.map(({ID, fields: {rate}}) =>
                        <td key={ID} className={'details'} data-label="Fixed Rate">{(rate * 1.025).toFixed(2)}%</td>)}
                  </tr>}
                  <tr className={'head'}>
                    <td scope={'row'} className={'dark'}>Lender Fee</td>
                    {products.map(({ID, fields: {fee}}) =>
                        <td key={ID} className={'details'} data-label="Lender Fee">{fee}%</td>)}
                  </tr>
                  <tr className={'head'}>
                    <td scope={'row'} className={'dark'}>LTV</td>
                    {products.map(({ID, fields: {maximum_ltv}}) =>
                        <td key={ID} className={'details'} data-label="LTV">{maximum_ltv}%</td>)}
                  </tr>
                  <tr className={'head last-head'}>
                    <td scope={'row'} className={'dark'}>Credit Score</td>
                    {products.map(({ID, fields: {beacon_score}}) =>
                        <td key={ID} className={'details'} data-label="beacon_score">{beacon_score}</td>)}
                  </tr>
    
                  {
                    productsTable[type] && Object.entries(productsTable[type]).map(([id, {
                      name,
                      specificationProducts
                    }]) =>
                        <tr key={id}>
                          <td scope={'row'}>{name}</td>
                          {products.map(({ID}) => specificationProducts.indexOf(ID) >= 0 ?
                              <td key={ID}><CheckMark/></td> : <td key={ID}/>)}
                        </tr>)
                  }
                  </tbody>
                </ProductsTable>;
              })}
            </FormFilter>
            : <div className="mortgage-options-mobile">
              <FormFilter filters={productsFilter}>
                {Object.entries(state.theme.stepResponse.data?.data).map(([type, {products}, index]) => {
                  const hasVariable = type === 'first' || type === 'second';
                  return <div key={type} data-filter={type}>
                        {
                          products.map(({
                                          ID,
                                          fields: {rate, fee, maximum_ltv, beacon_score, specifications}
                                        }, productIndex) =>
                              <ProductsMobileOption key={ID}>
                                <div className="mortgage-title">
                                  <p className={'circle'}>{productIndex + 1}</p>
                                  <p>{productTypeToFullName(type)}</p>
                                  <p className={'dark'}>{hasVariable ? 'Variable' : 'Fixed'} rates</p>
                                </div>
                                <div className="mortgage-head">
                                  <p className={'number'}>{rate}%</p>
                                  <p>${numberWithCommas(monthlyPayments(mortgage, rate / 100))} / month</p>
                                  <p>${numberWithCommas(+section1Values('home_value') * maximum_ltv / 100)} max</p>
                                  <Button onClick={() => actions.theme.setValidateAndNextCallback(new Date().getTime())} className={'small next-step'} label={'I want this deal'}/>
                                </div>
                                <div className="mortgage-body">
                                  {!hasVariable ? null : <div className={'m-row m-head'}>
                                    <p>Fixed Rate</p>
                                    <p>{(rate * 1.025).toFixed(2)}%</p>
                                  </div>}
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
                                    <p>{beacon_score[0].split('-')[0] + (beacon_score.length > 1 ? '+' : '')}</p>
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
                      </div>;
                    },
                )}
              </FormFilter>
            </div>
          : null
        }
      </FormStep>
      <FormStep apiStepNumber={1} pageName={pageName} activeTheme={formData.section_4?.section_theme} stepName={formData.section_4?.section_name}>
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
          <h1 className={'form-headline-1 text-left'}>{formData.section_4?.title}</h1>
          <h2 className={'form-headline-2 primary'}>{formData.section_4?.subtitle}</h2>
        </div>
        <Input type={'text'} name={'address'} {...formData.section_4?.address_input}/>
        <W50>
          <Input value={appraiser?.title} type={'text'} name={'city'} {...formData.section_4?.city_input}/>
          <Input onChange={postalCodeOnChange} type={'text'} name={'postal_code'} {...formData.section_4?.postal_code_input}/>
        </W50>
        <Select
          name={'property_type'}
          {...formData.section_4?.property_dropdown}/>
        <Select
          name={'property_details_1'}
          {...formData.section_4?.property_details_1_dropdown}/>
        <Select
          name={'property_details_2'}
          {...formData.section_4?.property_details_2_dropdown}/>
        <Button icon={true} className={'next-step'} label={'Next'}/>
      </FormStep>
      <FormStep apiStepNumber={2} pageName={pageName} activeTheme={formData.section_5?.section_theme} stepName={formData.section_5?.section_name}>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-left'}>{formData.section_5?.title}</h1>
        </div>
        <input type={'hidden'} name={`home_value`} value={section1Values('home_value')}/>
  
        <FormConditionalInput name={'have_mortgage_1'} showOn={'1'} checked={'0'} {...formData.section_5?.any_mortgage_yes_no}>
         <>
          <Input type={'number'} name={'mortgage_value_1'} {...formData.section_5?.first_mortgage_amount_input}/>
           <FormConditionalInput name={'have_mortgage_2'} showOn={'1'} checked={'0'} {...formData.section_5?.second_mortgage_yes_no}>
             <Input type={'number'} name={'mortgage_value_2'} {...formData.section_5?.second_mortgage_amount_input}/>
           </FormConditionalInput>
         </>
        </FormConditionalInput>
  
        
  
        <FormConditionalInput name={'have_outstanding_amount'} showOn={'1'} checked={'0'} {...formData.section_5?.outstanding_balance_yes_no}>
          <Input type={'number'} name={'outstanding_amount_value'} {...formData.section_5?.outstanding_balance_amount_input}/>
        </FormConditionalInput>
        
        <div className="btn-group">
          <Button className={'bordered prev-step'} label={'Back'}/>
          <Button icon={true} className={'next-step'} label={'Next'}/>
        </div>
      </FormStep>
      <FormStep apiStepNumber={3} pageName={pageName} activeTheme={formData.section_6?.section_theme} stepName={formData.section_6?.section_name}>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-left'}>Just one more thing…</h1>
          <h1 className={'form-headline-2 primary'}>Who are the borrower(s)?</h1>
        </div>
        <FormRepeatableInput fixedNumber={+section2Values('applicants_number') || 1}>
          <W50>
            <Input type={'text'} name={'applicant_fname_{{number}}'} {...formData.section_6?.applicant.first_name_input}/>
            <Input type={'text'} name={'applicant_lname_{{number}}'} {...formData.section_6?.applicant.last_name_input}/>
            <Input type={'text'} pattern={'^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'} name={'applicant_mail_{{number}}'} {...formData.section_6?.applicant.email_input}/>
            <Input type={'phone'} name={'applicant_phone_{{number}}'} {...formData.section_6?.applicant.phone_input}/>
          </W50>
        </FormRepeatableInput>
        {[...Array(+section2Values('applicants_number') || 1).keys()].map(i => <input key={i} type="hidden" name={`applicant_score_${i + 1}`} value={section2Values(`applicant_score_${i + 1}`)}/>)}
        <div className="btn-group">
          <Button className={'bordered prev-step'} label={'Back'}/>
          <Button icon={true} label={'Next'} className={'next-step'}/>
        </div>
      </FormStep>
      <FormStep sendSteps={[
        formData.section_1?.section_name,
        formData.section_2?.section_name,
        formData.section_4?.section_name,
        formData.section_5?.section_name,
        formData.section_6?.section_name,
      ]} apiStepNumber={4} pageName={pageName} activeTheme={formData.section_7?.section_theme} stepName={formData.section_7?.section_name}>
        <FlyingObjsContainer childrenList={[
          {
            imageUrl: intro_ball_3,
            left: '20%',
            level: 1,
            top: '25%',
            type: 'image',
            width: 5,
            alt: 'alt',
          },
          {
            imageUrl: intro_ball_4,
            left: '70%',
            level: 1,
            top: '5%',
            type: 'image',
            width: 6,
            alt: 'alt',
          }]}/>
        
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 primary'}>{formData.section_7?.qualify_for}</h1>
          <div className={'biggest-number'}><p><sup>$</sup>{numberWithCommas(mortgage)}</p></div>
        </div>
  
        <FormConditionalInput name={'confirm_qualify_amount'} showOn={'0'} checked={'0'}{...formData.section_7?.amount_like_yes_no}>
          <Input type={'text'} name={'amount_wanted'} {...formData.section_7?.amount_want_input}/>
        </FormConditionalInput>
        
        <div className="btn-group">
          <Button className={'bordered prev-step'} label={'Back'}/>
          <Button icon={true} label={'Next'} className={'next-step'}/>
        </div>
      </FormStep>
      <FormStep apiStepNumber={5} pageName={pageName} activeTheme={formData.section_8?.section_theme} stepName={formData.section_8?.section_name}>
        <div className="form-text-wrapper wide-text">
          <h1 className={'form-headline-1 text-left'}>{formData.section_8?.title}</h1>
          <h2 className={'form-headline-2 primary'}>{formData.section_8?.subtitle}</h2>
          <h2 className={'form-headline-3 primary'}>You are requesting a home equity line of credit against your {section1Values('property')}, {section4Values('property_details_1')} home which is
            located
            at <br/> {section4Values('address')}, {section4Values('city')}, {section4Values('postal_code')}</h2>
        </div>
        <Finalize>
          <Top>
            {media !== 'mobile'
              ? <FinalizeChild>
                <P.D>Your Info</P.D>
                {[...Array(+section2Values('applicants_number') || 0).keys()].map((index, personIndex) => {
                    const applicantFName = section6Values(`applicant_fname_${index + 1}`);
                    const applicantLName = section6Values(`applicant_lname_${index + 1}`);
                    const applicantScore = section6Values(`applicant_score_${index + 1}`);
                    return <P.D key={`person-desktop-${personIndex}`}>{applicantFName} {applicantLName} {applicantScore}</P.D>;
                  },
                )}
              </FinalizeChild>
              : <FinalizeChild className={'full m-mt-24'} order={3}>
                <FinalizeTable>
                  <tbody>
                  {[...Array(+section2Values('applicants_number') || 0).keys()].map((index, personIndex) => {
                      const applicantFName = section6Values(`applicant_fname_${index + 1}`);
                      const applicantLName = section6Values(`applicant_lname_${index + 1}`);
                      const applicantScore = section6Values(`applicant_score_${index + 1}`);
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
              <P.Num>{firstProduct.fields?.rate}%</P.Num>
              <Button label={'I’m good to go'} className={'next-step'}/>
            </FinalizeChild>
            <FinalizeChild order={2} className={'wide'}>
              <Button className={'bordered prev-step'} label={'No, edit the details'}/>
            </FinalizeChild>
          </Top>
          <Bottom>
            {media !== 'mobile'
              ? <FinalizeChild order={1}>
                <P.D>Your HELOC request is for ${numberWithCommas(section7Values('confirm_qualify_amount') === '0' ? +section7Values('amount_wanted') : mortgage)}</P.D>
                <P.D>Your property value is ${numberWithCommas(+section1Values('home_value'))}</P.D>
                <P.D>Your LTV is {((section7Values('confirm_qualify_amount') === '0' ? +section7Values('amount_wanted') : mortgage) / +section1Values('home_value') * 100).toFixed(1)}%</P.D>
              </FinalizeChild>
              : <FinalizeChild className={'full'} order={1}>
                <FinalizeTable>
                  <tbody>
                  <tr>
                    <P.Dark as={'td'}>HELOC Request</P.Dark>
                    <P.D as={'td'}>${numberWithCommas(section7Values('confirm_qualify_amount') === '0' ? +section7Values('amount_wanted') : mortgage)}</P.D>
                  </tr>
                  <tr>
                    <P.Dark as={'td'}>Property Value</P.Dark>
                    <P.D as={'td'}>${numberWithCommas(+section1Values('home_value'))}</P.D>
                  </tr>
                  <tr>
                    <P.Dark as={'td'}>LTV</P.Dark>
                    <P.D as={'td'}>{((section7Values('confirm_qualify_amount') === '0' ? +section7Values('amount_wanted') : mortgage) / +section1Values('home_value') * 100).toFixed(1)}%</P.D>
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
                  <P.D as={'td'}>{firstProduct.fields?.beacon_score[0].split('-')[0]+(firstProduct.fields?.beacon_score.length>1?'+':'')}</P.D>
                </tr>
                </tbody>
              </FinalizeTable>
            </FinalizeChild>
            <FinalizeChild order={3} className={'wide m-pr-40'}>
              {firstProduct.fields?.specifications.map(({term_id, name}) => <P.Border key={term_id}>{name}</P.Border>)}
            </FinalizeChild>
          </Bottom>
        </Finalize>
      </FormStep>
      <FormStep apiStepNumber={6} pageName={pageName} activeTheme={formData.section_9?.section_theme} stepName={formData.section_9?.section_name}>
        <div className="upload-step-wrapper">
          <img src={upload}/>
          <h1 className={'form-headline-1 text-left'}>{formData.section_9?.title}</h1>
          <FormConditionalInput name={'mortgages_1'} showOn={'1'} checked={'0'} {...formData.section_9?.have_appraisal_report_yes_no}>
            <FileInput name='appraisal_report_file' label={formData.section_9?.appraisal_report_upload_label} acceptText={'PDF, JPG, or PNG'}/>
            <Appraiser>
              <P.D>Select an appraiser</P.D>
              <div className="row">
                <div className="col-left">
                  <p className={'form-headline-1 text-left'} dangerouslySetInnerHTML={{__html: appraiser?.fields?.bdm.name}}/>
                </div>
                <div className="col-right">
                  <RadioGroup className={'vertical-radio'} radioText={'*Click to call'}>
                    {appraiser?.fields?.preferred_appraisal_company.map(({post_name}, index) => {
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
          <TextArea name={'additional_notes'} {...formData.section_9?.additional_notes_input}/>
          <div className="btn-group">
            <Button className={'next-step'} label={'I want my pre-approval'}/>
          </div>
        </div>
      </FormStep>
      <FormStep pageName={pageName} activeTheme={formData.section_10?.section_theme} stepName={formData.section_10?.section_name}>
        <LastStep>
          <img src={formData.section_10?.image.url} alt={formData.section_10?.image.alt}/>
          <div style={{flexBasis: '60%'}} className="text">
            <h1 className={'form-headline-1 text-left'}>{formData.section_10?.title}</h1>
            <p className={'form-headline-3 primary'}>{formData.section_10?.subtitle}</p>
            <Wysiwyg dangerouslySetInnerHTML={{__html: formData.section_10?.steps.replace('{{number}}', refNumber.current)}}/>
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

export default styled(connect(C3Page))`
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