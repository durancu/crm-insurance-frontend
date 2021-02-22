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
import SaleFilters from "./SaleFilters";

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
        <Col sm="8">
          <h1>Dashboard</h1>
        </Col>
      </Row>
      <Row>
      <Col sm="8">
        <SaleFilters />
      </Col>
      <Col sm="4">
        <Link to="/sales/create" className="btn btn-primary btn-lg">
          Add New Sale
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
                <div className="table_header" >Date</div>
                <div className="table_header" >Insurer</div>
                <div className="table_header" >Customer</div>
                {/* <div className="table_header" style={{ textAlign: "right" }}>Premium</div> */}
                <div className="table_header" style={{ textAlign: "right" }}>Fees</div>
                <div className="table_header" style={{ textAlign: "right" }}>Tips</div>
                <div className="table_header" style={{ textAlign: "right" }}>Permits</div>
                <div className="table_header" style={{ textAlign: "right" }}>Charges</div>
                <div className="table_header" style={{ textAlign: "right" }}>Paid</div>
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
                    <div className="table_cell">Insurer</div>
                    <div className="table_cell">{dataTransform(sale)}</div>
                  </div>
                  <div className="table_small">
                    <div className="table_cell">Customer</div>
                    <div className="table_cell">{sale.customer.name}</div>
                  </div>
                  {/*                 <div className="table_small">
                  <div className="table_cell">Premium</div>
                  <div className="table_cell" style={{ textAlign: "right" }}>
                    {Math.round(sale.premium * 100) / 100}
                  </div>
                </div> */}
                  <div className="table_small">
                    <div className="table_cell">Fees</div>
                    <div className="table_cell" style={{ textAlign: "right" }}>
                      {sale.fees ? Math.round(sale.fees * 100) / 100 : "-"}
                    </div>
                  </div>
                  <div className="table_small">
                    <div className="table_cell">Tips</div>
                    <div className="table_cell" style={{ textAlign: "right" }}>
                      {sale.tips ? Math.round(sale.tips * 100) / 100 : "-"}
                    </div>
                  </div>
                  <div className="table_small">
                    <div className="table_cell">Permits</div>
                    <div className="table_cell" style={{ textAlign: "right" }}>
                      {sale.permits ? Math.round(sale.permits * 100) / 100 : "-"}
                    </div>
                  </div>
                  <div className="table_small">
                    <div className="table_cell">Charges</div>
                    <div className="table_cell" style={{ textAlign: "right" }}>
                      {Math.round(sale.downPayment * 100) / 100}
                    </div>
                  </div>
                  <div className="table_small">
                    <div className="table_cell">Paid</div>
                    <div className="table_cell" style={{ textAlign: "right" }}>
                      {sale.amountReceivable
                        ? Math.round(sale.chargesPaid * 100) / 100
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
                    {/* <div className="table_small">
                    <div className="table_cell">Premium</div>
                    <div className="table_cell">
                      <b>{Math.round(metrics[0].premium * 100) / 100}</b>
                    </div>
                  </div> */}
                    <div className="table_small">
                      <div className="table_cell">Fees</div>
                      <div className="table_cell" style={{ textAlign: "right" }}>
                        <b>{Math.round(metrics[0].fees * 100) / 100}</b>
                      </div>
                    </div>
                    <div className="table_small">
                      <div className="table_cell">Tips</div>
                      <div className="table_cell" style={{ textAlign: "right" }}>
                        <b>{Math.round(metrics[0].tips * 100) / 100}</b>
                      </div>
                    </div>
                    <div className="table_small">
                      <div className="table_cell">Permits</div>
                      <div className="table_cell" style={{ textAlign: "right" }}>
                        <b>{Math.round(metrics[0].permits * 100) / 100}</b>
                      </div>
                    </div>
                    <div className="table_small">
                      <div className="table_cell">Charges</div>
                      <div className="table_cell" style={{ textAlign: "right" }}>
                        <b>{Math.round(metrics[0].downPayment * 100) / 100}</b>
                      </div>
                    </div>
                    <div className="table_small">
                      <div className="table_cell">Paid</div>
                      <div className="table_cell" style={{ textAlign: "right" }}>
                        <b>{Math.round(metrics[0].chargesPaid * 100) / 100}</b>
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
