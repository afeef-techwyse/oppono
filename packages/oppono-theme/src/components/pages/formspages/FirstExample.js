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
import intro_ball_1 from '../../../assets/images/fly-image-8.png';
import intro_ball_2 from '../../../assets/images/fly-image-4.png';
import FlyingObjsContainer from '../../reusable/FlyingObjsContainer';
import ProductsTable from '../../form-components/ProductsTable';
import {P} from '../../form-components/StyledComponent';
import Alert from '../../form-components/Alert';
import Finalize, {Bottom, FinalizeChild, FinalizeTable, Top} from '../../form-components/Finalize';
import useMedia from '../../../hooks/useMedia';
import FormConditionalInput from '../../form-components/FormConditionalInput';

const FirstExample = (props) => {
  const media = useMedia();
  const CheckMark = () => <svg className="table-checkmark" viewBox="0 0 18 12">
    <path fill="none" stroke="#d2f5e9" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="20" strokeWidth="2" d="M1 5.167v0L6.895 11 17 1"/>
  </svg>;
  return <div className={props.className}>
    <Form>

      <FormStep activeTheme={'gray-theme'} stepName={'first'}>
        <FlyingObjsContainer childrenList={
          [
            {
              imageUrl: intro_ball_1,
              left: '10%',
              level: 1,
              top: '55%',
              type: 'image',
              width: 10,
              alt: 'alt',
            },
            {
              imageUrl: intro_ball_2,
              left: '80%',
              level: 1,
              top: '5%',
              type: 'image',
              width: 10,
              alt: 'alt',
            }]}/>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-left'}>Okay, just 6 more easy questions</h1>
          <h2 className={'form-headline-2'}>Let’s refinance that house!</h2>
        </div>
        <Input type={'text'} placeholder={'Address'} label={'What’s the address'} required={true}/>
        <W50>
          <Input type={'text'} placeholder={'e.g. Toronto'} label={'City'} required={true}/>
          <Input type={'text'} placeholder={'e.g. M5H 3S4'} label={'Postal Code'} required={true}/>
        </W50>
        <Select options={[
          {value: 'Residential', label: 'Residential'},
          {value: 'strawberry', label: 'Strawberry'},
          {value: 'vanilla', label: 'Vanilla'}]} label={'What type of property?'} name={'property?'}/>
        <Select options={[
          {value: 'Detached', label: 'Detached'},
          {value: 'strawberry', label: 'Strawberry'},
          {value: 'vanilla', label: 'Vanilla'}]} label={'Property Details'} name={'Details'}/>
        <Select options={[
          {value: 'Owner Occupied', label: 'Owner Occupied'},
          {value: 'strawberry', label: 'Strawberry'},
          {value: 'vanilla', label: 'Vanilla'}]} label={'Property Details'} name={'Property Details'}/>
        <Button icon={true} className={'next-step'} label={'Next'}/>
      </FormStep>
      <FormStep activeTheme={'gray-theme'} stepName={'zero_3'}>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-left'}>Okay, just 6 more easy questions</h1>
          <h2 className={'form-headline-2'}>Let’s refinance that house!</h2>
        </div>
        <FormConditionalInput label={'do you have another number?'} name={'another'} showOn={'yes'} checked={'yes'}>
          <Input label={'add the number'}/>
        </FormConditionalInput>
        <Finalize>
          <Top>
            {media !== 'mobile'
              ? <FinalizeChild order={3}>
                <P.D>Your Info</P.D>
                <P.D>John Smith 680+</P.D>
                <P.D>Jane Smith 650+</P.D>
              </FinalizeChild>
              : <FinalizeChild className={'full m-mt-24'} order={3}>
                <FinalizeTable>
                  <tr>
                    <P.Dark as={'td'}>John Smith</P.Dark>
                    <P.D as={'td'}>680+</P.D>
                  </tr>
                  <tr>
                    <P.Dark as={'td'}>John Smith</P.Dark>
                    <P.D as={'td'}>650+</P.D>
                  </tr>
                </FinalizeTable>
              </FinalizeChild>}
        
            <FinalizeChild order={1}>
              <P.Dark>*Variable Rate
                *Payment interest based on balance</P.Dark>
              <P.Num>8.99%</P.Num>
              <Button label={'I’m good to go'}/>
            </FinalizeChild>
            <FinalizeChild order={2} className={'wide'}>
              <Button className={'bordered '} label={'No, edit the details'}/>
            </FinalizeChild>
            {/*<FinalizeChild order=1>*/}
            {/*  <P.Dark>*Admin and commitment fees apply</P.Dark>*/}
            {/*</FinalizeChild>*/}
          </Top>
          <Bottom>
            {media !== 'mobile'
              ? <FinalizeChild order={1}>
                <P.D>Your HELOC request is for $300,000</P.D>
                <P.D>Your property value is $780,000</P.D>
                <P.D>Your LTV is 51.2%</P.D>
              </FinalizeChild>
              : <FinalizeChild className={'full'} order={1}>
                <FinalizeTable>
                  <tr>
                    <P.Dark as={'td'}>HELOC Request</P.Dark>
                    <P.D as={'td'}>$300,000</P.D>
                  </tr>
                  <tr>
                    <P.Dark as={'td'}>Property Value</P.Dark>
                    <P.D as={'td'}>$780,000</P.D>
                  </tr>
                  <tr>
                    <P.Dark as={'td'}>LTV</P.Dark>
                    <P.D as={'td'}>51.2%</P.D>
                  </tr>
                </FinalizeTable>
              </FinalizeChild>}
        
            <FinalizeChild order={2} className={'full m-border'}>
              <FinalizeTable>
                <tr>
                  <P.Dark as={'td'}>Lender Fee</P.Dark>
                  <P.D as={'td'}>2.00%</P.D>
                </tr>
                <tr>
                  <P.Dark as={'td'}>Lender Fee and f</P.Dark>
                  <P.D as={'td'}>200.00%</P.D>
                </tr>
              </FinalizeTable>
            </FinalizeChild>
            <FinalizeChild order={3} className={'wide m-pr-40'}>
              <P.Border>
                Lower than 75% LTV or $150,000 on single family homes
              </P.Border>
              <P.Border>
                Lower than 75% LTV or $150,000 on single family homes
              </P.Border>
              <P.Border>
                Lower than 75% LTV or $150,000 on single family homes
              </P.Border>
              <P.Border>
                Lower than 75% LTV or $150,000 on single family homes
              </P.Border>
              <P.Border>
                Lower than 75% LTV or $150,000 on single family homes
              </P.Border>
              <P.Border>
                Lower than 75% LTV or $150,000 on single family homes
              </P.Border>
            </FinalizeChild>
          </Bottom>
        </Finalize>
      </FormStep>
      <FormStep activeTheme={'gray-theme'} stepName={'zero_2'}>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-left'}>Okay, just 6 more easy questions</h1>
          <h2 className={'form-headline-2'}>Let’s refinance that house!</h2>
        </div>
        <Alert>
          <div className="col-4">
            <P.F29>Property details</P.F29>
            <P.D>444 Horner Ave,</P.D>
            <P.D>Oakville, Ontario, MSH 3S4</P.D>
          </div>
          <div className="col-6">
            <W50>
              <Input label={'Property Value'}/>
              <Input label={'Mortgage Request'}/>
            </W50>
          </div>
        </Alert>
        <Alert>
          <div className="col-4">
            <P.F29>Property details</P.F29>
            <P.D>444 Horner Ave,</P.D>
            <P.D>Oakville, Ontario, MSH 3S4</P.D>
          </div>
          <div className="col-6">
            <W50>
              <Input label={'Property Value'}/>
              <Input label={'Mortgage Request'}/>
            </W50>
            <Input label={'Mortgage Request'}/>
          </div>
        </Alert>
        <Alert>
          <div className="col-4">
            <P.F29>Property details</P.F29>
            <P.D>444 Horner Ave,</P.D>
            <P.D>Oakville, Ontario, MSH 3S4</P.D>
          </div>
          <div className="col-6">
            <W50>
              <Input label={'Property Value'}/>
              <Input label={'Mortgage Request'}/>
            </W50>
          </div>
        </Alert>
        <Alert>
          <div className="col-4">
            <P.F29>Property details</P.F29>
            <P.D>444 Horner Ave,</P.D>
            <P.D>Oakville, Ontario, MSH 3S4</P.D>
          </div>
          <div className="col-6">
            <W50>
              <Input label={'Property Value'}/>
              <Input label={'Mortgage Request'}/>
            </W50>
          </div>
        </Alert>
      </FormStep>
      <FormStep activeTheme={'gray-theme'} stepName={'zero'}>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-left'}>Okay, just 6 more easy questions</h1>
          <h2 className={'form-headline-2'}>Let’s refinance that house!</h2>
        </div>
        <ProductsTable>
          <table>
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
                  1<span> /</span> 2
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
                <p className={'small'}>*refinance a house</p>
                <p>$400,000 max</p>
                <p>$2,200 / month</p>
                <p className={'number'}>5.74%</p>
                <Button className={'small'} label={'I want this deal'}/>
              </th>
              <th scope={'col'}>
                <p className={'small'}>*refinance a house</p>
                <p>$400,000 max</p>
                <p>$2,350 / month</p>
                <p className={'number'}>6.24%</p>
                <Button className={'small bordered'} label={'I want this deal'}/>
              </th>
              <th scope={'col'}>
                <p className={'small'}>*refinance a house</p>
                <p className={'number'}>7.24%</p>
                <Button className={'small bordered'} label={'I want this deal'}/>
              </th>
              <th scope={'col'}>
                <p className={'number'}>7.99%</p>
                <Button className={'small bordered'} label={'I want this deal'}/>
              </th>
            </tr>
            </thead>
            <tbody>
            <tr className={'head'}>
              <td scope={'row'} className={'dark'}>Fixed Rate</td>
              <td className={'details'} data-label="Fixed Rate">-</td>
              <td className={'details'} data-label="Fixed Rate">6.49%</td>
              <td className={'details'} data-label="Fixed Rate">7.49%</td>
              <td className={'details'} data-label="Fixed Rate">8.49%</td>
            </tr>
            <tr className={'head'}>
              <td scope={'row'} className={'dark'}>Lender Fee</td>
              <td className={'details'} data-label="Lender Fee">1.49%</td>
              <td className={'details'} data-label="Lender Fee">2.49%</td>
              <td className={'details'} data-label="Lender Fee">2.49%</td>
              <td className={'details'} data-label="Lender Fee">3.00%</td>
            </tr>
            <tr className={'head'}>
              <td scope={'row'} className={'dark'}>LTV</td>
              <td className={'details'} data-label="Dark">Up to 75%</td>
              <td className={'details'} data-label="Dark">Up to 75%</td>
              <td className={'details'} data-label="Dark">Up to 75%</td>
              <td className={'details'} data-label="Dark">Up to 80%</td>
            </tr>
            <tr className={'head last-head'}>
              <td scope={'row'} className={'dark'}>Credit Score</td>
              <td className={'details'} data-label="Credit Score">680+</td>
              <td className={'details'} data-label="Credit Score">650+</td>
              <td className={'details'} data-label="Credit Score">Non Needed!</td>
              <td className={'details'} data-label="Credit Score">600+</td>
            </tr>
            <tr>
              <td scope={'row'}>Home must be fully Owner Occupied</td>
              <td><CheckMark/></td>
            </tr>
            <tr>
              <td scope={'row'}>Purchase or refinance</td>
              <td><CheckMark/></td>
              <td><CheckMark/></td>
              <td><CheckMark/></td>
              <td><CheckMark/></td>
            </tr>
            <tr>
              <td scope={'row'}>Owner Occupied or Rental Property</td>
              <td/>
              <td><CheckMark/></td>
              <td><CheckMark/></td>
            </tr>
            <tr>
              <td scope={'row'}>P&I 25 year amortization</td>
              <td><CheckMark/></td>
              <td><CheckMark/></td>
              <td><CheckMark/></td>
              <td><CheckMark/></td>
            </tr>
            <tr>
              <td scope={'row'}>6 month term open & interest available</td>
              <td><CheckMark/></td>
              <td><CheckMark/></td>
              <td><CheckMark/></td>
              <td><CheckMark/></td>
            </tr>
            <tr>
              <td scope={'row'}>Mortgages over $1 MM evaluated on a
                case-by-case basis
              </td>
              <td><CheckMark/></td>
            </tr>
            <tr>
              <td scope={'row'}>Mortgage Payments on variable rate
                mortgage does not fluctuate during term
              </td>
              <td><CheckMark/></td>
              <td><CheckMark/></td>
              <td><CheckMark/></td>
              <td><CheckMark/></td>
            </tr>
            <tr>
              <td scope={'row'}>No income verification</td>
              <td><CheckMark/></td>
              <td><CheckMark/></td>
              <td><CheckMark/></td>
              <td><CheckMark/></td>
            </tr>
            </tbody>
          </table>
          <div className="mortgage-options-mobile">
            <div className="mortgage-option">
              <div className="mortgage-title">
                <p className={'circle'}>1</p>
                <p>First mortgage options</p>
                <p className={'dark'}>Variable rates</p>
              </div>
              <div className="mortgage-head">
                <p className={'small'}>*refinance a house</p>
                <p>$400,000 max</p>
                <p>$2,200 / month</p>
                <p className={'number'}>5.74%</p>
                <Button className={'small'} label={'I want this deal'}/>
              </div>
              <div className="mortgage-body">
                <div className={'m-row m-head'}>
                  <p>Fixed Rate</p>
                  <p>-</p>
                </div>
                <div className={'m-row m-head'}>
                  <p>Lender Fee</p>
                  <p>1.49%</p>
                </div>
                <div className={'m-row m-head'}>
                  <p>LTV</p>
                  <p>Up to 75%</p>
                </div>
                <div className={'m-row m-head last-head'}>
                  <p>Credit Score</p>
                  <p>680+</p>
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
              </div>
            </div>
            <div className="mortgage-option">
              <div className="mortgage-title">
                <p className={'circle'}>1</p>
                <p>First mortgage options</p>
                <p className={'dark'}>Variable rates</p>
              </div>
              <div className="mortgage-head">
                <p className={'small'}>*refinance a house</p>
                <p>$400,000 max</p>
                <p>$2,200 / month</p>
                <p className={'number'}>5.74%</p>
                <Button className={'small'} label={'I want this deal'}/>
              </div>
              <div className="mortgage-body">
                <div className={'m-row m-head'}>
                  <p>Fixed Rate</p>
                  <p>-</p>
                </div>
                <div className={'m-row m-head'}>
                  <p>Lender Fee</p>
                  <p>1.49%</p>
                </div>
                <div className={'m-row m-head'}>
                  <p>LTV</p>
                  <p>Up to 75%</p>
                </div>
                <div className={'m-row m-head last-head'}>
                  <p>Credit Score</p>
                  <p>680+</p>
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
              </div>
            </div>
            <div className="mortgage-option">
              <div className="mortgage-title">
                <p className={'circle'}>1</p>
                <p>First mortgage options</p>
                <p className={'dark'}>Variable rates</p>
              </div>
              <div className="mortgage-head">
                <p className={'small'}>*refinance a house</p>
                <p>$400,000 max</p>
                <p>$2,200 / month</p>
                <p className={'number'}>5.74%</p>
                <Button className={'small'} label={'I want this deal'}/>
              </div>
              <div className="mortgage-body">
                <div className={'m-row m-head'}>
                  <p>Fixed Rate</p>
                  <p>-</p>
                </div>
                <div className={'m-row m-head'}>
                  <p>Lender Fee</p>
                  <p>1.49%</p>
                </div>
                <div className={'m-row m-head'}>
                  <p>LTV</p>
                  <p>Up to 75%</p>
                </div>
                <div className={'m-row m-head last-head'}>
                  <p>Credit Score</p>
                  <p>680+</p>
                </div>
                <div className={'m-row'}>
                  <p>Purchase or refinance</p>
                  <p>
                    <svg className={'exclamation'} viewBox="0 0 3 17">
                      <path fill="#d2f5e9" d="M2.91 16.61v-2.499H.41v2.5zM2.28 12l.434-6.383V.85H.606v4.767l.434 6.382z"/>
                    </svg>
                  </p>
                </div>
                <div className={'m-row'}>
                  <p>P&I 25 year amortization</p>
                  <p><CheckMark/></p>
                </div>
                <div className={'m-row'}>
                  <p>Home must be fully owner occupied</p>
                  <p><CheckMark/></p>
                </div>
                <div className={'show-all-specs'}>
                  Show all specifications
                  <svg viewBox="0 0 8 4">
                    <path fill="none" stroke="#d2f5e9" strokeMiterlimit="20" d="M1 .5v0l3 3c1.172-1.17 1.828-1.83 3-3"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </ProductsTable>
      </FormStep>
      <FormStep activeTheme={'gray-theme'} stepName={'second'}>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-left'}>Let’s talk numbers</h1>
        </div>
        <Input type={'text'} placeholder={'eg $780,000'} label={'What is the estimated value of your home?'} required={true}/>
        <RadioGroup radioText={'Do you have an Appraisal Report?'}>
          <RadioInput label={'Yes'} value={'yes'} name={'Appraisal'} type={'radio'}/>
          <RadioInput label={'No'} value={'no'} name={'Appraisal'} type={'radio'}/>
        </RadioGroup>
        <RadioGroup radioText={'Do you have any mortgages on your house?'}>
          <RadioInput label={'Yes'} value={'yes'} name={'mortgages'} type={'radio'}/>
          <RadioInput label={'No'} value={'no'} name={'mortgages'} type={'radio'}/>
        </RadioGroup>
        <Input type={'text'} placeholder={'eg $380,000'} label={'First mortgage amount'} required={true}/>
        
        <RadioGroup radioText={'Do you have a 2nd mortgage on your house?'}>
          <RadioInput label={'Yes'} value={'yes'} name={'house'} type={'radio'}/>
          <RadioInput label={'No'} value={'no'} name={'house'} type={'radio'}/>
        </RadioGroup>
        
        <Input type={'text'} placeholder={'eg $15,000'} label={'2nd mortgage amount'} required={true}/>
        
        <RadioGroup radioText={'Do you have any other outstanding amounts?'}>
          <RadioInput label={'Yes'} value={'yes'} name={'outstanding'} type={'radio'}/>
          <RadioInput label={'No'} value={'no'} name={'outstanding'} type={'radio'}/>
        </RadioGroup>
        <Input type={'text'} placeholder={'eg $5,000'} label={'Outstanding balance'} required={true}/>
        <div className="btn-group">
          <Button className={'bordered prev-step'} label={'Backs'}/>
          <Button icon={true} className={'next-step'} label={'Next'}/>
        </div>
      </FormStep>
      <FormStep activeTheme={'gray-theme'} stepName={'third'}>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-left'}>Just one more thing…</h1>
          <h1 className={'form-headline-2'}>Who are the borrower(s)?</h1>
        </div>
        
        <RadioGroup radioText={'How many people are on the title for this mortgage?'}>
          <RadioInput label={'1'} value={'1'} name={'people'} type={'radio'}/>
          <RadioInput label={'2'} value={'2'} name={'people'} type={'radio'}/>
          <RadioInput label={'3'} value={'3'} name={'people'} type={'radio'}/>
          <RadioInput label={'4'} value={'4'} name={'people'} type={'radio'}/>
        </RadioGroup>
        
        <Input type={'text'} placeholder={'eg John Smith'} label={'What’s the first applicant’s name?'} required={true}/>
        
        <Input type={'text'} placeholder={'eg John Smith'} label={'What’s the second applicant’s name?'} required={true}/>
        
        <RadioGroup radioText={'What’s the first applicant’s credit score?'}>
          <RadioInput label={'<650'} value={'<650'} name={'applicant'} type={'radio'}/>
          <RadioInput label={'650+'} value={'650+'} name={'applicant'} type={'radio'}/>
          <RadioInput label={'680+'} value={'680+'} name={'applicant'} type={'radio'}/>
        </RadioGroup>
        
        <RadioGroup radioText={'What’s the first applicant’s credit score?'}>
          <RadioInput label={'<650'} value={'<650'} name={'applicant2'} type={'radio'}/>
          <RadioInput label={'650+'} value={'650+'} name={'applicant2'} type={'radio'}/>
          <RadioInput label={'680+'} value={'680+'} name={'applicant2'} type={'radio'}/>
        </RadioGroup>
        
        <div className="btn-group">
          <Button className={'bordered prev-step'} label={'Back'}/>
          <Button icon={true} label={'Next'} className={'next-step'}/>
        </div>
      </FormStep>
      <FormStep activeTheme={'green-theme'} stepName={'fourth'}>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-left'}>Let’s get this done!<br/>
            Upload your documents.</h1>
        </div>
        
        <RadioGroup radioText={'Do you have an appraisal report?'}>
          <RadioInput label={'Yes'} value={'yes'} name={'report'} type={'radio'}/>
          <RadioInput label={'No'} value={'no'} name={'report'} type={'radio'}/>
        </RadioGroup>
        
        <FileInput label={'Appraisal report'} acceptText={'PDF, JPG, or PNG'}/>
        <hr/>
        <TextArea label={'Have anything else we need to know?'}/>
        
        <div className="btn-group">
          <Button icon={true} label={'I want my pre-approval'}/>
        </div>
      </FormStep>
    </Form>
  </div>;
};

export default styled(FirstExample)`
width: 100%;
height: 100%;
padding-top: ${size(200)};
`;