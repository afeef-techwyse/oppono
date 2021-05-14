import React from 'react';
import Form from '../../components/form-components/Form';
import Input from '../../components/form-components/Input';
import {styled} from 'frontity';
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
import {Li, Ol, P, Span} from '../../components/form-components/StyledComponent';
import Alert from '../../components/form-components/Alert';
import Finalize, {Bottom, FinalizeChild, FinalizeTable, Top} from '../../components/form-components/Finalize';
import useMedia from '../../hooks/useMedia';
import FormConditionalInput from '../../components/form-components/FormConditionalInput';
import FormRepeatableInput from '../../components/form-components/FormRepeatableInput';
import upload from '../../assets/images/upload.png';
import Appraiser from '../../components/form-components/Appraiser';
import RadioInputVertical from '../../components/form-components/RadioInputVertical';
import LastStep from '../../components/form-components/LastStep';
import Link from '../../components/reusable/Link';

const FourPage = (props) => {
  const media = useMedia();
  const [repeating, setRepeating] = React.useState(1);
  const CheckMark = () => <svg className="table-checkmark" viewBox="0 0 18 12">
    <path fill="none" stroke="#d2f5e9" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="20" strokeWidth="2" d="M1 5.167v0L6.895 11 17 1"/>
  </svg>;
  return <div className={props.className}>
    <Form setCurrentTheme={setCurrentTheme}>
      <FormStep activeTheme={'gray-theme'} stepName={'b-1'}>
        <FlyingObjsContainer childrenList={
          [
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
          <h1 className={'form-headline-1 text-left'}>Okay, just 5 more easy questions</h1>
          <h2 className={'form-headline-2 primary'}>Let’s get you that secured business line of credit!</h2>
        </div>
        <Input type={'text'} label={'Legal business name'} name={'business_name'} required={true}/>
        <Select options={[
          {value: 'Residential', label: 'Residential'},
          {value: 'strawberry', label: 'Strawberry'},
          {value: 'vanilla', label: 'Vanilla'}]}
                label={'What type of property?'}
                name={'business_type'}
        />
        <Input type={'text'} placeholder={'Address'} label={'What’s the address'} name={'address'} required={true}/>
        <W50>
          <Input type={'text'} placeholder={'e.g. Toronto'} label={'City'} name={'city'} required={true}/>
          <Input type={'text'} placeholder={'e.g. M5H 3S4'} label={'Postal Code'} name={'postal_code'} required={true}/>
        </W50>

        <Button icon={true} className={'next-step'} label={'Next'}/>
      </FormStep>
      <FormStep activeTheme={'gray-theme'} stepName={'b-2'}>
        <FlyingObjsContainer childrenList={
          [
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
          <h1 className={'form-headline-1 text-left'}>What’s the address of the property <br/>you want to secure the line of credit to?</h1>
        </div>
        <FormConditionalInput label={'Is it the same as your business address?'} name={'property_same_address'} showOn={'1'} checked={'0'}>
          <>
            <Input type={'text'} placeholder={'Address'} label={'What’s the address'} name={'property_address'} required={true}/>
            <W50>
              <Input type={'text'} placeholder={'e.g. Toronto'} label={'City'} name={'property_city'} required={true}/>
              <Input type={'text'} placeholder={'e.g. M5H 3S4'} label={'Postal Code'} name={'property_postal_code'} required={true}/>
            </W50>
          </>
        </FormConditionalInput>
        <Select options={[
          {value: 'Residential', label: 'Residential'},
          {value: 'strawberry', label: 'Strawberry'},
          {value: 'vanilla', label: 'Vanilla'}]}
                label={'Property Details'}
                name={'property_type_2'}/>
        <Select options={[
          {value: 'Residential', label: 'Residential'},
          {value: 'strawberry', label: 'Strawberry'},
          {value: 'vanilla', label: 'Vanilla'}]}
                label={'Property Details 2'}
                name={'property_type_3'}/>
        <div className="btn-group">
          <Button className={'bordered prev-step'} label={'Back'}/>
          <Button icon={true} label={'Next'} className={'next-step'}/>
        </div>
      </FormStep>
      <FormStep activeTheme={'gray-theme'} stepName={'b-3'}>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-left'}>Let’s talk numbers</h1>
        </div>
        <W50>
          <Input type={'number'} placeholder={'e.g. $380,000'} label={'What is your purchase price?'} name={'purchase_price'} required={true}/>
          <Input type={'number'} placeholder={'e.g. $380,000'} label={'What is your down payment?'} name={'down_payment'} required={true}/>
        </W50>
        <RadioGroup radioText={'Do you have an Appraisal Report?'}>
          <RadioInput label={'Yes'} value={'1'} name={'Appraisal'} type={'radio'}/>
          <RadioInput label={'No'} value={'0'} name={'Appraisal'} type={'radio'}/>
        </RadioGroup>
        <div className="btn-group">
          <Button className={'bordered prev-step'} label={'Back'}/>
          <Button icon={true} label={'Next'} className={'next-step'}/>
        </div>
      </FormStep>
      <FormStep activeTheme={'gray-theme'} stepName={'b-4'}>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-left'}>Just one more thing…</h1>
          <h1 className={'form-headline-2 primary'}>Who are the borrower(s)?</h1>
        </div>
        <FormRepeatableInput question={'How many people are on the title for this mortgage?'} number={4} initial={1} name={'people'}>
          <W50>
            <Input type={'text'} placeholder={'e.g. John'} label={'{{number}} applicant’s name'} name={'{{number}}_name'} required={true}/>
            <Input type={'text'} placeholder={'e.g. Smith'} label={'Last Name'} name={'{{number}}_last_name'} required={true}/>
          </W50>
          <W50>
            <Input type={'text'} pattern={'^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'} label={'email'} name={'{{number}}_email'} required={true}/>
            <Input type={'phone'} label={'Phone Number'} name={'{{number}}_phone_number'} required={true}/>
          </W50>
          <RadioGroup radioText={`What’s the {{number}} applicant’s credit score?`}>
            <RadioInput label={'<650'} value={'<650'} name={`applicant-credit-{{number}}`} type={'radio'}/>
            <RadioInput label={'650+'} value={'650+'} name={`applicant-credit-{{number}}`} type={'radio'}/>
            <RadioInput label={'680+'} value={'680+'} name={`applicant-credit-{{number}}`} type={'radio'}/>
          </RadioGroup>
        </FormRepeatableInput>
        <div className="btn-group">
          <Button className={'bordered prev-step'} label={'Back'}/>
          <Button icon={true} label={'Next'} className={'next-step'}/>
        </div>
      </FormStep>
      <FormStep activeTheme={'gray-theme'} stepName={'b-5'}>
        <div className="form-text-wrapper wide-text">
          <h1 className={'form-headline-1 text-left'}>Let’s finalize this deal</h1>
          <h2 className={'form-headline-2 primary'}>Here’s a quick look at what we can offer</h2>
          <h2 className={'form-headline-3 primary'}>You are requesting a secured business equity line of credit against your residential, <br/>detached home which is located at<br/><br/> 444 Horner
            Ave,
            Toronto, M5H 3S4</h2>
        </div>
        <Finalize>
          <Top>
            {media !== 'mobile'
              ? <FinalizeChild>
                <P.D>Your Info</P.D>
                <P.D>John Smith 680+</P.D>
                <P.D>Jane Smith 650+</P.D>
              </FinalizeChild>
              : <FinalizeChild className={'full m-mt-24'} order={3}>
                <FinalizeTable>
                  <tbody>
                  <tr>
                    <P.Dark as={'td'}>John Smith</P.Dark>
                    <P.D as={'td'}>680+</P.D>
                  </tr>
                  <tr>
                    <P.Dark as={'td'}>John Smith</P.Dark>
                    <P.D as={'td'}>650+</P.D>
                  </tr>
                  </tbody>
                </FinalizeTable>
              </FinalizeChild>}

            <FinalizeChild order={1}>
              <P.Dark>*Variable Rate</P.Dark>
              <P.Dark>*Payment interest based on balance</P.Dark>
              <P.Num>9.99%</P.Num>
              <Button label={'I’m good to go'} className={'next-step'}/>
            </FinalizeChild>
            <FinalizeChild order={2} className={'wide'}>
              <Button className={'bordered prev-step'} label={'No, edit the details'}/>
            </FinalizeChild>
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
                  <tbody>
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
      </FormStep>
      <FormStep activeTheme={'green-theme'} stepName={'a-iii-6'}>
        <div className="upload-step-wrapper">
          <img alt="" src={upload}/>
          <h1 className={'form-headline-1 text-left'}>Let’s get this done!<br/>
            Upload your documents.</h1>
          <FormConditionalInput noScroll label={'Do you have an appraisal report?'} name={'mortgages_1'} showOn={'1'} checked={'0'}>
            <FileInput name='appraisal_report_file' label={'Appraisal report'} acceptText={'PDF, JPG, or PNG'}/>
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
          <TextArea label={'Have anything else we need to know?'}/>
          <div className="btn-group">
            <Button className={'next-step'} label={'I want my pre-approval'}/>
          </div>
        </div>
      </FormStep>
      <FormStep activeTheme={'green-theme'} stepName={'a-iii-7'}>
        <LastStep>
          <img src={intro_ball_1} alt="flying obj"/>
          <div style={{flexBasis: '20%'}} className="text">
            <h1 className={'form-headline-1 text-left'}>Great news, we’ve got your app!</h1>
            <p className={'form-headline-3 primary'}>You’re almost done… for a quicker turnaround, follow the 4 easy steps below</p>
            <Ol>
              <Li>Login into your <Span.Green>Filogix</Span.Green> Expert account</Li>
              <Li>Select your <Span.White>Client</Span.White> and click <Span.Green>Lender Submit</Span.Green> in the left side panel.</Li>
              <Li>Choose <Span.White>Private</Span.White> under <Span.Green>Lender Type</Span.Green>, <Span.White>Oppono</Span.White> under <Span.Green>Lender</Span.Green>,
                and <Span.White>Electronic</Span.White> under <Span.Green>Submission Method.</Span.Green></Li>
              <Li>Copy your reference number <Span.White>#034933</Span.White> into the <Span.Green>Lender Notes</Span.Green> section then press <Span.Green>Submit.</Span.Green></Li>
            </Ol>
            <div className="btn-group">
              <Button className={'wide'} label={'Connect to Filogix'}/>
              <Link className={'wide bordered'} href={'/dashboard'}>Back to Dashboard</Link>
            </div>
          </div>
        </LastStep>
      </FormStep>
    </Form>
  </div>;
};

export default styled(FourPage)`
width: 100%;
height: 100%;
`;
