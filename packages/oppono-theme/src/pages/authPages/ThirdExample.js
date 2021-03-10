import React from 'react';
import Form from '../../components/form-components/Form';
import Input from '../../components/form-components/Input';
import {styled} from 'frontity';
import RadioInput from '../../components/form-components/RadioInput';
import RadioGroup from '../../components/form-components/RadioGroup';
import FormStep from '../../components/form-components/FormStep';
import Button from '../../components/form-components/Button';
import FileInput from '../../components/form-components/FileInput';
import TextArea from '../../components/form-components/TextArea';
import FlyingObjsContainer from '../../components/reusable/FlyingObjsContainer';
import upload from '../../assets/images/upload.png';
import intro_ball_1 from '../../assets/images/flying-1.png';
import intro_ball_2 from '../../assets/images/flying-2.png';
import last_step from '../../assets/images/last-step.png';
import {Li, Ol, P, Span} from '../../components/form-components/StyledComponent';
import LastStep from '../../components/form-components/LastStep';
import RadioInputVertical from '../../components/form-components/RadioInputVertical';
import Appraiser from '../../components/form-components/Appraiser';
import FormConditionalInput from '../../components/form-components/FormConditionalInput';
import Link from '../../components/reusable/Link';

const ThirdExample = (props) => {
  return <div className={props.className}>
    
    <Form setCurrentTheme={setCurrentTheme}>
      <FormStep activeTheme={'green-theme'} stepName={'Appraiser & upload'}>
        <div className="upload-step-wrapper">
          <img src={upload}/>
          <h1 className={'form-headline-1 text-left'}>Let’s get this done!<br/>
            Upload your documents.</h1>
          <FormConditionalInput label={'Do you have an appraisal report?'} name={'mortgages_1'} showOn={'1'} checked={'0'}>
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
      <FormStep activeTheme={'gray-theme'} stepName={'Appraiser-wide'}>
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
            <Button className={''} label={'Alert this appraiser'}/>
            <Button className={' bordered reset-form'} label={'Back to the Dashboard'}/>
          </div>
        </Appraiser>
      </FormStep>
      <FormStep activeTheme={'green-theme'} stepName={'LastStep'}>
        <LastStep>
          <img src={last_step} alt="flying obj"/>
          <div style={{flexBasis: '45%'}} className="text tablet-center">
            <h1 className={'form-headline-1 primary'}>We’ve emailed your
              selected appraiser!</h1>
            <p className={'form-headline-3 primary'}>They will be in touch shortly.</p>
            <div className="btn-group">
              <Button className={'wide bordered reset-form'} label={'Back to the dashboard'}/>
            </div>
          </div>
        </LastStep>
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
              <Link className={'wide bordered'} href={'/dashboard'}>back to Dashboard</Link>
            </div>
          </div>
        </LastStep>
      
      </FormStep>
      <FormStep activeTheme={'gray-theme'} stepName={'first'}>
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
          <h1 className={'form-headline-1 text-left'}>What are you looking to get?</h1>
          <h2 className={'form-headline-2 primary'}>What is your house value?</h2>
        </div>
        <Input className={'big-input'} type={'text'} value={'$780,000'} placeholder={'$380,000'} required={true}/>
        <Button icon={true} className={'next-step'} label={'Next'}/>
      </FormStep>
      <FormStep activeTheme={'gray-theme'} stepName={'second'}>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-left'}>Just need some info on the borrower(s)</h1>
        </div>
        <RadioGroup radioText={'How many people are on the title for this mortgage?'}>
          <RadioInput label={'1'} value={'1'} name={'people'} type={'radio'}/>
          <RadioInput label={'2'} value={'2'} name={'people'} type={'radio'}/>
          <RadioInput label={'3'} value={'3'} name={'people'} type={'radio'}/>
          <RadioInput label={'4'} value={'4'} name={'people'} type={'radio'}/>
        </RadioGroup>
        
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
        <Button className={'bordered prev-step'} label={'Backs'}/>
      </FormStep>
    </Form>
  </div>;
};

export default styled(ThirdExample)`
width: 100%;
height: 100%;
`;