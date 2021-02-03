import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//components
import { Form, Col, Button, Row ,Modal, Spinner} from 'react-bootstrap'

//actions
import { userCreateRequest } from '../../redux/actions'

function UserForm({ userCreateRequest, loading ,show,handleModal}) {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone: "",
    position: "",
    location: "",
    role: "",
    base_salary: "",
    sale_bonus_percentage: "",
  })

  const handleChange = ({ target }) => {
    setForm(form => ({ ...form, [target.name]: target.value }))
  }

  const handleSubmit = (e) => {
    userCreateRequest(form)
    e.preventDefault()
  }

  return (
    <div>
      <Modal show={show} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create User {loading && <Spinner animation="border"/>}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" name="email" onChange={handleChange} value={form.email} />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" name="password" onChange={handleChange} value={form.password} />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" name="first_name" onChange={handleChange} value={form.first_name} />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" name="last_name" onChange={handleChange} value={form.last_name} />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Enter Phone" name="phone" onChange={handleChange} value={form.phone} />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Role</Form.Label>
                <Form.Control as="select" name="role" onChange={handleChange} value={form.role || ""}>
                  <option value="" disabled >Choose a Role</option>
                  <option value="admin">Admin</option>
                  <option value="employee">Employee</option>
                  <option value="guest">Guest</option>
                </Form.Control>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Enter Location" name="location" onChange={handleChange} value={form.location} />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Position</Form.Label>
                <Form.Control as="select" name="position" onChange={handleChange} value={form.position || ""}>
                  <option value="" disabled >Choose a Position</option>
                  <option value="manager">Manager</option>
                  <option value="consultant">Sales Consultant</option>
                  <option value="agent">Sales Agent</option>
                  <option value="Clerk">Office Clerk</option>
                  <option value="other">Other</option>
                </Form.Control>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>Base Salary</Form.Label>
                <Form.Control type="text" placeholder="Enter Salary" name="base_salary" onChange={handleChange} value={form.base_salary} />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Sale Bonus Percentage</Form.Label>
                <Form.Control type="text" placeholder="Sale Bonus Percentage" name="sale_bonus_percentage" onChange={handleChange} value={form.sale_bonus_percentage} />
              </Form.Group>
            </Row>
            <Row className="justify-content-md-center">
              <Form.Group as={Col}>
                <Button type="submit" size="lg" block>Create</Button>
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

UserForm.propTypes = {
  userCreateRequest: PropTypes.func.isRequired,
  handleModal:PropTypes.func.isRequired,
  //--------
  loading: PropTypes.bool.isRequired,
  show:PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  loading: state.userCreateStatusReducer.loading
})

const mapDispatchToProps = {
  userCreateRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)