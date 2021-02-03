import React, { useState } from 'react'

//Components
import UserList from './UserList'
import UserForm from './UserForm'

//sample
import { Col, Row, Button } from 'react-bootstrap'

export default function Users() {
  const [show, setShow] = useState(true)

  const handleModal = () => setShow(show => !show)

  return (
    <div>
      <Row>
        <Col lg="10">
          <h3>Users</h3>
        </Col>
        <Col>
          <Button onClick={handleModal}>Create</Button>
        </Col>
        <UserForm show={show} handleModal={handleModal}/>
      </Row>
      <Row>
        <UserList />
      </Row>
    </div>
  )
}
