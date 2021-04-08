import React from "react";
import { connect } from "react-redux";
import { Row, Col, Card } from "react-bootstrap";
import { ShieldLock } from "react-bootstrap-icons";
import { checkIpStatusCodes } from "../../global/config";

const Page403 = ({ ipAddress, checkIpStatus }) => {
  return (
    checkIpStatus === checkIpStatusCodes.UNAUTHORIZED && (
      <>
        <Row className="p-0 auth-form ">
          <Col md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Body className="text-center">
                <h1>
                  <ShieldLock size="50" />
                </h1>
                <h1>ACCESS DENIED!</h1>
                <p>
                  Your IP address <strong>({ipAddress})</strong> is not
                  authorized to access this application. If you consider this
                  message to be a mistake, please contact the platform
                  administrator.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        )
      </>
    )
  );
};

const mapStateToProps = (state) => ({
  loadingcheckIpStatus: state.checkIpStatusGetStatusReducer.loading,
  ipAddress: state.checkIpStatusReducer.ipAddress,
  checkIpStatus: state.checkIpStatusReducer.checkIpStatus,
});

export default connect(mapStateToProps)(Page403);
