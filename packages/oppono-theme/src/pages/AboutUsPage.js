import React from "react";

import { connect, styled } from "frontity";

import Container from "../components/reusable/Container";
import ProductsFeature from "../components/ProductsFeature";
import featureImg from "../assets/images/product-feature-1.png";
import ProductsPortion from "../components/form-components/ProductsPortion";
import classnames from "classnames";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { size } from "../functions/size";

const ProductFeaturesContainer = styled.div`
  > div:nth-of-type(even) {
    flex-direction: row-reverse;
  }
`;
const AboutUsPage = ({ className, libraries, state, actions }) => {
  const data = state.source.get("/what-we-do/");
  const page =
    data.isReady && !data.isError ? state.source[data.type][data.id].acf : {};
  const Html2React = libraries.html2react.Component;
  React.useEffect(() => {
    actions.theme.setActiveTheme("dark-green-theme");
    actions.theme.setSubHeader({});
  }, []);
  return (
    <div className={classnames(className)}>
      <Header />
      <Container className={"about-page-wrapper"}>
        <h1 className={"form-headline-1"}>{page.title}</h1>
        <div className="html2react">
          <Html2React html={page.copy_top} />
        </div>
        <ProductFeaturesContainer>
          {page.cards.map((card, index) => (
            <ProductsFeature
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.image.url}
              alt={card.image.alt}
            />
          ))}
        </ProductFeaturesContainer>
        <div className="html2react bottom-copy">
          <Html2React html={page.copy_bottom} />
        </div>
        <ProductsPortion />
      </Container>
      <Footer />
    </div>
  );
};
export default styled(connect(AboutUsPage))`
  .about-page-wrapper {
    padding-top: ${size(130)};

    h1 {
      text-align: center;
			color: #d2f5e9!important;
			padding-botom: 1rem;
			font-weight: 300;
    line-height: 9.5rem;
    font-size: 8rem;
    max-width: 80rem;
    margin: auto;
    }

    .html2react {
      margin-top: 1rem;
      color: rgba(210, 245, 233, 0.6);
      font-size: ${size(18)};
      font-weight: 300;
      line-height: ${size(25)};
      text-align: left;
      padding: 0 ${size(55)};
      @media (max-width: 991.98px) {
        font-size: ${size(16)};
      }
      @media (max-width: 768px) {
        padding: 0;
      }
      @media (max-width: 575.98px) {
        font-size: ${size(15)};
      }
      &.bottom-copy {
        margin-bottom: ${size(150)};
      }

      > p {
        margin-bottom: 1rem;
				line-height: 1.5;
        @media (max-width: 575.98px) {
          font-size: 1.5rem;
        }
      }
    }
  }
  ${ProductFeaturesContainer} {
    overflow: hidden;
  }
`;
