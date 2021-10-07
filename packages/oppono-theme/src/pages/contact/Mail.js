import React from "react";
import { connect, styled } from "frontity";
import intro_ball_1 from "../../assets/images/form_1_img.png";
import intro_ball_2 from "../../assets/images/form_2_img.png";
import { Address } from "../../components/form-components/Address";
import Form from "../../components/form-components/Form";
import FormStep from "../../components/form-components/FormStep";
import LastStep from "../../components/form-components/LastStep";
import { Wysiwyg } from "../../components/form-components/StyledComponent";
import Container from "../../components/reusable/Container";
import { size } from "../../functions/size";
import contact_obj from "../../assets/images/contact-obj.png";
import FlyingObjsContainer from "../../components/reusable/FlyingObjsContainer";
import Input from "../../components/form-components/Input";
import TextArea from "../../components/form-components/TextArea";
import Button from "../../components/form-components/Button";
import Link from "../../components/reusable/Link";
import Select from "../../components/form-components/Select";

const Mail = ({ className, state, actions }) => {
  const data = state.source.get(state.router.link);
  const pageData =
    data.isReady && !data.isError ? state.source[data.type][data.id].acf : {};
  const [currentTheme, setCurrentTheme] = React.useState("gray-theme");
  const pageName = "contact";
  React.useEffect(() => {
    actions.theme.setSubHeader(pageData.sub_header);
  }, [pageData]);
  React.useEffect(() => {
    actions.theme.setActiveTheme(currentTheme);
  }, [currentTheme]);
  return (
    <div className={className}>
      <Form setCurrentTheme={setCurrentTheme} endPoint={"/contact"}>
        <FormStep
          pageName={pageName}
          activeTheme={pageData.section_1?.section_theme}
          stepName={pageData.section_1?.section_name}
        >
          <Container className={"form-wide-container"}>
            <div className="d-flex">
              <div className="title-wrapper">
                {pageData.section_1?.title ? (
                  <h1 className={"contact-title"}>
                    {pageData.section_1?.title}
                  </h1>
                ) : null}
                {pageData.section_1?.sub_title ? (
                  <h2 className={"contact-sub-title desktop-only"}>
                    {pageData.section_1?.sub_title}
                  </h2>
                ) : null}
								{/* <img className="contact-flying-obj" src={contact_obj} alt="flying object"/> */}
              </div>
              <div className="contact-info-wrapper">
                <Link href={"tel:" + pageData.section_1?.oppono_phone}>
                  <div className="item-wrapper">
                    <div className="icon">
                      <svg viewBox="0 0 512 512">
                        <path
                          fill="currentColor"
                          d="M493.09 351.3L384.7 304.8a31.36 31.36 0 0 0-36.5 8.9l-44.1 53.9A350 350 0 0 1 144.5 208l53.9-44.1a31.35 31.35 0 0 0 8.9-36.49l-46.5-108.5A31.33 31.33 0 0 0 125 .81L24.2 24.11A31.05 31.05 0 0 0 0 54.51C0 307.8 205.3 512 457.49 512A31.23 31.23 0 0 0 488 487.7L511.19 387a31.21 31.21 0 0 0-18.1-35.7zM456.89 480C222.4 479.7 32.3 289.7 32.1 55.21l99.6-23 46 107.39-72.8 59.5C153.3 302.3 209.4 358.6 313 407.2l59.5-72.8 107.39 46z"
                        />
                      </svg>
                    </div>
                    <div className="text">
                      {pageData.section_1?.oppono_phone ? (
                        <div>{pageData.section_1?.oppono_phone}</div>
                      ) : null}
                      {pageData.section_1?.oppono_phone_label ? (
                        <p>{pageData.section_1?.oppono_phone_label}</p>
                      ) : null}
                    </div>
                  </div>
                </Link>
                <Link href={"mailto:" + pageData.section_1?.oppono_email}>
                  <div className="item-wrapper">
                    <div className="icon">
                      <svg viewBox="0 0 512 512">
                        <path
                          fill="currentColor"
                          d="M64,257.6,227.9,376a47.72,47.72,0,0,0,56.2,0L448,257.6V96a32,32,0,0,0-32-32H96A32,32,0,0,0,64,96ZM160,160a16,16,0,0,1,16-16H336a16,16,0,0,1,16,16v16a16,16,0,0,1-16,16H176a16,16,0,0,1-16-16Zm0,80a16,16,0,0,1,16-16H336a16,16,0,0,1,16,16v16a16,16,0,0,1-16,16H176a16,16,0,0,1-16-16Z"
                        />
                        <path
                          fill="currentColor"
                          d="M352,160a16,16,0,0,0-16-16H176a16,16,0,0,0-16,16v16a16,16,0,0,0,16,16H336a16,16,0,0,0,16-16Zm-16,64H176a16,16,0,0,0-16,16v16a16,16,0,0,0,16,16H336a16,16,0,0,0,16-16V240A16,16,0,0,0,336,224ZM329.4,41.4C312.6,29.2,279.2-.3,256,0c-23.2-.3-56.6,29.2-73.4,41.4L152,64H360ZM64,129c-23.9,17.7-42.7,31.6-45.6,34A48,48,0,0,0,0,200.7v10.7l64,46.2Zm429.6,34c-2.9-2.3-21.7-16.3-45.6-33.9V257.6l64-46.2V200.7A48,48,0,0,0,493.6,163ZM256,417.1a80,80,0,0,1-46.9-15.2L0,250.9V464a48,48,0,0,0,48,48H464a48,48,0,0,0,48-48V250.9l-209.1,151A80,80,0,0,1,256,417.1Z"
                        />
                      </svg>
                    </div>
                    <div className="text">
                      {pageData.section_1?.oppono_email ? (
                        <div>{pageData.section_1?.oppono_email}</div>
                      ) : null}
                      {pageData.section_1?.oppono_email_label ? (
                        <p>{pageData.section_1?.oppono_email_label}</p>
                      ) : null}
                    </div>
                  </div>
                </Link>
                <Link
                  href={
                    "http://maps.google.com/?q=" +
                    pageData.section_1?.oppono_address_line_1 +
                    " " +
                    pageData.section_1?.oppono_address_line_2
                  }
                >
                  <div className="item-wrapper">
                    <div className="icon">
                      <svg viewBox="0 0 384 512">
                        <path
                          fill="currentColor"
                          d="M192 96c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64zm0-256C85.961 0 0 85.961 0 192c0 77.413 26.97 99.031 172.268 309.67 9.534 13.772 29.929 13.774 39.465 0C357.03 291.031 384 269.413 384 192 384 85.961 298.039 0 192 0zm0 473.931C52.705 272.488 32 256.494 32 192c0-42.738 16.643-82.917 46.863-113.137S149.262 32 192 32s82.917 16.643 113.137 46.863S352 149.262 352 192c0 64.49-20.692 80.47-160 281.931z"
                        />
                      </svg>
                    </div>
                    <div className="text">
                      {pageData.section_1?.oppono_address_line_1 ? (
                        <div>{pageData.section_1?.oppono_address_line_1}</div>
                      ) : null}
                      {pageData.section_1?.oppono_address_line_2 ? (
                        <p>{pageData.section_1?.oppono_address_line_2}</p>
                      ) : null}
                    </div>
                  </div>
                </Link>
              </div>
              {pageData.section_1?.sub_title ? (
                <h2 className={"contact-sub-title mobile-only"}>
                  {pageData.section_1?.sub_title}
                </h2>
              ) : null}

              <div className="floating-obj">
							<FlyingObjsContainer
                  childrenList={[
                    {
                      imageUrl: contact_obj,
                      left: "20%",
                      level: 1,
                      top: "28%",
                      type: "image",
                      width: 18,
                      alt: "flying object",
                    },
                  ]}
                />
              </div>
            </div>
            {/*<img className={'contact-obj'} src={contact_obj} alt={'Contact Icon'}/>*/}
            <div className="contact-row">
              <div className="col-4">
                <Input
                  name={"name"}
                  className={"primary-input"}
                  type={"text"}
                  {...pageData.section_1?.name_input}
                />
                <Input
                  name={"email"}
                  className={"primary-input"}
                  type={"text"}
                  {...pageData.section_1?.email_input}
                />
                <Input
                  name={"phone"}
                  className={"primary-input"}
                  type={"phone"}
isPhoneNumber
                  {...pageData.section_1?.phone_input}
                />
              </div>
              <div className="col-auto">
                <Select
                  className={"primary-select"}
                  name={"discuss"}
                  {...pageData.section_1?.discuss_dropdown}
                />
                <TextArea
                  name={"questions"}
                  className={"primary-input"}
                  {...pageData.section_1?.questions_input}
                />
              </div>
            </div>
            <Button
              icon={true}
              className={"next-step wide"}
              label={"Send message"}
            />
          </Container>
        </FormStep>
        <FormStep
          pageName={pageName}
          activeTheme={pageData.section_2?.section_theme}
          stepName={pageData.section_2?.section_name}
        >
          <LastStep>
            <img
              src={pageData.section_2?.image.url}
              alt={pageData.section_2?.image.alt}
            />
            <div style={{ flexBasis: "55%" }} className="text">
              <h1 className={"form-headline-1 text-left"}>
                {pageData.section_2?.title}
              </h1>
              <p className={"form-headline-3 primary lighter"}>
                {pageData.section_2?.subtitle}
              </p>
              <Wysiwyg
                dangerouslySetInnerHTML={{ __html: pageData.section_2?.steps }}
              />
              <div className="btn-group">
                {/*<Link className={'wide bordered'} href={'https://expert.filogix.com/expert/view/SignOn'}>*/}
                {/*  <Button className={'wide filled'} label={'Connect to Filogix'}/>*/}
                {/*</Link>*/}
                <Link className={"wide bordered"} href={"/dashboard"}>
                  <Button
                    className={"wide bordered"}
                    label={"Back to dashboard"}
                  />
                </Link>
              </div>
            </div>
          </LastStep>
        </FormStep>
      </Form>
    </div>
  );
};

export default styled(connect(Mail))`
  width: 100%;
  height: 100%;
  align-items: stretch;
  margin: 0 0 ${size(100)};

  // .contact-obj {
  //   max-width: ${size(205)};
  //   display: none;
  //   margin: ${size(30)} auto 0;
  // }
  //

	.contact-flying-obj {
		position: absolute;
		max-width: 345px;
	}



  .contact-row {
    display: flex;
    align-items: flex-start;
    @media (max-width: 991.98px) {
      flex-direction: column;
      margin-top: ${size(25)};
      max-width: 90%;
    }
    @media (max-width: 575.98px) {
      max-width: ${size(400)};
      //margin: 0 auto;
      margin-top: 0;
    }

    .col-4 {
      flex-basis: ${size(460)};
      width: ${size(460)};
      margin-right: ${size(100)};
      flex-shrink: 0;
      @media (max-width: 991.98px) {
        width: 100%;
        flex-basis: 100%;
        margin-right: 0;
      }
    }

    .col-auto {
      flex: 1 1 100%;
      @media (max-width: 991.98px) {
        width: 100%;
        flex-basis: 100%;
      }
    }
  }

  ${Input} {
    //&:first-of-type{
    //  margin-top: 0;
    //}
    .normal-input {
      font-size: ${size(28)};
      height: ${size(36)};

      &::placeholder {
        font-size: ${size(28)};
      }

      @media (max-width: 575.98px) {
        height: 3.3rem;
        font-size: 2rem;

        &::placeholder {
          font-size: 2rem;
        }
      }
    }
  }

  textarea {
    font-size: ${size(28)};
    @media (max-width: 575.98px) {
      font-size: 2rem;

      &::placeholder {
        font-size: 2rem;
      }
    }
  }

  ${Button} {
    margin-top: ${size(78)};
    @media (max-width: 991.98px) {
      padding: ${size(20)};
    }
    @media (max-width: 575.98px) {
      width: 100%;
    }
  }

  .d-flex {
    display: flex;
    align-items: center;
    @media (max-width: 991.98px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

	.title-wrapper {
		flex: 48%;
	}

  .contact-info-wrapper {
    position: relative;
    left: ${size(100)};
		flex: 48%;
    @media (max-width: 991.98px) {
      bottom: 0;
      left: 0;
      margin-top: ${size(20)};
    }

    .item-wrapper {
      display: flex;
      align-items: center;
      margin-bottom: ${size(15)};
      background: #10397c;
      padding: 2rem 3rem 2.5rem 3rem;
      border-top: 4px solid transparent;
      transition: border-color 500ms;
      @media (max-width: 991.98px) {
        padding: ${size(10)} ${size(20)} ${size(10)} ${size(15)};
      }

      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: #0a266c;
        width: ${size(60)};
        height: ${size(60)};
        border-radius: 50%;
        object-fit: contain;
        margin-right: ${size(30)};
        @media (max-width: 991.98px) {
          width: ${size(50)};
          height: ${size(50)};
        }

        svg {
          width: 43%;
          height: 43%;
          transition: color 500ms;
          color: rgba(255, 255, 255, 0.8);
        }
      }

      .text {
				max-width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        div {
          font-size: ${size(16)};
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: ${size(3)};
          display: block;
          transition: color 500ms;
          @media (max-width: 991.98px) {
            font-size: ${size(18)};
          }
          @media (max-width: 575.98px) {
            font-size: ${size(14)};
          }
        }

        p {
          font-size: ${size(14)};
          color: rgba(255, 255, 255, 0.8);
          transition: color 500ms;

          @media (max-width: 575.98px) {
            font-size: ${size(14)};
          }
        }
      }

      &:hover {
        @media (min-width: 991.98px) {
					border-color: #fff;
				}

        .icon {
          svg {
            color: rgba(255, 255, 255, 1);
          }
        }

        .text {
          div,
          p {
            color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
  }

  .desktop-only {
    @media (max-width: 991.98px) {
      display: none;
    }
  }

  .mobile-only {
    @media (min-width: 992px) {
      display: none;
    }
  }

  .floating-obj {
    position: relative;
    width: 25%;
    height: 200px;

    @media (max-width: 991.98px) {
      position: absolute;
      width: 25%;
      height: 25%;
      right: 10%;
      top: 25%;
    }

    .flying-objs-container {
      top: 0 !important;

      > div {
        width: 100% !important;
        left: 15% !important;
        top: 0 !important;
				transform: none !important;
      }
    }
  }

  ${Select} {
    .oppono-select {
      &__option,
      &__single-value,
      &__input,
      &__control {
        font-size: ${size(24)};

        @media (max-width: 575.98px) {
          font-size: 2rem;
        }
      }
    }

  ${Wysiwyg}{
    max-width: min(55%, ${size(310)});
    margin-bottom: ${size(32)};
  }

`;
