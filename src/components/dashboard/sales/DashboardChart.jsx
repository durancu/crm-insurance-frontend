import React from "react";
import { Bar, Line } from 'react-chartjs-2';

//Components
import {Card} from "react-bootstrap";

const DashboardChart = ({ chartData, title}) => {

  console.log(chartData)

  switch (chartData.type) {

    case "line":
        return (
          <>
            <Card className="mt-4">
              <Card.Body>
                <Card.Title>{title}Ejemplo</Card.Title>
                <Line data={chartData.data} />
              </Card.Body>
            </Card>
          </>
        );

    case "bar":
    default:
      return (
        <>
          <Card className="mt-4">
            <Card.Body>
              <Card.Title>{title}Ejemplo</Card.Title>
              <Bar data={chartData.data} />
            </Card.Body>
          </Card>
        </>
      );

  }

};



DashboardChart.propTypes = {  
};

export default DashboardChart;
