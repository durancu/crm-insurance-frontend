import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Actions
import {
  insurerListRequest,
  customerLoadRequest,
  saleCreateRequest,
} from "../../redux/actions";
//Functions
import {
  totalChargeFunction,
  pendingPaymentFunction,
  bonusFunction,
} from "../globals/functions";
//components
import { Row, Col, Form, Button } from "react-bootstrap";

const defaultForm = {
  soldAt: Date,
  customer: "",
  liabilityInsurer: "",
  liabilityCharge: 0,
  cargoInsurer: "",
  cargoCharge: 0,
  physicalDamageInsurer: "",
  physicalDamageCharge: 0,
  wcGlUmbInsurer: "",
  wcGlUmbCharge: 0,
  fees: 0,
  permits: 0,
  tips: 0,
  chargesPaid: 0,
};

export const FormSale = ({
  insurers,
  customers,
  loadingInsurer,
  errorInsurer,
  loadingCustomer,
  errorCustomer,
  insurerListRequest,
  customerLoadRequest,
  saleCreateRequest,
}) => {
  //States
  const [form, setForm] = useState(defaultForm);
  const [totalCharge, setTotalCharge] = useState(0);
  const [pendingPayment, setPendingPayment] = useState(0);
  const [bonus, setBonus] = useState(0);

  //Load Insurer List
  useEffect(() => {
    insurerListRequest();
    customerLoadRequest();
    setTotalCharge(totalChargeFunction(form));
    setPendingPayment(pendingPaymentFunction(form));
    setBonus(bonusFunction(form));
  }, [insurerListRequest, customerLoadRequest, form]);

  //Load data of form
  const handleChange = ({ target }) => {
    switch (target.name) {
      case "soldAt":
        setForm((form) => ({
          ...form,
          [target.name]: new Date(target.value).toISOString(),
        }));
        break;
      case "liabilityCharge":
        setForm((form) => ({
          ...form,
          [target.name]: parseFloat(target.value),
        }));
        break;
      case "cargoCharge":
        setForm((form) => ({
          ...form,
          [target.name]: parseFloat(target.value),
        }));
        break;
      case "physicalDamageCharge":
        setForm((form) => ({
          ...form,
          [target.name]: parseFloat(target.value),
        }));
        break;
      case "wcGlUmbCharge":
        setForm((form) => ({
          ...form,
          [target.name]: parseFloat(target.value),
        }));
        break;
      case "fees":
        setForm((form) => ({
          ...form,
          [target.name]: parseFloat(target.value),
        }));
        break;
      case "permits":
        setForm((form) => ({
          ...form,
          [target.name]: parseFloat(target.value),
        }));
        break;
      case "tips":
        setForm((form) => ({
          ...form,
          [target.name]: parseFloat(target.value),
        }));
        break;
      case "chargesPaid":
        setForm((form) => ({
          ...form,
          [target.name]: parseFloat(target.value),
        }));
        break;
      default:
        setForm((form) => ({ ...form, [target.name]: target.value }));
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saleCreateRequest(form);
  };

  return (
    <Fragment>
      <h1 className="mb-4 mt-2">Create Sale</h1>
      <Form onSubmit={handleSubmit}>
        {/* ROW 1  Date:*/}
        <Form.Group>
          <Row className="row justify-content-center">
            <Col>
              <Form.Row>
                <Form.Label style={{ textAlign: "right" }} column sm={5}>
                  Date:
                </Form.Label>
                <Col sm="6">
                  <Form.Control
                    type="date"
                    name="soldAt"
                    required
                    onChange={handleChange}
                  />
                </Col>
              </Form.Row>
            </Col>
            <Col>
              <Form.Row>
                <Form.Label style={{ textAlign: "right" }} column lg={2}>
                  Customer:
                </Form.Label>
                <Col>
                  <Form.Control
                    as="select"
                    name="customer"
                    value={form.customer}
                    custom
                    required={form.customer !== "" ? false : true}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      N/A
                    </option>
                    {customers.map((customer) => (
                      <option key={customer._id} value={customer._id}>
                        {customer.name}
                      </option>
                    ))}
                  </Form.Control>
                </Col>
                <Col>
                  <Button variant="primary">
                    <b>+</b>
                  </Button>
                </Col>
              </Form.Row>
            </Col>
          </Row>
        </Form.Group>
        {/* ROW 2  Liability Insurance:*/}
        <Form.Group>
          <Row>
            <Col>
              <Form.Row>
                <Form.Label style={{ textAlign: "right" }} column md={5}>
                  Liability Insurance:
                </Form.Label>
                <Col lg={6}>
                  <Form.Control
                    as="select"
                    name="liabilityInsurer"
                    custom
                    onChange={handleChange}
                  >
                    <option value="">N/A</option>
                    {insurers.map(
                      (insurer) =>
                        insurer.liabilityCommission !== -1 && (
                          <option key={insurer._id} value={insurer._id}>
                            {insurer.name}
                          </option>
                        )
                    )}
                  </Form.Control>
                </Col>
                <Col lg={1}>
                  <Button variant="primary">
                    <b>+</b>
                  </Button>
                </Col>
              </Form.Row>
            </Col>
            <Col>
              {form.liabilityInsurer !== "" && (
                <Form.Row>
                  <Form.Label style={{ textAlign: "right" }} column lg={2}>
                    Charge:
                  </Form.Label>
                  <Col sm="5">
                    <Form.Control
                      type="text"
                      name="liabilityCharge"
                      onChange={handleChange}
                      required={form.liabilityInsurer !== "" && true}
                    />
                  </Col>
                </Form.Row>
              )}
            </Col>
          </Row>
        </Form.Group>
        {/* ROW 3 Motor Cargo Insurance:*/}
        <Form.Group>
          <Row>
            <Col>
              <Form.Row>
                <Form.Label style={{ textAlign: "right" }} column md={5}>
                  Motor Cargo Insurance:
                </Form.Label>
                <Col lg={6}>
                  <Form.Control
                    as="select"
                    name="cargoInsurer"
                    custom
                    onChange={handleChange}
                  >
                    <option value="">N/A</option>
                    {insurers.map(
                      (insurer) =>
                        insurer.cargoCommission !== -1 && (
                          <option key={insurer._id} value={insurer._id}>
                            {insurer.name}
                          </option>
                        )
                    )}
                  </Form.Control>
                </Col>
                <Col lg={1}>
                  <Button variant="primary">
                    <b>+</b>
                  </Button>
                </Col>
              </Form.Row>
            </Col>
            <Col>
              {form.cargoInsurer !== "" && (
                <Form.Row>
                  <Form.Label style={{ textAlign: "right" }} column lg={2}>
                    Charge:
                  </Form.Label>
                  <Col sm="5">
                    <Form.Control
                      type="text"
                      name="cargoCharge"
                      onChange={handleChange}
                      required={form.cargoInsurer !== "" && true}
                    />
                  </Col>
                </Form.Row>
              )}
            </Col>
          </Row>
        </Form.Group>
        {/* ROW 4 Physical Damage Insurance:*/}
        <Form.Group>
          <Row>
            <Col>
              <Form.Row>
                <Form.Label style={{ textAlign: "right" }} column md={5}>
                  Physical Damage Insurance:
                </Form.Label>
                <Col lg={6}>
                  <Form.Control
                    as="select"
                    name="physicalDamageInsurer"
                    custom
                    onChange={handleChange}
                  >
                    <option value="">N/A</option>
                    {insurers.map(
                      (insurer) =>
                        insurer.physicalDamageCommission !== -1 && (
                          <option key={insurer._id} value={insurer._id}>
                            {insurer.name}
                          </option>
                        )
                    )}
                  </Form.Control>
                </Col>
                <Col lg={1}>
                  <Button variant="primary">
                    <b>+</b>
                  </Button>
                </Col>
              </Form.Row>
            </Col>
            <Col>
              {form.physicalDamageInsurer !== "" && (
                <Form.Row>
                  <Form.Label style={{ textAlign: "right" }} column lg={2}>
                    Charge:
                  </Form.Label>
                  <Col sm="5">
                    <Form.Control
                      type="text"
                      name="physicalDamageCharge"
                      onChange={handleChange}
                      required={form.physicalDamageInsurer !== "" && true}
                    />
                  </Col>
                </Form.Row>
              )}
            </Col>
          </Row>
        </Form.Group>
        {/* ROW 5  WC,GL,UMB Insurance:*/}
        <Form.Group>
          <Row>
            <Col>
              <Form.Row>
                <Form.Label style={{ textAlign: "right" }} column md={5}>
                  WC,GL,UMB Insurance:
                </Form.Label>
                <Col lg={6}>
                  <Form.Control
                    as="select"
                    name="wcGlUmbInsurer"
                    custom
                    onChange={handleChange}
                  >
                    <option value="">N/A</option>
                    {insurers.map(
                      (insurer) =>
                        insurer.wcGlUmbCommission !== -1 && (
                          <option key={insurer._id} value={insurer._id}>
                            {insurer.name}
                          </option>
                        )
                    )}
                  </Form.Control>
                </Col>
                <Col lg={1}>
                  <Button variant="primary">
                    <b>+</b>
                  </Button>
                </Col>
              </Form.Row>
            </Col>
            <Col>
              {form.wcGlUmbInsurer !== "" && (
                <Form.Row>
                  <Form.Label style={{ textAlign: "right" }} column lg={2}>
                    Charge:
                  </Form.Label>
                  <Col sm="5">
                    <Form.Control
                      type="text"
                      name="wcGlUmbCharge"
                      onChange={handleChange}
                      required={form.wcGlUmbInsurer !== "" && true}
                    />
                  </Col>
                </Form.Row>
              )}
            </Col>
          </Row>
        </Form.Group>
        {/* ROW 6 Permits:*/}
        <Form.Group>
          <Row>
            <Col md="6">
              <Form.Row>
                <Form.Label style={{ textAlign: "right" }} column md={5}>
                  Permits:
                </Form.Label>
                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="permits"
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Form.Row>
            </Col>
          </Row>
        </Form.Group>
        {/* ROW 7   Fees:*/}
        <Form.Group>
          <Row>
            <Col md="6">
              <Form.Row>
                <Form.Label style={{ textAlign: "right" }} column md={5}>
                  Fees:
                </Form.Label>
                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="fees"
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Form.Row>
            </Col>
          </Row>
        </Form.Group>
        {/* ROW 8 Tips:*/}
        <Form.Group>
          <Row>
            <Col md="6">
              <Form.Row>
                <Form.Label style={{ textAlign: "right" }} column md={5}>
                  Tips:
                </Form.Label>
                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="tips"
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Form.Row>
            </Col>
          </Row>
        </Form.Group>
        {/* ROW 9 Total Amount to charge:*/}
        <Row className="mb-4 mt-5">
          <p style={{ textAlign: "right" }}>
            Total Policy Premium  : ${totalCharge}
            {/* Total To Charge = Sum(insuranceCharges+Permits+Fees+Tips */}
          </p>
        </Row>
        {/* ROW 10 Total Charged:*/}
        <Form.Group>
          <Row>
            <Col md="6">
              <Form.Row>
                <Form.Label style={{ textAlign: "right" }} column md={5}>
                  Total Charge:
                </Form.Label>
                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="chargesPaid"
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Form.Row>
            </Col>
          </Row>
        </Form.Group>
        {/* ROW 11 Pending Amount to pay:*/}
        <Row className="mb-4 mt-5">
          <p style={{ textAlign: "center" }}>
            Pending Amount to pay: ${pendingPayment}
            {/* Pending Payment = Total To Charge - Total Charged */}
          </p>
        </Row>
        {/* ROW 12 Bonus Estimation*/}
        <Row>
          <h4>Bonus Estimation</h4>
        </Row>
        {/* ROW 12 The estimated bonus for this sale is:*/}
        <Row>
          The estimated bonus for this sale is: ${bonus}
          {/* Bonus = 1% [ Sum (Liability -> WC,GL,UMB] + 30% [Fees] + 20% [Permits] + Tips*/}
        </Row>
        {/* ROW 12 Buttons Cancel and Submit*/}
        <Row className="mb-4 mt-5">
          <Col sm="3">
            <Button block size="lg" variant="secondary">
              Cancel
            </Button>
          </Col>
          <Col sm="6" />
          <Col sm="3">
            <Button size="lg" type="submit" variant="primary" block>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
};

FormSale.propTypes = {
  loadingInsurer: PropTypes.bool.isRequired,
  errorInsurer: PropTypes.bool.isRequired,
  loadingCustomer: PropTypes.bool.isRequired,
  errorCustomer: PropTypes.bool.isRequired,
  insurers: PropTypes.array.isRequired,
  customers: PropTypes.array.isRequired,
  insurerListRequest: PropTypes.func.isRequired,
  customerLoadRequest: PropTypes.func.isRequired,
  saleCreateRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loadingInsurer: state.insurerListStatusReducer.loading,
  errorInsurer: state.insurerListStatusReducer.error,
  loadingCustomer: state.customerLoadStatusReducer.loading,
  errorCustomer: state.customerLoadStatusReducer.error,
  insurers: state.insurerReducer.list,
  customers: state.customerReducer.list,
});

const mapDispatchToProps = {
  insurerListRequest,
  customerLoadRequest,
  saleCreateRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormSale);
