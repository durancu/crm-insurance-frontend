import React from "react";
import { connect } from "react-redux";
import { Row, Col, Card } from "react-bootstrap";
import { ShieldLock } from "react-bootstrap-icons";

const Page403 = ({ ipAddress }) => {
  return (
    <>
      <Row style={{ padding: "0 0 0 0", marginTop: "10%" }}>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body style={{ textAlign: "center" }}>
              <h1>
                <ShieldLock size="50" />
              </h1>
              <h1>ACCESS DENIED!</h1>
              <p>
                Your IP address <strong>({ipAddress})</strong> is not authorized
                to access this application. If you consider this message to be a
                mistake, please contact the platform administrator.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      )
    </>
  );
};

const mapStateToProps = (state) => ({
  loadingIpCheckStatus: state.ipCheckStatusGetStatusReducer.loading,
  ipAddress: state.ipCheckStatusReducer.ipAddress,
});

export default connect(mapStateToProps)(Page403);
