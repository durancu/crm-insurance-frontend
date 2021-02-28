import React, { useEffect, useState, } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Bar, Line } from 'react-chartjs-2';
import {dashboardGetRequest} from '../../../redux/actions';

//Components
import {Card} from "react-bootstrap";

const DashboardChart = ({ dashboardGetRequest, chartData, chartConfig}) => {

  const [query] = useState(chartConfig);

  useEffect(() => {
    dashboardGetRequest(query);
  }, [dashboardGetRequest, query]);

  switch (chartData.chartType) {

    case "line":
        return (
          <>
            <Card>
              <Card.Body>
                <Card.Title>{chartConfig.title}</Card.Title>
                <Line data={chartData} />
              </Card.Body>
            </Card>
          </>
        );

    case "bar":
    default:
      return (
        <>
          <Card>
            <Card.Body>
              <Card.Title>{chartConfig.title}</Card.Title>
              <Bar data={chartData.data} />
            </Card.Body>
          </Card>
        </>
      );

  }

};



DashboardChart.propTypes = {
  chartConfig: PropTypes.object.isRequired,
  
};

const mapStateToProps = (state) => ({
  //customers: state.customerReducer.list,
  chartData: state.dashboardReducer.config,
  
});

const mapDispatchToProps = {
  dashboardGetRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardChart);
