import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import DashboardChart from "./sales/DashboardChart";
import { DateRange, dateRangeByName } from "../globals/date-factory";
import { dashboardGetRequest } from "../../redux/actions";

const mtd = dateRangeByName(DateRange.MONTH_TO_DATE);

const adminDashboardConfig = {
  "System Administrator": {
    queries: [
      {
        id: 1,
        model: "sales",
        type: "line",
        title: "Sales By Day This Month",
        queryParams: {
          dataCriteria: "totalCharge",
          groupingCriteria: "day",
          aggregation: "count",
          startDate: mtd.start,
          endDate: mtd.end,
        },
      },
      {
        id: 2,
        model: "sales",
        type: "bar",
        title: "Total Sales Amount By Location This Month",
        queryParams: {
          dataCriteria: "totalCharge",
          groupingCriteria: "location",
          aggregation: "sum",
          startDate: mtd.start,
          endDate: mtd.end,
        },
      },
      {
        id: 3,
        model: "sales",
        title: "Total Sales Amount By Seller This Month",
        type: "bar",
        queryParams: {
          dataCriteria: "totalCharge",
          groupingCriteria: "seller",
          aggregation: "sum",
          startDate: mtd.start,
          endDate: mtd.end,
        },
      },
      {
        id: 4,
        model: "sales",
        title: "Total Debt Amount By Seller This Month",
        type: "bar",
        queryParams: {
          dataCriteria: "receivableAmount",
          groupingCriteria: "seller",
          aggregation: "sum",
          startDate: mtd.start,
          endDate: mtd.end,
        },
      },
    ],
  },
};

export const Dashboard = ({ dashboardGetRequest, charts }) => {
  const [query] = useState(adminDashboardConfig["System Administrator"]);

  console.log("query", query);
  useEffect(() => {
    dashboardGetRequest(query);
  }, [dashboardGetRequest, query]);

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
});

const mapDispatchToProps = {
  dashboardGetRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
