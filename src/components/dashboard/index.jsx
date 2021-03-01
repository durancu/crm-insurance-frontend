import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import DashboardChart from "./sales/DashboardChart";
import { DateRange, dateRangeByName } from "../globals/date-factory";
import { dashboardGetRequest } from "../../redux/actions";
import { DASHBOARD_SETS } from "../../config/dashboard";

const mtd = dateRangeByName(DateRange.MONTH_TO_DATE);

export const Dashboard = ({ dashboardGetRequest, charts, user }) => {
  const [query] = useState(DASHBOARD_SETS.ADMIN);
  const [params] = useState({
    start_date: mtd.start,
    end_date: mtd.end
  });
  

  console.log("query", query);
  useEffect(() => {
    dashboardGetRequest(query,params);
  }, [dashboardGetRequest, params, query]);

  return (
    <>
      <Row className="mt-3 mb-3">
        <Col sm="6">
          <h2>Dashboard</h2>
        </Col>
      </Row>
      <Row>
        {charts.map((chartData, key) => (
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
});

const mapDispatchToProps = {
  dashboardGetRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
