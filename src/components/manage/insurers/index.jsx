import React from "react";

//components
import { Row, Col } from "react-bootstrap";
import InsurerList from "./InsurerList";

export default function Insurers(){    

  return (
    <>
      <Row className="mt-3 mb-3">
        <Col>
          <h3>Insurers</h3>
        </Col>
      </Row>
          <InsurerList />
    </>
  );
}
