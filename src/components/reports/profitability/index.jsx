import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Actions
import { reportProfitRequest } from "../../../redux/actions";

//Components
import { Row, Col } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory from "react-bootstrap-table2-filter";
import { salesReportTableColumns, salesReportDefaultSorted } from "./config";
import { isAdminCheck } from "../../../config/user";
import FilterDate from "../../globals/filters/FilterDate";
import moment from "moment";
import Spinner from "../../globals/spinner";
import { calculateMonthRange } from "../../globals/functions";
import FilterLocation from "../../globals/filters/FilterLocation";

export const Reports = ({
  reportProfitRequest,
  loadingReport,
  errorReport,
  data,
  user,
}) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [params, setParams] = useState({
    month: moment().date() > 20 ? moment().month() + 2 : moment().month()+1,
    year: moment().year(),
    location: user.location,
  });

  const [monthRange, setMonthRange] = useState(calculateMonthRange({
    month: moment().date() > 20 ? moment().month() + 2 : moment().month()+1,
    year: moment().year(),
  }));

  useEffect(() => {
    setIsAdmin(isAdminCheck(user));
  }, [user, user.roles]);

  useEffect(() => {
    reportProfitRequest({}, params);
    setMonthRange(calculateMonthRange(params));
  }, [params, reportProfitRequest]);

  return (
    <>
      <Row className="mt-4 mb-4">
        <Col sm="8">
          <h2>Profits Report</h2>
        </Col>
        <Col></Col>
      </Row>
      <Row className="mt-3 mb-3">
        <Col sm="3">
          <FilterDate setParams={setParams} params={params} />
        </Col>
        <Col sm="3">
          <FilterLocation setParams={setParams} params={params} />
        </Col>
        <Col sm="6">
          <h5 style={{ textAlign: "right" }}>
            {`${monthRange.start} - ${monthRange.end}`}
          </h5>
        </Col>
      </Row>

      {loadingReport ? (
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Spinner />
          </Col>
        </Row>
      ) : (
        <Row>
          <BootstrapTable
            bootstrap4
            keyField="_id"
            data={data}
            columns={salesReportTableColumns(isAdmin)}
            /* striped */
            hover
            bordered={false}
            responsive
            filter={filterFactory()}
            filterPosition="top"
            defaultSorted={salesReportDefaultSorted()}
            noDataIndication="No payroll data"
            // cellEdit={cellEditFactory({ mode: "click", blurToSave: false })}
          />
        </Row>
      )}
    </>
  );
};

Reports.propTypes = {
  data: PropTypes.array.isRequired,
  loadingReport: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  errorReport: PropTypes.bool.isRequired,
  reportProfitRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.reportProfitReducer.list,
  loadingReport: state.reportProfitStatusReducer.loading,
  errorReport: state.reportProfitStatusReducer.error,
  user: state.userProfileReducer.user,
});

const mapDispatchToProps = {
  reportProfitRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reports);
