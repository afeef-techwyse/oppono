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
import MegaloNum_1 from '../../../assets/images/flying-1.png';
import MegaloNum_2 from '../../../assets/images/last-step.png';
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
import Link from '../../reusable/Link';
import MegaloNum from '../../form-components/MegaloNum';

const ThreePage = (props) => {
  const media = useMedia();
  const [repeating, setRepeating] = React.useState(1);
  const CheckMark = () => <svg className="table-checkmark" viewBox="0 0 18 12">
    <path fill="none" stroke="#d2f5e9" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="20" strokeWidth="2" d="M1 5.167v0L6.895 11 17 1"/>
  </svg>;
  return <div className={props.className}>
    <Form>
      <FormStep activeTheme={'gray-theme'} stepName={'3-1'}>
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
          <h1 className={'form-headline-1 text-left'}># Easy Questions and You’re Done</h1>
          <h2 className={'form-headline-2'}>What is your house value?</h2>
        </div>
        <Input className={'big-input'} type={'text'} value={'$780,000'} placeholder={'$780,000'} required={true}/>
        <Button icon={true} className={'next-step wide'} label={'Next'}/>
      </FormStep>
      <FormStep activeTheme={'gray-theme'} stepName={'3-2'}>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-left'}>Just one more thing…</h1>
          <h1 className={'form-headline-2'}>Who are the borrower(s)?</h1>
        </div>
        <FormRepeatableInput question={'How many people are on the title for this mortgage?'} number={4} initial={1} name={'people'}>
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
      <FormStep activeTheme={'gray-theme'} stepName={'3-3'}>
        <div className="form-text-wrapper wide-text">
          <h1 className={'form-headline-1 text-left'}>Here’s what we can cover.</h1>
          <h2 className={'form-headline-3'}>Terms and conditions, apply to all rates & products.</h2>
        </div>
    
        {media !== 'mobile'
          ? <>
            <ProductsTable>
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
                <td className={'details'} data-label="Dark">75%</td>
                <td className={'details'} data-label="Dark">75%</td>
                <td className={'details'} data-label="Dark">75%</td>
              </tr>
              </tbody>
            </ProductsTable>
          </>
          : null
        }
        {media === 'mobile'
          ? <div className="mortgage-options-mobile">
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
          : null
        }
      </FormStep>
      <FormStep activeTheme={'green-theme'} stepName={'d-1.5'}>
        <MegaloNum>
          <h1 className={'form-headline-1'}>Here’s your selected product</h1>
          <p className={'number'}>5.74</p>
        </MegaloNum>
        <FlyingObjsContainer childrenList={
          [
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
          <Link href={'/d/'}><Button focusable={false} className={'next-step wide-vertical'} label={'I want this deal'}/></Link>
          <Link href={'/form/d/'}><Button focusable={false} className={'next-step bordered wide-vertical'} label={'No, let’s see the full list'}/></Link>
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

export default styled(ThreePage)`
width: 100%;
height: 100%;
${Finalize}.mt-0{
  margin-top: 0;
  ${Bottom}{
  @media(max-width: 575.98px){
      margin-top: ${size(20)};
    }
  }
}
.btn-group.megalonum{
  button{
    margin-top: 0;
    @media(max-width: 575.98px){
      margin-bottom: ${size(20)};
    }
  }
}
`;