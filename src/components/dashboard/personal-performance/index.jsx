import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";
//COmponents
import { Row, Col, Spinner } from "react-bootstrap";
import PersonalPerformanceItem from "./PersonalPerformanceItem";
//Actions
import { dashboardPersonalPerformanceRequest } from "../../../redux/actions";

const PersonalPerformance = ({
  user,
  data,
  loading,
  error,
  isAdmin,
  dashboardPersonalPerformanceRequest,
}) => {
  const [params, setParams] = useState({
    month: moment().month() + 1,
    year: moment().year(),
  });

  useEffect(() => {
    !isAdmin && dashboardPersonalPerformanceRequest({}, params);
  }, [isAdmin, dashboardPersonalPerformanceRequest, params]);
  return (
    <>
      <Row>
        <Col>
          <h5>Personal Performance</h5>
          <hr />
        </Col>
      </Row>
      <Row>
        {loading ? (
          <Col style={{ textAlign: "center" }}>
            <Spinner size="lg" animation="border" variant="primary" />
          </Col>
        ) : (
          <>
            <Col sm="12" lg="12">
              <p>{data.message}</p>
            </Col>
            <Col sm="12" lg="12" style={{ textAlign: "center" }}>
              {data.metrics && data.metrics.map((metric) => (
                  <PersonalPerformanceItem key={metric.title} metric={metric} />
                ))}
            </Col>
          </>
        )}
      </Row>
    </>
  );
};

PersonalPerformance.propTypes = {
  user: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  dashboardPersonalPerformanceRequest: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.userProfileReducer.user,
  data: state.dashboardPersonalPerformanceReducer.data,
  loading: state.dashboardPersonalPerformanceStatusReducer.loading,
  error: state.dashboardPersonalPerformanceStatusReducer.error,
});

const mapDispatchToProps = {
  dashboardPersonalPerformanceRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalPerformance);
