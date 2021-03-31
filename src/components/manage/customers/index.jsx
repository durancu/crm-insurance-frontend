import React from "react";

//components
import { Row, Col } from "react-bootstrap";

import CustomerList from "./CustomerList";

export default function Customers() {
  return (
    <>
      <Row className="mt-3 mb-3">
        <Col>
          <h3>Customer Management</h3>
        </Col>
      </Row>
      <CustomerList />
    </>
  );
}
