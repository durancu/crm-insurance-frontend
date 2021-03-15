import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//components
import { Form, Button, Modal, Col, Spinner, Container } from "react-bootstrap";

//action
import { userUpdateRequest } from "../../../redux/actions";

const ChangePassword = ({
  loading,
  error,
  userUpdateRequest,
  showModal,
  modal,
  id,
}) => {
  const [form, setForm] = useState({
    password: "",
    passwordConfirm: "",
  });
  const [errors, setErrors] = useState({});

  //Functions
  const handleChange = ({ target }) => {
    setForm((form) => ({ ...form, [target.name]: target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = validateForm(form);
    setErrors(result);

    if (!Object.keys(result).length) {
      delete form["passwordConfirm"];

      userUpdateRequest(form, id);

      setTimeout(() => {
        if (!loading && !error) {
          clearForm();
          showModal();
        }
      }, 1000);
    }
  };

  const validateForm = (values) => {
    const error = {};

    !values.password && (error.password = "Password is required");

    !values.passwordConfirm &&
      (error.passwordConfirm = "Password Confirm is required");

    return error;
  };

  const clearForm = () => {
    setForm({});
  };

  return (
    <Fragment>
      <Modal show={modal} onHide={showModal} backdrop={"static"}>
        <Form onSubmit={handleSubmit}>
          <fieldset disabled={loading}>
            <Modal.Header>
              <Modal.Title>Password Change</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group>
                <Form.Label style={{ fontSize: "small" }}>
                  <span style={{ color: "red" }}>* </span>Password
                </Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handleChange}
                  isInvalid={
                    form.password !== form.passwordConfirm || errors.password
                  }
                  isValid={
                    form.password === form.passwordConfirm &&
                    form.password !== "" &&
                    form.passwordConfirm !== "" &&
                    !errors.password
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ fontSize: "small" }}>
                  <span style={{ color: "red" }}>* </span>Password Confirm
                </Form.Label>
                <Form.Control
                  type="password"
                  name="passwordConfirm"
                  onChange={handleChange}
                  isInvalid={
                    form.password !== form.passwordConfirm ||
                    errors.passwordConfirm
                  }
                  isValid={
                    form.password === form.passwordConfirm &&
                    form.password !== "" &&
                    form.passwordConfirm !== "" &&
                    !errors.password
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {errors.passwordConfirm}
                </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {form.password !== form.passwordConfirm &&
                    `Not coincide passwords`}
                </Form.Control.Feedback>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Container>
                <Form.Row className="justify-content-center">
                  <Col sm="3">
                    <Button variant="light" block onClick={showModal}>
                      Cancel
                    </Button>
                  </Col>
                  <Col />
                  <Col lg="4">
                    <Button type="submit" variant={`success`} block>
                      {loading ? <Spinner animation="border" /> : `Save`}
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

ChangePassword.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  modalShow: PropTypes.bool,
  userUpdateRequest: PropTypes.func.isRequired,
  formModal: PropTypes.func,
};

const mapStateToProps = (state) => ({
  loading: state.userUpdateStatusReducer.loading,
  error: state.userUpdateStatusReducer.error,
});

const mapDispatchToProps = {
  userUpdateRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
