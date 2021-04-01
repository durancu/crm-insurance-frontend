import React from "react";

//Components
import { Row, Col } from "react-bootstrap";
import SaleList from "./SaleList";

export default function Sales() {
  return (
    <>
      <Row className="mt-3 mb-3">
        <Col>
          <h3>Sales Management</h3>
        </Col>
      </Row>
      <SaleList />
    </>
  );
}
