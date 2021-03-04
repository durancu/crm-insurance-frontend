import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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
import { ADMIN_ROLES } from "../../../config/user";
import { SaleCreate } from "../../sales/SaleCreate";

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
    user.hasOwnProperty("roles") && ADMIN_ROLES.includes(user.roles[0]) && setIsAdmin(true);
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
         {/*  <SalesFilters model={'sale'}/> */}
          <DateRangeFilter model={'sale'}/>
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
  params: state.filterReducer.params,
});

const mapDispatchToProps = {
  reportListRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reports);
