import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Actions
import { reportListRequest } from "../../../redux/actions";

//Components
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory from "react-bootstrap-table2-filter";
import DateRangeFilter from "../../globals/filters/DateRangeFilter";
import Spinner from "../../globals/spinner";
import { Row, Col } from "react-bootstrap";
import { salesReportTableColumns, salesReportDefaultSorted } from "./config";
import { isAdminCheck } from "../../../config/user";

export const Reports = ({
  reportListRequest,
  loadingReport,
  errorReport,
  sales,
  user,
  params,
}) => {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    setIsAdmin(isAdminCheck(user));
  }, [user, user.roles]);

  useEffect(() => {
    reportListRequest({}, params);
  }, [params, reportListRequest]);

  return (
    <>
      <Row className="mt-3 mb-3">
        <Col sm="8">
          <h2>Sales Report</h2>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col lg="10" sm="6">
          <DateRangeFilter />
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
            data={sales}
            columns={salesReportTableColumns(isAdmin)}
            striped
            hover
            bordered={false}
            responsive
            filter={filterFactory()}
            defaultSorted={salesReportDefaultSorted()}
            noDataIndication="No registered sales"
            // cellEdit={cellEditFactory({ mode: "click", blurToSave: false })}
          />
        </Row>
      )}
    </>
  );
};

Reports.propTypes = {
  sales: PropTypes.array.isRequired,
  loadingReport: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  errorReport: PropTypes.bool.isRequired,
  reportListRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  sales: state.reportReducer.list.sales,
  loadingReport: state.reportListStatusReducer.loading,
  errorReport: state.reportListStatusReducer.error,
  user: state.userProfileReducer.user,
  params: state.filterReducer.params,
});

const mapDispatchToProps = {
  reportListRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reports);
