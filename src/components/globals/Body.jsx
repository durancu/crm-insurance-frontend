import React from 'react'
import { Container } from 'react-bootstrap'

export default function Body({ children }) {
  return (
    <Container fluid >
      {children}
    </Container>
  )
}
