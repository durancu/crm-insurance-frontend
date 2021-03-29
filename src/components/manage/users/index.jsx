import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

//components
import { Row, Col, Button } from "react-bootstrap";
import UserCreate from "./UserCreate";
import UserList from "./UserList";
import { isAdminCheck, isExecutiveCheck } from "../../../config/user";

const Users = ({ user }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isExecutive, setIsExecutive] = useState(false);
  const [modal, setModal] = useState(false);
  //Functions
  useEffect(() => {
    setIsAdmin(isAdminCheck(user));
    setIsExecutive(isExecutiveCheck(user));
  }, [user]);

  const showModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <Row className="mt-3">
        <Col sm="10">
          <h3>Employee Directory</h3>
        </Col>
      </Row>
      <Row className="mt-0 mb-2">
        <Col style={{ textAlign: "right" }} hidden={!isAdmin && !isExecutive}>
          <Button variant="primary" onClick={showModal}>
            Add New Employee
          </Button>
          <UserCreate showModal={showModal} modal={modal} edit={false} />
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="12">
          <UserList />
        </Col>
      </Row>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.userProfileReducer.user,
});

export default connect(mapStateToProps)(Users);
