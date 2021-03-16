import React, { useState } from "react";

//components
import { Row, Col, Button } from "react-bootstrap";
import InsurerCreate from "./InsurerCreate";
import InsurerList from "./InsurerList";

export default function Insurers() {
  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <Row className="mt-3">
        <Col sm="10">
          <h2>Insurers</h2>
        </Col>
      </Row>
      <Row className="mt-0 mb-2">
        <Col style={{ textAlign: "right" }}>
          <Button variant="primary" onClick={showModal}>
            Add New Insurer
          </Button>
          <InsurerCreate
            showModal={showModal}
            modal={modal}
            edit={false}
            dataForm={{}}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="12">
          <InsurerList />
        </Col>
      </Row>
    </>
  );
}
