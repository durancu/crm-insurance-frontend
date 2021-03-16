import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Actions
import { userProfileGetRequest } from "../../../redux/actions";

//Components
import { Row, Col, Card } from "react-bootstrap";
import { USER_SETTINGS } from "../../../config/user";
import { locationName } from "../../globals/functions";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory from "react-bootstrap-table2-filter";
import {
  activitiesDefaultSorted,
  activitiesSample,
  activitiesTableColumns,
} from "./config";

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
        <Col className="pl-4 pr-4" sm="8" lg="8">
          <Card className="sm-8" style={{ border: "none" }}>
            <Card.Body>
              <Card.Title>
                {user.firstName} {user.lastName}
              </Card.Title>
              <Card.Subtitle>
                <i>{user.position}</i>
              </Card.Subtitle>
              <hr></hr>
              <Card.Text>
                <b>Username:</b> {user.username}
              </Card.Text>
              <Card.Text>
                <b>Email:</b> {user.email}
              </Card.Text>
              <Card.Text>
                <b>Role:</b>{" "}
                {
                  USER_SETTINGS.roles.find(({ id }) => id === user.roles[0])
                    .name
                }
              </Card.Text>
              <Card.Text>
                <b>Position:</b> {user.position}
              </Card.Text>
              <Card.Text>
                <b>Office:</b> {locationName(user.location)}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="4" lg="4">
          <Card className="sm-4" style={{ width: "20rem", border: "none" }}>
            <Card.Img variant="top" src="assets/images/user-thumbnail.jpg" />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>My Activity</h4>
          <hr></hr>
          <BootstrapTable
            bootstrap4
            keyField="_id"
            data={activitiesSample}
            columns={activitiesTableColumns()}
            striped
            hover
            condensed={true}
            bordered={false}
            responsive
            filter={filterFactory()}
            defaultSorted={activitiesDefaultSorted()}
            noDataIndication="No registered activity"
            //loading={}
          />
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
