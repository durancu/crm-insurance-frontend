import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

const Page404 = () => {
  return (
    <Row className="p-0 auth-form ">
      <Col md={{ span: 6, offset: 3 }}>
        <Card>
          <Card.Body className="text-center">
            <h1>
              <Search size="50" />
            </h1>
            <h1>NOT FOUND!</h1>
            <p>
              Maybe this page moved? Got deleted? Is hiding out in quarantine?
              Never existed in the first place?
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Page404;
