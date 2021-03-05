import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
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
      <Row className="mt-3 mb-3">
        <Col sm="12">
          <h4>Sales Summary</h4>
          <p>
            This dashboards shows a summary of the company's sales stats. Change
            the date range filter above to get stats for a specific time period.
          </p>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col lg="10" sm="6">
          <DateRangeFilter />
        </Col>
      </Row>
      <Row>
        {charts &&
          charts.map((chartData, key) => (
            <Col sm="6" key={key}>
              <DashboardChart chartData={chartData} />
            </Col>
          ))}
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
