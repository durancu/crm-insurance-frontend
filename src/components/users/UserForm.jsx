import React, { useState } from 'react'

//components
import { Form, Col, Button, Card } from 'react-bootstrap'

export default function UserForm() {
  const [form, setForm] = useState({})

  const handleChange = ({ target }) => {
    setForm(form => ({ ...form, [target.name]: target.value }))
    console.log(form)
  }

  return (
    <div>
      <Form>
        <Card>
          <Card.Body>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" name="firts_name" onChange={handleChange} />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" name="last_name" onChange={handleChange} />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" name="email" onChange={handleChange} />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Enter Phone" name="phone" onChange={handleChange} />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" name="password" onChange={handleChange} />
              </Form.Group>
            </Form.Row>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Role</Form.Label>
                <Form.Control as="select" name="role" onChange={handleChange} value={form.role || 0}>
                  <option value="0" disabled >Choose a Role</option>
                  <option value="1">Employee</option>
                  <option value="2">Manager</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Base Salary</Form.Label>
                <Form.Control type="text" placeholder="Enter Salary" name="base_salary" onChange={handleChange} />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Sale Bonus Percentage</Form.Label>
                <Form.Control type="text" placeholder="Sale Bonus Percentage" name="sale_bonus_percentage" onChange={handleChange} />
              </Form.Group>
            </Form.Row>
          </Card.Body>
        </Card>
        <Form.Row className="justify-content-md-center">
          <Form.Group as={Col}>
            <Button type="submit" size="lg" block>Create</Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  )
}
