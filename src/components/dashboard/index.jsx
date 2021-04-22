import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import DashboardChart from "./sales/DashboardChart";
import { loadDashboardConfig } from "../../config/dashboard";
import { isAdminCheck } from "../../config/user";
import DateRangeFilter from "../globals/filters/DateRangeFilter";

import { dashboardGetRequest } from "../../redux/actions";
import PersonalPerformance from "./personal-performance";
import { DateRange, dateRangeByName } from "../globals/date-factory";

export const Dashboard = ({ charts, user, dashboardGetRequest }) => {
  const defaultDateRange = dateRangeByName(DateRange.THIS_FISCAL_MONTH);
  const [dashboardConfig, setDashboardConfig] = useState();


  const [isAdmin, setIsAdmin] = useState(true);
  const [params, setParams] = useState({
    startDate: defaultDateRange.startDate,
    endDate: defaultDateRange.endDate,
  });

  useEffect(() => {
    setIsAdmin(isAdminCheck(user));
  }, [user]);

  useEffect(() => {
    setDashboardConfig(loadDashboardConfig(user));
  }, [user]);

  useEffect(() => {
    console.log(params);
    if (dashboardConfig && params) {
      dashboardGetRequest(dashboardConfig, params);
    }
  }, [dashboardConfig, dashboardGetRequest, params]);

  return (
    <>
      <Row className="mt-3 mb-3">
        <Col sm="12">
          <h3>Home</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Company Overview</h4>
          <hr />
          <p>
            This dashboards shows a summary of the company's sales stats for the
            selected date range. Change values in the filter below to get stats
            for different date range.
          </p>

          <DateRangeFilter setParams={setParams} params={params}/>

          <Row>
            {charts &&
              charts.map((chartData, key) => (
                <Col sm="6" lg="6" key={key}>
                  <DashboardChart chartData={chartData} />
                </Col>
              ))}
          </Row>
        </Col>

        {!isAdmin && (
          <Col sm="3" lg="3">
            <PersonalPerformance isAdmin={isAdmin} />
          </Col>
        )}
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
