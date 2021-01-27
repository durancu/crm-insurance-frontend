import React from 'react'

//assets
import '../components.css'

//Components
import Titles from '../Titles'
import UserList from './UserList'

//sample
import user_list from '../samples/users.json'
import { Col, Row,Button } from 'react-bootstrap'

export default function Users() {
  return (
    <div>
      <Row>
        <Col lg="10">
          <Titles title="Users" />
        </Col>
        <Col>
          <Button>Create</Button>
        </Col>
      </Row>
      <Row>
        <UserList users={user_list} />
      </Row>
    </div>
  )
}
