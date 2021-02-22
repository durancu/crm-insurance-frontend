import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Body({ children }) {
  return (
    <Container fluid>
      <Row className="mw-90">
        <Col>
          {children}
        </Col>
      </Row>
    </Container>
  )
}
