import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Body({ children }) {
  return (
    <Container fluid style={{maxWidth: "98%"}}>
          {children}
    </Container>
  )
}
