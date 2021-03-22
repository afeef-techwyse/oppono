import React from 'react';

import {connect, styled} from 'frontity';

import Container from '../components/reusable/Container';
import ProductsFeature from '../components/ProductsFeature';
import featureImg from '../assets/images/product-feature-1.png';
import ProductsPortion from '../components/form-components/ProductsPortion';
import classnames from 'classnames';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {size} from '../functions/size';


const ProductFeaturesContainer = styled.div`
  > div:nth-of-type(even) {
    flex-direction: row-reverse;
  }
`;
const AboutUsPage = ({className, state, actions}) => {
  const data = state.source.get('/about-us/');
  const page = data.isReady && !data.isError ? state.source[data.type][data.id].acf : {};
  
  React.useEffect(() => {
    actions.theme.setActiveTheme('dark-green-theme');
    actions.theme.setSubHeader({});
  }, []);
  return (
    <div className={classnames(className)}>
      <Header/>
      <Container>
        <ProductFeaturesContainer>
          {page.cards.map((card, index) =>
            <ProductsFeature
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.image.url}
              alt={card.image.alt}
            />,
          )}
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