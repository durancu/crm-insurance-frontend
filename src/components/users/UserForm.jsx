import React, { useState, Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//components
import { Form, Button, Modal, Col, Row, Spinner } from 'react-bootstrap'

//action
import { userCreateRequest, userUpdateRequest } from '../../redux/actions'

const UserForm = ({
  loading,
  loadingGetUser,
  error,
  userCreateRequest,
  userUpdateRequest,
  showModal,
  modal,
  edit,
  user }) => {
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
    password: ""
  }

  const [form, setForm] = useState(defaultForm)

  useEffect(() => {
    edit ? setForm(user) : setForm(defaultForm)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [edit, user])

  const handleChange = ({ target }) => {
    setForm(form => ({ ...form, [target.name]: target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    edit ? userUpdateRequest(form, form._id) : userCreateRequest(form);

    setTimeout(() => {
      if (!loading && !error) {
        clearForm();
        showModal();
      }
    }, 1000);
  }

  const clearForm = () => {
    setForm(defaultForm)
  }

  return (
    <Fragment>
      <Modal show={modal} onHide={showModal}>
        <Form onSubmit={handleSubmit}>
          <fieldset disabled={loading || loadingGetUser}>
            <Modal.Header closeButton>
              <Modal.Title>
                Users {edit ? `Update` : `Create`}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>First Name</Form.Label>
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
                    <Form.Label>Last Name</Form.Label>
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
                    <Form.Label>Username</Form.Label>
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
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={form.phone}
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      as="select"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      custom
                      required
                    >
                      <option value="" disabled >Choose a type</option>
                      <option value="USA">USA</option>
                      <option value="MEXICO">MEXICO</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Position</Form.Label>
                    <Form.Control
                      as="select"
                      name="position"
                      value={form.position}
                      onChange={handleChange}
                      custom
                      required
                    >
                      <option value="" disabled >Choose a type</option>
                      <option value="SALES_AGENT">Sales Agent</option>
                      <option value="SALES_CONSULTANT">Sales Consultant</option>
                      <option value="MANAGER">Manager</option>
                      <option value="OTHER">Other</option>
                      <option value="SYSTEM_ADMINISTRATOR">System Administrator</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Role</Form.Label>
                    <Form.Control
                      as="select"
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      custom
                      required
                    >
                      <option value="" disabled >Choose a type</option>
                      <option value="ADMIN">Administrator</option>
                      <option value="USER">Standard User</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={edit ? undefined : form.password}
                  onChange={handleChange}
                  required={!edit} />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button
                type="submit"
                variant={edit ? `success` : `primary`}
                block
              >
                {loading ? <Spinner animation="border" /> : (edit ? `Update` : `Create`)}
              </Button>
            </Modal.Footer>
          </fieldset>
        </Form>
      </Modal>
    </Fragment >
  )
}

UserForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  modalShow: PropTypes.bool,
  loadingGetUser: PropTypes.bool.isRequired,
  userCreateRequest: PropTypes.func.isRequired,
  formModal: PropTypes.func,
}

const mapStateToProps = (state) => ({
  loading: state.userCreateStatusReducer.loading,
  error: state.userCreateStatusReducer.error,
  user: state.userReducer.item,
  loadingGetUser: state.userGetStatusReducer.loading
})

const mapDispatchToProps = {
  userCreateRequest,
  userUpdateRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)
