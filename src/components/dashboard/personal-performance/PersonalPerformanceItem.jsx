import React from "react";
import PropTypes from "prop-types";

import { Card, Col, Row } from "react-bootstrap";

const PersonalPerformanceItem = ({ metric }) => {
  return (
    <Card className="mb-3">
      <Card.Header>
        <Row>

        {/* <Card.Title>{metric.label}</Card.Title> */}
          <Col className="text-left">
            <span className="personal-performance-metric-label">{metric.label}</span>
          </Col>
          {/* <Col className="text-right" >
            <span className="personal-performance-metric-subtitle">
              <i>{metric.subtitle}</i>
            </span>
          </Col> */}
        </Row>
      </Card.Header>
      <Card.Body>
        {/* <Card.Title>{metric.label}</Card.Title> */}
        <Card.Text className="text-center">
          <span className="personal-performance-metric-prefix">{metric.valuePrefix}</span>
          <span className="personal-performance-metric-value">{metric.value}</span>
          <span className="personal-performance-metric-suffix">{metric.valueSuffix}</span>
        </Card.Text>
        <hr />
        <Card.Text>{metric.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

PersonalPerformanceItem.protoTypes = {
  metric: PropTypes.object.isRequired,
};

export default PersonalPerformanceItem;
