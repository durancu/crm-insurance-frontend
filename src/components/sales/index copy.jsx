import React from "react";
import { Row, Col } from "react-bootstrap";

//Components
import SaleList from "./SaleList";
import { Button } from "react-bootstrap";

export default function Sales() {
  return (
    <>
      <Row className="mt-3">
        <Col sm="10">
          <h1>Sales</h1>
        </Col>
        <Col sm="2">
          <Button variant="primary">Add Sale</Button>
        </Col>
      </Row>
      <Row>
        <SaleList />
      </Row>
    </>
  );
}
