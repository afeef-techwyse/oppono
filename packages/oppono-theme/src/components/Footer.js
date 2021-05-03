import React from "react";
import { styled } from "frontity";
import PropTypes from "prop-types";
import Container from "./reusable/Container";
import { size } from "../functions/size";
import Link from "./reusable/Link";

const FooterRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  opacity: 1;
  transition: opacity 500ms;

	@media (max-width: 450px) {
		width: 100%;
	}

  @media (max-width: 991.98px) {
    margin-left: ${size(-17)};
    margin-right: ${size(-17)};
    flex-wrap: wrap;
  }

  a {
    color: #b5d2ff;
    font-size: ${size(16)};
    font-weight: 500;
    margin-left: ${size(36)};
    display: flex;
    @media (max-width: 991.98px) {
      margin-left: ${size(12)};
      margin-right: ${size(12)};
      margin-top: ${size(17)};
      font-size: ${size(12)};
    }

		@media (max-width: 450px) {
			margin: 0;
		}

    svg {
      margin-left: ${size(6)};
      width: ${size(18)};
      height: ${size(18)};
    }
`;
const Footer = React.forwardRef(({ className }, forwardRef) => {
  return (
    <footer ref={forwardRef} className={className + " footer"}>
      <Container>
        <div className="footer-content">
          <div className="footer-left">
            <div className="guid select">
              <h4 className={"primary"}>Select</h4>
              <svg viewBox="0 0 63 20">
                <path
                  className={"primary-fill"}
                  fill="#b5d2ff"
                  d="M48.409 7.71l.72.77-1.84 1.81h4.55V6.25h1.05v5.11h-5.58l1.82 1.8-.72.75-3.08-3.1zm-10.992-.44v2.17h1.26c1.09 0 1.71-.22 1.71-1.09 0-.95-.75-1.08-1.75-1.08zm1.61 3.17c-.12.01-.25.01-.38.01h-1.23v3.05h-1.27V6.25h2.31c2.13 0 3.23.48 3.23 2.09 0 .93-.45 1.56-1.36 1.87l1.66 3.29h-1.43zm-9.432-4.19h5.13v1.06h-3.86v1.94h3.65v1.05h-3.65v2.13h3.86v1.07h-5.13zm-4.728 1.06h-2.28V6.25h5.83v1.06h-2.28v6.19h-1.27zm-5.161 6.19l-3.07-5.79v5.79h-1.23V6.25h1.7l3.07 5.79V6.25h1.23v7.25zM8.854 6.25h5.13v1.06h-3.86v1.94h3.65v1.05h-3.65v2.13h3.86v1.07h-5.13z"
                />
                <path
                  className={"primary-stroke"}
                  fill="none"
                  stroke="#b5d2ff"
                  strokeMiterlimit="20"
                  strokeOpacity=".4"
                  d="M2.124 19a1.5 1.5 0 0 1-1.5-1.5v-15a1.5 1.5 0 0 1 1.5-1.5h58a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1-1.5 1.5z"
                />
              </svg>
            </div>
            <div className="guid nav">
              <h4 className={"primary"}>Nav</h4>
              <svg viewBox="0 0 54 20">
                <path
                  className={"primary-fill"}
                  fill="#b5d2ff"
                  d="M8.194 10.81l3.09 3.1.72-.75-1.83-1.8h5.58v-1.07h-5.6l1.85-1.81-.72-.77z"
                />
                <path
                  className={"primary-stroke"}
                  fill="none"
                  stroke="#b5d2ff"
                  strokeMiterlimit="20"
                  strokeOpacity=".4"
                  d="M2.124 19a1.5 1.5 0 0 1-1.5-1.5v-15a1.5 1.5 0 0 1 1.5-1.5h20a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1-1.5 1.5z"
                />
                <path
                  className={"primary-fill"}
                  fill="#b5d2ff"
                  d="M41.954 7.71l-.72.77 1.84 1.81h-5.6v1.07h5.57l-1.81 1.8.72.75 3.08-3.1z"
                />
                <path
                  className={"primary-stroke"}
                  fill="none"
                  stroke="#b5d2ff"
                  strokeMiterlimit="20"
                  strokeOpacity=".4"
                  d="M31.124 19a1.5 1.5 0 0 1-1.5-1.5v-15a1.5 1.5 0 0 1 1.5-1.5h20a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1-1.5 1.5z"
                />
              </svg>
            </div>
          </div>
          <FooterRight className={"footer-right"}>
            <Link className={"primary"} href="/terms/">
              Terms & Conditions
            </Link>
            <Link className={"primary"} href="/privacy-policy/">
              Privacy Policy
            </Link>
            <Link className={"primary"} href="/get-in-touch/">
              Get In Touch
            </Link>
            {/*<Link className={'primary'} href="tel:19058865352">Call us</Link>*/}
          </FooterRight>
        </div>
      </Container>
    </footer>
  );
});

Footer.propTypes = {
  className: PropTypes.string,
};

export default styled(Footer)`
  position: fixed !important;
  bottom: 0;
  padding-bottom: ${size(10)};
  width: 100%;
  z-index: 100;
  @media (max-width: 991.98px) {
    padding-top: ${size(15)};
    padding-bottom: ${size(15)};
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 991.98px) {
      justify-content: center;
    }

    .footer-left {
      display: flex;
      @media (max-width: 991.98px) {
        display: none;
      }

      .guid {
        display: flex;

        &:first-of-type {
          margin-right: ${size(38)};
        }

        &.select {
          svg {
            width: ${size(63)};
            height: ${size(20)};
          }
        }

        &.nav {
          svg {
            width: ${size(54)};
            height: ${size(20)};
          }
        }

        h4 {
          color: #b5d2ff;
          opacity: 0.7;
          font-size: ${size(16)};
          font-weight: 500;
          margin-right: ${size(18)};
        }
      }
    }
  }
`;
