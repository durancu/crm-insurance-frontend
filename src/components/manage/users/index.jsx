import React, { useState } from "react";

//components
import { Row, Col, Button } from "react-bootstrap";
import UserForm from "./UserForm";
import UserList from "./UserList";

export default function Users() {
  const [modal, setModal] = useState(false);
  //Functions
  const showModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <Row className="mt-3">
        <Col sm="10">
          <h2>Users</h2>
        </Col>
      </Row>
      <Row className="mt-0 mb-2">
        <Col style={{ textAlign: "right" }}>
          <Button variant="primary" onClick={showModal}>
            Add New User
          </Button>
          <UserForm showModal={showModal} modal={modal} edit={false} />
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="12">
          <UserList />
        </Col>
      </Row>
    </>
  );
}
