import React from "react";
import {Address} from "../../components/form-components/Address";
import Form from "../../components/form-components/Form";
import Input from "../../components/form-components/Input";
import {connect, css, styled} from "frontity";
import {beaconScore} from "../../functions/beaconScore";
import {productTypeToFullName} from "../../functions/productTypeToFullName";
import {size} from "../../functions/size";
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
import ProductsTable from "../../components/form-components/ProductsTable";
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
	FinalizeHeading,
	FinalizeCol,
	FinalizePercentage,
	FinalizeRows,
	FinalizeRow,
  Top,
} from "../../components/form-components/Finalize";
import useMedia from "../../hooks/useMedia";
import FormConditionalInput from "../../components/form-components/FormConditionalInput";
import FormFilter from "../../components/form-components/FormFilter";
import FormRepeatableInput from "../../components/form-components/FormRepeatableInput";
import ProductsMobileOption from "../../components/form-components/ProductsMobileOption";
import LastStep from "../../components/form-components/LastStep";
import upload from "../../assets/images/upload.png";
import Appraiser from "../../components/form-components/Appraiser";
import useStoredFormValue from "../../hooks/useStoredFormValue";
import AppraiserInput from "../../components/AppraiserInput";
import opponoApi from "../../opponoApi";
import useFlowAppraisers from "../../hooks/useFlowAppraisers";
import useProductsTable from "../../hooks/useProductsTable";
import {monthlyPayments} from "../../functions/monthlyPayment";
import CheckMark from "../../components/reusable/CheckMark";
import {numberWithCommas} from "../../functions/numberWithCommas";
import Link from "../../components/reusable/Link";
import {fixCharacters} from "../../functions/fixCharacters";

const pageName = "c-2";
const C2Page = ({className, setCurrentTheme, state, actions, formData}) => {
  const getC2Values = useStoredFormValue(pageName);
  const section1Values = getC2Values(formData.section_1?.section_name),
      section2Values = getC2Values(formData.section_2?.section_name),
      section4Values = getC2Values(formData.section_4?.section_name),
      section5Values = getC2Values(formData.section_5?.section_name),
      section6Values = getC2Values(formData.section_6?.section_name);
  const [step1Valid, setStep1Valid] = React.useState(false);

  const media = useMedia();

  React.useEffect(() => {
    actions.theme.setSubHeader(formData.sub_header);
  }, [formData]);
  React.useEffect(() => {
    actions.theme.setLeadId();
    actions.theme.setStepResponse({});
    opponoApi.post("/product-qualification", {}).then((response) => {
      const products = {
        first: response.data.first,
        second: response.data.second,
      };

      response.data.data = products;
      actions.theme.setStepResponse(response);
      // actions.theme.setStepResponse({data:{data:products}});
    });
  }, []);

  React.useEffect(() => {
    actions.theme.checkUser();
  }, [state.theme.user.logged]);
  const [[appraiser], postalCodeOnChange] = useFlowAppraisers();
  const [productsTable, productsFilter] = useProductsTable(
      state.theme.stepResponse
  );
  const mortgage =
      +section1Values("home_value") - +section5Values("down_payment") || 0;
  const firstProduct = state.theme.stepResponse.data?.data
      ? Object.values(state.theme.stepResponse.data?.data)[0].products[0]
      : {};
  const refNumber = React.useRef("");
  state.theme.stepResponse.data?.["reference-number"] &&
  (refNumber.current = state.theme.stepResponse.data?.["reference-number"]);
  const [show1stMortgageInput, setShow1stMortgageInput] = React.useState(false);
  return (
      <div className={className}>
        <Form setCurrentTheme={setCurrentTheme} endPoint={"/purchase"}>
          <FormStep
              endPoint={null}
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
                    width: 10,
                    alt: "alt",
                  },
                  {
                    imageUrl: intro_ball_1,
                    left: "80%",
                    level: 1,
                    top: "5%",
                    type: "image",
                    width: 15,
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
            <Input
                noScroll
                onChange={(e) => setStep1Valid(e.target.validity.valid)}
                className={"big-input"}
                type={"number"}
                isCurrency
                name={"home_value"}
                {...formData.section_1?.home_value_input}
            />
            <Button
                css={css`
              opacity: ${step1Valid ? 1 : 0};
              visibility: ${step1Valid ? "visible" : "hidden"};
            `}
                icon={true}
                className={"next-step"}
                label={"Next"}
            />
          </FormStep>
          <FormStep
              endPoint={null}
              pageName={pageName}
              activeTheme={formData.section_2?.section_theme}
              stepName={formData.section_2?.section_name}
          >
            <div className="form-text-wrapper">
              <h1 className={"form-headline-1 text-left"}>
                {formData.section_2?.title}
              </h1>
            </div>
            <FormRepeatableInput
                question={formData.section_2?.applicant_amount_label}
                number={4}
                initial={1}
                name={"applicants_number"}
            >
              <RadioGroup
                  radioText={formData.section_2?.applicant.score_label}
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
              <Button className={"bordered prev-step"} label={"Back"}/>
              <Button icon={true} label={"Next"} className={"next-step"}/>
            </div>
          </FormStep>
          <FormStep
              endPoint={null}
              pageName={pageName}
              activeTheme={formData.section_3?.section_theme}
              stepName={formData.section_3?.section_name}
          >
            <div className="form-text-wrapper">
              <h1 className={"form-headline-1 text-left"}>
                {formData.section_3?.title}
              </h1>
            </div>
            {state.theme.stepResponse.data?.data ? (
                media !== "mobile" ? (
                    <FormFilter
                        className={"form-wide-container"}
                        filters={productsFilter}
                    >
                      {Object.entries(state.theme.stepResponse.data?.data)
                          .filter(([, {products}])=>products?.length)
                          .map(
                          ([type, {products}], index) => (
                              <ProductsTable
                                  products={productsTable}
                                  key={type}
                                  dataFilter={type}
                              >
                                <thead>
                                <tr>
                                  <th scope={"col"}>
                                    <p className={"circle"}>{index + 1}</p>
                                    <p>{productTypeToFullName(type)}</p>
                                    <p className={"dark"}>Variable rates</p>
                                    <div className="table-arrows">
                              <span className={"prev disabled"}>
                                <svg viewBox="0 0 49 16">
                                  <path
                                      fill="none"
                                      stroke="#bfb6b4"
                                      strokeWidth="2"
                                      strokeMiterlimit="20"
                                      d="M48.723 8.678H1"
                                  />
                                  <path
                                      fill="none"
                                      stroke="#bfb6b4"
                                      strokeWidth="2"
                                      strokeMiterlimit="20"
                                      d="M8.299 15.976v0L1 8.678C3.846 5.827 5.452 4.23 8.299 1.379"
                                  />
                                </svg>
                              </span>
                                      <span className={"slides-numbers"}>
                                <span className="current-page">1</span>
                                <span className="slash">/</span>
                                <span className="total-pages">1</span>
                              </span>
                                      <span className={"next"}>
                                <svg viewBox="0 0 49 17">
                                  <path
                                      fill="none"
                                      stroke="#bfb6b4"
                                      strokeMiterlimit="20"
                                      strokeWidth="2"
                                      d="M0 8.677h47.723"
                                  />
                                  <path
                                      fill="none"
                                      stroke="#bfb6b4"
                                      strokeWidth="2"
                                      d="M40.424 15.976v0l7.299-7.299c-2.847-2.85-4.452-4.447-7.299-7.298"
                                  />
                                </svg>
                              </span>
                                    </div>
                                  </th>
                                  {products.map(
                                      ({ID, fields: {rate, maximum_ltv}}) => (
                                          <th scope={"col"} key={ID}>
                                            <p>
                                              $
                                              {numberWithCommas(
                                                  (+section1Values("home_value") *
                                                      maximum_ltv) /
                                                  100
                                              )}{" "}
                                              max
                                            </p>
                                            <p>
                                              $
                                              {numberWithCommas(
                                                  monthlyPayments(
                                                      (+section1Values("home_value") *
                                                          maximum_ltv) /
                                                      100,
                                                      +rate
                                                  )
                                              )}{" "}
                                              / month
                                            </p>
                                            <p className={"number"}>{rate}%</p>
                                            <Button
                                                onClick={() =>
                                                    actions.theme.setValidateAndNextCallback(
                                                        new Date().getTime()
                                                    )
                                                }
                                                className={"small next-step"}
                                                label={"I want this deal"}
                                            />
                                          </th>
                                      )
                                  )}
                                </tr>
                                </thead>
                                <tbody>
                                <tr className={"head"}>
                                  <td scope={"row"} className={"white"}>
                                    <strong>LTV</strong>
                                  </td>
                                  {products.map(({ID, fields: {maximum_ltv}}) => (
                                      <td key={ID} className={"details"} data-label="LTV">
                                        {maximum_ltv}%
                                      </td>
                                  ))}
                                </tr>
                                <tr className={"head last-head"}>
                                  <td scope={"row"} className={"white"}>
                                    <strong>Credit score</strong>
                                  </td>
                                  {products.map(({ID, fields: {beacon_score}}) => (
                                      <td
                                          key={ID}
                                          className={"details"}
                                          data-label="beacon_score"
                                      >
                                        {beaconScore(beacon_score)}
                                      </td>
                                  ))}
                                </tr>
                                <tr className={"head"}>
                                  <td scope={"row"} className={"white"}>
                                    <strong>Fixed rate</strong>
                                  </td>
                                  {products.map(({ID, fields: {rate}}) => (
                                      <td
                                          key={ID}
                                          className={"details"}
                                          data-label="Fixed rate"
                                      >
                                        {(+rate + 0.25).toFixed?.(2)}%
                                      </td>
                                  ))}
                                </tr>
                                <tr className={"head"}>
                                  <td scope={"row"} className={"white"}>
																		<strong>Lender fee</strong>
                                  </td>
                                  {products.map(({ID, fields: {fee}}) => (
                                      <td
                                          key={ID}
                                          className={"details"}
                                          data-label="Lender fee"
                                      >
                                        {fee}%
                                      </td>
                                  ))}
                                </tr>

                                {productsTable[type] &&
                                Object.entries(productsTable[type]).map(
                                    ([id, {name, specificationProducts}]) => (
                                        <tr key={id}>
                                          <td scope={"row"}>{name}</td>
                                          {products.map(({ID}) =>
                                              specificationProducts.indexOf(ID) >= 0 ? (
                                                  <td key={ID}>
                                                    <CheckMark/>
                                                  </td>
                                              ) : (
                                                  <td key={ID}/>
                                              )
                                          )}
                                        </tr>
                                    )
                                )}
                                </tbody>
                              </ProductsTable>
                          )
                      )}
                    </FormFilter>
                ) : (
                    <div className="mortgage-options-mobile">
                      <FormFilter filters={productsFilter}>
                        {Object.entries(state.theme.stepResponse.data?.data)
                            .filter(([, {products}])=>products?.length)
                            .map(
                            ([type, {products}, index]) => (
                                <div key={type} data-filter={type}>
                                  {products.map(
                                      (
                                          {
                                            ID,
                                            fields: {
                                              rate,
                                              fee,
                                              maximum_ltv,
                                              beacon_score,
                                              specifications,
                                            },
                                          },
                                          productIndex
                                      ) => (
                                          <ProductsMobileOption key={ID}>
                                            <div className="mortgage-title">
                                              <p className={"circle"}>{productIndex + 1}</p>
                                              <p>{productTypeToFullName(type)}</p>
                                              <p className={"dark"}>Variable rates</p>
                                            </div>
                                            <div className="mortgage-head">
                                              <p className={"number"}>{rate}%</p>
                                              <p>
                                                $
                                                {numberWithCommas(
                                                    monthlyPayments(
                                                        (+section1Values("home_value") *
                                                            maximum_ltv) /
                                                        100,
                                                        +rate
                                                    )
                                                )}{" "}
                                                / month
                                              </p>
                                              <p>
                                                $
                                                {numberWithCommas(
                                                    (+section1Values("home_value") *
                                                        maximum_ltv) /
                                                    100
                                                )}{" "}
                                                max
                                              </p>
                                              <Button
                                                  onClick={() =>
                                                      actions.theme.setValidateAndNextCallback(
                                                          new Date().getTime()
                                                      )
                                                  }
                                                  className={"small next-step"}
                                                  label={"I want this deal"}
                                              />
                                            </div>
                                            <div className="mortgage-body">
                                              <div className={"m-row m-head"}>
                                                <p className="white"><strong>Fixed rate</strong></p>
                                                <p>{(+rate + 0.25).toFixed?.(2)}%</p>
                                              </div>
                                              <div className={"m-row m-head"}>
                                                <p className="white"><strong>Lender fee</strong></p>
                                                <p>{fee}%</p>
                                              </div>
                                              <div className={"m-row m-head  m-head"}>
                                                <p className="white"><strong>LTV</strong></p>
                                                <p>{maximum_ltv}%</p>
                                              </div>
                                              <div
                                                  className={"m-row m-head  m-head last-head"}
                                              >
                                                <p>Credit score</p>
                                                <p>{beaconScore(beacon_score)}</p>
                                              </div>
                                              {specifications
                                                  .slice(0, 4)
                                                  .map(({term_id, name}) => (
                                                      <div key={term_id} className={"m-row"}>
                                                        <p>{name}</p>
                                                        <p>
                                                          <CheckMark/>
                                                        </p>
                                                      </div>
                                                  ))}
                                              {specifications.length > 4 ? (
                                                  <>
                                                    <div className={"show-all-specs"}>
                                                      Show all specifications
                                                      <svg viewBox="0 0 8 4">
                                                        <path
                                                            fill="none"
                                                            stroke="#d2f5e9"
                                                            strokeMiterlimit="20"
                                                            d="M1 .5v0l3 3c1.172-1.17 1.828-1.83 3-3"
                                                        />
                                                      </svg>
                                                    </div>
                                                    <div className="remaining-specs">
                                                      {specifications
                                                          .slice(4)
                                                          .map(({term_id, name}) => (
                                                              <div
                                                                  key={term_id}
                                                                  className={"m-row"}
                                                              >
                                                                <p>{name}</p>
                                                                <p>
                                                                  <CheckMark/>
                                                                </p>
                                                              </div>
                                                          ))}
                                                    </div>
                                                  </>
                                              ) : null}
                                            </div>
                                          </ProductsMobileOption>
                                      )
                                  )}
                                </div>
                            )
                        )}
                      </FormFilter>
                    </div>
                )
            ) : null}
            <div className="btn-group">
              <Button className={"bordered prev-step"} label={"Back"}/>
            </div>
          </FormStep>
          <FormStep
              apiStepNumber={1}
              pageName={pageName}
              activeTheme={formData.section_4?.section_theme}
              stepName={formData.section_4?.section_name}
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
                {formData.section_4?.title}
              </h1>
              <h2 className={"form-headline-2 primary"}>
                {formData.section_4?.subtitle}
              </h2>
            </div>
            <Address
                address={{name: "address", ...formData.section_4?.address_input}}
                city={{name: "city", ...formData.section_4?.city_input}}
                postalCode={{
                  name: "postal_code",
                  ...formData.section_4?.postal_code_input,
                }}
                postalCodeOnChange={postalCodeOnChange}
            />
            <Select
                name={"property_details_1"}
                {...formData.section_4?.property_details_1_dropdown}
            />
            <Select
                name={"property_details_2"}
                {...formData.section_4?.property_details_2_dropdown}
            />
            <div className="btn-group">
              <Button className={"bordered prev-step"} label={"Back"}/>
              <Button icon={true} label={"Next"} className={"next-step"}/>
            </div>
          </FormStep>
          <FormStep
              apiStepNumber={2}
              pageName={pageName}
              activeTheme={formData.section_5?.section_theme}
              stepName={formData.section_5?.section_name}
          >
            <div className="form-text-wrapper">
              <h1 className={"form-headline-1 text-left"}>
                {formData.section_5?.title}
              </h1>
            </div>
            <RadioGroup
                radioText={formData.section_5?.looking_for_yes_no.label}
                checked={"first"}
            >
              <RadioInput
                  label={formData.section_5?.looking_for_yes_no.yes}
                  value={"first"}
                  name={"looking_for"}
                  type={"radio"}
                  onClick={() => setShow1stMortgageInput(false)}
              />
              <RadioInput
                  label={formData.section_5?.looking_for_yes_no.no}
                  value={"second"}
                  name={"looking_for"}
                  type={"radio"}
                  onClick={() => setShow1stMortgageInput(true)}
              />
            </RadioGroup>

            <W50>
              <Input
                  type={"number"}
                  isCurrency
                  name={"purchase_price"}
                  {...formData.section_5?.purchase_price_input}
              />
              <Input
                  type={"number"}
                  isCurrency
                  name={"down_payment"}
                  {...formData.section_5?.down_payment_input}
              />
            </W50>

            {show1stMortgageInput &&<Input
                type={"number"}
                isCurrency
                className={"mortgage_value_1"}
                name={"mortgage_value_1"}
                {...formData.section_5?.mortgage_value_1_input}
            />}


            <div className="btn-group">
              <Button className={"bordered prev-step"} label={"Back"}/>
              <Button icon={true} className={"next-step"} label={"Next"}/>
            </div>
          </FormStep>
          <FormStep
              sendSteps={[
                formData.section_1?.section_name,
                formData.section_2?.section_name,
                formData.section_4?.section_name,
                formData.section_5?.section_name,
              ]}
              apiStepNumber={3}
              pageName={pageName}
              activeTheme={formData.section_6?.section_theme}
              stepName={formData.section_6?.section_name}
              onNext={() => (state.theme.stepResponse.data?.data
                  ? Object.values(state.theme.stepResponse.data?.data)[0].products
                  : []).length || actions.router.set('/not-qualified')}
          >
            <input type={'hidden'} name={`ltv`} value={(mortgage / +section1Values('home_value') * 100).toFixed?.(2)}/>
            <div className="form-text-wrapper">
              <h1 className={"form-headline-1 text-left"}>
                Just one more thing…
              </h1>
              <h1 className={"form-headline-2 primary"}>
                Who are the borrower(s)?
              </h1>
            </div>
            <FormRepeatableInput
                fixedNumber={+section2Values("applicants_number") || 1}
            >
              <W50>
                <Input
                    type={"text"}
                    name={"applicant_fname_{{number}}"}
                    {...formData.section_6?.applicant.first_name_input}
                />
                <Input
                    type={"text"}
                    name={"applicant_lname_{{number}}"}
                    {...formData.section_6?.applicant.last_name_input}
                />
                <Input
                    type={"text"}
                    pattern={
                      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
                    }
                    name={"applicant_mail_{{number}}"}
                    {...formData.section_6?.applicant.email_input}
                />
                <Input
                    type={"phone"}
                    isPhoneNumber
                    name={"applicant_phone_{{number}}"}
                    {...formData.section_6?.applicant.phone_input}
                />
              </W50>
            </FormRepeatableInput>
            {[...Array(+section2Values("applicants_number") || 1).keys()].map(
                (i) => (
                    <input
                        key={i}
                        type="hidden"
                        name={`applicant_score_${i + 1}`}
                        value={section2Values(`applicant_score_${i + 1}`)}
                    />
                )
            )}

            <div className="btn-group">
              <Button className={"bordered prev-step"} label={"Back"}/>
              <Button icon={true} label={"Next"} className={"next-step"}/>
            </div>
          </FormStep>
          <FormStep
              apiStepNumber={4}
              pageName={pageName}
              activeTheme={formData.section_7?.section_theme}
              stepName={formData.section_7?.section_name}
          >
            <Finalize className={"is-smaller"}>
						<FinalizeHeading>
						<h1 className={"form-headline-1 text-left"}>
						{formData.section_7?.title}
						</h1>

						<h2 className={"form-headline-2 text-left"}>
						{formData.section_7?.subtitle}
						</h2>

						<p>
						You are requesting a <span> home equity line of credit</span> against your {section4Values("property_details_1")} home, which is located at
						</p>

						<p className="bolder">
						{section4Values("address")}, {section4Values("city")},{" "}
                {section4Values("postal_code")}
						</p>
					</FinalizeHeading>
					<FinalizePercentage>
							<P.Num>{+firstProduct.fields?.rate + 0.25}%</P.Num>

							<P.Small className="meta">*Variable rate</P.Small>

							<P.Num className="smaller">${numberWithCommas(mortgage)}</P.Num>
							<P.Small className="meta">*Maximum mortgage amount</P.Small>

							<P.Num className="smaller">$
                    {numberWithCommas(
                        monthlyPayments(mortgage, +firstProduct.fields?.rate / 100)
                    )}</P.Num>
							<P.Small className="meta">*Monthly mortgage payment</P.Small>

							{/* <p className="primary form-headline-3 text-left heloc-var"> {String(firstProduct.title).split(" ")[0]} HELOC</p> */}
					</FinalizePercentage>
					<FinalizeRows>
						<FinalizeRow>
							<FinalizeCol>
							{[
										...Array(+section2Values("applicants_number") || 0).keys(),
									].map((index, personIndex) => {
										const applicantFName = section6Values(
												`applicant_fname_${index + 1}`
										);
										const applicantLName = section6Values(
												`applicant_lname_${index + 1}`
										);
										const applicantScore = section6Values(
												`applicant_score_${index + 1}`
										);
										return (
											<P.Large key={`person-desktop-${personIndex}`}>
												<Span.isWhite>
													<strong>{applicantFName} {applicantLName} {applicantScore}</strong>
												</Span.isWhite>
											</P.Large>
										);
									})}
							</FinalizeCol>
						</FinalizeRow>
					</FinalizeRows>
					<FinalizeRows>
								<FinalizeRow>
									<FinalizeCol>
										<P.D>
											<Span.isLightgreen>
												<strong>Your Info</strong>
											</Span.isLightgreen>
										</P.D>
									</FinalizeCol>
								</FinalizeRow>

								<FinalizeRow>
									<FinalizeCol>
										<P.White>Qualify up to</P.White>
									</FinalizeCol>

									<FinalizeCol>
										<P.White>
											<strong>$
                        {numberWithCommas(
                            Math.round(
                                (+section1Values("home_value") *
                                    firstProduct.fields?.maximum_ltv) /
                                100
                            )
                        )}
											</strong>
										</P.White>
									</FinalizeCol>
								</FinalizeRow>

								<FinalizeRow>
									<FinalizeCol>
										<P.White>
											Property value
										</P.White>
									</FinalizeCol>

									<FinalizeCol>
										<P.White>
											<strong>${numberWithCommas(+section1Values("home_value"))}</strong>
										</P.White>
									</FinalizeCol>
								</FinalizeRow>

								<FinalizeRow>
									<FinalizeCol>
										<P.White>
											Mortgage request
										</P.White>
									</FinalizeCol>

									<FinalizeCol>
										<P.White>
											<strong>${numberWithCommas(mortgage)}</strong>
										</P.White>
									</FinalizeCol>
								</FinalizeRow>

								<FinalizeRow>
									<FinalizeCol>
										<P.White>
											Down payment
										</P.White>
									</FinalizeCol>

									<FinalizeCol>
										<P.White>
											<strong>${numberWithCommas(+section1Values("home_value") - mortgage)}</strong>
										</P.White>
									</FinalizeCol>
								</FinalizeRow>

								<FinalizeRow>
									<FinalizeCol>
										<P.White>
											LTV
										</P.White>
									</FinalizeCol>

									<FinalizeCol>
										<P.White>
											<strong>
											{(
                        (mortgage / +section1Values("home_value")) *
												100
											).toFixed?.(2)}
											%
											</strong>
										</P.White>
									</FinalizeCol>
								</FinalizeRow>
					</FinalizeRows>
							<FinalizeRows>
								<FinalizeRow className={"border"}>
									<FinalizeCol>
										<P.D>
											<Span.isLightgreen>
												<strong>Product Info</strong>
											</Span.isLightgreen>
										</P.D>
									</FinalizeCol>
								</FinalizeRow>

								<FinalizeRow>
									<FinalizeCol>
										<P.D >
											<strong>Max LTV</strong>
										</P.D>
									</FinalizeCol>

									<FinalizeCol>
										<P.D>
											<strong>Up to {firstProduct.fields?.maximum_ltv}%</strong>
										</P.D>
									</FinalizeCol>
								</FinalizeRow>

								<FinalizeRow>
									<FinalizeCol>
										<P.D >
											<strong>Credit score</strong>
										</P.D>
									</FinalizeCol>

									<FinalizeCol>
										<P.D>
											<strong>{beaconScore(firstProduct.fields?.beacon_score)}</strong>
										</P.D>
									</FinalizeCol>
								</FinalizeRow>

								<FinalizeRow>
									<FinalizeCol>
										<P.D>
											<strong>Lender fee</strong>
										</P.D>
									</FinalizeCol>

									<FinalizeCol>
										<P.D >
											<strong>{firstProduct.fields?.fee}%</strong>
										</P.D>
									</FinalizeCol>
								</FinalizeRow>

								{firstProduct.fields?.specifications.map(
									({term_id, name}) => (
											<FinalizeRow key={term_id}>
												<FinalizeCol>
													<P.D >{name}</P.D>
												</FinalizeCol>
											</FinalizeRow>
									)
								)}
								<FinalizeRow>
									<FinalizeCol>
										<P.D >
											Purchase
										</P.D>
									</FinalizeCol>
								</FinalizeRow>
								<FinalizeRow>
									<FinalizeCol>
										<P.D >
										{ fixCharacters(section4Values("property_details_2")) }
										</P.D>
									</FinalizeCol>
								</FinalizeRow>
							</FinalizeRows>
            </Finalize>
            <div className="btn-group">
              <Button
                  className={"bordered reset-form small"}
                  label={"No, edit the details"}
              />
              <Button label={"I’m good to go"} className={"next-step small"}/>
            </div>
          </FormStep>
          <FormStep
              apiStepNumber={5}
              pageName={pageName}
              activeTheme={formData.section_8?.section_theme}
              stepName={formData.section_8?.section_name}
          >
            <div className="upload-step-wrapper">
              <img src={upload}/>
              <h1 className={"form-headline-1 text-left"}>
                {formData.section_8?.title}
              </h1>
              <FormConditionalInput
                  noScroll
                  name={"mortgages_1"}
                  showOn={"1"}
                  checked={"0"}
                  {...formData.section_8?.have_appraisal_report_yes_no}
              >
                <FileInput
                    name="appraisal_report_file"
                    label={formData.section_8?.appraisal_report_upload_label}
                    acceptText={"PDF, JPG, or PNG"}
                />
                <Appraiser>
								<p className="form-headline-2 text-left">Your BDM is</p>
									<p
                          className={"form-headline-1 text-left"}
                          dangerouslySetInnerHTML={{
                            __html: appraiser?.fields?.bdm.name,
                          }}
                      />
                  <div className="row">
                    <div className="col-left">
										<P.D>Select an appraiser</P.D>
                    </div>
                    <div className="col-right">
                      <RadioGroup
                          className={"vertical-radio"}
                          radioText={"*Click to call"}
                      >
                        {appraiser?.fields?.preferred_appraisal_company.map(
                            ({post_name}, index) => {
                              return (
                                  <AppraiserInput
                                      key={index}
                                      appraiserName={post_name}
                                      value={post_name}
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
                      <Button label={"Alert"}/>
                    </div>
                  </div>
                </Appraiser>
              </FormConditionalInput>
              <hr/>
              <TextArea
                  name={"additional_notes"}
                  {...formData.section_8?.additional_notes_input}
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
              activeTheme={formData.section_9?.section_theme}
              stepName={formData.section_9?.section_name}
          >
            <LastStep>
              <img
                  src={formData.section_9?.image.url}
                  alt={formData.section_9?.image.alt}
              />
              <div className="text">
                <h1 className={"form-headline-1 text-left"}>
                  {formData.section_9?.title}
                </h1>
                <p className={"form-headline-3 primary lighter"}>
                  {formData.section_9?.subtitle}
                </p>
                <Wysiwyg
                    dangerouslySetInnerHTML={{
                      __html: formData.section_9?.steps.replace(
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

export default styled(connect(C2Page))`
  width: 100%;
  height: 100%;
  ${Bottom} {
    padding-top: 0;
    .full {
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
    max-width: 85rem;
    .form-headline-3 {
      max-width: ${size(400)};
      @media (max-width: 575.98px) {
        max-width: 90%;
      }
    }
  }

	.mortgage_value_1 {
		display: none;

		&.active {
			display: block;
		}
	}
`;
