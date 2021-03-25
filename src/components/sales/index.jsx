import React from "react";

//Components
import { Row, Col } from "react-bootstrap";
import SaleList from "./SaleList";

export default function Sales() {
  return (
    <>
      <Row className="mt-3 mb-3">
        <Col sm="12">
          <h3>Sales Management</h3>
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="12">
          <SaleList model={"sale"} />
        </Col>
      </Row>
    </>
  );
}
