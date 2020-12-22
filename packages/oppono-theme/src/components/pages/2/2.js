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
import Header from '../../Header';
import Footer from '../../Footer';
import ProductsSlider from '../../form-components/ProductsSlider';

const TwoPage = (props) => {
  return<>
    <Header />
  <div className={props.className}>
    <ProductsSlider active={true}/>
  </div>
    <Footer />
    </>
    ;
};

export default styled(TwoPage)`
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