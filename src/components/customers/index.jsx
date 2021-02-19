import React from 'react'

//components
import { Row, Col } from 'react-bootstrap'
import CustomerList from './CustomerList'

export default function Customers() {
  return (
    <>
      <Row className="mt-3">
        <h1>Customers</h1>
      </Row>
      <Row>
        <Col sm="12" lg="12">
          <CustomerList />
        </Col>
      </Row>
    </>
  )
}
