import React from 'react';
import Form from '../components/form-components/Form';
import Input from '../components/form-components/Input';
import {connect, styled} from 'frontity';
import {size} from '../functions/size';
import RadioInput from '../components/form-components/RadioInput';
import RadioGroup from '../components/form-components/RadioGroup';
import FormStep from '../components/form-components/FormStep';
import Button from '../components/form-components/Button';
import W50 from '../components/form-components/W50';
import intro_ball_1 from '../assets/images/form_1_img.png';
import intro_ball_2 from '../assets/images/form_2_img.png';
import MegaloNum_1 from '../assets/images/flying-1.png';
import MegaloNum_2 from '../assets/images/last-step.png';
import FlyingObjsContainer from '../components/reusable/FlyingObjsContainer';
import ProductsTable from '../components/form-components/ProductsTable';
import {P} from '../components/form-components/StyledComponent';
import Finalize, {Bottom, FinalizeChild, FinalizeTable, Top} from '../components/form-components/Finalize';
import useMedia from '../hooks/useMedia';
import FormRepeatableInput from '../components/form-components/FormRepeatableInput';
import ProductsMobileOption from '../components/form-components/ProductsMobileOption';
import Link from '../components/reusable/Link';
import MegaloNum from '../components/form-components/MegaloNum';
import useStoredFormValue from '../hooks/useStoredFormValue';
import NeedHelp from '../components/reusable/NeedHelp';

const QualifyFor = ({className, setCurrentTheme, state, actions, formData={}}) => {
  const pageName = 'qualify-for';
  const get3Values = useStoredFormValue(pageName);
  
  const [section1Values, section2Values, section3Values, section4Values] = [get3Values(formData.section_1?.section_name), get3Values(formData.section_2?.section_name), get3Values(formData.section_3?.section_name), get3Values(formData.section_4?.section_name)];
  
  React.useEffect(() => {
    actions.theme.setSubHeader(formData.sub_header);
    
  }, [formData]);
  const media = useMedia();
  
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
        <Input noScroll className={'big-input'} type={'number'} name={'home_value'} {...formData.section_1?.home_value_input}/>
        <Button icon={true} className={'next-step wide'} label={'Next'}/>
  
        <NeedHelp lineOne={'Need help?'} lineTwo={'Contact us'} link={'/get-in-touch/'}/>

      </FormStep>
      <FormStep pageName={pageName} activeTheme={formData.section_2?.section_theme} stepName={formData.section_2?.section_name}>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-left'}>{formData.section_2?.title}</h1>
        </div>
  
        <FormRepeatableInput question={formData.section_2?.applicant_amount_label} number={4} initial={1} name={'applicants_number'}>
          <W50>
            <Input type={'text'} name={'applicant_fname_{{number}}'} {...formData.section_2?.applicant.first_name_input}/>
            <Input type={'text'} name={'applicant_lname_{{number}}'} {...formData.section_2?.applicant.last_name_input}/>
            <Input type={'text'} pattern={'^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'} name={'applicant_mail_{{number}}'} {...formData.section_2?.applicant.email_input}/>
            <Input type={'phone'} name={'applicant_phone_{{number}}'} {...formData.section_2?.applicant.phone_input}/>
          </W50>
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
      <FormStep pageName={pageName} activeTheme={formData.section_3?.section_theme} stepName={formData.section_3?.section_name}>
        <div className="form-text-wrapper wide-text">
          <h1 className={'form-headline-1 text-left'}>{formData.section_3?.title}</h1>
          <h2 className={'form-headline-3 primary'}>{formData.section_3?.subtitle}</h2>
        </div>
        
        {media !== 'mobile'
          ? <ProductsTable>
            <thead>
            <tr>
              <th scope={'col'}>
              </th>
              <th scope={'col'}>
                <P.Dark>First mortgage</P.Dark>
                <p>$2,200 / month</p>
                <p className={'number'}>5.74%</p>
                <Button className={'small next-step'} label={'I want this deal'}/>
              </th>
              <th scope={'col'}>
                <P.Dark>Second mortgage</P.Dark>
                <p>$2,325 / month</p>
                <p className={'number'}>6.74%</p>
                <Button className={'small bordered next-step'} label={'I want this deal'}/>
              </th>
              <th scope={'col'}>
                <P.Dark>HELOC</P.Dark>
                <p>$2,325 / month</p>
                <p className={'number'}>7.99%</p>
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
              <td className={'details'} data-label="LTV">75%</td>
              <td className={'details'} data-label="LTV">75%</td>
              <td className={'details'} data-label="LTV">75%</td>
            </tr>
            </tbody>
          </ProductsTable>
          : <div className="mortgage-options-mobile">
            <ProductsMobileOption>
              <div className="mortgage-title">
                <p className={'circle'}>1</p>
                <p>First mortgage</p>
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
              </div>
            </ProductsMobileOption>
            <ProductsMobileOption>
              <div className="mortgage-title">
                <p className={'circle'}>2</p>
                <p>Second mortgage</p>
              </div>
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
              </div>
            </ProductsMobileOption>
            <ProductsMobileOption>
              <div className="mortgage-title">
                <p className={'circle'}>3</p>
                <p>HELOC</p>
              </div>
              <div className="mortgage-head">
                <p className={'number'}>7.99%</p>
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
              </div>
            </ProductsMobileOption>
          </div>
        }
      </FormStep>
      <FormStep pageName={pageName} activeTheme={formData.section_4?.section_theme} stepName={formData.section_4?.section_name}>
        <MegaloNum>
          <h1 className={'primary form-headline-1'}>{formData.section_4?.title}</h1>
          <p className={'primary number'}>5.74</p>
        </MegaloNum>
        <FlyingObjsContainer childrenList={[
          {
            imageUrl: MegaloNum_1,
            left: '17%',
            level: 1,
            top: '16%',
            type: 'image',
            width: 9,
            alt: 'alt',
          },
          {
            imageUrl: MegaloNum_2,
            left: '64%',
            level: 1,
            top: '20%',
            type: 'image',
            width: 9,
            alt: 'alt',
          }]}/>
        <div className="btn-group megalonum">
          <Link href={'/dashboard/d/'}><Button focusable={false} className={'wide-vertical'} label={state.theme.user.logged ? 'I want this deal' : 'Sign in to get this deal'}/></Link>
    
          <Link href={'/d/'}><Button focusable={false} className={'next-step bordered wide-vertical'} label={'No, let’s see the full list'}/></Link>
        </div>
        <Finalize className={'mt-0'}>
          <Top/>
          <Bottom>
            {media === 'mobile' ? null : <FinalizeChild order={1}/>}
            {media !== 'mobile'
              ? <FinalizeChild order={2} className={'full m-border'}>
                <FinalizeTable>
                  <tbody>
                  <tr>
                    <P.Dark as={'td'}>Fixed Fee</P.Dark>
                    <P.D as={'td'}>6.49%</P.D>
                  </tr>
                  <tr>
                    <P.Dark as={'td'}>Lender Fee</P.Dark>
                    <P.D as={'td'}>1.49%</P.D>
                  </tr>
                  <tr>
                    <P.Dark as={'td'}>LTV</P.Dark>
                    <P.D as={'td'}>Up to 75%</P.D>
                  </tr>
                  <tr>
                    <P.Dark as={'td'}>Credit score</P.Dark>
                    <P.D as={'td'}>680+</P.D>
                  </tr>
                  </tbody>
                </FinalizeTable>
              </FinalizeChild>
              : <FinalizeChild className={'full'} order={1}>
                <FinalizeTable>
                  <tbody>
                  <tr>
                    <P.Dark as={'td'}>Fixed Fee</P.Dark>
                    <P.D as={'td'}>6.49%</P.D>
                  </tr>
                  <tr>
                    <P.Dark as={'td'}>Lender Fee</P.Dark>
                    <P.D as={'td'}>1.49%</P.D>
                  </tr>
                  <tr>
                    <P.Dark as={'td'}>LTV</P.Dark>
                    <P.D as={'td'}>Up to 75%</P.D>
                  </tr>
                  <tr>
                    <P.Dark as={'td'}>Credit score</P.Dark>
                    <P.D as={'td'}>680+</P.D>
                  </tr>
                  </tbody>
                </FinalizeTable>
              </FinalizeChild>}
      
            <FinalizeChild order={3} className={'wide m-pr-40'}>
              <P.Border>Home must be fully Owner Occupied</P.Border>
              <P.Border>Purchase or refinance</P.Border>
              <P.Border>P&I 25 year amortization</P.Border>
              <P.Border>6 month term open & interest only available</P.Border>
              <P.Border>Mortgages over $1 MM evaluated on a case-by-case basis</P.Border>
              <P.Border>Mortgage Payments on variable rate mortgage does not fluctuate during term</P.Border>
              <P.Border>No income verification</P.Border>
            </FinalizeChild>
          </Bottom>
        </Finalize>
      </FormStep>

    </Form>
  </div>;
};

export default styled(connect(QualifyFor))`
  width: 100%;
  height: 100%;

  ${Finalize}.mt-0 {
    margin-top: 0;

    ${Bottom} {
      @media (max-width: 575.98px) {
        margin-top: ${size(20)};
      }
    }
  }

  .btn-group.megalonum {
    ${Link}:first-of-type {
      margin-right: ${size(55)};
    }

    button {
      margin-top: 0;
      margin-right: 0;
      @media (max-width: 575.98px) {
        margin-bottom: ${size(20)};
      }
    }
  }
`;