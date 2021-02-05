import React from 'react'

//componnets
import { Row, Col } from 'react-bootstrap'
import CustomerForm  from './CustomerForm'
import CustomerList from './CustomerList'

export default function Customers() {
  return (
    <div>
      <Row>
        <Col sm="10">
          <h1>Customers</h1>
        </Col>
        <Col sm="2">
          <CustomerForm/>
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="12">
          <CustomerList/>
        </Col>
      </Row>
    </div>
  )
}
