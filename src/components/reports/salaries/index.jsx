import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Actions
import { reportSalaryRequest } from "../../../redux/actions";

//Components
import { Row, Col } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory from "react-bootstrap-table2-filter";
import {
  payrollReportTableColumns,
  payrollReportDefaultSorted,
} from "./config";
import { isAdminCheck } from "../../../config/user";
import FilterDate from "../../globals/filters/FilterDate";
import moment from "moment";
import Spinner from "../../globals/spinner";

export const Reports = ({
  reportSalaryRequest,
  loadingReport,
  errorReport,
  data,
  user,
}) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [params, setParams] = useState({
    month: moment().subtract(0, "month").month(),
    year: moment().subtract(1, "month").year(),
  });

  useEffect(() => {
    setIsAdmin(isAdminCheck(user));
  }, [user, user.roles]);

  useEffect(() => {
    reportSalaryRequest({}, params);
  }, [params, reportSalaryRequest]);

  return (
    <>
      <Row className="mt-4 mb-4">
        <Col sm="8">
          <h2>Payroll Report</h2>
        </Col>
        <Col></Col>
      </Row>
      <Row className="mt-3 mb-3">
        <Col sm="8">
          <FilterDate setParams={setParams} />
        </Col>
        <Col sm="4">
          <h4 style={{ textAlign: "right" }}>
            {`${moment()
              .month(params.month - 1)
              .format("MMM")}, ${params.year}`}
          </h4>
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
            columns={payrollReportTableColumns(isAdmin)}
            striped
            hover
            bordered={false}
            responsive
            filter={filterFactory()}
            defaultSorted={payrollReportDefaultSorted()}
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
  reportSalaryRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.reportSalaryReducer.list,
  loadingReport: state.reportSalaryStatusReducer.loading,
  errorReport: state.reportSalaryStatusReducer.error,
  user: state.userProfileReducer.user,
});

const mapDispatchToProps = {
  reportSalaryRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reports);
