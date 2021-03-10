import React from 'react';
import Form from '../../components/form-components/Form';
import Input from '../../components/form-components/Input';
import {styled} from 'frontity';
import {size} from '../../functions/size';
import Select from '../../components/form-components/Select';
import RadioInput from '../../components/form-components/RadioInput';
import RadioGroup from '../../components/form-components/RadioGroup';
import FormStep from '../../components/form-components/FormStep';
import Button from '../../components/form-components/Button';
import FileInput from '../../components/form-components/FileInput';
import W50 from '../../components/form-components/W50';
import TextArea from '../../components/form-components/TextArea';
import FlyingObjsContainer from '../../components/reusable/FlyingObjsContainer';
import intro_ball_1 from '../../assets/images/fly-image-6.png';
import intro_ball_2 from '../../assets/images/fly-image-5.png';
import intro_ball_3 from '../../assets/images/fly-image-4.png';
import intro_ball_4 from '../../assets/images/fly-image-3.png';
import {numberToOrdinal} from '../../functions/numberToOrdinal';
import ProductsTable from '../../components/form-components/ProductsTable';
import FormFilter from '../../components/form-components/FormFilter';
import {Li, Ol} from '../../components/form-components/StyledComponent';

const SecondExample = (props) => {
  
  const [repeating, setRepeating] = React.useState(1);
  const CheckMark = () => <svg className="table-checkmark" viewBox="0 0 18 12">
    <path fill="none" stroke="#d2f5e9" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="20" strokeWidth="2" d="M1 5.167v0L6.895 11 17 1"/>
  </svg>;
  
  return <div className={props.className}>
    <Form setCurrentTheme={setCurrentTheme}>
  
      <FormStep activeTheme={'gray-theme'} stepName={'zero'}>
        <img src={intro_ball_1} alt="flying obj"/>
        <Ol>
          <Li>Login into your Filogix Expert account</Li>
          <Li>Select your Client and click Lender Submit in the left side panel.</Li>
          <Li>Choose Private under Lender Type, Oppono under Lender, and Electronic under Submission Method.</Li>
          <Li>Copy your reference number #034933 into the Lender Notes section then press Submit.</Li>
        </Ol>
      </FormStep>
      <FormStep activeTheme={'gray-theme'} stepName={'first'}>
        <FormFilter type={'oval'} initial={'*'} filters={{'*': 'All', '1st': '1st', '2nd': '2nd'}}>
          <div data-filter="1st">
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
                  <td className={'details'} data-label="LTV">Up to 75%</td>
                  <td className={'details'} data-label="LTV">Up to 75%</td>
                  <td className={'details'} data-label="LTV">Up to 75%</td>
                  <td className={'details'} data-label="LTV">Up to 80%</td>
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
          </div>
          <div data-filter="2nd">
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
                  <td className={'details'} data-label="LTV">Up to 75%</td>
                  <td className={'details'} data-label="LTV">Up to 75%</td>
                  <td className={'details'} data-label="LTV">Up to 75%</td>
                  <td className={'details'} data-label="LTV">Up to 80%</td>
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
          </div>
        </FormFilter>
        <FlyingObjsContainer childrenList={[
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
          <h2 className={'form-headline-2 primary'}>Let’s get you that home equity line of credit!</h2>
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
      <FormStep activeTheme={'gray-theme'} stepName={'second'}>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-left'}>Let’s talk numbers</h1>
        </div>
        <Input type={'text'} placeholder={'eg $780,000'} label={'What is the estimated value of your home?'} required={true}/>
        <RadioGroup radioText={'Do you have an Appraisal Report?'}>
          <RadioInput label={'Yes'} value={'1'} name={'Appraisal'} type={'radio'}/>
          <RadioInput label={'No'} value={'0'} name={'Appraisal'} type={'radio'}/>
        </RadioGroup>
        <RadioGroup radioText={'Do you have any mortgages on your house?'}>
          <RadioInput label={'Yes'} value={'1'} name={'mortgages'} type={'radio'}/>
          <RadioInput label={'No'} value={'0'} name={'mortgages'} type={'radio'}/>
        </RadioGroup>
        <Input type={'text'} placeholder={'eg $380,000'} label={'First mortgage amount'} required={true}/>
  
        <RadioGroup radioText={'Do you have a 2nd mortgage on your house?'}>
          <RadioInput label={'Yes'} value={'1'} name={'house'} type={'radio'}/>
          <RadioInput label={'No'} value={'0'} name={'house'} type={'radio'}/>
        </RadioGroup>
  
        <Input type={'text'} placeholder={'eg $15,000'} label={'2nd mortgage amount'} required={true}/>
  
        <RadioGroup radioText={'Do you have any other outstanding amounts?'}>
          <RadioInput label={'Yes'} value={'1'} name={'outstanding'} type={'radio'}/>
          <RadioInput label={'No'} value={'0'} name={'outstanding'} type={'radio'}/>
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
          <h1 className={'form-headline-2 primary'}>Who are the borrower(s)?</h1>
        </div>
        
        <RadioGroup checked={1} radioText={'How many people are on the title for this mortgage?'}>
          <RadioInput label={'1'} value={1} onChange={() => setRepeating(1)} name={'people'} type={'radio'}/>
          <RadioInput label={'2'} value={2} onChange={() => setRepeating(2)} name={'people'} type={'radio'}/>
          <RadioInput label={'3'} value={3} onChange={() => setRepeating(3)} name={'people'} type={'radio'}/>
          <RadioInput label={'4'} value={4} onChange={() => setRepeating(4)} name={'people'} type={'radio'}/>
        </RadioGroup>
        {
          [...Array(repeating).keys()].map(repeatIndex => <React.Fragment key={`repeating-persons-${repeatIndex}`}>
            <Input type={'text'} placeholder={'eg John Smith'} label={`What’s the ${numberToOrdinal(repeatIndex + 1)} applicant’s name?`} name={`applicant-name-${repeatIndex}`} required={true}/>
            
            <RadioGroup radioText={`What’s the ${numberToOrdinal(repeatIndex + 1)} applicant’s credit score?`}>
              <RadioInput label={'<650'} value={'<650'} name={`applicant-credit-${repeatIndex}`} type={'radio'}/>
              <RadioInput label={'650+'} value={'650+'} name={`applicant-credit-${repeatIndex}`} type={'radio'}/>
              <RadioInput label={'680+'} value={'680+'} name={`applicant-credit-${repeatIndex}`} type={'radio'}/>
            </RadioGroup>
          </React.Fragment>)
        }
        <div className="btn-group">
          <Button className={'bordered prev-step'} label={'Back'}/>
          <Button icon={true} label={'Next'} className={'next-step'}/>
        </div>
      </FormStep>
      <FormStep activeTheme={'gray-theme'} stepName={'fourth'}>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 primary'}>You qualify for a max of</h1>
          <div className={'biggest-number'}><p><sup>$</sup>400,000</p></div>
        </div>
        <FlyingObjsContainer childrenList={
          [
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
        <RadioGroup radioText={'Is this amount you would like to request?'}>
          <RadioInput label={'Yes'} value={'1'} name={'amount'} type={'radio'}/>
          <RadioInput label={'No'} value={'0'} name={'amount'} type={'radio'}/>
        </RadioGroup>
        <Input type={'text'} placeholder={'eg $300,000'} label={'Enter the amount you want'} required={true}/>
  
        <div className="btn-group">
          <Button className={'bordered prev-step'} label={'Back'}/>
          <Button icon={true} label={'Next'} className={'next-step'}/>
        </div>
      </FormStep>
      <FormStep activeTheme={'green-theme'} stepName={'fifth'}>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-left'}>Let’s get this done!<br/>
            Upload your documents.</h1>
        </div>
  
        <RadioGroup radioText={'Do you have an appraisal report?'}>
          <RadioInput label={'Yes'} value={'1'} name={'report'} type={'radio'}/>
          <RadioInput label={'No'} value={'0'} name={'report'} type={'radio'}/>
        </RadioGroup>
  
        <FileInput name='appraisal_report_file' label={'Appraisal report'} acceptText={'PDF, JPG, or PNG'}/>
        <hr/>
        <TextArea label={'Have anything else we need to know?'}/>
  
        <div className="btn-group">
          <Button icon={true} label={'I want my pre-approval'}/>
        </div>
      </FormStep>
    </Form>
  </div>;
};

export default styled(SecondExample)`
width: 100%;
height: 100%;
padding-top: ${size(200)};
`;