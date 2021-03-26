import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";
//COmponents
import { Row, Col } from "react-bootstrap";
import PersonalPerformanceItem from "./PersonalPerformanceItem";
//Actions
import { dashboardPersonalPerformanceRequest } from "../../../redux/actions";
import Spinner from "../../globals/spinner";

const PersonalPerformance = ({
  user,
  data,
  loading,
  error,
  isAdmin,
  dashboardPersonalPerformanceRequest,
}) => {
  const [params] = useState({
    month: moment().month() + 1,
    year: moment().year(),
  });

  const [lastMonth] = useState(
    moment().date() < 21
      ? moment({"day":21}).subtract(1, 'months').format("MMM Do")
      : moment({"day":21}).format("MMM Do")
  );

  useEffect(() => {
    !isAdmin && dashboardPersonalPerformanceRequest({}, params);
  }, [isAdmin, dashboardPersonalPerformanceRequest, params]);
  return (
    <>
      <Row>
        <Col>
          <h4>{user.firstName}'s Performance <small>({lastMonth} - Today)</small></h4>
          <hr />
        </Col>
      </Row>
      <Row>
        {loading ? (
          <Col style={{ textAlign: "center" }}>
            <Spinner />
          </Col>
        ) : (
          <>
            <Col sm="12" lg="12">
              <p>{data.message}</p>
            </Col>
            <Col sm="12" lg="12" style={{ textAlign: "center" }}>
              {data.metrics &&
                data.metrics.map((metric, i) => (
                  <PersonalPerformanceItem key={i} metric={metric} />
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
