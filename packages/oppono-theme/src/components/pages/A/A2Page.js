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

const pageName = 'a-2';
const A2Page = ({className, state, actions}) => {
  const getA2Values = useStoredFormValue(pageName);
  const data = state.source.get(state.router.link);
  const formData = data.isReady && !data.isError ? state.source[data.type][data.id].acf : {};
  const [section1Values, section2Values, section3Values] = [getA2Values(formData.section_1?.section_name), getA2Values(formData.section_2?.section_name), getA2Values(formData.section_3?.section_name)];
  
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
        <RadioGroup radioText={formData.section_2?.looking_for_yes_no.label}>
          <RadioInput label={formData.section_2?.looking_for_yes_no.yes} value={'1st'} name={'looking_for'} type={'radio'}/>
          <RadioInput label={formData.section_2?.looking_for_yes_no.no} value={'2nd'} name={'looking_for'} type={'radio'}/>
        </RadioGroup>
        
        <W50>
          <Input type={'text'} name={'purchase_price'} {...formData.section_2?.purchase_price}/>
          <Input type={'text'} name={'down_payment'} {...formData.section_2?.down_payment}/>
        </W50>
        
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
            You are applying for a {section2Values('looking_for')} mortgage on your {section1Values('property')}, {section1Values('property_details_1')} home which is located
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
                    return <P.D key={`person-desktop-${personIndex}`}>{applicantFName} {applicantLName} {applicantScore}</P.D>;
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
            {media === 'mobile' ? null : <FinalizeChild/>}
            <FinalizeChild order={2} className={'full m-border'}>
              <FinalizeTable>
                <tbody>
                <tr>
                  <P.Border as={'td'}>Your mortgage request is ${+section2Values('down_payment') || 0}</P.Border>
                  <P.Border as={'td'}>Your property value is ${+section2Values('purchase_price')}</P.Border>
                </tr>
                </tbody>
              </FinalizeTable>
            </FinalizeChild>
            <FinalizeChild order={3} className={'wide m-pr-40'}>
              <P.Border>Your down payment is ${+section2Values('purchase_price') - (+section2Values('down_payment') || 0)}</P.Border>
              <P.Border>Your LTV is {(+section2Values('purchase_price') - (+section2Values('down_payment') || 0)) * 100}%</P.Border>
            </FinalizeChild>
          </Bottom>
        </Finalize>
        <div className="btn-group">
          <Button label={'I’m good to go'} className={'next-step small'}/>
          <Button className={'bordered reset-form small'} label={'No, edit the details'}/>
        </div>
      </FormStep>
      <FormStep pageName={pageName} activeTheme={formData.section_5?.section_theme} stepName={formData.section_5?.section_name}>
        <div className="form-text-wrapper wide-text">
          
          <h1 className={'form-headline-1 text-left'}>{formData.section_5?.title}</h1>
          <h2 className={'form-headline-3'}>{formData.section_5?.subtitle}</h2>
          <h3 className={'form-headline-1 text-left'}>{formData.section_5?.choose_one}</h3>
        </div>
        
        {media !== 'mobile'
          ? <>
            <ProductsTable>
              <thead>
              <tr>
                <th scope={'col'}>
                  <p className={'circle'}>1</p>
                  <p>First mortgage options</p>
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
                <th scope={'col'}>
                  <p>$2,200 / month</p>
                  <p className={'number'}>5.74%</p>
                  <Button className={'small next-step'} label={'I want this deal'}/>
                </th>
                <th scope={'col'}>
                  <p>$2,325 / month</p>
                  <p className={'number'}>6.24%</p>
                  <Button className={'small bordered next-step'} label={'I want this deal'}/>
                </th>
                <th scope={'col'}>
                  <p>$8,325 / month</p>
                  <p className={'number'}>6.24%</p>
                  <Button className={'small bordered next-step'} label={'I want this deal'}/>
                </th>
              </tr>
              </thead>
              <tbody>
              <tr className={'head'}>
                <td scope={'row'} className={'dark'}>Fixed Rate</td>
                <td className={'details'} data-label="Fixed Rate">5.99%</td>
                <td className={'details'} data-label="Fixed Rate">5.99%</td>
                <td className={'details'} data-label="Fixed Rate">18.99%</td>
              </tr>
              <tr className={'head'}>
                <td scope={'row'} className={'dark'}>Lender Fee</td>
                <td className={'details'} data-label="Lender Fee">1.49%</td>
                <td className={'details'} data-label="Lender Fee">2.49%</td>
                <td className={'details'} data-label="Lender Fee">2.49%</td>
              </tr>
              <tr className={'head last-head'}>
                <td scope={'row'} className={'dark'}>LTV</td>
                <td className={'details'} data-label="Dark">75%</td>
                <td className={'details'} data-label="Dark">75%</td>
                <td className={'details'} data-label="Dark">75%</td>
              </tr>
              
              <tr>
                <td scope={'row'}>Home must be fully Owner Occupied</td>
                <td><CheckMark/></td>
                <td><CheckMark/></td>
                <td><CheckMark/></td>
              </tr>
              <tr>
                <td scope={'row'}>Purchase or refinance</td>
                <td><CheckMark/></td>
                <td><CheckMark/></td>
                <td><CheckMark/></td>
              </tr>
              <tr>
                <td scope={'row'}>P&I 25 year amortization</td>
                <td><CheckMark/></td>
                <td><CheckMark/></td>
                <td><CheckMark/></td>
              </tr>
              <tr>
                <td scope={'row'}>6 months term open available & interest only available</td>
                <td><CheckMark/></td>
                <td><CheckMark/></td>
                <td><CheckMark/></td>
              </tr>
              <tr>
                <td scope={'row'}>No income verification</td>
                <td><CheckMark/></td>
                <td><CheckMark/></td>
                <td><CheckMark/></td>
              </tr>
              <tr>
                <td scope={'row'}>Mortgage over $1 MM available</td>
                <td><CheckMark/></td>
                <td><CheckMark/></td>
                <td><CheckMark/></td>
              </tr>
              <tr>
                <td scope={'row'}>Owner occupied non compulsory</td>
                <td/>
                <td><CheckMark/></td>
                <td><CheckMark/></td>
              </tr>
              </tbody>
            </ProductsTable>
            <ProductsTable>
              <thead>
              <tr>
                <th scope={'col'}>
                  <p className={'circle'}>2</p>
                  <p>Second mortgage options</p>
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
                <th scope={'col'}>
                  <p>$2,200 / month</p>
                  <p className={'number'}>7.99%</p>
                  <Button className={'small next-step'} label={'I want this deal'}/>
                </th>
                <th scope={'col'}>
                  <p>$2,325 / month</p>
                  <p className={'number'}>11.99%</p>
                  <Button className={'small bordered next-step'} label={'I want this deal'}/>
                </th>
              </tr>
              </thead>
              <tbody>
              <tr className={'head'}>
                <td scope={'row'} className={'dark'}>Fixed Rate</td>
                <td className={'details'} data-label="Fixed Rate">5.99%</td>
                <td className={'details'} data-label="Fixed Rate">5.99%</td>
              </tr>
              <tr className={'head'}>
                <td scope={'row'} className={'dark'}>Lender Fee</td>
                <td className={'details'} data-label="Lender Fee">1.49%</td>
                <td className={'details'} data-label="Lender Fee">2.49%</td>
              </tr>
              <tr className={'head last-head'}>
                <td scope={'row'} className={'dark'}>LTV</td>
                <td className={'details'} data-label="Dark">75%</td>
                <td className={'details'} data-label="Dark">75%</td>
              </tr>
              
              <tr>
                <td scope={'row'}>Home must be fully Owner Occupied</td>
                <td><CheckMark/></td>
                <td><CheckMark/></td>
              </tr>
              <tr>
                <td scope={'row'}>Purchase or refinance</td>
                <td><CheckMark/></td>
                <td><CheckMark/></td>
              </tr>
              <tr>
                <td scope={'row'}>P&I 25 year amortization</td>
                <td><CheckMark/></td>
                <td><CheckMark/></td>
              </tr>
              <tr>
                <td scope={'row'}>6 months term open available & interest only available</td>
                <td><CheckMark/></td>
                <td><CheckMark/></td>
              </tr>
              <tr>
                <td scope={'row'}>No income verification</td>
                <td><CheckMark/></td>
                <td><CheckMark/></td>
              </tr>
              <tr>
                <td scope={'row'}>Mortgage over $1 MM available</td>
                <td><CheckMark/></td>
                <td><CheckMark/></td>
              </tr>
              <tr>
                <td scope={'row'}>Owner occupied non compulsory</td>
                <td/>
                <td><CheckMark/></td>
              </tr>
              </tbody>
            </ProductsTable>
          </>
          : <div className="mortgage-options-mobile">
            <FormFilter filters={{'*': 'All', 'first-mortgage': 'First Mortgage', 'second-mortgage': 'Second Mortgage'}}>
              <div data-filter={'first-mortgage'}>
                <ProductsMobileOption>
                  <div className="mortgage-title">
                    <p className={'circle'}>1</p>
                    <p>First mortgage options</p>
                    <p className={'dark'}>Variable rates</p>
                  </div>
                  <div className="mortgage-head">
                    <p className={'number'}>5.74%</p>
                    <p>$2,200 / month</p>
                    <Button className={'small next-step'} label={'I want this deal'}/>
                  </div>
                  <div className="mortgage-body">
                    <div className={'m-row m-head'}>
                      <p>Fixed Rate</p>
                      <p>5.99%</p>
                    </div>
                    <div className={'m-row m-head'}>
                      <p>Lender Fee</p>
                      <p>1.49%</p>
                    </div>
                    <div className={'m-row m-head  m-head last-head'}>
                      <p>LTV</p>
                      <p>75%</p>
                    </div>
                    <div className={'m-row'}>
                      <p>Purchase or refinance</p>
                      <p><CheckMark/></p>
                    </div>
                    <div className={'m-row'}>
                      <p>P&I 25 year amortization</p>
                      <p><CheckMark/></p>
                    </div>
                    <div className={'m-row'}>
                      <p>Home must be fully owner occupied</p>
                      <p>
                        <svg className={'exclamation'} viewBox="0 0 3 17">
                          <path fill="#d2f5e9" d="M2.91 16.61v-2.499H.41v2.5zM2.28 12l.434-6.383V.85H.606v4.767l.434 6.382z"/>
                        </svg>
                      </p>
                    </div>
                    <div className={'show-all-specs'}>
                      Show all specifications
                      <svg viewBox="0 0 8 4">
                        <path fill="none" stroke="#d2f5e9" strokeMiterlimit="20" d="M1 .5v0l3 3c1.172-1.17 1.828-1.83 3-3"/>
                      </svg>
                    </div>
                    <div className="remaining-specs">
                      <div className={'m-row'}>
                        <p>Purchase or refinance</p>
                        <p><CheckMark/></p>
                      </div>
                      <div className={'m-row'}>
                        <p>P&I 25 year amortization</p>
                        <p><CheckMark/></p>
                      </div>
                      <div className={'m-row'}>
                        <p>Home must be fully owner occupied</p>
                        <p>
                          <svg className={'exclamation'} viewBox="0 0 3 17">
                            <path fill="#d2f5e9" d="M2.91 16.61v-2.499H.41v2.5zM2.28 12l.434-6.383V.85H.606v4.767l.434 6.382z"/>
                          </svg>
                        </p>
                      </div>
                    </div>
                  </div>
                </ProductsMobileOption>
                <ProductsMobileOption>
                  <div className="mortgage-head">
                    <p className={'number'}>6.74%</p>
                    <p>$2,325 / month</p>
                    <Button className={'small next-step'} label={'I want this deal'}/>
                  </div>
                  <div className="mortgage-body">
                    <div className={'m-row m-head'}>
                      <p>Fixed Rate</p>
                      <p>5.99%</p>
                    </div>
                    <div className={'m-row m-head'}>
                      <p>Lender Fee</p>
                      <p>1.49%</p>
                    </div>
                    <div className={'m-row m-head  m-head last-head'}>
                      <p>LTV</p>
                      <p>75%</p>
                    </div>
                    <div className={'m-row'}>
                      <p>Purchase or refinance</p>
                      <p><CheckMark/></p>
                    </div>
                    <div className={'m-row'}>
                      <p>P&I 25 year amortization</p>
                      <p><CheckMark/></p>
                    </div>
                    <div className={'m-row'}>
                      <p>Home must be fully owner occupied</p>
                      <p>
                        <svg className={'exclamation'} viewBox="0 0 3 17">
                          <path fill="#d2f5e9" d="M2.91 16.61v-2.499H.41v2.5zM2.28 12l.434-6.383V.85H.606v4.767l.434 6.382z"/>
                        </svg>
                      </p>
                    </div>
                    <div className={'show-all-specs'}>
                      Show all specifications
                      <svg viewBox="0 0 8 4">
                        <path fill="none" stroke="#d2f5e9" strokeMiterlimit="20" d="M1 .5v0l3 3c1.172-1.17 1.828-1.83 3-3"/>
                      </svg>
                    </div>
                    <div className="remaining-specs">
                      <div className={'m-row'}>
                        <p>Purchase or refinance</p>
                        <p><CheckMark/></p>
                      </div>
                      <div className={'m-row'}>
                        <p>P&I 25 year amortization</p>
                        <p><CheckMark/></p>
                      </div>
                      <div className={'m-row'}>
                        <p>Home must be fully owner occupied</p>
                        <p>
                          <svg className={'exclamation'} viewBox="0 0 3 17">
                            <path fill="#d2f5e9" d="M2.91 16.61v-2.499H.41v2.5zM2.28 12l.434-6.383V.85H.606v4.767l.434 6.382z"/>
                          </svg>
                        </p>
                      </div>
                    </div>
                  
                  </div>
                </ProductsMobileOption>
              </div>
              <div data-filter={'second-mortgage'}>
                <ProductsMobileOption>
                  <div className="mortgage-title">
                    <p className={'circle'}>2</p>
                    <p>Second mortgage options</p>
                    <p className={'dark'}>Variable rates</p>
                  </div>
                  <div className="mortgage-head">
                    <p className={'number'}>7.99%</p>
                    <p>$2,200 / month</p>
                    <Button className={'small next-step'} label={'I want this deal'}/>
                  </div>
                  <div className="mortgage-body">
                    <div className={'m-row m-head'}>
                      <p>Fixed Rate</p>
                      <p>5.99%</p>
                    </div>
                    <div className={'m-row m-head'}>
                      <p>Lender Fee</p>
                      <p>1.49%</p>
                    </div>
                    <div className={'m-row m-head  m-head last-head'}>
                      <p>LTV</p>
                      <p>75%</p>
                    </div>
                    <div className={'m-row'}>
                      <p>Purchase or refinance</p>
                      <p><CheckMark/></p>
                    </div>
                    <div className={'m-row'}>
                      <p>P&I 25 year amortization</p>
                      <p><CheckMark/></p>
                    </div>
                    <div className={'m-row'}>
                      <p>Home must be fully owner occupied</p>
                      <p>
                        <svg className={'exclamation'} viewBox="0 0 3 17">
                          <path fill="#d2f5e9" d="M2.91 16.61v-2.499H.41v2.5zM2.28 12l.434-6.383V.85H.606v4.767l.434 6.382z"/>
                        </svg>
                      </p>
                    </div>
                    <div className={'show-all-specs'}>
                      Show all specifications
                      <svg viewBox="0 0 8 4">
                        <path fill="none" stroke="#d2f5e9" strokeMiterlimit="20" d="M1 .5v0l3 3c1.172-1.17 1.828-1.83 3-3"/>
                      </svg>
                    </div>
                    <div className="remaining-specs">
                      <div className={'m-row'}>
                        <p>Purchase or refinance</p>
                        <p><CheckMark/></p>
                      </div>
                      <div className={'m-row'}>
                        <p>P&I 25 year amortization</p>
                        <p><CheckMark/></p>
                      </div>
                      <div className={'m-row'}>
                        <p>Home must be fully owner occupied</p>
                        <p>
                          <svg className={'exclamation'} viewBox="0 0 3 17">
                            <path fill="#d2f5e9" d="M2.91 16.61v-2.499H.41v2.5zM2.28 12l.434-6.383V.85H.606v4.767l.434 6.382z"/>
                          </svg>
                        </p>
                      </div>
                    </div>
                  
                  </div>
                </ProductsMobileOption>
                <ProductsMobileOption>
                  <div className="mortgage-head">
                    <p className={'number'}>11.99%</p>
                    <p>$2,850/ month</p>
                    <Button className={'small next-step'} label={'I want this deal'}/>
                  </div>
                  <div className="mortgage-body">
                    <div className={'m-row m-head'}>
                      <p>Fixed Rate</p>
                      <p>5.99%</p>
                    </div>
                    <div className={'m-row m-head'}>
                      <p>Lender Fee</p>
                      <p>1.49%</p>
                    </div>
                    <div className={'m-row m-head  m-head last-head'}>
                      <p>LTV</p>
                      <p>75%</p>
                    </div>
                    <div className={'m-row'}>
                      <p>Purchase or refinance</p>
                      <p><CheckMark/></p>
                    </div>
                    <div className={'m-row'}>
                      <p>P&I 25 year amortization</p>
                      <p><CheckMark/></p>
                    </div>
                    <div className={'m-row'}>
                      <p>Home must be fully owner occupied</p>
                      <p>
                        <svg className={'exclamation'} viewBox="0 0 3 17">
                          <path fill="#d2f5e9" d="M2.91 16.61v-2.499H.41v2.5zM2.28 12l.434-6.383V.85H.606v4.767l.434 6.382z"/>
                        </svg>
                      </p>
                    </div>
                    <div className={'show-all-specs'}>
                      Show all specifications
                      <svg viewBox="0 0 8 4">
                        <path fill="none" stroke="#d2f5e9" strokeMiterlimit="20" d="M1 .5v0l3 3c1.172-1.17 1.828-1.83 3-3"/>
                      </svg>
                    </div>
                    <div className="remaining-specs">
                      <div className={'m-row'}>
                        <p>Purchase or refinance</p>
                        <p><CheckMark/></p>
                      </div>
                      <div className={'m-row'}>
                        <p>P&I 25 year amortization</p>
                        <p><CheckMark/></p>
                      </div>
                      <div className={'m-row'}>
                        <p>Home must be fully owner occupied</p>
                        <p>
                          <svg className={'exclamation'} viewBox="0 0 3 17">
                            <path fill="#d2f5e9" d="M2.91 16.61v-2.499H.41v2.5zM2.28 12l.434-6.383V.85H.606v4.767l.434 6.382z"/>
                          </svg>
                        </p>
                      </div>
                    </div>
                  
                  </div>
                </ProductsMobileOption>
              </div>
            </FormFilter>
          </div>
        }
      </FormStep>
      <FormStep pageName={pageName} activeTheme={formData.section_6?.section_theme} stepName={formData.section_6?.section_name}>
        <div className="upload-step-wrapper">
          <FlyingObjsContainer childrenList={[
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
          <h1 className={'form-headline-1 text-left'}>{formData.section_6?.title}</h1>
          <FormConditionalInput name={'mortgages_1'} showOn={'yes'} checked={'yes'} {...formData.section_6?.have_appraisal_report_yes_no}>
            <FileInput label={formData.section_6?.appraisal_report_upload_label} acceptText={'PDF, JPG, or PNG'}/>
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
          <TextArea name={'additional_notes'} {...formData.section_6?.additional_notes_input}/>
          <div className="btn-group">
            <Button className={'next-step'} label={'I want my pre-approval'}/>
          </div>
        </div>
      </FormStep>
      <FormStep pageName={pageName} activeTheme={formData.section_7?.section_theme} stepName={formData.section_7?.section_name}>
        <LastStep>
          <img src={formData.section_7?.image.url} alt={formData.section_7?.image.alt}/>
          <div style={{flexBasis: '20%'}} className="text">
            <h1 className={'form-headline-1 text-left'}>{formData.section_7?.title}</h1>
            <p className={'form-headline-3'}>{formData.section_7?.subtitle}</p>
            
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

export default styled(connect(A2Page))`
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