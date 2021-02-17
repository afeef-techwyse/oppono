import React from 'react';

import {connect, styled} from 'frontity';

import Container from '../reusable/Container';
import ProductsFeature from '../ProductsFeature';
import featureImg from '../../assets/images/product-feature-1.png';
import ProductsPortion from './ProductsPortion';
import classnames from 'classnames';
import Footer from '../Footer';
import Header from '../Header';
import {size} from '../../functions/size';


const ProductFeaturesContainer = styled.div`
  > div:nth-of-type(even) {
    flex-direction: row-reverse;
  }
`;
const AboutUsPage = ({className, state, actions}) => {
  const data = state.source.get(state.router.link);
  React.useEffect(() => {
    actions.theme.setSubHeader({});
  }, []);
  return (
    <div className={classnames(className, 'dark-green-theme')}>
      <Header/>
      <Container>
        <ProductFeaturesContainer>
          <ProductsFeature
            title={'No beacon score asked, no income verification.'}
            description={'Our common-sense approach to lending means our decisions are not based on a set of nonnegotiable criteria. Instead, we look at the borrowers’ unique situation and measure their ability to meet their obligations, accompanied by an appropriate loan-to-value ratio. If the investment makes sense, we will fund it!'}
            imageUrl={featureImg}
            alt={'feature-image'}
          />
          <ProductsFeature
            title={'No beacon score asked, no income verification.'}
            description={'Our common-sense approach to lending means our decisions are not based on a set of nonnegotiable criteria. Instead, we look at the borrowers’ unique situation and measure their ability to meet their obligations, accompanied by an appropriate loan-to-value ratio. If the investment makes sense, we will fund it!'}
            imageUrl={featureImg}
            alt={'feature-image'}
          />
          <ProductsFeature
            title={'No beacon score asked, no income verification.'}
            description={'Our common-sense approach to lending means our decisions are not based on a set of nonnegotiable criteria. Instead, we look at the borrowers’ unique situation and measure their ability to meet their obligations, accompanied by an appropriate loan-to-value ratio. If the investment makes sense, we will fund it!'}
            imageUrl={featureImg}
            alt={'feature-image'}
          />
          <ProductsFeature
            title={'No beacon score asked, no income verification.'}
            description={'Our common-sense approach to lending means our decisions are not based on a set of nonnegotiable criteria. Instead, we look at the borrowers’ unique situation and measure their ability to meet their obligations, accompanied by an appropriate loan-to-value ratio. If the investment makes sense, we will fund it!'}
            imageUrl={featureImg}
            alt={'feature-image'}
          />
        </ProductFeaturesContainer>
        <ProductsPortion/>
      </Container>
      <Footer/>
    </div>
  
  );
};
export default styled(connect(AboutUsPage))`
  ${ProductFeaturesContainer} {
    overflow: hidden;
    padding-top: ${size(80)};
  }
`;