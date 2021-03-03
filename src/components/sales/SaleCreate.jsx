import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { connect } from "react-redux";

//Actions
import {
  insurerListRequest,
  customerLoadRequest,
  saleCreateRequest,
} from "../../redux/actions";
//Functions
import {
  premiumCalculate,
  totalChargeCalculate,
  pendingPaymentCalculate,
} from "../globals/functions";

import { salesCreateValidate } from "./saleCreateValidate";
//components
import {
  Row,
  Col,
  Form,
  Button,
  Modal,
  Container,
  Badge,
  InputGroup,
} from "react-bootstrap";
import CustomerForm from "../manage/customers/CustomerForm";

const defaultForm = {
  soldAt: moment().format("YYYY-MM-DD"),
  fees: 0,
  permits: 0,
  downPayment: 0,
  chargesPaid: 0,
  tips: 0,
};

const defaultFormStates = {
  liabilityInsurer: "",
  cargoInsurer: "",
  physicalDamageInsurer: "",
  wcGlUmbInsurer: "",
  liabilityCharge: "0",
  cargoCharge: "0",
  physicalDamageCharge: "0",
  wcGlUmbCharge: "0",
};

export const SaleCreate = ({
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
  //--STATES--//
  //Modals
  const [modalSale, setModalSale] = useState(false);
  const [modalCustomer, setModalCustomer] = useState(false);
  //Date and Values
  const [soldAt, setSoldAt] = useState(defaultForm.soldAt);
  const [formValues, setFormValues] = useState(defaultForm);
  const [formStates, setFormStates] = useState(defaultFormStates);
  //Auto Calculate
  const [totalCharge, setTotalCharge] = useState(0);
  const [pendingPayment, setPendingPayment] = useState(0);
  const [premium, setPremium] = useState(0);
  //ValidateForms
  const [validate, setValidate] = useState(false);
  const [errors, setErrors] = useState({ errors: [] });

  //Load Insurer List
  useEffect(() => {
    insurerListRequest();
    customerLoadRequest();
  }, [insurerListRequest, customerLoadRequest]);

  //Calculate totalCharge pendingPayment
  useEffect(() => {
    //console.log("formUseEffect", formValues);
    setPremium(premiumCalculate(formValues));
    setTotalCharge(totalChargeCalculate(formValues));
    setPendingPayment(pendingPaymentCalculate(formValues));
  }, [formValues]);

  //Load data of formValues
  const handleChange = ({ target }) => {
    setFormStates({ ...formStates, [target.name]: target.value });
    switch (target.name) {
      case "soldAt":
        setSoldAt(moment(target.value).format("YYYY-MM-DD"));

        setFormValues((formValues) => ({
          ...formValues,
          [target.name]: new Date(target.value).toISOString(), //preguntarle a Liuver como evaluar una fuecha correctamente
        }));
        break;
      case "liabilityCharge":
      case "cargoCharge":
      case "physicalDamageCharge":
      case "wcGlUmbCharge":
      case "fees":
      case "permits":
      case "tips":
      case "chargesPaid":
      case "downPayment":
        setFormValues((formValues) => ({
          ...formValues,
          [target.name]: parseFloat(target.value),
        }));
        break;
      default:
        setFormValues((formValues) => ({
          ...formValues,
          [target.name]: target.value,
        }));
        break;
    }
  };

  const handleBlur = ({ target }) => {
    (target.value === "0" || target.value === "") &&
      delete formValues[target.name];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      //   setValidate(true);
    }
    const result = salesCreateValidate(formValues);
    setErrors(result);

    if (!Object.keys(result).length) {
    }
    console.log(errors);
  };

  const handleModalSale = () => {
    setModalSale(!modalSale);
    setFormValues(defaultForm);
  };

  const handleModalCustomer = () => {
    setModalCustomer(!modalCustomer);
  };

  return (
    <>
      <Button onClick={handleModalSale}>Add Sales</Button>
      <CustomerForm
        edit={false}
        modal={modalCustomer}
        showModal={handleModalCustomer}
      />
      <Modal size="xl" show={modalSale} onHide={handleModalSale}>
        <Form onSubmit={handleSubmit} noValidate validated={validate}>
          <Modal.Header closeButton>
            <Modal.Title>Sales Create</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>*</span> Sale Date:
                    </Form.Label>
                    <Form.Control
                      type="date"
                      name="soldAt"
                      value={soldAt}
                      required
                      isInvalid={errors.soldAt}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.soldAt}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>*</span> Customer:
                    </Form.Label>
                    <InputGroup className="mb-3">
                      <Form.Control
                        as="select"
                        name="customer"
                        value={formValues.customer}
                        defaultValue=""
                        custom
                        required
                        isInvalid={errors.customer}
                        onChange={handleChange}
                      >
                        <option value="">N/A</option>
                        {customers.map((customer) => (
                          <option key={customer._id} value={customer._id}>
                            {customer.name}
                          </option>
                        ))}
                      </Form.Control>
                      <InputGroup.Append>
                        <Button
                          variant="primary"
                          onClick={() => {
                            setModalCustomer(!modalCustomer);
                          }}
                        >
                          <b>+</b>
                        </Button>
                      </InputGroup.Append>
                      <Form.Control.Feedback type="invalid">
                        {errors.customer}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Badge variant="danger">{errors.insurers}</Badge>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>*</span> Liability Insurer:
                    </Form.Label>
                    <Form.Control
                      as="select"
                      name="liabilityInsurer"
                      custom
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={errors.insurers}
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
                    <Form.Control.Feedback type="invalid">
                      {errors.liabilityInsurer}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group hidden={formStates.liabilityInsurer === ""}>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>*</span> Liability Charge:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="liabilityCharge"
                      defaultValue="0"
                      isInvalid={errors.liabilityCharge}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.liabilityCharge}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>*</span> Motor Cargo
                      Insurer:
                    </Form.Label>
                    <Form.Control
                      as="select"
                      name="cargoInsurer"
                      custom
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={errors.insurers}
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
                    <Form.Control.Feedback type="invalid">
                      {errors.cargoInsurer}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group hidden={formStates.cargoInsurer === ""}>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>*</span> Motor Cargo
                      Charge:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="cargoCharge"
                      defaultValue="0"
                      onChange={handleChange}
                      isInvalid={errors.cargoCharge}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.cargoCharge}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>*</span> Physical Damage
                      Insurer:
                    </Form.Label>
                    <Form.Control
                      as="select"
                      name="physicalDamageInsurer"
                      custom
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={errors.insurers}
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
                    <Form.Control.Feedback type="invalid">
                      {errors.physicalDamageInsurer}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group hidden={formStates.physicalDamageInsurer === ""}>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>*</span> Physical Damage
                      Charge:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="physicalDamageCharge"
                      defaultValue="0"
                      onChange={handleChange}
                      required
                      isInvalid={errors.physicalDamageCharge}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.physicalDamageCharge}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>*</span> WC/GL/UMB Insurer:
                    </Form.Label>
                    <Form.Control
                      as="select"
                      name="wcGlUmbInsurer"
                      custom
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={errors.insurers}
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
                    <Form.Control.Feedback type="invalid">
                      {errors.wcGlUmbInsurer}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group hidden={formStates.wcGlUmbInsurer === ""}>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>*</span> WC/GL/UMB Charge:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="wcGlUmbCharge"
                      value={formStates.wcGlUmbCharge}
                      onChange={handleChange}
                      required
                      isInvalid={errors.wcGlUmbCharge}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.wcGlUmbCharge}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm="6">
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      Premium:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      value={premium}
                      disabled
                      size="sm"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>*</span> Down Payment:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="downPayment"
                      defaultValue="0"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      isInvalid={errors.downPayment}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.downPayment}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>*</span> Fees:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="fees"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue="0"
                      required={formValues.fees === ""}
                      isInvalid={errors.fees}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.fees}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>*</span> Permits:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="permits"
                      defaultValue="0"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      isInvalid={errors.permits}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.permits}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>*</span> Tips:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="tips"
                      defaultValue="0"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      isInvalid={errors.tips}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.tips}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      Total charge:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="totalCharge"
                      value={totalCharge}
                      disabled
                      size="sm"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      Pending Amount:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      value={pendingPayment}
                      disabled
                      size="sm"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm="6">
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>*</span> Charges Paid:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="chargesPaid"
                      defaultValue="0"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      isInvalid={errors.chargesPaid}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.chargesPaid}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Container>
              <Row className="justify-content-center">
                <Col lg="2">
                  <Button
                    size="lg"
                    variant="secondary"
                    block
                    onClick={handleModalSale}
                  >
                    Cancel
                  </Button>
                </Col>
                <Col />
                <Col lg="3">
                  <Button size="lg" variant="outline-secondary" block>
                    Save and New
                  </Button>
                </Col>
                <Col lg="3">
                  <Button size="lg" type="submit" variant="primary" block>
                    Save
                  </Button>
                </Col>
              </Row>
            </Container>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

SaleCreate.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(SaleCreate);
