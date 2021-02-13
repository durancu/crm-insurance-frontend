import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";
import { Link } from 'react-router-dom'

//Actions
import { reportListRequest } from "../../redux/actions";
//Functions
import dataTransform from "./dataTransform";

//Components
import { Table, Spinner, Row, Col, } from "react-bootstrap";

export const Reports = ({
  reportListRequest,
  metrics,
  loadingReport,
  errorReport,
  sales,
}) => {
  useEffect(() => {
    reportListRequest();
  }, [reportListRequest]);

  return (
    <Fragment>
      <Row>
        <Col sm="10">
          <h1>Panel de Control</h1>
        </Col>
        <Col sm="2">
          <Link to="/sales/create" className="btn btn-primary">Add Sale</Link>
        </Col>
      </Row>
      <Table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Insurance Company</th>
            <th>Customer</th>
            <th>Charge</th>
            <th>Fee</th>
            <th>Tip</th>
            <th>Permits</th>
            <th>Pending</th>
            <th>Bonus</th>
          </tr>
        </thead>
        <tbody>
          {loadingReport ? (
            <tr>
              <td colSpan="9" align="center">
                <Spinner animation="border" variant="primary" />
              </td>
            </tr>
          ) : sales.length > 0 ? (
            sales.map((sale, key) => (
              <tr key={key}>
                <td>{moment(sale.soldAt).format("L")}</td>
                <td>{dataTransform(sale)}</td>
                <td>{sale.customer.name}</td>
                <td align="right">{sale.totalCharge ? Math.round(sale.totalCharge * 100) / 100 : '-'}</td>
                <td align="right">{sale.fees ? Math.round(sale.fees * 100) / 100 : '-'}</td>
                <td align="right">{sale.tips ? Math.round(sale.tips * 100) / 100 : '-'}</td>
                <td align="right">{sale.permits ? Math.round(sale.permits * 100) / 100 : '-'}</td>
                <td align="right">{sale.amountReceivable ? Math.round(sale.amountReceivable * 100) / 100 : '-'}</td>
                <td align="right">{sale.sellerBonus ? Math.round(sale.sellerBonus * 100) / 100 : '-'}</td>
              </tr>
            ))
          ) : (
                <tr>
                  <td colSpan="9" align="center">
                    <h4>No registered sales</h4>
                  </td>
                </tr>
              )}
        </tbody>
        {loadingReport ||
          (metrics.length > 0 && (
            <thead>
              <tr>
                <th>TOTAL</th>
                <th></th>
                <th></th>
                <th align="right">{metrics[0].totalCharge ? Math.round(metrics[0].totalCharge * 100) / 100 : '-'}</th>
                <th align="right">{metrics[0].fees ? Math.round(metrics[0].fees * 100) / 100 : '-'}</th>
                <th align="right">{metrics[0].tips ? Math.round(metrics[0].tips * 100) / 100 : '-'}</th>
                <th align="right">{metrics[0].permits ? Math.round(metrics[0].permits * 100) / 100 : '-'}</th>
                <th align="right">{metrics[0].amountReceivable ? Math.round(metrics[0].amountReceivable * 100) / 100 : '-'}</th>
                <th align="right">{metrics[0].sellerBonus ? Math.round(metrics[0].sellerBonus * 100) / 100 : '-'}</th>
              </tr>
            </thead>
          ))}
      </Table>
    </Fragment>
  );
};

Reports.propTypes = {
  sales: PropTypes.array.isRequired,
  metrics: PropTypes.array.isRequired,
  loadingReport: PropTypes.bool.isRequired,
  errorReport: PropTypes.bool.isRequired,
  reportListRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  sales: state.reportReducer.list.sales,
  metrics: state.reportReducer.list.metrics,
  loadingReport: state.reportListStatusReducer.loading,
  errorReport: state.reportListStatusReducer.error,
});

const mapDispatchToProps = {
  reportListRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reports);
