import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Row, Col, Card } from "react-bootstrap";
import DashboardChart from "./sales/DashboardChart";
import { DASHBOARD_SETS } from "../../config/dashboard";
import { ADMIN_ROLES } from "../../config/user";
import DateRangeFilter from "../globals/filters/DateRangeFilter";

import { dashboardGetRequest } from "../../redux/actions";
import PersonalPerformance from "./personal-performance";

export const Dashboard = ({ charts, user, dashboardGetRequest, params }) => {
  const [dashboardConfig, setDashboardConfig] = useState();

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(
      user.hasOwnProperty("roles") && ADMIN_ROLES.includes(user.roles[0])
    );
  }, []);

  useEffect(() => {
    setDashboardConfig(
      user.hasOwnProperty("roles") && DASHBOARD_SETS[user.roles[0]]
    );
  }, [user]);

  useEffect(() => {
    dashboardConfig && dashboardGetRequest(dashboardConfig, params);
  }, [dashboardConfig, dashboardGetRequest, params]);

  return (
    <>
      <Row className="mt-3 mb-3">
        <Col >
          <Row className="mb-4">
            <h2>Home</h2>
          </Row>
          <Row>
            <Col>
              <h4>Company Overview</h4>
              <hr />
              <p>
                This dashboards shows a summary of the company's sales stats for
                the selected date range. Change values in the filter below to
                get stats for different date range.
              </p>
            </Col>
          </Row>
          <Row className="ml-1 mt-3 mb-1">
            <Col lg="10" md="12" sm="12">
              <DateRangeFilter />
            </Col>
          </Row>
          <Row>
            {charts &&
              charts.map((chartData, key) => (
                <Col sm="6" md="6" key={key}>
                  <DashboardChart chartData={chartData} />
                </Col>
              ))}
          </Row>
        </Col>

        <Col sm="3" lg="3" hidden={isAdmin}>
          <PersonalPerformance isAdmin={isAdmin} />
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
