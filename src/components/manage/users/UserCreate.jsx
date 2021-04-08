import React, { useState, Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//components
import {
  Form,
  Button,
  Modal,
  Col,
  Row,
  Spinner,
  Container,
} from "react-bootstrap";

//action
import { userCreateRequest, userUpdateRequest } from "../../../redux/actions";
import { USER_SETTINGS } from "../../../config/user";
import { BUSINESS_SETTINGS } from "../../../config/company";
import { userCreateValidate } from "./userCreateValidate";

const UserCreate = ({
  loading,
  loadingGetUser,
  error,
  userCreateRequest,
  userUpdateRequest,
  showModal,
  modal,
  user,
  edit = false,
}) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  let defaultForm = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    roles: [],
    location: "",
    password: "",
    baseSalary: "",
  };

  const [form, setForm] = useState(defaultForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    edit ? setForm(user) : setForm(defaultForm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [edit, user]);

  const handleChange = ({ target }) => {
    target.name === "roles"
      ? setForm((form) => ({ ...form, [target.name]: [target.value] }))
      : setForm((form) => ({ ...form, [target.name]: target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = userCreateValidate(form);
    setErrors(result);
    if (!Object.keys(result).length) {
      edit ? userUpdateRequest(form, form._id) : userCreateRequest(form);

      setTimeout(() => {
        if (!error) {
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
      <Modal show={modal} onHide={showModal} backdrop={"static"} size="lg">
        <Form onSubmit={handleSubmit}>
          <fieldset disabled={loading || loadingGetUser}>
            <Modal.Header>
              <Modal.Title>
                {edit ? `Update` : `Create New`} Employee
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col sm="6">
                  <Form.Group>
                    <Form.Label >
                      <span >* </span>First Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      isInvalid={errors.firstName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.firstName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col sm="6">
                  <Form.Group>
                    <Form.Label >
                      <span >* </span>Last Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      isInvalid={errors.lastName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.lastName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm="6">
                  <Form.Group>
                    <Form.Label >
                      <span >* </span>Username
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      value={form.username}
                      onChange={handleChange}
                      disabled={edit}
                      isInvalid={errors.username}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.username}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col sm="6">
                  <Form.Group>
                    <Form.Label >
                      <span >* </span>Phone number
                    </Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="123-456-7890"
                      isInvalid={errors.phone}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.phone}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm="6">
                  <Form.Group>
                    <Form.Label >
                      <span >* </span>Location
                    </Form.Label>
                    <Form.Control
                      as="select"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      custom
                      isInvalid={errors.location}
                    >
                      <option value="" disabled>
                        Choose Location
                      </option>
                      {BUSINESS_SETTINGS.locations.map((location) => (
                        <option key={location.id} value={location.id}>
                          {location.name}
                        </option>
                      ))}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {errors.location}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col sm="6">
                  <Form.Group>
                    <Form.Label >
                      <span >* </span>Position
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="position"
                      value={form.position}
                      onChange={handleChange}
                      isInvalid={errors.position}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.position}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col sm="6">
                  <Form.Group>
                    <Form.Label >
                      <span >* </span>Role
                    </Form.Label>
                    <Form.Control
                      as="select"
                      name="roles"
                      value={form.roles}
                      onChange={handleChange}
                      custom
                      isInvalid={errors.roles}
                    >
                      <option value="" disabled>
                        Choose Role
                      </option>
                      {USER_SETTINGS.roles
                        .filter(({ id }) => id !== "ADMIN" && id !== "OWNER")
                        .map((role) => (
                          <option key={role.id} value={role.id}>
                            {role.name}
                          </option>
                        ))}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {errors.roles}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col sm="6">
                  <Form.Group>
                    <Form.Label >
                      <span >* </span>Salary
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="baseSalary"
                      value={form.baseSalary}
                      onChange={handleChange}
                      isInvalid={errors.baseSalary}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.baseSalary}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col sm="6">
                  <Form.Group>
                    <Form.Label >
                      <span >* </span>Email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      isInvalid={errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col sm="6">
                  <Form.Group>
                    <Form.Label >
                      <span >* </span>Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={edit ? undefined : form.password}
                      onChange={handleChange}
                      isInvalid={errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
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
                  {edit || (
                    <Col lg="4">
                      <Button variant="outline-dark" block>
                        Save and New
                      </Button>
                    </Col>
                  )}
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

UserCreate.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  modalShow: PropTypes.bool,
  loadingGetUser: PropTypes.bool.isRequired,
  userCreateRequest: PropTypes.func.isRequired,
  formModal: PropTypes.func,
};

const mapStateToProps = (state) => ({
  loading: state.userCreateStatusReducer.loading,
  error: state.userCreateStatusReducer.error,
  user: state.userReducer.item,
  loadingGetUser: state.userGetStatusReducer.loading,
});

const mapDispatchToProps = {
  userCreateRequest,
  userUpdateRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCreate);
