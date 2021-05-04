import React from "react";
import { connect, styled } from "frontity";
import PropTypes from "prop-types";
import classnames from "classnames";
import Container from "./reusable/Container";
import { size } from "../functions/size";
import mobileLogo from "../assets/images/mobile-logo.png";
import Link from "./reusable/Link";
import Button from "./form-components/Button";
import {
  allowPageScroll,
  preventPageScroll,
} from "../functions/prevent_allowPageScroll";
import StepsProgress from "./form-components/StepsProgress";

const SubHeader = styled(
  connect(({ state, className }) => {
    return (
      <div className={classnames(className, "sub-menu")}>
        <p className={"back"}>
          <svg viewBox="0 0 6 8">
            <path
              fill="none"
              className={"primary-stroke"}
              stroke="#b5d2ff"
              strokeMiterlimit="20"
              d="M3 8V0"
            />
            <path
              fill="none"
              className={"primary-stroke"}
              stroke="#b5d2ff"
              strokeMiterlimit="20"
              d="M6 3v0L3 0 0 3"
            />
          </svg>
          <Link className={"primary"} href={"/"}>
            Back To Dashboard
          </Link>
        </p>

        <div>
          <p className={"first-title primary"}>
            {state.theme.subHeader.part_1}
          </p>
          <p className={"second-title primary"}>
            {state.theme.subHeader.part_2}
          </p>
        </div>
      </div>
    );
  })
)`
  width: 100%;
  border-top: 1px solid rgba(191, 182, 180, 0.1);
  display: flex;
  padding-bottom: 10px;
  padding-top: ${size(15)};
  @media (max-width: 575.98px) {
    justify-content: space-between;
    padding-top: ${size(10)};
  }

  .back {
    margin-right: ${size(160)};
    display: inline-block;
    @media (max-width: 575.98px) {
      margin-right: 0;
    }

    a {
      opacity: 0.5;
      font-size: ${size(12)};
      font-weight: 500;
      line-height: ${size(16)};
    }

    svg {
      width: ${size(6)};
      height: ${size(8)};
      margin-right: ${size(12)};
      @media (max-width: 575.98px) {
        margin-right: ${size(8)};
      }
    }
  }

  .first-title {
    font-size: ${size(12)};
    font-weight: 500;
    line-height: ${size(16)};
    opacity: 0.5;
  }

  .second-title {
    font-size: ${size(10)};
    font-weight: 500;
    line-height: ${size(16)};
    margin-top: ${size(2)};
    letter-spacing: ${size(0.44)};
  }
`;

const RightPart = connect(({ state, actions }) =>
  state.theme.user.logged ? (
    <>
      <Link
        onClick={() => actions.theme.removeUser()}
        className={"links primary"}
        href={"/"}
      >
        Log Out
      </Link>
    </>
  ) : (
    <>
      <Link className={"signup-btn"} href={"/create-account/"}>
        <Button
          className={"primary-border primary"}
          focusable={false}
          label={"Sign up"}
        />
      </Link>
    </>
  )
);
const LogoLink = connect(({ state }) =>
  state.theme.user.logged ? (
    <Link href={"/dashboard"}>
      <svg className={"logo"} viewBox="0 0 4302.4 813">
        <path d="M998.2,502.9c0-144.9,111.9-252,263.8-252c151.8,0,263.8,106.4,263.8,252s-111.9,252-263.8,252   C1110.1,754.9,998.2,647.8,998.2,502.9 M1434,502.9c0-100.1-73.5-172.2-172.1-172.2c-98.7,0-172.1,72.1-172.1,172.2   s73.5,172.2,172.1,172.2C1360.6,675.1,1434,603,1434,502.9" />
        <path d="M2032.2,432.2c0,107.8-79.8,174.3-208.5,174.3h-110.5v141.4h-91v-490h201.5   C1952.5,257.9,2032.2,323.7,2032.2,432.2 M1940.6,432.2c0-61.6-41.3-97.3-121-97.3h-106.3v194.6h106.3   C1899.3,529.5,1940.6,493.8,1940.6,432.2" />
        <path d="M2533.2,432.2c0,107.8-79.8,174.3-208.5,174.3h-110.5v141.4h-91v-490h201.5   C2453.4,257.9,2533.2,323.7,2533.2,432.2 M2441.5,432.2c0-61.6-41.3-97.3-121-97.3h-106.3v194.6h106.3   C2400.3,529.5,2441.5,493.8,2441.5,432.2" />
        <path d="M2596.2,502.9c0-144.9,111.9-252,263.8-252c151.8,0,263.8,106.4,263.8,252s-111.9,252-263.8,252   C2708.1,754.9,2596.2,647.8,2596.2,502.9 M3032.1,502.9c0-100.1-73.5-172.2-172.1-172.2c-98.7,0-172.1,72.1-172.1,172.2   s73.5,172.2,172.1,172.2C2958.6,675.1,3032.1,603,3032.1,502.9" />
        <polygon points="3655.4,257.9 3655.4,747.9 3580.6,747.9 3310.5,416.1 3310.5,747.9 3220.3,747.9 3220.3,257.9    3295.1,257.9 3565.2,589.7 3565.2,257.9  " />
        <path d="M3752,502.9c0-144.9,111.9-252,263.8-252c151.8,0,263.8,106.4,263.8,252s-111.9,252-263.8,252   C3863.9,754.9,3752,647.8,3752,502.9 M4187.9,502.9c0-100.1-73.5-172.2-172.1-172.2c-98.7,0-172.1,72.1-172.1,172.2   s73.5,172.2,172.1,172.2C4114.4,675.1,4187.9,603,4187.9,502.9" />
        <path
          fill={"#EEEEEE"}
          d="M371,812.9c-4.2-7.2-3.9-7.8,3.1-13.1c20-15,39.9-30.2,59.8-45.3c20.6-15.6,41.2-31.2,61.9-46.8   c2.9-2.2,6.2-2.9,9.8-2.9c56.8,0.1,113.6,0.2,170.4-0.1c18.3-0.1,33.8-12.3,36.1-32.4c0.7-6.3,0.8-12.6,0.8-18.9   c0-69.1,0.4-138.3-0.2-207.4c-0.1-18.3,0.1-36.6-1-54.8c-0.8-14.3-7.6-26.3-19-35.4c-17.2-13.8-34.4-27.5-51.7-41.2   c-15.3-12.1-30.8-24.1-46.1-36.2c-18.8-14.7-37.5-29.5-56.2-44.2c-31-24.4-62-48.7-93-73.1c-5.9-4.6-11.3-9.7-18-13.3   c-15.5-8.4-30.4-6.3-43.9,4c-28.6,22-56.8,44.6-85.2,66.9c-19.4,15.2-38.9,30.3-58.3,45.6c-21.6,17-43,34.2-64.6,51.3   c-15.4,12.2-31,24.3-46.4,36.7c-12.5,10-19.6,23.3-22.2,38.9c-1.8,11-2.1,22.1-2.1,33.2c0,125.6,0,251.2,0,376.8c0,4,0.3,8-2,11.5   h-32c-0.3-2.5-2.3-2-3.8-2c-15.8,0-31.5,0-47.3,0c-1.6,0-3.5-0.5-3.9,2h-13c-0.1-1.9-1.1-2.9-3-3V321c3.3-1.1,3.8-4.7,6.1-6.8   c11.3-10.3,23.9-18.9,35.8-28.4c28.4-22.7,57.3-44.9,86-67.3c19.8-15.5,39.7-31,59.5-46.5c13.7-10.7,27.4-21.4,41.1-32.1   c19.9-15.6,39.8-31.3,59.7-47c14.6-11.5,29.2-22.9,43.7-34.4c20-15.8,40.1-31.5,60-47.5c4.5-3.6,10.4-6,12.9-11.9h8   c0,1.9,1.3,3,2.6,4c4.9,3.9,9.9,7.8,14.8,11.7c18.1,14.2,36.2,28.4,54.3,42.6c19.6,15.5,39.2,31,58.9,46.5   c14.3,11.2,28.8,22.3,43.1,33.5c19.9,15.6,39.8,31.3,59.7,47c15.8,12.4,31.5,24.7,47.3,37.1c18.2,14.3,36.5,28.6,54.7,42.9   c15.9,12.5,31.8,24.9,47.7,37.4c7.4,5.9,15.5,11,21.8,18.3v490.9c-1.5,0-2.9,0-3,2H371z"
        />
        <path
          fill={"#FCFCFC"}
          d="M16.1,812.9c0.4-2.5,2.3-2,3.9-2c15.8,0,31.5,0,47.3,0c1.6,0,3.5-0.5,3.8,2H16.1z"
        />
        <path
          fill={"#FCFCFC"}
          d="M0.1,809.9c1.9,0.1,2.9,1.1,3,3C0.6,813.4-0.4,812.4,0.1,809.9"
        />
        <path
          fill={"#FEFEFE"}
          d="M814.9,812.9c0.1-2,1.5-2,3-2C818.5,814,816.2,812.6,814.9,812.9"
        />
      </svg>
      {/*<img src={lightLogo} alt={'logo'} className={'logo'}/>*/}
      <img src={mobileLogo} alt={"logo"} className={"mobile-logo"} />
    </Link>
  ) : (
    <>
      <Link href={"/"}>
        <svg className={"logo"} viewBox="0 0 4302.4 813">
          <path d="M998.2,502.9c0-144.9,111.9-252,263.8-252c151.8,0,263.8,106.4,263.8,252s-111.9,252-263.8,252   C1110.1,754.9,998.2,647.8,998.2,502.9 M1434,502.9c0-100.1-73.5-172.2-172.1-172.2c-98.7,0-172.1,72.1-172.1,172.2   s73.5,172.2,172.1,172.2C1360.6,675.1,1434,603,1434,502.9" />
          <path d="M2032.2,432.2c0,107.8-79.8,174.3-208.5,174.3h-110.5v141.4h-91v-490h201.5   C1952.5,257.9,2032.2,323.7,2032.2,432.2 M1940.6,432.2c0-61.6-41.3-97.3-121-97.3h-106.3v194.6h106.3   C1899.3,529.5,1940.6,493.8,1940.6,432.2" />
          <path d="M2533.2,432.2c0,107.8-79.8,174.3-208.5,174.3h-110.5v141.4h-91v-490h201.5   C2453.4,257.9,2533.2,323.7,2533.2,432.2 M2441.5,432.2c0-61.6-41.3-97.3-121-97.3h-106.3v194.6h106.3   C2400.3,529.5,2441.5,493.8,2441.5,432.2" />
          <path d="M2596.2,502.9c0-144.9,111.9-252,263.8-252c151.8,0,263.8,106.4,263.8,252s-111.9,252-263.8,252   C2708.1,754.9,2596.2,647.8,2596.2,502.9 M3032.1,502.9c0-100.1-73.5-172.2-172.1-172.2c-98.7,0-172.1,72.1-172.1,172.2   s73.5,172.2,172.1,172.2C2958.6,675.1,3032.1,603,3032.1,502.9" />
          <polygon points="3655.4,257.9 3655.4,747.9 3580.6,747.9 3310.5,416.1 3310.5,747.9 3220.3,747.9 3220.3,257.9    3295.1,257.9 3565.2,589.7 3565.2,257.9  " />
          <path d="M3752,502.9c0-144.9,111.9-252,263.8-252c151.8,0,263.8,106.4,263.8,252s-111.9,252-263.8,252   C3863.9,754.9,3752,647.8,3752,502.9 M4187.9,502.9c0-100.1-73.5-172.2-172.1-172.2c-98.7,0-172.1,72.1-172.1,172.2   s73.5,172.2,172.1,172.2C4114.4,675.1,4187.9,603,4187.9,502.9" />
          <path
            fill={"#EEEEEE"}
            d="M371,812.9c-4.2-7.2-3.9-7.8,3.1-13.1c20-15,39.9-30.2,59.8-45.3c20.6-15.6,41.2-31.2,61.9-46.8   c2.9-2.2,6.2-2.9,9.8-2.9c56.8,0.1,113.6,0.2,170.4-0.1c18.3-0.1,33.8-12.3,36.1-32.4c0.7-6.3,0.8-12.6,0.8-18.9   c0-69.1,0.4-138.3-0.2-207.4c-0.1-18.3,0.1-36.6-1-54.8c-0.8-14.3-7.6-26.3-19-35.4c-17.2-13.8-34.4-27.5-51.7-41.2   c-15.3-12.1-30.8-24.1-46.1-36.2c-18.8-14.7-37.5-29.5-56.2-44.2c-31-24.4-62-48.7-93-73.1c-5.9-4.6-11.3-9.7-18-13.3   c-15.5-8.4-30.4-6.3-43.9,4c-28.6,22-56.8,44.6-85.2,66.9c-19.4,15.2-38.9,30.3-58.3,45.6c-21.6,17-43,34.2-64.6,51.3   c-15.4,12.2-31,24.3-46.4,36.7c-12.5,10-19.6,23.3-22.2,38.9c-1.8,11-2.1,22.1-2.1,33.2c0,125.6,0,251.2,0,376.8c0,4,0.3,8-2,11.5   h-32c-0.3-2.5-2.3-2-3.8-2c-15.8,0-31.5,0-47.3,0c-1.6,0-3.5-0.5-3.9,2h-13c-0.1-1.9-1.1-2.9-3-3V321c3.3-1.1,3.8-4.7,6.1-6.8   c11.3-10.3,23.9-18.9,35.8-28.4c28.4-22.7,57.3-44.9,86-67.3c19.8-15.5,39.7-31,59.5-46.5c13.7-10.7,27.4-21.4,41.1-32.1   c19.9-15.6,39.8-31.3,59.7-47c14.6-11.5,29.2-22.9,43.7-34.4c20-15.8,40.1-31.5,60-47.5c4.5-3.6,10.4-6,12.9-11.9h8   c0,1.9,1.3,3,2.6,4c4.9,3.9,9.9,7.8,14.8,11.7c18.1,14.2,36.2,28.4,54.3,42.6c19.6,15.5,39.2,31,58.9,46.5   c14.3,11.2,28.8,22.3,43.1,33.5c19.9,15.6,39.8,31.3,59.7,47c15.8,12.4,31.5,24.7,47.3,37.1c18.2,14.3,36.5,28.6,54.7,42.9   c15.9,12.5,31.8,24.9,47.7,37.4c7.4,5.9,15.5,11,21.8,18.3v490.9c-1.5,0-2.9,0-3,2H371z"
          />
          <path
            fill={"#FCFCFC"}
            d="M16.1,812.9c0.4-2.5,2.3-2,3.9-2c15.8,0,31.5,0,47.3,0c1.6,0,3.5-0.5,3.8,2H16.1z"
          />
          <path
            fill={"#FCFCFC"}
            d="M0.1,809.9c1.9,0.1,2.9,1.1,3,3C0.6,813.4-0.4,812.4,0.1,809.9"
          />
          <path
            fill={"#FEFEFE"}
            d="M814.9,812.9c0.1-2,1.5-2,3-2C818.5,814,816.2,812.6,814.9,812.9"
          />
        </svg>
        {/*<img src={lightLogo} alt={'logo'} className={'logo'}/>*/}
        <img src={mobileLogo} alt={"logo"} className={"mobile-logo"} />
      </Link>
    </>
  )
);
const LoginBtn = connect(
  ({ state, menuHandler }) =>
    state.theme.user.logged || (
      <Link
        onClick={() => menuHandler(false)}
        className={"primary member-login"}
        href={"/sign-in/"}
      >
        Member Login
      </Link>
    )
);

const Header = React.forwardRef(
  ({ className, hasSubMenu = true, hasProgress = false }, forwardRef) => {
    const [menuOpened, setMenuOpened] = React.useState(false);
    const menuHandler = (value) => {
      setMenuOpened(value);
      value ? preventPageScroll() : allowPageScroll();
    };
    return (
      <header ref={forwardRef} className={className + " header"}>
        <Container>
          <div className="menu-content">
            <div className="menu-left">
              <LogoLink />
            </div>
            <div className="menu-right">
              <RightPart />
              <div onClick={() => menuHandler(true)} className={"three-dots"}>
                <span className={"primary-bg"} />
                <span className={"primary-bg"} />{" "}
                <span className={"primary-bg"} />
              </div>
            </div>
          </div>
          {hasSubMenu ? <SubHeader /> : null}
          {hasProgress ? <StepsProgress horizontal /> : null}
        </Container>
        <div className={classnames("floating-menu", { menuOpened })}>
          <Container>
            <svg
              onClick={() => menuHandler(false)}
              className={"close-menu"}
              viewBox="0 0 20 20"
            >
              <path
                fill="none"
                stroke="#b5d2ff"
                className={"primary-stroke"}
                strokeMiterlimit="20"
                strokeWidth="2"
                d="M1.053 18.957L19.502.507"
              />
              <path
                fill="none"
                stroke="#b5d2ff"
                className={"primary-stroke"}
                strokeMiterlimit="20"
                strokeWidth="2"
                d="M1.053.508l18.449 18.449"
              />
            </svg>
            <div className="links">
              <Link
                onClick={() => menuHandler(false)}
                className={"primary"}
                href="/"
              >
                Home
              </Link>
              <Link
                onClick={() => menuHandler(false)}
                className={"primary"}
                href={"/products/"}
              >
                Products & Rates
              </Link>
              <Link
                onClick={() => menuHandler(false)}
                className={"primary"}
                href={"/map/"}
              >
                Lending Areas
              </Link>
              <Link
                onClick={() => menuHandler(false)}
                className={"primary"}
                href="/what-we-do/"
              >
                What We Do
              </Link>
              <Link
                onClick={() => menuHandler(false)}
                className={"primary"}
                href={"/get-in-touch/"}
              >
                Get in Touch
              </Link>
              <LoginBtn menuHandler={menuHandler} />
            </div>
          </Container>
        </div>
      </header>
    );
  }
);

Header.propTypes = {
  className: PropTypes.string,
  hasSubMenu: PropTypes.bool,
  hasProgress: PropTypes.bool,
};

export default styled(Header)`
  position: fixed !important;
  z-index: 100;
  width: 100%;
  opacity: 1;
  top: 0;
  transition: opacity 500ms;

  .menu-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${size(74)};

    .menu-left {
      .logo {
        width: ${size(131)};
        @media (max-width: 575.98px) {
          display: none;
        }
      }

      .mobile-logo {
        @media (min-width: 576px) {
          display: none;
        }
        width: ${size(24)};
        height: ${size(24)};
        object-fit: contain;
      }

      @media (max-width: 991.98px) {
        z-index: 9;
      }
    }

    .menu-right {
      display: flex;
      align-items: center;

      .links {
        color: #b5d2ff;
        font-size: ${size(16)};
        font-weight: 500;
        font-style: normal;
        margin-left: ${size(30)};
        text-transform: capitalize;
      }

      .signup-btn {
        margin: 0 ${size(22)};
      }

      ${Button} {
        margin-top: 0;
        padding: ${size(8)} ${size(22)};
        @media (max-width: 575.98px) {
          display: none;
        }
      }

      .three-dots {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-left: ${size(40)};
        cursor: pointer;
        width: ${size(20)};

        span {
          border-radius: 50%;
          width: ${size(3)};
          height: ${size(3)};
          background-color: #b5d2ff;
          margin: ${size(2)} 0;
        }
      }
    }
  }

  .floating-menu {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: opacity 200ms, visibility 200ms;
    opacity: 0;
    visibility: hidden;

    ${Container} {
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 991.98px) {
        display: block;
        padding-top: ${size(160)};
      }
      @media (max-width: 575.98px) {
        padding-top: ${size(83)};
      }
    }

    &.menuOpened {
      opacity: 1;
      transition: opacity 200ms, visibility 200ms;
      visibility: visible;
    }

    .close-menu {
      position: absolute;
      right: ${size(15)};
      top: ${size(37)};
      transform: translateY(-50%);
      width: ${size(19)};
      height: ${size(19)};
      cursor: pointer;
      @media (max-width: 991.98px) {
        right: ${size(25)};
        transform: translate(-50%, -50%);
      }
    }

    .logo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: ${size(96)};
      border-bottom: ${size(1)} solid #b5d2ff;

      img {
        width: unset;
        height: ${size(26)};
      }
    }

    .links {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-transform: capitalize;

      @media (max-width: 991.98px) {
        margin-top: 25%;
      }

      a {
        color: #b5d2ff;
        font-size: ${size(60)};
        font-weight: 500;
        margin-bottom: ${size(19)};
        transition: opacity 300ms;

        &:last-of-type {
          margin-bottom: 0;
        }

        &:hover {
          opacity: 0.6;
        }

        @media (max-width: 991.98px) {
          font-size: ${size(32)};
          margin-bottom: ${size(40)};
        }
        @media (max-width: 575.98px) {
          font-size: ${size(22)};
          margin-bottom: ${size(30)};
        }

        &.member-login {
          width: auto;
          font-size: ${size(50)};
          max-width: fit-content;
          padding: ${size(12)} ${size(32)};
          min-height: ${size(64)};
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: ${size(45)};
          background-color: #fe412d;
          color: #fff !important;
          cursor: pointer;
          white-space: nowrap;
          @media (max-width: 991.98px) {
            font-size: ${size(28)};
            border-radius: ${size(32)};
          }
          @media (max-width: 575.98px) {
            font-size: ${size(18)};
            margin-bottom: ${size(20)};
          }
        }
      }
    }
  }

  ${StepsProgress} {
    display: none;
    @media (max-width: 575.98px) {
      margin-bottom: ${size(40)};
      display: block;
      .current .step-name {
        top: ${size(12)};
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`;
