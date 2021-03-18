import React from 'react'
import { Container } from 'react-bootstrap'

export default function Body({ children }) {
  return (
    <Container fluid style={{maxWidth: "98%", fontSize:"0.9rem"} }>
          {children}
    </Container>
  )
}
