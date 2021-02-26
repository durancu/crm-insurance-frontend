import React from "react";

//Components
import { Row, Col } from "react-bootstrap";
import SaleList from "./SaleList";


export default function Sales() {
  return (
    <>
      <Row className="mt-3 mb-3">
        <Col sm="8">
          <h2>Sales</h2>
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="12">
          <SaleList />
        </Col>
      </Row>
    </>
  );
}


