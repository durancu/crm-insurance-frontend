import React from "react";

//components
import { Row, Col } from "react-bootstrap";
import InsurerList from "./InsurerList";

export default function Insurers() {
  return (
    <>
      <Row className="mt-3">
        <h1>Insurers</h1>
      </Row>
      <Row>
        <Col sm="12" lg="12">
          <InsurerList />
        </Col>
      </Row>
    </>
  );
}
