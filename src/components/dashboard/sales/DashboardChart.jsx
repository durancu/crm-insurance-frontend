import React, { useEffect, useState, } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Bar, Line } from 'react-chartjs-2';
import {dashboardGetRequest} from '../../../redux/actions';

//Components
import {Card} from "react-bootstrap";

const DashboardChart = ({ dashboardGetRequest, chartData, chartConfig, list,counter}) => {

  const [query] = useState(chartConfig);

  useEffect(() => {
    dashboardGetRequest(query);
  }, [dashboardGetRequest, query]);

  console.log(list);
  //console.log(counter);

  switch (chartData.chartType) {

    case "line":
      //  console.log(chartData.data)
        return (
          <>
            <Card id={Math.random()*10/10}>
              <Card.Body>
                <Card.Title>{chartConfig.title}</Card.Title>
                { list.length > 0 && <Line data={list[counter].data} />   }           
              </Card.Body>
            </Card>
          </>
        );

    case "bar":
    default:
    //  console.log(chartData.data)
      return (
        <>
          <Card id={Math.random()*10/10}>
            <Card.Body>
              <Card.Title>{chartConfig.title}</Card.Title>
              { list.length > 0 && <Bar data={list[counter].data} />   }           
            </Card.Body>
          </Card>
        </>
      );

  }

};



DashboardChart.propTypes = {
  chartConfig: PropTypes.object.isRequired,
  list:PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  //customers: state.customerReducer.list,
  chartData: state.dashboardReducer.config,
  list: state.dashboardReducer.list,
});

const mapDispatchToProps = {
  dashboardGetRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardChart);
