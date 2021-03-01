import React, { useEffect, useState, } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Bar, Line } from 'react-chartjs-2';
import {dashboardGetRequest} from '../../../redux/actions';

//Components
import {Card} from "react-bootstrap";

const DashboardChart = ({ chartData, title}) => {

  console.log(chartData)

  switch (chartData.type) {

    case "line":
        return (
          <>
            <Card>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Line data={chartData.data} />
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
              <Card.Title>{title}</Card.Title>
              <Bar data={chartData.data} />
            </Card.Body>
          </Card>
        </>
      );

  }

};



DashboardChart.propTypes = {  
};

export default connect()(DashboardChart);
