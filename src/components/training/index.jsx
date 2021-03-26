import React from "react";

//COMPONENT
import { Row, Col, Accordion, Card } from "react-bootstrap";

const Training = () => {
  return (
    <>
      <Row className="mt-3 mb-3">
        <Col sm="12">
          <h3>Training</h3>
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="12">
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Click me!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Click me!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </>
  );
};

export default Training;
