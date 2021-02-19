import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

//Actions
import { reportListRequest } from "../../redux/actions";
//Functions
import { dataTransform } from "../globals/functions";
//Assets
import "../assets/App.css";
//Components
import { Spinner, Row, Col } from "react-bootstrap";

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
    <>
      <Row className="mt-3">
        <Col sm="10">
          <h1>Dashboard</h1>
        </Col>
        <Col sm="2">
          <Link to="/sales/create" className="btn btn-primary">
            Add Sale
          </Link>
        </Col>
      </Row>
      {loadingReport ? (
        <Row>
          {" "}
          <Spinner animation="border" variant="primary" />
          <h3>Loading...</h3>
        </Row>
      ) : (
        <Row>
          <div className="table" id="results">
            <div className="theader">
              <div className="table_header">Date</div>
              <div className="table_header">Insurance Company</div>
              <div className="table_header">Customer</div>
              <div className="table_header">Charge</div>
              <div className="table_header">Fee</div>
              <div className="table_header">Tip</div>
              <div className="table_header">Permits</div>
              <div className="table_header">Pending</div>
              <div className="table_header">Bonus</div>
            </div>
            {sales.map((sale) => (
              <div key={sale._id} className="table_row">
                <div className="table_small">
                  <div className="table_cell">Date</div>
                  <div className="table_cell">
                    {moment(sale.soldAt).format("L")}
                  </div>
                </div>
                <div className="table_small">
                  <div className="table_cell">Insurance Company</div>
                  <div className="table_cell">{dataTransform(sale)}</div>
                </div>
                <div className="table_small">
                  <div className="table_cell">Customer</div>
                  <div className="table_cell">{sale.customer.name}</div>
                </div>
                <div className="table_small">
                  <div className="table_cell">Charge</div>
                  <div className="table_cell">
                    {sale.totalCharge
                      ? Math.round(sale.totalCharge * 100) / 100
                      : "-"}
                  </div>
                </div>
                <div className="table_small">
                  <div className="table_cell">Fee</div>
                  <div className="table_cell">
                    {sale.fees ? Math.round(sale.fees * 100) / 100 : "-"}
                  </div>
                </div>
                <div className="table_small">
                  <div className="table_cell">Tip</div>
                  <div className="table_cell">
                    -0.9919{sale.tips ? Math.round(sale.tips * 100) / 100 : "-"}
                  </div>
                </div>
                <div className="table_small">
                  <div className="table_cell">Permits</div>
                  <div className="table_cell">
                    {sale.permits ? Math.round(sale.permits * 100) / 100 : "-"}
                  </div>
                </div>
                <div className="table_small">
                  <div className="table_cell">Pending</div>
                  <div className="table_cell">
                    {sale.amountReceivable
                      ? Math.round(sale.amountReceivable * 100) / 100
                      : "-"}
                  </div>
                </div>
                <div className="table_small">
                  <div className="table_cell">Bonus</div>
                  <div className="table_cell">
                    {sale.sellerBonus
                      ? Math.round(sale.sellerBonus * 100) / 100
                      : "-"}
                  </div>
                </div>
              </div>
            ))}
            {loadingReport ||
              (metrics.length > 0 && (
                <div className="table_row">
                  <div className="table_small">
                    <div className="table_cell"></div>
                    <div className="table_cell">
                      <b>TOTAL</b>
                    </div>
                  </div>
                  <div className="table_small">
                    <div className="table_cell"></div>
                    <div className="table_cell">-</div>
                  </div>
                  <div className="table_small">
                    <div className="table_cell"></div>
                    <div className="table_cell">-</div>
                  </div>
                  <div className="table_small">
                    <div className="table_cell">Charge</div>
                    <div className="table_cell">
                      <b>{metrics[0].totalCharge}</b>
                    </div>
                  </div>
                  <div className="table_small">
                    <div className="table_cell">Fee</div>
                    <div className="table_cell">
                      <b>{metrics[0].fees}</b>
                    </div>
                  </div>
                  <div className="table_small">
                    <div className="table_cell">Tip</div>
                    <div className="table_cell">
                      <b>{metrics[0].tips}</b>
                    </div>
                  </div>
                  <div className="table_small">
                    <div className="table_cell">Permits</div>
                    <div className="table_cell">
                      <b>{metrics[0].permits}</b>
                    </div>
                  </div>
                  <div className="table_small">
                    <div className="table_cell">Pending</div>
                    <div className="table_cell">
                      <b>{metrics[0].amountReceivable}</b>
                    </div>
                  </div>
                  <div className="table_small">
                    <div className="table_cell">Bonus</div>
                    <div className="table_cell">
                      <b>{metrics[0].sellerBonus}</b>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {sales.length < 1 && <h4 className="mx">No sales registered</h4>}
        </Row>
      )}
    </>
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
