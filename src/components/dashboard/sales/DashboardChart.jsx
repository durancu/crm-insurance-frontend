import React from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";

//Components
import { Card } from "react-bootstrap";

const DashboardChart = ({ chartData, title }) => {
  console.log(chartData);

  switch (chartData.type) {
    case "line":
      return (
        <>
          <Card className="mt-4">
            <Card.Body>
              <Card.Title>{chartData.title}</Card.Title>
              <Line data={chartData.data} options={chartData.options} />
            </Card.Body>
          </Card>
        </>
      );

    case "doughnut":
      return (
        <>
          <Card className="mt-4">
            <Card.Body>
              <Card.Title>{chartData.title}</Card.Title>
              <Doughnut data={chartData.data} options={chartData.options} />
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
              <Card.Title>{chartData.title}</Card.Title>
              <Bar data={chartData.data} options={chartData.options}
              />
            </Card.Body>
          </Card>
        </>
      );
  }
};

DashboardChart.propTypes = {};

export default DashboardChart;
