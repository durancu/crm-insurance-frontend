import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

//Actions
import { reportListRequest } from "../../../redux/actions";

//Assets
import "../../assets/App.css";
//Components
import { Spinner, Row, Col } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory from "react-bootstrap-table2-filter";
import cellEditFactory from "react-bootstrap-table2-editor";
import { salesReportTableColumns, salesReportDefaultSorted } from "./config";
import DateRangeFilter from "../../globals/filters/DateRangeFilter";

export const Reports = ({
  reportListRequest,
  loadingReport,
  errorReport,
  sales,
  user,
}) => {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    reportListRequest();
    user.roles.map((rol) => rol === "ADMIN" && setIsAdmin(true));
  }, [reportListRequest, user.roles]);

  return (
    <>
      <Row className="mt-3 mb-3">
        <Col sm="8">
          <h2>Sales Report</h2>
        </Col>
      </Row>
      <Row>
        <Col lg="10" sm="6">
          <DateRangeFilter model={'report'}/>
        </Col>
        <Col lg="2" sm="6" align="right">
          <Link to="/sales/create" className="btn btn-primary">
            Add New Sale
          </Link>
        </Col>
      </Row>

      {loadingReport ? (
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Spinner animation="border" variant="primary" />
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
            condensed={true}
            bordered={false}
            responsive
            filter={filterFactory()}
            defaultSorted={salesReportDefaultSorted()}
            noDataIndication="No registered sales"
            cellEdit={cellEditFactory({ mode: "click", blurToSave: false })}
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
});

const mapDispatchToProps = {
  reportListRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reports);
