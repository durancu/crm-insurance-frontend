import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Row, Col, Card } from "react-bootstrap";
import DashboardChart from "./sales/DashboardChart";
import { DASHBOARD_SETS } from "../../config/dashboard";
import DateRangeFilter from "../globals/filters/DateRangeFilter";

import { dashboardGetRequest } from "../../redux/actions";

export const Dashboard = ({ charts, user, dashboardGetRequest, params }) => {
  const [dashboardConfig, setDashboardConfig] = useState();

  useEffect(() => {
    setDashboardConfig(
      user.hasOwnProperty("roles") && DASHBOARD_SETS[user.roles[0]]
    );
  }, [user]);

  useEffect(() => {
    dashboardGetRequest(dashboardConfig, params);
  }, [dashboardConfig, dashboardGetRequest, params]);

  return (
    <>
      <Row className="mt-3 mb-3">
        <Col sm="6">
          <h2>Dashboard</h2>
        </Col>
      </Row>
      <Row>
        <Col lg="9" md="12" sm="12">
          <Row>
            <Col>
              <h4>General Stats</h4>
              <hr></hr>
            </Col>
          </Row>
          <Row>
            <Col lg="10" md="12" sm="12">
              <DateRangeFilter />
              <br></br>
              <p>This dashboards shows a summary of the company's sales stats. Change
            the date range filter above to get stats for a specific time period.</p>
            </Col>
          </Row>
          <Row>
            {charts &&
              charts.map((chartData, key) => (
                <Col sm="6" md="6" sm="12" key={key}>
                  <DashboardChart chartData={chartData} />
                </Col>
              ))}
          </Row>
        </Col>
        <Col lg="3" md="3" sm="3">
          <Row>
            <Col>
              <h4>My Stats</h4>
              <hr></hr>
            </Col>
          </Row>
          <Row>
            <Col sm="12" lg="12">
              <Card border="secondary">
                <Card.Header>
                  <b>Last Month</b>
                </Card.Header>
                <Card.Body>
                  <Card.Title>Sales Total</Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>
                    <span style={{ fontSize: "40px" }}>$42,500</span>
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
            </Col>
            <Col sm="12" lg="12">
              <Card border="secondary">
                <Card.Header>
                  <b>This Month</b>
                </Card.Header>
                <Card.Body>
                  <Card.Title>Sales Total</Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>
                    <span style={{ fontSize: "40px" }}>$56,800</span>
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
            </Col>
            <Col sm="12" lg="12">
              <Card border="secondary">
                <Card.Header>
                  <b>Last Month</b>
                </Card.Header>
                <Card.Body>
                  <Card.Title>Total Salary</Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>
                    <span style={{ fontSize: "40px" }}>$600</span>
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
            </Col>
            <Col sm="12" lg="12">
              <Card border="secondary">
                <Card.Header>
                  <b>This Month</b>
                </Card.Header>
                <Card.Body>
                  <Card.Title>Total Salary</Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>
                    <span style={{ fontSize: "40px" }}>$1,440</span>
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

Dashboard.propTypes = {
  charts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  charts: state.dashboardReducer.charts,
  user: state.userProfileReducer.user,
  params: state.filterReducer.params,
});

const mapDispatchToProps = {
  dashboardGetRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
