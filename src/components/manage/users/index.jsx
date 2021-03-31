import React from "react";
import { connect } from "react-redux";

//components
import { Row, Col } from "react-bootstrap";
import UserList from "./UserList";

const Users = () => {

  return (
    <>
      <Row className="mt-3 mb-3">
        <Col>
          <h3>Employee Directory</h3>
        </Col>
      </Row>
      <UserList />
    </>
  );
};


export default connect()(Users);
