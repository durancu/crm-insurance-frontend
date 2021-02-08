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
    name: "",
    isCompany: "",
    email: "",
    phone: ""
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
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
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
                <Col>
                  <Form.Group>
                    <Form.Label>How type of customers is?</Form.Label>
                    <Form.Control
                      as="select"
                      name="isCompany"
                      value={form.isCompany}
                      onChange={handleChange}
                      custom
                      required
                    >
                      <option value="" disabled >Choose a type</option>
                      <option value="true">Company</option>
                      <option value="false">Person</option>
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
    </Fragment>
  )
}

UserForm.propTypes = {
  loading          : PropTypes.bool.isRequired,
  error            : PropTypes.bool.isRequired,
  modalShow        : PropTypes.bool,
  loadingGetUser   : PropTypes.bool.isRequired,
  userCreateRequest: PropTypes.func.isRequired,
  formModal        : PropTypes.func,
}

const mapStateToProps = (state) => ({
  loading       : state.userCreateStatusReducer.loading,
  error         : state.userCreateStatusReducer.error,
  user          : state.userReducer.item,
  loadingGetUser: state.userGetStatusReducer.loading
})

const mapDispatchToProps = {
  userCreateRequest,
  userUpdateRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)
