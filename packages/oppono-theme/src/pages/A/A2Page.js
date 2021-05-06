import React from "react";
import { Address } from "../../components/form-components/Address";
import Form from "../../components/form-components/Form";
import Input from "../../components/form-components/Input";
import { connect, styled } from "frontity";
import { beaconScore } from "../../functions/beaconScore";
import { size } from "../../functions/size";
import Select from "../../components/form-components/Select";
import RadioInput from "../../components/form-components/RadioInput";
import RadioGroup from "../../components/form-components/RadioGroup";
import FormStep from "../../components/form-components/FormStep";
import Button from "../../components/form-components/Button";
import FileInput from "../../components/form-components/FileInput";
import W50 from "../../components/form-components/W50";
import TextArea from "../../components/form-components/TextArea";
import intro_ball_1 from "../../assets/images/form_1_img.png";
import intro_ball_2 from "../../assets/images/form_2_img.png";
import FlyingObjsContainer from "../../components/reusable/FlyingObjsContainer";
import {
  Li,
  Ol,
  P,
  Span,
  Wysiwyg,
} from "../../components/form-components/StyledComponent";
import Alert from "../../components/form-components/Alert";
import Finalize, {
  Bottom,
  FinalizeChild,
  FinalizeTable,
  Top,
} from "../../components/form-components/Finalize";
import useMedia from "../../hooks/useMedia";
import FormConditionalInput from "../../components/form-components/FormConditionalInput";
import FormRepeatableInput from "../../components/form-components/FormRepeatableInput";
import LastStep from "../../components/form-components/LastStep";
import upload from "../../assets/images/upload.png";
import Appraiser from "../../components/form-components/Appraiser";
import useStoredFormValue from "../../hooks/useStoredFormValue";
import useFlowAppraisers from "../../hooks/useFlowAppraisers";
import { monthlyPayments } from "../../functions/monthlyPayment";
import AppraiserInput from "../../components/AppraiserInput";
import { numberWithCommas } from "../../functions/numberWithCommas";
import Link from "../../components/reusable/Link";

const pageName = "a-2";
const A2Page = ({ className, setCurrentTheme, state, actions, formData }) => {
  const getA2Values = useStoredFormValue(pageName);

  const section1Values = getA2Values(formData.section_1?.section_name),
    section2Values = getA2Values(formData.section_2?.section_name),
    section3Values = getA2Values(formData.section_3?.section_name);

  const media = useMedia();
  const selectedProduct = React.useRef("");
  const maxMortgage = React.useRef("");

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

  const mortgage =
    +section2Values("purchase_price") - +section2Values("down_payment") || 0;
  const refNumber = React.useRef("");
  state.theme.stepResponse.data?.["reference-number"] &&
    (refNumber.current = state.theme.stepResponse.data?.["reference-number"]);
  return (
    <div className={className}>
      <Form setCurrentTheme={setCurrentTheme} endPoint={"/purchase"}>
        <FormStep
          apiStepNumber={1}
          pageName={pageName}
          activeTheme={formData.section_1?.section_theme}
          stepName={formData.section_1?.section_name}
        >
          <FlyingObjsContainer
            childrenList={[
              {
                imageUrl: intro_ball_2,
                left: "10%",
                level: 1,
                top: "55%",
                type: "image",
                width: 5,
                alt: "alt",
              },
              {
                imageUrl: intro_ball_1,
                left: "80%",
                level: 1,
                top: "5%",
                type: "image",
                width: 9,
                alt: "alt",
              },
            ]}
          />
          <div className="form-text-wrapper">
            <h1 className={"form-headline-1 text-left"}>
              {formData.section_1?.title}
            </h1>
            <h2 className={"form-headline-2 primary"}>
              {formData.section_1?.subtitle}
            </h2>
          </div>
          <Address
            address={{
              name: "address",
              noScroll: true,
              ...formData.section_1?.address_input,
            }}
            city={{ name: "city", ...formData.section_1?.city_input }}
            postalCode={{
              name: "postal_code",
              ...formData.section_1?.postal_code_input,
            }}
            setAppraiser={postalCodeOnChange}
          />
          <Select
            name={"property_type"}
            {...formData.section_1?.property_dropdown}
          />
          <Select
            name={"property_details_1"}
            {...formData.section_1?.property_details_1_dropdown}
          />
          <Select
            name={"property_details_2"}
            {...formData.section_1?.property_details_2_dropdown}
          />
          <Button icon={true} className={"next-step"} label={"Next"} />
        </FormStep>
        <FormStep
          apiStepNumber={2}
          pageName={pageName}
          activeTheme={formData.section_2?.section_theme}
          stepName={formData.section_2?.section_name}
        >
          <div className="form-text-wrapper">
            <h1 className={"form-headline-1 text-left"}>
              {formData.section_2?.title}
            </h1>
          </div>
          <RadioGroup
            radioText={formData.section_2?.looking_for_yes_no.label}
            checked={"first"}
          >
            <RadioInput
              label={formData.section_2?.looking_for_yes_no.yes}
              value={"first"}
              name={"looking_for"}
              type={"radio"}
            />
            <RadioInput
              label={formData.section_2?.looking_for_yes_no.no}
              value={"second"}
              name={"looking_for"}
              type={"radio"}
            />
          </RadioGroup>

          <W50>
            <Input
              type={"number"}
              name={"purchase_price"}
              {...formData.section_2?.purchase_price_input}
            />
            <Input
              type={"number"}
              name={"down_payment"}
              {...formData.section_2?.down_payment_input}
            />
          </W50>

          <div className="btn-group">
            <Button className={"bordered prev-step"} label={"Back"} />
            <Button icon={true} className={"next-step"} label={"Next"} />
          </div>
        </FormStep>
        <FormStep
          sendSteps={[
            formData.section_1?.section_name,
            formData.section_2?.section_name,
            formData.section_3?.section_name,
          ]}
          apiStepNumber={3}
          pageName={pageName}
          activeTheme={formData.section_3?.section_theme}
          stepName={formData.section_3?.section_name}
        >
          <div className="form-text-wrapper">
            <h1 className={"form-headline-1 text-left"}>
              {formData.section_3?.title}
            </h1>
            <h1 className={"form-headline-2 primary"}>
              {formData.section_3?.subtitle}
            </h1>
          </div>
          <FormRepeatableInput
            question={formData.section_3?.applicant_amount_label}
            number={4}
            initial={1}
            name={"applicants_number"}
          >
            <W50>
              <Input
                type={"text"}
                name={"applicant_fname_{{number}}"}
                {...formData.section_3?.applicant.first_name_input}
              />
              <Input
                type={"text"}
                name={"applicant_lname_{{number}}"}
                {...formData.section_3?.applicant.last_name_input}
              />
              <Input
                type={"text"}
                pattern={
                  "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
                }
                name={"applicant_mail_{{number}}"}
                {...formData.section_3?.applicant.email_input}
              />
              <Input
                type={"phone"}
                name={"applicant_phone_{{number}}"}
                {...formData.section_3?.applicant.phone_input}
              />
            </W50>
            <RadioGroup
              radioText={formData.section_3?.applicant.score_label}
              checked={"<650"}
            >
              <RadioInput
                label={"<650"}
                value={"<650"}
                name={`applicant_score_{{number}}`}
                type={"radio"}
              />
              <RadioInput
                label={"650-679"}
                value={"650-679"}
                name={`applicant_score_{{number}}`}
                type={"radio"}
              />
              <RadioInput
                label={"680-749"}
                value={"680-749"}
                name={`applicant_score_{{number}}`}
                type={"radio"}
              />
              <RadioInput
                label={"750-799"}
                value={"750-799"}
                name={`applicant_score_{{number}}`}
                type={"radio"}
              />
              <RadioInput
                label={"800+"}
                value={"800+"}
                name={`applicant_score_{{number}}`}
                type={"radio"}
              />
            </RadioGroup>
          </FormRepeatableInput>
          <div className="btn-group">
            <Button className={"bordered prev-step"} label={"Back"} />
            <Button icon={true} label={"Next"} className={"next-step"} />
          </div>
        </FormStep>

        <FormStep
          endPoint={null}
          pageName={pageName}
          activeTheme={formData.section_4?.section_theme}
          stepName={formData.section_4?.section_name}
        >
          <div className="form-text-wrapper wide-text">
            <h1 className={"form-headline-1 text-left"}>
              {formData.section_4?.title}
            </h1>
            <h2 className={"form-headline-3 primary"}>
              You are applying for a {section2Values("looking_for")} mortgage on
              your {section1Values("property_type")},{" "}
              {section1Values("property_details_1")} home which is located at{" "}
              <br /> {section1Values("address")}, {section1Values("city")},{" "}
              {section1Values("postal_code")}
            </h2>
          </div>
          <Finalize>
            <Top>
              {media !== "mobile" ? (
                <FinalizeChild order={3}>
                  <P.D>Borrowers</P.D>
                  {[
                    ...Array(+section3Values("applicants_number") || 0).keys(),
                  ].map((index, personIndex) => {
                    const applicantFName = section3Values(
                      `applicant_fname_${index + 1}`
                    );
                    const applicantLName = section3Values(
                      `applicant_lname_${index + 1}`
                    );
                    const applicantScore = section3Values(
                      `applicant_score_${index + 1}`
                    );
                    return (
                      <P.Dark key={`person-desktop-${personIndex}`}>
                        {applicantFName} {applicantLName} {applicantScore}
                      </P.Dark>
                    );
                  })}
                </FinalizeChild>
              ) : (
                <FinalizeChild className={"full m-mt-24"} order={3}>
                  <FinalizeTable>
                    <tbody>
                      {[
                        ...Array(
                          +section3Values("applicants_number") || 0
                        ).keys(),
                      ].map((index, personIndex) => {
                        const applicantFName = section3Values(
                          `applicant_fname_${index + 1}`
                        );
                        const applicantLName = section3Values(
                          `applicant_lname_${index + 1}`
                        );
                        const applicantScore = section3Values(
                          `applicant_score_${index + 1}`
                        );
                        return (
                          <tr key={`person-desktop-${personIndex}`}>
                            <P.Dark as={"td"}>
                              {applicantFName} {applicantLName}
                            </P.Dark>
                            <P.D as={"td"}>{applicantScore}</P.D>
                          </tr>
                        );
                      })}
                    </tbody>
                  </FinalizeTable>
                </FinalizeChild>
              )}

              <FinalizeChild className={"wide"} order={1}>
                <P.D>Summary</P.D>
              </FinalizeChild>
            </Top>
            <Bottom>
              {media === "mobile" ? null : (
                <FinalizeChild order={1}></FinalizeChild>
              )}
              <FinalizeChild order={3} className={"m-pr-40 full m-border"}>
                <P.Border>
                  Your mortgage request is ${numberWithCommas(mortgage)}
                </P.Border>
                <P.Border>
                  Your property value is $
                  {numberWithCommas(+section2Values("purchase_price"))}
                </P.Border>
              </FinalizeChild>
              <FinalizeChild order={3} className={"wide m-pr-40"}>
                <P.Border>
                  Your down payment is $
                  {numberWithCommas(+section2Values("down_payment"))}
                </P.Border>
                <P.Border>
                  Your LTV is{" "}
                  {(
                    (mortgage / +section2Values("purchase_price")) *
                    100
                  ).toFixed?.(1)}
                  %
                </P.Border>
              </FinalizeChild>
            </Bottom>
          </Finalize>
          <div className="btn-group">
            <Button label={"I’m good to go"} className={"next-step small"} />
            <Button
              className={"bordered reset-form small"}
              label={"No, edit the details"}
            />
          </div>
        </FormStep>
        <FormStep
          apiStepNumber={4}
          pageName={pageName}
          activeTheme={formData.section_5?.section_theme}
          stepName={formData.section_5?.section_name}
        >
          <div className="form-text-wrapper wide-text">
            <h1 className={"form-headline-1 text-left"}>
              {formData.section_5?.title.replace(
                "{{number}}",
                state.theme.stepResponse.data?.data?.[
                  section2Values("looking_for")
                ]?.products.length
              )}
            </h1>
            <h2 className={"form-headline-3 primary"}>
              {formData.section_5?.subtitle}
            </h2>
            <h3 className={"form-headline-1 text-left"}>
              {formData.section_5?.choose_one}
            </h3>
          </div>
          <input ref={selectedProduct} type={"hidden"} name={`product_name`} />

          <input ref={maxMortgage} type={"hidden"} name={`maximum_mortgage`} />
          {section2Values("looking_for")
            ? state.theme.stepResponse.data?.data?.[
                section2Values("looking_for")
              ]?.products.map((product, index) => (
                <Finalize key={product.ID}>
                  <Top>
                    <FinalizeChild order={1}>
                      <P.Circle>{index + 1}</P.Circle>
                    </FinalizeChild>

                    <FinalizeChild order={1}>
                      <P.Dark>*Variable Rate</P.Dark>
                      <P.Num>{product.fields?.rate}%</P.Num>
                      <Button
                        onClick={() => {
                          selectedProduct.current.value = product.title;
                          maxMortgage.current.value = Math.round(
                            (+section2Values("purchase_price") *
                              product.fields?.maximum_ltv) /
                              100
                          );
                          setTimeout(
                            () =>
                              actions.theme.setValidateAndNextCallback(
                                new Date().getTime()
                              ),
                            100
                          );
                        }}
                        className={"bordered next-step"}
                        label={"I want this deal"}
                      />
                    </FinalizeChild>

                    <FinalizeChild className={"wide"} order={1}>
                      <P.Dark>*Monthly mortgage payment</P.Dark>
                      <P.Cost>
                        $
                        {numberWithCommas(
                          monthlyPayments(mortgage, product.fields?.rate)
                        )}
                      </P.Cost>
                    </FinalizeChild>
                  </Top>
                  <Bottom>
                    {media === "mobile" ? null : <FinalizeChild order={1} />}
                    {media !== "mobile" ? (
                      <FinalizeChild order={2} className={"full m-border"}>
                        <FinalizeTable>
                          <tbody>
                            <tr>
                              <P.Dark as={"td"}>Fixed Fee</P.Dark>
                              <P.D as={"td"}>
                                {(+product.fields?.rate + 0.25).toFixed?.(2)}%
                              </P.D>
                            </tr>
                            <tr>
                              <P.Dark as={"td"}>Lender Fee</P.Dark>
                              <P.D as={"td"}>{product.fields?.fee}%</P.D>
                            </tr>
                            <tr>
                              <P.Dark as={"td"}>LTV</P.Dark>
                              <P.D as={"td"}>
                                Up to {product.fields?.maximum_ltv}%
                              </P.D>
                            </tr>
                            <tr>
                              <P.Dark as={"td"}>Credit score</P.Dark>
                              <P.D as={"td"}>
                                {beaconScore(product.fields?.beacon_score)}
                              </P.D>
                            </tr>
                          </tbody>
                        </FinalizeTable>
                      </FinalizeChild>
                    ) : (
                      <FinalizeChild className={"full"} order={1}>
                        <FinalizeTable>
                          <tbody>
                            <tr>
                              <P.Dark as={"td"}>Fixed Fee</P.Dark>
                              <P.D as={"td"}>
                                {(+product.fields?.rate + 0.25).toFixed?.(2)}%
                              </P.D>
                            </tr>
                            <tr>
                              <P.Dark as={"td"}>Lender Fee</P.Dark>
                              <P.D as={"td"}>{product.fields?.fee}%</P.D>
                            </tr>
                            <tr>
                              <P.Dark as={"td"}>LTV</P.Dark>
                              <P.D as={"td"}>
                                Up to {product.fields?.maximum_ltv}%
                              </P.D>
                            </tr>
                            <tr>
                              <P.Dark as={"td"}>Credit score</P.Dark>
                              <P.D as={"td"}>
                                {beaconScore(product.fields?.beacon_score)}
                              </P.D>
                            </tr>
                          </tbody>
                        </FinalizeTable>
                      </FinalizeChild>
                    )}

                    <FinalizeChild order={3} className={"wide m-pr-40"}>
                      {product.fields?.specifications.map(
                        ({ term_id, name }) => (
                          <P.Border key={term_id}>{name}</P.Border>
                        )
                      )}
                    </FinalizeChild>
                  </Bottom>
                </Finalize>
              ))
            : null}
        </FormStep>
        <FormStep
          apiStepNumber={5}
          pageName={pageName}
          activeTheme={formData.section_6?.section_theme}
          stepName={formData.section_6?.section_name}
        >
          <div className="upload-step-wrapper">
            <img src={upload} />
            <h1 className={"form-headline-1 text-left"}>
              {formData.section_6?.title}
            </h1>
            <FormConditionalInput
              noScroll
              name={"mortgages_1"}
              showOn={"1"}
              checked={"0"}
              {...formData.section_6?.have_appraisal_report_yes_no}
            >
              <FileInput
                name="appraisal_report_file"
                label={formData.section_6?.appraisal_report_upload_label}
                acceptText={"PDF, JPG, or PNG"}
              />
              <Appraiser>
                <P.D>Select an appraiser</P.D>
                <div className="row">
                  <div className="col-left">
                    <p
                      className={"form-headline-1 text-left"}
                      dangerouslySetInnerHTML={{
                        __html: appraiser?.fields?.bdm.name,
                      }}
                    />
                  </div>
                  <div className="col-right">
                    <RadioGroup
                      className={"vertical-radio"}
                      radioText={"*Click to call"}
                    >
                      {appraiser?.fields?.preferred_appraisal_company.map(
                        ({ post_name }, index) => {
                          return (
                            <AppraiserInput
                              key={index}
                              appraiserName={post_name}
                            />
                          );
                        }
                      )}
                    </RadioGroup>
                    <P.Dark>
                      *Disclaimer - If the city you are looking for is not
                      listed please contact your BDM directly or email us at
                      info@oppono.com
                    </P.Dark>
                    <Button label={"Alert"} />
                  </div>
                </div>
              </Appraiser>
            </FormConditionalInput>
            <hr />
            <TextArea
              name={"additional_notes"}
              {...formData.section_6?.additional_notes_input}
            />
            <div className="btn-group">
              <Button
                className={"next-step"}
                label={"I want my pre-approval"}
              />
            </div>
          </div>
        </FormStep>
        <FormStep
          pageName={pageName}
          activeTheme={formData.section_7?.section_theme}
          stepName={formData.section_7?.section_name}
        >
          <LastStep>
            <img
              src={formData.section_7?.image.url}
              alt={formData.section_7?.image.alt}
            />
            <div style={{ flexBasis: "60%" }} className="text">
              <h1 className={"form-headline-1 text-left"}>
                {formData.section_7?.title}
              </h1>
              <p className={"form-headline-3 primary"}>
                {formData.section_7?.subtitle}
              </p>
              <Wysiwyg
                dangerouslySetInnerHTML={{
                  __html: formData.section_7?.steps.replace(
                    "{{number}}",
                    refNumber.current
                  ),
                }}
              />
              <div className="btn-group">
                <Link
                  className={"wide bordered"}
                  href={"https://expert.filogix.com/expert/view/SignOn"}
                >
                  <Button
                    className={"wide filled"}
                    label={"Connect to Filogix"}
                  />
                </Link>
                <Link className={"wide bordered"} href={"/dashboard"}>
                  <Button
                    className={"wide bordered"}
                    label={"Back to Dashboard"}
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

export default styled(connect(A2Page))`
  width: 100%;
  height: 100%;
  ${Bottom} {
    padding-top: 0;
    .full {
      table {
        padding-top: 0;
        width: 100%;
      }
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
    max-width: 80%;
    .form-headline-3 {
      margin: 1.5rem 0;
      max-width: ${size(400)};
      @media (max-width: 575.98px) {
        max-width: 90%;
      }
    }
  }
`;
