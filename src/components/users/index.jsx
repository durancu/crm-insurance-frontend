import React from 'react'

//components
import { Row, Col } from 'react-bootstrap'
import UserList from './UserList'

export default function Users() {
  return (
    <div>
      <Row>
        <h1>Users</h1>
      </Row>
      <Row>
        <Col sm="12" lg="12">
          <UserList />
        </Col>
      </Row>
    </div>
  )
}
