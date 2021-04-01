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
  pendingPaymentCalculate,
  totalPremiumCalculate,
} from "../globals/functions";

import { salesCreateValidate } from "./saleCreateValidate";
//components
import {
  Col,
  Form,
  Button,
  Modal,
  Container,
  InputGroup,
} from "react-bootstrap";
import CustomerCreate from "../manage/customers/CustomerCreate";

const defaultForm = {
  soldAt: moment().format("YYYY-MM-DD"),
  customer: "",
  fees: 0,
  permits: 0,
  premium: 0,
  chargesPaid: 0,
  tips: 0,
  totalCharge: 0,
};

export const SaleCreate = ({
  insurers,
  customers,
  insurerListRequest,
  customerLoadRequest,
  saleCreateRequest,
  lastCustomer,
}) => {
  //--STATES--//
  //Modals
  const [modalSale, setModalSale] = useState(false);
  const [modalCustomer, setModalCustomer] = useState(false);
  //Date and Values
  const [formValues, setFormValues] = useState(defaultForm);
  const [formStates, setFormStates] = useState(defaultForm);
  //Auto Calculate
  const [premium, setPremium] = useState(0);
  const [pendingPayment, setPendingPayment] = useState(0);
  //ValidateForms
  const [errors, setErrors] = useState({ errors: [] });

  //Load Insurer List
  useEffect(() => {
    insurerListRequest();
    customerLoadRequest();
  }, [insurerListRequest, customerLoadRequest]);
  //
  useEffect(() => {
    lastCustomer &&
      setFormValues((formValues) => ({
        ...formValues,
        customer: lastCustomer._id,
      }));
  }, [lastCustomer]);
  //Calculate premium
  useEffect(() => {
    setPremium(totalPremiumCalculate(formValues));
    setPendingPayment(pendingPaymentCalculate(formValues));
  }, [formValues]);

  //Load data of formValues
  const handleChange = ({ target }) => {
    setFormStates({ ...formStates, [target.name]: target.value });
    switch (target.name) {
      case "soldAt":
        setFormStates({
          ...formStates,
          [target.name]: moment(target.value).format("YYYY-MM-DD"),
        });
        setFormValues((formValues) => ({
          ...formValues,
          [target.name]: target.value,
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
      case "premium":
      case "totalCharge":
        setFormValues({
          ...formValues,
          [target.name]: parseFloat(target.value),
        });
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
    target.value === "" && delete formValues[target.name];
  };

  const handleSubmit = (e = false, addMore = false) => {
    e && e.preventDefault();
    const result = salesCreateValidate(formValues);
    setErrors(result);
    console.log(errors);
    if (!Object.keys(result).length) {
      setFormValues({
        ...formValues,
        soldAt: new Date(formStates.soldAt).toISOString(),
      });

      saleCreateRequest(formValues);
      !addMore && handleModalSale();
      clearForm();
    }
  };

  const clearForm = () => {
    setFormStates({
      soldAt: moment().format("YYYY-MM-DD"),
      customer: "",
      fees: 0,
      permits: 0,
      chargesPaid: 0,
      totalCharge: 0,
      tips: 0,
      premium: 0,
    });

    setErrors([]);

    setFormValues({
      soldAt: moment().format("YYYY-MM-DD"),
      customer: "",
      fees: 0,
      permits: 0,
      chargesPaid: 0,
      totalCharge: 0,
      tips: 0,
      premium: 0,
    });
  };

  const handleModalSale = () => {
    clearForm();
    setErrors({ errors: [] });
    setModalSale(!modalSale);
  };

  const handleModalCustomer = () => {
    setModalCustomer(!modalCustomer);
  };

  return (
    <>
      <Button onClick={handleModalSale}>Add New Sale</Button>
      <CustomerCreate
        edit={false}
        modal={modalCustomer}
        showModal={handleModalCustomer}
      />
      <Modal
        hidden={modalCustomer}
        size="xl"
        show={modalSale}
        onHide={handleModalSale}
        backdrop={"static"}
      >
        <fieldset>
          <Form onSubmit={handleSubmit}>
            <Modal.Header>
              <Modal.Title>Add New Sale</Modal.Title>
              <Button variant="outline-danger" onClick={clearForm}>
                Reset
              </Button>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>* </span> Sale Date:
                    </Form.Label>
                    <Form.Control
                      type="date"
                      name="soldAt"
                      value={formStates.soldAt}
                      isInvalid={errors.soldAt}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.soldAt}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>* </span> Customer
                      (Company):
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        as="select"
                        name="customer"
                        value={formValues.customer}
                        custom
                        isInvalid={errors.customer}
                        onChange={handleChange}
                      >
                        <option value="">N/A</option>
                        {customers.map((customer) => (
                          <option key={customer._id} value={customer._id}>
                            {customer.company}
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

                        <Form.Control.Feedback type="invalid">
                          {errors.customer}
                        </Form.Control.Feedback>
                      </InputGroup.Append>
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <hr />
                    <p className="mb-3">
                      <strong>Insurance Coverages:</strong>
                    </p>
                    <p>
                      <small style={{ color: "#dc3545" }}>
                        {errors.insurers}
                      </small>
                    </p>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>* </span>
                      Liability Insurer:
                    </Form.Label>
                    <Form.Control
                      as="select"
                      name="liabilityInsurer"
                      custom
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={errors.insurers}
                      value={formStates.liabilityInsurer || ""}
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
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    sm="2"
                    hidden={!formStates.liabilityInsurer}
                  >
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>* </span>Charge:
                    </Form.Label>

                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        name="liabilityCharge"
                        min="0"
                        onChange={handleChange}
                        isInvalid={errors.liabilityCharge}
                        value={formStates.liabilityCharge || 0}
                        style={{ textAlign: "right" }}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.liabilityCharge}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>* </span>
                      Motor Cargo Insurer:
                    </Form.Label>

                    <Form.Control
                      as="select"
                      name="cargoInsurer"
                      custom
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={errors.insurers}
                      value={formStates.cargoInsurer || ""}
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
                  </Form.Group>
                  <Form.Group hidden={!formStates.cargoInsurer} as={Col} sm="2">
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>* </span>
                      Charge:
                    </Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        name="cargoCharge"
                        onChange={handleChange}
                        isInvalid={errors.cargoCharge}
                        value={formStates.cargoCharge || 0}
                        style={{ textAlign: "right" }}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.cargoCharge}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>* </span>Physical Damage
                      Insurer:
                    </Form.Label>
                    <Form.Control
                      as="select"
                      name="physicalDamageInsurer"
                      custom
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={errors.insurers}
                      value={formStates.physicalDamageInsurer || ""}
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
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    sm="2"
                    hidden={!formStates.physicalDamageInsurer}
                  >
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>* </span>
                      Charge:
                    </Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        name="physicalDamageCharge"
                        onChange={handleChange}
                        isInvalid={errors.physicalDamageCharge}
                        value={formStates.physicalDamageCharge || 0}
                        style={{ textAlign: "right" }}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.physicalDamageCharge}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>* </span>WC/GL/UMB Insurer:
                    </Form.Label>
                    <Form.Control
                      as="select"
                      name="wcGlUmbInsurer"
                      custom
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={errors.insurers}
                      value={formStates.wcGlUmbInsurer || ""}
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
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    sm="2"
                    hidden={!formStates.wcGlUmbInsurer}
                  >
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>* </span>Charge:
                    </Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        name="wcGlUmbCharge"
                        onChange={handleChange}
                        isInvalid={errors.wcGlUmbCharge}
                        value={formStates.wcGlUmbCharge || 0}
                        style={{ textAlign: "right" }}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.wcGlUmbCharge}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} sm="4">
                    <Form.Label style={{ fontSize: "small" }}>
                      Premium:
                    </Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        name="premium"
                        value={premium}
                        disabled
                        style={{ textAlign: "right" }}
                      />
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <hr />
                    <p className="mb-3">
                      <strong>Summary:</strong>
                    </p>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>* </span>Fees:
                    </Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        name="fees"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={errors.fees}
                        value={formStates.fees}
                        style={{ textAlign: "right" }}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.fees}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>* </span>Permits:
                    </Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        name="permits"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={errors.permits}
                        value={formStates.permits}
                        style={{ textAlign: "right" }}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.permits}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>* </span>Tips:
                    </Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        name="tips"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={errors.tips}
                        value={formStates.tips}
                        style={{ textAlign: "right" }}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.tips}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
                <hr />
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>* </span>Down Payment:
                    </Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        name="totalCharge"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={errors.totalCharge}
                        value={formStates.totalCharge}
                        style={{ textAlign: "right" }}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.totalCharge}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>* </span>Down Payment Paid:
                    </Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        name="chargesPaid"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={errors.chargesPaid}
                        value={formStates.chargesPaid}
                        style={{ textAlign: "right" }}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.chargesPaid}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label style={{ fontSize: "small" }}>
                      Pending Amount:
                    </Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        name="pendingAmount"
                        value={pendingPayment}
                        disabled
                        style={{ textAlign: "right" }}
                      />
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
              </Container>
            </Modal.Body>
            <Modal.Footer className="mt-3 pt-4">
              <Container>
                <Form.Row className="justify-content-center">
                  <Col sm="3">
                    <Button variant="light" block onClick={handleModalSale}>
                      Cancel
                    </Button>
                  </Col>
                  <Col />
                  <Col sm="3">
                    <Button
                      onClick={() => {
                        handleSubmit(false, true);
                      }}
                      variant="outline-dark"
                      block
                    >
                      Save and New
                    </Button>
                  </Col>
                  <Col sm="3">
                    <Button type="submit" variant="primary" block>
                      Save
                    </Button>
                  </Col>
                </Form.Row>
              </Container>
            </Modal.Footer>
          </Form>
        </fieldset>
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
  lastCustomer: state.customerReducer.item,
});

const mapDispatchToProps = {
  insurerListRequest,
  customerLoadRequest,
  saleCreateRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(SaleCreate);
