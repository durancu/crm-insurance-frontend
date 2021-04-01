import React from "react";
import { Row, Col, Card, Jumbotron } from "react-bootstrap";
import { ShieldLock } from "react-bootstrap-icons";

const Page403 = () => {
  return (
    <Row style={{ padding: "0 0 0 0", marginTop: "10%" }}>
      <Col md={{ span: 6, offset: 3 }}>
        <Card>
          <Card.Body style={{textAlign:"center"}}>
            <h1>
              <ShieldLock size="50"/>
            </h1>
            <h1>ERROR, 403!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Page403;
