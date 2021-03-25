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
    role: "",
    location: "",
    password: "",
    baseSalary: "",
  };

  const [form, setForm] = useState(defaultForm);

  useEffect(() => {
    edit ? setForm(user) : setForm(defaultForm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [edit, user]);

  const handleChange = ({ target }) => {
    setForm((form) => ({ ...form, [target.name]: target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    edit ? userUpdateRequest(form, form._id) : userCreateRequest(form);

    setTimeout(() => {
      if (!error) {
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
      <Modal show={modal} onHide={showModal} backdrop={"static"}>
        <Form onSubmit={handleSubmit}>
          <fieldset disabled={loading || loadingGetUser}>
            <Modal.Header>
              <Modal.Title>Users {edit ? `Update` : `Create`}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>* </span>First Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>* </span>Last Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>* </span>Username
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      value={form.username}
                      onChange={handleChange}
                      disabled={edit}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>* </span>Phone number
                    </Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={form.phone}
                      
                      onChange={handleChange}
                      placeholder="123-456-7890"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>* </span>Location
                    </Form.Label>
                    <Form.Control
                      as="select"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      custom
                      required
                    >
                      <option value="" disabled>
                        Choose Role
                      </option>
                      {BUSINESS_SETTINGS.locations.map((location) => (
                        <option key={location.id} value={location.id}>
                          {location.name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>* </span>Position
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="position"
                      value={form.position}
                      required
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "small" }}>
                      <span style={{ color: "red" }}>* </span>Role
                    </Form.Label>
                    <Form.Control
                      as="select"
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      custom
                      required
                    >
                      <option value="" disabled>
                        Choose Role
                      </option>
                      {USER_SETTINGS.roles.map((role) => (
                        <option key={role.id} value={role.id}>
                          {role.name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group>
                <Form.Label style={{ fontSize: "small" }}>
                  <span style={{ color: "red" }}>* </span>Base Salary
                </Form.Label>
                <Form.Control
                  type="text"
                  name="baseSalary"
                  value={form.baseSalary}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ fontSize: "small" }}>
                  <span style={{ color: "red" }}>* </span>Email
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ fontSize: "small" }}>
                  <span style={{ color: "red" }}>* </span>Password
                </Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={edit ? undefined : form.password}
                  onChange={handleChange}
                  required={!edit}
                />
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
