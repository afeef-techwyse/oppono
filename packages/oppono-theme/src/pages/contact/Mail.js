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
      <Form setCurrentTheme={setCurrentTheme} endPoint={"/contact"} hideStepsProgress>
        <FormStep
          pageName={pageName}
          activeTheme={pageData.section_1?.section_theme}
          stepName={pageData.section_1?.section_name}
        >

					<Container className={"contact-us-container"}>
						<div className="details">
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
									<div className={"item-wrapper"}>
										<div className={"icon"}>

										</div>
										<div className="text">
											{pageData.section_1?.oppono_phone}
										</div>
									</div>
								</Link>
								<Link href={"mailto:" + pageData.section_1?.oppono_email}>
									<div className={"item-wrapper"}>
										<div className={"icon"}>

										</div>
										<div className="text">
											{pageData.section_1?.oppono_email}
										</div>
									</div>
								</Link>
								<Link href="#">
									<div className={"item-wrapper"}>
										<div className={"icon"}>

										</div>
										<div className="text">
											Ask a quetion
										</div>
									</div>
								</Link>
								<Link href={
											"http://maps.google.com/?q=" +
											pageData.section_1?.oppono_address_line_1 +
											" " +
											pageData.section_1?.oppono_address_line_2
										}>
									<div className={"item-wrapper"}>
										<div className={"icon"}>

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
						<div className="contact-form">
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
						</div>
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

	.contact-us-container {
		max-width: 100% !important;
		display: flex;

		.details {
			padding-right: 10rem;

			@media (max-width: 991.98px) {
				padding-right: 0;
			}
		}
	}

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
