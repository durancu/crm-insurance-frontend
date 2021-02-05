import React, { useState, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//components
import { Form, Button, Modal, Col, Row, Spinner } from 'react-bootstrap'

//action
import { customerCreateRequest } from '../../redux/actions'


const CustomerForm = ({ loading, error, customerCreateRequest }) => {
  const [modal, setModal] = useState(false)
  const [form, setForm] = useState({
    name: "",
    isCompany: "",
    email: "",
    phone: ""
  })

  const handleChange = ({ target }) => {
    setForm(form => ({ ...form, [target.name]: target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    customerCreateRequest(form)
    if (loading === false && error === false) {
      clearForm()
      handleModal()
    }
  }

  const handleModal = () => {
    setModal(form => (!form))
  }

  const clearForm = () => {
    setForm({
      name: "",
      isCompany: "",
      email: "",
      phone: ""
    })
  }

  return (
    <Fragment>
      <Button variant="primary" onClick={handleModal}>Create</Button>
      <Modal show={modal} onHide={handleModal}>
        <Form onSubmit={handleSubmit}>
          <fieldset disabled={loading}>
            <Modal.Header closeButton>
              <Modal.Title>
                Customers Create
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
                      required
                      onChange={handleChange} />
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
                    <Form.Control as="select"
                      name="isCompany"
                      custom
                      value={form.isCompany || ""}
                      onChange={handleChange}
                      required >
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
              <Button type="submit" block>{loading ? <Spinner animation="border" /> : `Create`}</Button>
            </Modal.Footer>
          </fieldset>
        </Form>
      </Modal>
    </Fragment>
  )
}

CustomerForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  customerCreateRequest: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  loading: state.customerCreateStatusReducer.loading,
  error: state.customerCreateStatusReducer.error,
})

const mapDispatchToProps = {
  customerCreateRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerForm)
