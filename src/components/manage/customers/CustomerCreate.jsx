import React, { useState, Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//components
import { Form, Button, Modal, Col, Spinner, Container } from "react-bootstrap";

//action
import {
  customerCreateRequest,
  customerUpdateRequest,
} from "../../../redux/actions";
//Functions
import { customerCreateValidate } from "./customerCreateValidate";

const defaultForm = {
  company: "",
  name: "",
  email: "",
  phone: "",
  fax: "",
  address: "",
  city: "",
  state: "",
  country: "USA",
  dot: "",
  zip: "",
};
const CustomerCreate = ({
  loading,
  loadingGetCustomer,
  error,
  customerCreateRequest,
  customerUpdateRequest,
  showModal,
  modal,
  edit,
  customer,
}) => {
  const [form, setForm] = useState(defaultForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    edit ? setForm(customer) : setForm(defaultForm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [edit, customer]);

  const handleChange = ({ target }) => {
    setForm((form) => ({ ...form, [target.name]: target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = customerCreateValidate(form);
    setErrors(result);

    if (!Object.keys(result).length) {
      customerCreateRequest(form);

      setTimeout(() => {
        if (!loading && !error) {
          clearForm();
          showModal();
        }
      }, 1000);
    }
  };

  const clearForm = () => {
    setForm(defaultForm);
  };

  return (
    <Fragment>
      <Modal show={modal} onHide={showModal} backdrop="static" size="lg">
        <Form onSubmit={handleSubmit}>
          <fieldset disabled={loading || loadingGetCustomer}>
            <Modal.Header>
              <Modal.Title>Customers Create</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label style={{ fontSize: "small" }}>
                    <span style={{ color: "red" }}>* </span>Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    isInvalid={errors.name}
                    isValid={form.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label style={{ fontSize: "small" }}>
                    <span style={{ color: "red" }}>* </span>Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    isInvalid={errors.email}
                    isValid={form.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label style={{ fontSize: "small" }}>
                    Company
                    {/* <span style={{ fontSize: "10px", color: "#999" }}>
                      {" "}
                      (Optional)
                    </span> */}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label style={{ fontSize: "small" }}>DOT</Form.Label>
                  <Form.Control
                    type="text"
                    name="dot"
                    value={form.dot}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label style={{ fontSize: "small" }}>Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={form.phone}
                    
                    placeholder="123-456-7890"
                    onChange={handleChange}
                    isInvalid={errors.phone}
                    isValid={form.phone}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.phone}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label style={{ fontSize: "small" }}>Fax</Form.Label>
                  <Form.Control
                    type="tel"
                    name="fax"
                    value={form.fax}
                    
                    placeholder="123-456-7890"
                    onChange={handleChange}
                    isInvalid={errors.fax}
                    isValid={form.fax}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.fax}
                  </Form.Control.Feedback>
                </Form.Group>
                {/* <Form.Group as={Col}>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>* </span>Customer type
                    </Form.Label>
                    <Form.Control
                      as="select"
                      name="isCompany"
                      value={form.isCompany}
                      onChange={handleChange}
                      custom
                      required
                    >
                      <option value="" disabled>
                        Choose Type
                      </option>
                      <option value="true">Business</option>
                      <option value="false">Individual</option>
                    </Form.Control>
                  </Form.Group> */}
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label style={{ fontSize: "small" }}>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    isInvalid={errors.address}
                    isValid={form.address}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.address}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label style={{ fontSize: "small" }}>City</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    isInvalid={errors.city}
                    isValid={form.city}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.city}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label style={{ fontSize: "small" }}>State</Form.Label>
                  <Form.Control
                    type="text"
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    isInvalid={errors.state}
                    isValid={form.state}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.state}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} sm="2">
                  <Form.Label style={{ fontSize: "small" }}>Zip</Form.Label>
                  <Form.Control
                    type="text"
                    name="zip"
                    value={form.zip}
                    onChange={handleChange}
                    isInvalid={errors.zip}
                    isValid={form.zip}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.zip}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} hidden={true}>
                  <Form.Label style={{ fontSize: "small" }}>Country</Form.Label>
                  <Form.Control
                    type="text"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    isInvalid={errors.country}
                    isValid={form.country}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.country}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row></Form.Row>
            </Modal.Body>
            <Modal.Footer>
              <Container>
                <Form.Row className="justify-content-center">
                  <Col sm="4">
                    <Button variant="light" block onClick={showModal}>
                      Cancel
                    </Button>
                  </Col>
                  <Col />
                  <Col lg="4">
                    <Button
                      type="submit"
                      variant={edit ? `success` : `primary`}
                      block
                    >
                      {loading ? (
                        <Spinner animation="border" />
                      ) : edit ? (
                        `Update`
                      ) : (
                        `Create`
                      )}
                    </Button>
                  </Col>
                </Form.Row>
              </Container>
            </Modal.Footer>
          </fieldset>
        </Form>
      </Modal>
    </Fragment>
  );
};

CustomerCreate.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  modalShow: PropTypes.bool,
  loadingGetCustomer: PropTypes.bool.isRequired,
  customerCreateRequest: PropTypes.func.isRequired,
  formModal: PropTypes.func,
};

const mapStateToProps = (state) => ({
  loading: state.customerCreateStatusReducer.loading,
  error: state.customerCreateStatusReducer.error,
  customer: state.customerReducer.item,
  loadingGetCustomer: state.customerGetStatusReducer.loading,
});

const mapDispatchToProps = {
  customerCreateRequest,
  customerUpdateRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerCreate);
