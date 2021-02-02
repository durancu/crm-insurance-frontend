import React from 'react'

//componnets
import { Row, Col, Button } from 'react-bootstrap'
import CustomerList from './CustomerList'

export default function Customers() {
  return (
    <div>
      <Row>
        <Col sm="10">
          <h1>Custommers</h1>
        </Col>
        <Col sm="2">
          <Button>Create</Button>
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
