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
//components
import {
  Row,
  Col,
  Form,
  Button,
  Modal,
  Container,
  Badge,
} from "react-bootstrap";
import CustomerForm from "../manage/customers/CustomerForm";

const defaultForm = {
  soldAt: moment().format("YYYY-MM-DD"),
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
  //States
  const [soldAt, setSoldAt] = useState(defaultForm.soldAt);
  const [form, setForm] = useState(defaultForm);
  const [totalCharge, setTotalCharge] = useState(0);
  const [pendingPayment, setPendingPayment] = useState(0);
  const [modalSale, setModalSale] = useState(false);
  const [modalCustomer, setModalCustomer] = useState(false);
  const [premium, setPremium] = useState(0);

  //Load Insurer List
  useEffect(() => {
    insurerListRequest();
    customerLoadRequest();
  }, [insurerListRequest, customerLoadRequest]);

  //Calculate totalCharge pendingPayment
  useEffect(() => {
    //console.log("formUseEffect", form);
    setPremium(premiumCalculate(form));
    setTotalCharge(totalChargeCalculate(form));
    setPendingPayment(pendingPaymentCalculate(form));
  }, [form]);

  //Load data of form
  const handleChange = ({ target }) => {
    switch (target.name) {
      case "soldAt":
        setSoldAt(moment(target.value).format("YYYY-MM-DD"));
        setForm((form) => ({
          ...form,
          [target.name]: new Date(target.value).toISOString(),
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

  const handleBlur = ({ target }) => {
    if (target.value === "0" || target.value === "") {
      delete form[target.name];
      //  console.log(form[`${target.name}`]);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // saleCreateRequest(form);
    console.log("formSubmit", form);
  };

  const handleModalSale = () => {
    setModalSale(!modalSale);
    setForm(defaultForm);
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
        <Form onSubmit={handleSubmit} name="salesForm">
          <Modal.Header closeButton>
            <Modal.Title>Sales Create</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>Date:</Form.Label>
                    <Form.Control
                      type="date"
                      name="soldAt"
                      value={soldAt}
                      required
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>*</span>Customer:
                    </Form.Label>
                    <Row>
                      <Col sm="10">
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
                      <Col sm="1">
                        <Button
                          variant="primary"
                          onClick={() => {
                            setModalCustomer(!modalCustomer);
                          }}
                        >
                          <b>+</b>
                        </Button>
                      </Col>
                    </Row>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Badge variant="info">Choice one at least Insurer</Badge>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>*</span>Liability
                      Insurance:
                    </Form.Label>
                    <Form.Control
                      as="select"
                      name="liabilityInsurer"
                      custom
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>*</span>Charge:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="liabilityCharge"
                      defaultValue="0"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required={form.liabilityInsurer !== "" && true}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>*</span>Motor Cargo
                      Insurance:
                    </Form.Label>
                    <Form.Control
                      as="select"
                      name="cargoInsurer"
                      custom
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                </Col>
                <Col>
                  <Form.Label style={{ fontSize: "small" }}>
                    <span style={{ color: "red" }}>*</span>Charge:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="cargoCharge"
                    defaultValue="0"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required={form.cargoInsurer !== "" && true}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>*</span>Physical Damage
                      Insurance:
                    </Form.Label>
                    <Form.Control
                      as="select"
                      name="physicalDamageInsurer"
                      custom
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>*</span>Charge:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="physicalDamageCharge"
                      defaultValue="0"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required={form.physicalDamageInsurer !== "" && true}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>*</span>WC,GL,UMB
                      Insurance:
                    </Form.Label>
                    <Form.Control
                      as="select"
                      name="wcGlUmbInsurer"
                      custom
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>*</span>Charge:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="wcGlUmbCharge"
                      defaultValue="0"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required={form.wcGlUmbInsurer !== "" && true}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm="6">
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      Total Policy Premium:
                    </Form.Label>
                    <Form.Control type="text" value={premium} disabled  size="sm"/>
                  </Form.Group>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>*</span>Down Payment:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="downPayment"
                      defaultValue="0"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>*</span>Fees:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="fees"
                      defaultValue="0"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>*</span>Permits:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="permits"
                      defaultValue="0"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>*</span>Tips:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="tips"
                      defaultValue="0"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
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
                      disabled size="sm"
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
                      name="pendingAmount"
                      value={pendingPayment}
                      disabled size="sm"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm="6">
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>*</span>Charges Paid:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="chargesPaid"
                      defaultValue="0"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
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
