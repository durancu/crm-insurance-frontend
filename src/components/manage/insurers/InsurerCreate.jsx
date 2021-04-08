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
  InputGroup,
  FormControl,
  FormLabel,
  FormGroup,
} from "react-bootstrap";

//action
import {
  insurerCreateRequest,
  insurerUpdateRequest,
} from "../../../redux/actions";
import { isAdminCheck } from "../../../config/user";

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

  useEffect(() => {
    setIsAdmin(isAdminCheck(user));
  }, [user]);



  return (
    <Fragment>
      <Modal show={modal} onHide={showModal} backdrop="static" size="lg">
        <Form onSubmit={handleSubmit}>
          <fieldset disabled={loading || loadingGetInsurer}>
            <Modal.Header>
              <Modal.Title>
                {edit ? `Update` : `Create New`} Insurance Provider
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col sm="6">
                  <Form.Group>
                    <Form.Label >
                      <span >* </span> Name
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
                </Col>
                <Col sm="6">
                  <Form.Group>
                    <Form.Label >
                      <span >* </span> Email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col sm="6">
                  <Form.Group>
                    <Form.Label >
                      <span >* </span> Phone
                    </Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col sm="6">
                  <Form.Group>
                    <Form.Label >
                      <span > </span> Fax
                    </Form.Label>
                    <Form.Control
                      type="tel"
                      name="fax"
                      value={form.fax}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row hidden={!isAdmin} className="mb-3">
                <Col>
                  <hr />
                  <strong>Commissions (%)</strong>
                </Col>
              </Row>
              <Row hidden={!isAdmin}>
                <Col sm="6">
                  <FormGroup>
                    <FormLabel >
                      <span > </span> Liability
                    </FormLabel>
                    <InputGroup className="mb-3">
                      <FormControl
                        aria-label="Percentage of profit per sale."
                        name="liabilityCommission"
                        value={form.liabilityCommission}
                        onChange={handleChange}
                        className="text-right"
                      />
                      <InputGroup.Append>
                        <InputGroup.Text>%</InputGroup.Text>
                      </InputGroup.Append>
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col sm="6">
                  <FormGroup>
                    <FormLabel >
                      <span ></span> Motor Cargo
                    </FormLabel>
                    <InputGroup className="mb-3">
                      <FormControl
                        aria-label="Percentage of profit per sale."
                        name="cargoCommission"
                        value={form.cargoCommission}
                        onChange={handleChange}
                        className="text-right"
                      />
                      <InputGroup.Append>
                        <InputGroup.Text>%</InputGroup.Text>
                      </InputGroup.Append>
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col sm="6">
                  <FormGroup>
                    <FormLabel >
                      <span > </span> Physical Damage
                    </FormLabel>
                    <InputGroup className="mb-3">
                      <FormControl
                        aria-label="Percentage of profit per sale."
                        name="physicalDamageCommission"
                        value={form.physicalDamageCommission}
                        onChange={handleChange}
                        className="text-right"
                      />
                      <InputGroup.Append>
                        <InputGroup.Text>%</InputGroup.Text>
                      </InputGroup.Append>
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col sm="6">
                  <FormGroup>
                    <FormLabel >
                      <span > </span> WC/GL/UMB
                    </FormLabel>
                    <InputGroup className="mb-3">
                      <FormControl
                        aria-label="Percentage of profit per sale."
                        name="wcGlUmbCommission"
                        value={form.wcGlUmbCommission}
                        onChange={handleChange}
                        className="text-right"
                      />
                      <InputGroup.Append>
                        <InputGroup.Text>%</InputGroup.Text>
                      </InputGroup.Append>
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Container>
                <Row className="justify-content-center">
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
                        `Save`
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
