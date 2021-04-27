import React from 'react';
import Form from '../../components/form-components/Form';
import {connect, styled} from 'frontity';
import CheckMark from "../../components/reusable/CheckMark";
import {monthlyPayments} from "../../functions/monthlyPayment";
import {productTypeToFullName} from "../../functions/productTypeToFullName";
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
import AppraiserInput from '../../components/AppraiserInput';


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
  const [[appraiser], postalCodeOnChange] = useFlowAppraisers();
  const selectedProduct = React.useRef('');
  const maxMortgage = React.useRef('');
  
  const [productsTable, productsFilter] = useProductsTable(state.theme.stepResponse);
  const mortgage = ((+section2Values('mortgage_value_1') || 0) + (+section2Values('mortgage_value_2') || 0) + (+section2Values('outstanding_amount_value')) + (+section2Values('sm_amount')) + (+section2Values('fm_amount')) || 0) || 0;
    const  refNumber = React.useRef('');
  state.theme.stepResponse.data?.['reference-number']&&(refNumber.current=state.theme.stepResponse.data?.['reference-number'])
  return <div className={className}>
    <Form setCurrentTheme={setCurrentTheme} endPoint={'/refinance'}>

      <FormStep apiStepNumber={5} pageName={pageName} activeTheme={formData.section_6?.section_theme} stepName={formData.section_6?.section_name}>
        <div className="upload-step-wrapper">
          <img src={upload}/>
          <h1 className={'form-headline-1 text-left'}>{formData.section_6?.title}</h1>
          <FormConditionalInput noScroll name={'mortgages_1'} showOn={'1'} checked={'0'} {...formData.section_6?.have_appraisal_report_yes_no}>
            <FileInput name='appraisal_report_file' label={formData.section_6?.appraisal_report_upload_label} acceptText={'PDF, JPG, or PNG'}/>
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
          <TextArea name={'additional_notes'} {...formData.section_6?.additional_notes_input}/>
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
            <Wysiwyg dangerouslySetInnerHTML={{__html: formData.section_7?.steps.replace('{{number}}', refNumber.current)}}/>
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