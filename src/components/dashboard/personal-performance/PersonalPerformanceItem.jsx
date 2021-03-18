import React from "react";
import PropTypes from "prop-types";

import { Card, Col, Row } from "react-bootstrap";

const PersonalPerformanceItem = ({ metric }) => {
  return (
    <Card className="mb-3">
      <Card.Header>
        <Row>

        {/* <Card.Title>{metric.label}</Card.Title> */}
          <Col style={{textAlign:"left"}}>
            <span style={{ fontSize: "24px" }}>{metric.label}</span>
          </Col>
          {/* <Col style={{ textAlign: "right" }}>
            <span style={{ fontSize: "14px" }}>
              <i>{metric.subtitle}</i>
            </span>
          </Col> */}
        </Row>
      </Card.Header>
      <Card.Body>
        {/* <Card.Title>{metric.label}</Card.Title> */}
        <Card.Text style={{ textAlign: "center" }}>
          <span style={{ fontSize: "35px" }}>{metric.valuePrefix}</span>
          <span style={{ fontSize: "50px" }}>{metric.value}</span>
          <span style={{ fontSize: "30px" }}>{metric.valueSuffix}</span>
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
