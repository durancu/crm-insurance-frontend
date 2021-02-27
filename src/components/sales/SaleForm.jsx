import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";

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
} from "../globals/functions";
//components
import { Row, Col, Form, Button, Modal, Container } from "react-bootstrap";
import CustomerForm from "../manage/customers/CustomerForm";

const defaultForm = {
  soldAt: moment().format("YYYY-MM-DD"),
};

export const SaleForm = ({
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

  //Load Insurer List
  useEffect(() => {
    insurerListRequest();
    customerLoadRequest();
  }, [insurerListRequest, customerLoadRequest]);

  //Calculate totalCharge pendingPayment
  useEffect(() => {
    setTotalCharge(totalChargeFunction(form));
    setPendingPayment(pendingPaymentFunction(form));
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
        console.log("form initial", form);
        if (target.value)
          setForm((form) => ({ ...form, [target.name]: target.value }));
        else delete form[target.name];
        console.log("form final", form);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saleCreateRequest(form);
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
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Sales Create</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
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
                          value={soldAt}
                          required
                          onChange={handleChange}
                        />
                      </Col>
                    </Form.Row>
                  </Col>
                  <Col>
                    <Form.Row>
                      <Form.Label style={{ textAlign: "right" }} column lg={3}>
                        Customer:
                      </Form.Label>
                      <Col lg={5}>
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
                        <Button
                          variant="primary"
                          onClick={() => {
                            setModalCustomer(!modalCustomer);
                          }}
                        >
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
                    </Form.Row>
                  </Col>
                  <Col>
                    {form.hasOwnProperty("liabilityInsurer") &&
                      form.liabilityInsurer && (
                        <Form.Row>
                          <Form.Label
                            style={{ textAlign: "right" }}
                            column
                            lg={3}
                          >
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
                    </Form.Row>
                  </Col>
                  <Col>
                    {form.cargoInsurer !== "" && (
                      <Form.Row>
                        <Form.Label
                          style={{ textAlign: "right" }}
                          column
                          lg={3}
                        >
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
                    </Form.Row>
                  </Col>
                  <Col>
                    {form.physicalDamageInsurer !== "" && (
                      <Form.Row>
                        <Form.Label
                          style={{ textAlign: "right" }}
                          column
                          lg={3}
                        >
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
                    </Form.Row>
                  </Col>
                  <Col>
                    {form.wcGlUmbInsurer !== "" && (
                      <Form.Row>
                        <Form.Label
                          style={{ textAlign: "right" }}
                          column
                          lg={3}
                        >
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
              {/* ROW 6 Total Policy Premium:*/}
              <Form.Group>
                <Row>
                  <Col md="6">
                    <Form.Row>
                      <Form.Label style={{ textAlign: "right" }} column md={5}>
                        Total Policy Premium:
                      </Form.Label>
                      <Col md={6}>
                        <Form.Control
                          type="text"
                          name="premium"
                          onChange={handleChange}
                          value={totalCharge}
                          disabled
                        />
                      </Col>
                    </Form.Row>
                  </Col>
                </Row>
              </Form.Group>
              <hr />
              {/* ROW 10 Down Payment:*/}
              <Form.Group>
                <Row>
                  <Col md="6">
                    <Form.Row>
                      <Form.Label style={{ textAlign: "right" }} column md={5}>
                        Down Payment:
                      </Form.Label>
                      <Col lg={6}>
                        <Form.Control
                          type="text"
                          name="downPayment"
                          onChange={handleChange}
                          required
                        />
                      </Col>
                    </Form.Row>
                  </Col>
                  <Col md="6">
                    <Form.Row>
                      <Form.Label style={{ textAlign: "right" }} column md={3}>
                        Fees:
                      </Form.Label>
                      <Col sm={5}>
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
                  <Col md="6">
                    <Form.Row>
                      <Form.Label style={{ textAlign: "right" }} column md={3}>
                        Tips:
                      </Form.Label>
                      <Col md={5}>
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
              <hr />
              {/* TOTAL CHARGE */}
              <Form.Group>
                <Row>
                  <Col md="6">
                    <Form.Row>
                      <Form.Label style={{ textAlign: "right" }} column md={5}>
                        Total charge:
                      </Form.Label>
                      <Col md={6}>
                        <Form.Control
                          type="text"
                          name="totalCharge"
                          value={totalCharge}
                          disabled
                        />
                      </Col>
                    </Form.Row>
                  </Col>
                  <Col md="6">
                    <Form.Row>
                      <Form.Label style={{ textAlign: "right" }} column md={3}>
                        Pending Amount:
                      </Form.Label>
                      <Col md={5}>
                        <Form.Control
                          type="text"
                          name="pendingAmount"
                          value={pendingPayment}
                          disabled
                        />
                      </Col>
                    </Form.Row>
                  </Col>
                </Row>
              </Form.Group>
              {/* TOTAL Paid */}
              <Form.Group>
                <Row>
                  <Col md="6">
                    <Form.Row>
                      <Form.Label style={{ textAlign: "right" }} column md={5}>
                        Charges Paid:
                      </Form.Label>
                      <Col md={6}>
                        <Form.Control
                          type="text"
                          name="chargePai"
                          /* value={}  Define Value*/
                          required
                        />
                      </Col>
                    </Form.Row>
                  </Col>
                </Row>
              </Form.Group>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Container>
              <Row className="justify-content-center">
                <Col lg="4">
                  <Button
                    size="lg"
                    variant="secondary"
                    block
                    onClick={handleModalSale}
                  >
                    Cancel
                  </Button>
                </Col>
                <Col lg="4">
                  <Button size="lg" type="submit" variant="primary" block>
                    Submit
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

SaleForm.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(SaleForm);
