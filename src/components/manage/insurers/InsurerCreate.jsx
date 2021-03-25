import React, { useState, Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//components
import {
  Form,
  Button,
  Modal,
  Spinner,
  Row,
  Col,
  Container,
} from "react-bootstrap";

//action
import {
  insurerCreateRequest,
  insurerUpdateRequest,
} from "../../../redux/actions";
import {
  isAdminCheck,
  isExecutiveCheck,
  isSellerCheck,
} from "../../../config/user";

const InsurerCreate = ({
  loading,
  loadingGetInsurer,
  error,
  insurerCreateRequest,
  insurerUpdateRequest,
  showModal,
  modal,
  edit,
  insurer,
  user,
}) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  let defaultForm = {
    name: "",
    email: "",
    phone: "",
    liabilityCommission: 0,
    cargoCommission: 0,
    physicalDamageCommission: 0,
    wcGlUmbCommission: 0,
  };

  const [form, setForm] = useState(defaultForm);

  const [isAdmin, setIsAdmin] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [isExecutive, setIsExecutive] = useState(false);

  useEffect(() => {
    setIsAdmin(isAdminCheck(user));
    setIsSeller(isSellerCheck(user));
    setIsExecutive(isExecutiveCheck(user));
  }, [user]);

  useEffect(() => {
    edit ? setForm(insurer) : setForm(defaultForm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [edit, insurer]);

  const handleChange = ({ target }) => {
    setForm((form) => ({ ...form, [target.name]: target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    edit
      ? insurerUpdateRequest(form, form._id)
      : insurerCreateRequest({
          name: form.name,
          email: form.email,
          phone: form.phone,
          liabilityCommission: parseFloat(form.liabilityCommission),
          cargoCommission: parseFloat(form.cargoCommission),
          physicalDamageCommission: parseFloat(form.physicalDamageCommission),
          wcGlUmbCommission: parseFloat(form.wcGlUmbCommission),
        });

    setTimeout(() => {
      if (!loading && !error) {
        clearForm();
        showModal();
      }
    }, 1000);
  };

  const clearForm = () => {
    setForm(defaultForm);
  };

  return (
    <Fragment>
      <Modal show={modal} onHide={showModal} backdrop="static">
        <Form onSubmit={handleSubmit}>
          <fieldset disabled={loading || loadingGetInsurer}>
            <Modal.Header>
              <Modal.Title>Insurer {edit ? `Update` : `Create`}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group>
                <Form.Label style={{ fontSize: "small" }}>
                  <span style={{ color: "red" }}>* </span> Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoFocus
                />
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ fontSize: "small" }}>
                  <span style={{ color: "red" }}>* </span> Phone
                </Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ fontSize: "small" }}>
                  <span style={{ color: "red" }}>* </span> Email
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Row hidden={!isAdmin}>
                <Col>
                  <br />
                  <h4>Commissions (%)</h4>
                  <br />
                </Col>
              </Row>
              <Row hidden={!isAdmin}>
                <Col sm="6">
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>* </span> Liability
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="liabilityCommission"
                      value={form.liabilityCommission}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col sm="6">
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>* </span> Motor Cargo
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="cargoCommission"
                      value={form.cargoCommission}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col sm="6">
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>* </span> Physical Damage
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="physicalDamageCommission"
                      value={form.physicalDamageCommission}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col sm="6">
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>* </span> WC/GL/UMB
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="wcGlUmbCommission"
                      value={form.wcGlUmbCommission}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Container>
                <Row className="justify-content-center">
                  <Col sm="3">
                    <Button variant="light" block onClick={showModal}>
                      Cancel
                    </Button>
                  </Col>
                  <Col />
                  <Col lg="3">
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
                </Row>
              </Container>
            </Modal.Footer>
          </fieldset>
        </Form>
      </Modal>
    </Fragment>
  );
};

InsurerCreate.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  modalShow: PropTypes.bool,
  loadingGetInsurer: PropTypes.bool.isRequired,
  insurerCreateRequest: PropTypes.func.isRequired,
  formModal: PropTypes.func,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.insurerCreateStatusReducer.loading,
  error: state.insurerCreateStatusReducer.error,
  insurer: state.insurerReducer.item,
  loadingGetInsurer: state.insurerGetStatusReducer.loading,
  user: state.userProfileReducer.user,
});

const mapDispatchToProps = {
  insurerCreateRequest,
  insurerUpdateRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(InsurerCreate);
