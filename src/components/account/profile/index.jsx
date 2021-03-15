import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Actions
import { userProfileGetRequest } from "../../../redux/actions";

//Components
import { Row, Col, Card, ListGroup } from "react-bootstrap";

const Profile = ({ userProfileGetRequest, user }) => {
  useEffect(() => {
    userProfileGetRequest();
  }, [userProfileGetRequest]);
  return (
    <>
      <Row className="mt-3 mb-3">
        <Col sm="8">
          <h2>Profile</h2>
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="12">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

Profile.protoTypes = {
  userProfileGetRequest: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.userProfileReducer.user,
});

const mapDispatchToProps = {
  userProfileGetRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
