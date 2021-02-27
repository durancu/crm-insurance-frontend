import React, { useEffect, useState, } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Bar } from 'react-chartjs-2';

//Components
import { Button, Form } from "react-bootstrap";

//Actions
import {
  userLoadRequest,
  customerLoadRequest,
  saleListRequest,
  reportListRequest,
} from "../../../redux/actions";
import { dashboardGetRequest } from "../../../redux/actions/dashboards-actions/dashboardGetActions";

const BarChartDashboard = ({ saleListRequest, reportListRequest, model }) => {

  const sample = {
    datasets: [{
        data: [10, 20, 30],
        backgroundColor: ['red', 'yellow', 'blue']

    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
};


  useEffect(() => {



    switch (model) {
      case "sale":
        dashboardGetRequest(
          `model=sale`
        );
        break;

      default:
        break;
    }
  }, [model]);


  return (
    <>
    <Bar data={sample}/>
    </>
  );
};

export default connect()(BarChartDashboard);
