import React from 'react';
import {styled} from 'frontity';
import PropTypes from 'prop-types';
import Container from './reusable/Container';
import {size} from '../functions/size';
import Link from './reusable/Link';

const FooterRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  opacity: 1;
  transition: opacity 500ms;

  @media (max-width: 991.98px) {
    margin-left: ${size(-17)};
    margin-right: ${size(-17)};
  }

  a {
    color: #b5d2ff;
    font-size: ${size(16)};
    font-weight: 500;
    margin-left: ${size(36)};
    display: flex;
    @media (max-width: 991.98px) {
      margin-left: ${size(17)};
      margin-right: ${size(17)};
      margin-top: ${size(17)};
      font-size: ${size(14)};
    }

    svg {
      margin-left: ${size(6)};
      width: ${size(18)};
      height: ${size(18)};
    }
`;
const Footer = React.forwardRef(({className}, forwardRef) => {
  return (
    <footer ref={forwardRef} className={className + ' footer'}>
      <Container>
        <div className="footer-content">
          <div className="footer-left">
            <div className="guid select">
              <h4 className={'primary'}>Select</h4>
              <svg viewBox="0 0 63 20">
                <path className={'primary-fill'} fill="#b5d2ff"
                      d="M48.409 7.71l.72.77-1.84 1.81h4.55V6.25h1.05v5.11h-5.58l1.82 1.8-.72.75-3.08-3.1zm-10.992-.44v2.17h1.26c1.09 0 1.71-.22 1.71-1.09 0-.95-.75-1.08-1.75-1.08zm1.61 3.17c-.12.01-.25.01-.38.01h-1.23v3.05h-1.27V6.25h2.31c2.13 0 3.23.48 3.23 2.09 0 .93-.45 1.56-1.36 1.87l1.66 3.29h-1.43zm-9.432-4.19h5.13v1.06h-3.86v1.94h3.65v1.05h-3.65v2.13h3.86v1.07h-5.13zm-4.728 1.06h-2.28V6.25h5.83v1.06h-2.28v6.19h-1.27zm-5.161 6.19l-3.07-5.79v5.79h-1.23V6.25h1.7l3.07 5.79V6.25h1.23v7.25zM8.854 6.25h5.13v1.06h-3.86v1.94h3.65v1.05h-3.65v2.13h3.86v1.07h-5.13z"/>
                <path className={'primary-stroke'} fill="none" stroke="#b5d2ff" strokeMiterlimit="20" strokeOpacity=".4"
                      d="M2.124 19a1.5 1.5 0 0 1-1.5-1.5v-15a1.5 1.5 0 0 1 1.5-1.5h58a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1-1.5 1.5z"/>
              </svg>
            </div>
            <div className="guid nav">
              <h4 className={'primary'}>Nav</h4>
              <svg viewBox="0 0 54 20">
                <path className={'primary-fill'} fill="#b5d2ff" d="M8.194 10.81l3.09 3.1.72-.75-1.83-1.8h5.58v-1.07h-5.6l1.85-1.81-.72-.77z"/>
                <path className={'primary-stroke'} fill="none" stroke="#b5d2ff" strokeMiterlimit="20" strokeOpacity=".4"
                      d="M2.124 19a1.5 1.5 0 0 1-1.5-1.5v-15a1.5 1.5 0 0 1 1.5-1.5h20a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1-1.5 1.5z"/>
                <path className={'primary-fill'} fill="#b5d2ff" d="M41.954 7.71l-.72.77 1.84 1.81h-5.6v1.07h5.57l-1.81 1.8.72.75 3.08-3.1z"/>
                <path className={'primary-stroke'} fill="none" stroke="#b5d2ff" strokeMiterlimit="20" strokeOpacity=".4"
                      d="M31.124 19a1.5 1.5 0 0 1-1.5-1.5v-15a1.5 1.5 0 0 1 1.5-1.5h20a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1-1.5 1.5z"/>
              </svg>
            </div>
          </div>
          <FooterRight className={'footer-right'}>
            <Link className={'primary'} href="/contacts/">Contact us</Link>
            <Link className={'primary'} href="tel:19058865352">Call us</Link>
            <Link className={'primary primary-fill'} href="/contact/chat/">Chat with us
              <svg viewBox="0 0 12 12">
                <path className={'primary-fill'} fill="#b5d2ff"
                      d="M7.2 0H4.8c-.87 0-1.68.23-2.42.68A4.76 4.76 0 0 0 .66 2.44C.22 3.2 0 4.03 0 4.92c0 .9.22 1.73.66 2.49.42.74 1 1.32 1.72 1.76.74.45 1.55.68 2.42.68V12c.99-.41 1.79-.76 2.39-1.06.92-.47 1.7-.95 2.34-1.44.77-.61 1.35-1.26 1.76-1.96.47-.8.71-1.67.71-2.62 0-.89-.22-1.72-.66-2.48-.42-.74-1-1.33-1.72-1.76C8.88.23 8.07 0 7.2 0z"/>
              </svg>
            </Link>
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
  position: fixed;
  bottom: ${size(10)};
  width: 100%;
  @media (max-width: 991.98px) {
    bottom: ${size(24)};
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
          opacity: .7;
          font-size: ${size(16)};
          font-weight: 500;
          margin-right: ${size(18)};
        }
      }
    }
  }
`;