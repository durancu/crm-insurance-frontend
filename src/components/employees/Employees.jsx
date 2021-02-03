import React from 'react'

//Components
import { Container, Row, Col } from 'react-bootstrap'
import TimeRange from './TimeRange'
import Customers from './Customers'

//samples values
import customers_list from '../samples/customers.json'
import sales_list from '../samples/sales.json'
import Sales from './Sales'


export default function Employees() {
  return (
    <Container>
      <h1>Employees</h1>
      <Row>
        <Col>
          <TimeRange/>
        </Col>
        <Col>
          <Customers customers={customers_list}/>
        </Col>
        <Col className="justify-content-md-center">
          <button className="button-default">Add Sale</button>
        </Col>
      </Row>
      <Row>
        <Sales sales={sales_list}/>
      </Row>
    </Container>
  )
}
