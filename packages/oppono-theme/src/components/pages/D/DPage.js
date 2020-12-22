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
import Link from '../../reusable/Link';

const DPage = (props) => {
  const media = useMedia();
  const CheckMark = () => <svg className="table-checkmark" viewBox="0 0 18 12">
    <path fill="none" stroke="#d2f5e9" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="20" strokeWidth="2" d="M1 5.167v0L6.895 11 17 1"/>
  </svg>;
  return <div className={props.className}>
    <Form>
      <FormStep activeTheme={'gray-theme'} stepName={'c-4'}>
        <div className="form-text-wrapper">
          <h1 className={'form-headline-1 text-left'}>These are the products you qualify for!</h1>
        </div>
        {media !== 'mobile'
          ?
          <FormFilter className={'form-wide-container'} type={'rect'} filters={{'*': 'All', 'first-mortgage': '1st', 'second-mortgage': '2nd', 'heloc': 'HELOC', 'beloc': 'BELOC'}}>
            
            <ProductsTable dataFilter={'first-mortgage'}>
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
                  <P.Dark>*refinance a house</P.Dark>
                  <p>$400,000 max</p>
                  <p>$2,200 / month</p>
                  <p className={'number'}>5.74%</p>
                  <Link href={'/d/'} onClick={() => 'to be changed with the selected option'}><Button focusable={false} className={'small next-step'} label={'I want this deal'}/></Link>
                </th>
                <th scope={'col'}>
                  <P.Dark>*purchase the house</P.Dark>
                  <p>$400,000 max</p>
                  <p>$2,325 / month</p>
                  <p className={'number'}>6.24%</p>
                  <Link href={'/d/'} onClick={() => 'to be changed with the selected option'}><Button focusable={false} className={'small bordered next-step'} label={'I want this deal'}/></Link>
                </th>
                <th scope={'col'}>
                  <P.Dark>*home equity line of cridet</P.Dark>
                  <p>$8,325 / month</p>
                  <p className={'number'}>7.24%</p>
                  <Link href={'/d/'} onClick={() => 'to be changed with the selected option'}><Button focusable={false} className={'small bordered next-step'} label={'I want this deal'}/></Link>
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
            <ProductsTable dataFilter={'second-mortgage'}>
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
                  <Link href={'/d/'} onClick={() => 'to be changed with the selected option'}><Button focusable={false} className={'small next-step'} label={'I want this deal'}/></Link>
                </th>
                <th scope={'col'}>
                  <p>$2,325 / month</p>
                  <p className={'number'}>11.99%</p>
                  <Link href={'/d/'} onClick={() => 'to be changed with the selected option'}><Button focusable={false} className={'small bordered next-step'} label={'I want this deal'}/></Link>
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
            <ProductsTable dataFilter={'heloc'}>
              <thead>
              <tr>
                <th scope={'col'}>
                  <p className={'circle'}>3</p>
                  <p>HELOC products</p>
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
                  <p>$2,325 / month</p>
                  <p className={'number'}>11.99%</p>
                  <Link href={'/d/'} onClick={() => 'to be changed with the selected option'}><Button focusable={false} className={'small bordered next-step'} label={'I want this deal'}/></Link>
                </th>
              </tr>
              </thead>
              <tbody>
              <tr className={'head'}>
                <td scope={'row'} className={'dark'}>Fixed Rate</td>
                <td className={'details'} data-label="Fixed Rate">5.99%</td>
              </tr>
              <tr className={'head'}>
                <td scope={'row'} className={'dark'}>Lender Fee</td>
                <td className={'details'} data-label="Lender Fee">2.49%</td>
              </tr>
              <tr className={'head last-head'}>
                <td scope={'row'} className={'dark'}>LTV</td>
                <td className={'details'} data-label="Dark">75%</td>
              </tr>
              
              <tr>
                <td scope={'row'}>Home must be fully Owner Occupied</td>
                <td><CheckMark/></td>
              </tr>
              <tr>
                <td scope={'row'}>Purchase or refinance</td>
                <td><CheckMark/></td>
              </tr>
              <tr>
                <td scope={'row'}>P&I 25 year amortization</td>
                <td><CheckMark/></td>
              </tr>
              <tr>
                <td scope={'row'}>6 months term open available & interest only available</td>
                <td><CheckMark/></td>
              </tr>
              <tr>
                <td scope={'row'}>No income verification</td>
                <td><CheckMark/></td>
              </tr>
              <tr>
                <td scope={'row'}>Mortgage over $1 MM available</td>
                <td><CheckMark/></td>
              </tr>
              <tr>
                <td scope={'row'}>Owner occupied non compulsory</td>
                <td><CheckMark/></td>
              </tr>
              </tbody>
            </ProductsTable>
            <ProductsTable dataFilter={'beloc'}>
              <thead>
              <tr>
                <th scope={'col'}>
                  <p className={'circle'}>4</p>
                  <p>BELOC products</p>
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
                  <p>$2,325 / month</p>
                  <p className={'number'}>11.99%</p>
                  <Link href={'/d/'} onClick={() => 'to be changed with the selected option'}><Button focusable={false} className={'small bordered next-step'} label={'I want this deal'}/></Link>
                </th>
              </tr>
              </thead>
              <tbody>
              <tr className={'head'}>
                <td scope={'row'} className={'dark'}>Fixed Rate</td>
                <td className={'details'} data-label="Fixed Rate">5.99%</td>
              </tr>
              <tr className={'head'}>
                <td scope={'row'} className={'dark'}>Lender Fee</td>
                <td className={'details'} data-label="Lender Fee">2.49%</td>
              </tr>
              <tr className={'head last-head'}>
                <td scope={'row'} className={'dark'}>LTV</td>
                <td className={'details'} data-label="Dark">75%</td>
              </tr>
              
              <tr>
                <td scope={'row'}>Home must be fully Owner Occupied</td>
                <td><CheckMark/></td>
              </tr>
              <tr>
                <td scope={'row'}>Purchase or refinance</td>
                <td><CheckMark/></td>
              </tr>
              <tr>
                <td scope={'row'}>P&I 25 year amortization</td>
                <td><CheckMark/></td>
              </tr>
              <tr>
                <td scope={'row'}>6 months term open available & interest only available</td>
                <td><CheckMark/></td>
              </tr>
              <tr>
                <td scope={'row'}>No income verification</td>
                <td><CheckMark/></td>
              </tr>
              <tr>
                <td scope={'row'}>Mortgage over $1 MM available</td>
                <td><CheckMark/></td>
              </tr>
              <tr>
                <td scope={'row'}>Owner occupied non compulsory</td>
                <td><CheckMark/></td>
              </tr>
              </tbody>
            </ProductsTable>
          </FormFilter>
          : null
        }
        {media === 'mobile'
          ? <div className="mortgage-options-mobile">
            <FormFilter filters={{'*': 'All', 'first-mortgage': 'First Mortgage', 'second-mortgage': 'Second Mortgage', 'heloc': 'HELOC', 'beloc': 'BELOC'}}>
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
                    <Link href={'/d/'} onClick={() => 'to be changed with the selected option'}><Button focusable={false} className={'small next-step'} label={'I want this deal'}/></Link>
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
                    <Link href={'/d/'} onClick={() => 'to be changed with the selected option'}><Button focusable={false} className={'small next-step'} label={'I want this deal'}/></Link>
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
                    <Link href={'/d/'} onClick={() => 'to be changed with the selected option'}><Button focusable={false} className={'small next-step'} label={'I want this deal'}/></Link>
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
                    <Link href={'/d/'} onClick={() => 'to be changed with the selected option'}><Button focusable={false} className={'small next-step'} label={'I want this deal'}/></Link>
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
              <div data-filter={'heloc'}>
                <ProductsMobileOption>
                  <div className="mortgage-title">
                    <p className={'circle'}>2</p>
                    <p>Second mortgage options</p>
                    <p className={'dark'}>Variable rates</p>
                  </div>
                  <div className="mortgage-head">
                    <p className={'number'}>7.99%</p>
                    <p>$2,200 / month</p>
                    <Link href={'/d/'} onClick={() => 'to be changed with the selected option'}><Button focusable={false} className={'small next-step'} label={'I want this deal'}/></Link>
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
              <div data-filter={'beloc'}>
                <ProductsMobileOption>
                  <div className="mortgage-title">
                    <p className={'circle'}>2</p>
                    <p>Second mortgage options</p>
                    <p className={'dark'}>Variable rates</p>
                  </div>
                  <div className="mortgage-head">
                    <p className={'number'}>7.99%</p>
                    <p>$2,200 / month</p>
                    <Link href={'/d/'} onClick={() => 'to be changed with the selected option'}><Button focusable={false} className={'small next-step'} label={'I want this deal'}/></Link>
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
          : null
        }
      </FormStep>
    </Form>
  </div>;
};

export default styled(DPage)`
width: 100%;
height: 100%;
`;