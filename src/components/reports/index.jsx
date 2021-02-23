import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

//Actions
import { reportListRequest } from "../../redux/actions";
//Functions
import { dateFormatter, insurerNameFormatter, priceFormatter, fullNameFormatter, footerPriceFormatter } from "../globals/functions";
//Assets
import "../assets/App.css";
//Components
import { Spinner, Row, Col } from "react-bootstrap";
import SaleFilters from "./SaleFilters";
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';


const columns = [
  {
    dataField: 'soldAt',
    text: 'Date',
    formatter: dateFormatter,
    headerStyle: () => { return { width: "8%" };}, 
    sort: true,
    footer: 'TOTALS'
  }, {
    dataField: 'seller.firstName',
    text: 'Employee',
    formatter: fullNameFormatter,
    headerStyle: () => { return { width: "10%" };}, 
    sort: true,
    footer: columnData => `${columnData.reduce((acc, item) => acc + 1, 0)} records count`,
    filter: textFilter({placeholder: 'Search'}),
    
  }, {
    dataField: 'seller.location',
    text: 'Location',
    headerStyle: () => { return { width: "10%" };}, 
    sort: true,
    align: 'left',
    headerAlign: 'left', 
    footer: '',
    filter: textFilter({placeholder: 'Search'}),
  }, {
    dataField: 'customer.name',
    text: 'Customer',
    headerStyle: () => { return { width: "14%" };}, 
    sort: true,
    align: 'left',
    headerAlign: 'left',  
    footer: '',
    filter: textFilter({placeholder: 'Search'}),
  }, {
    dataField: 'liabilityInsurer.name',
    text: 'Insurance Company',
    formatter: insurerNameFormatter,
    headerStyle: () => { return { width: "28%" };}, 
    align: 'left',
    headerAlign: 'left',
    footer: ''
  }, {
    dataField: 'fees',
    text: 'Fees',
    headerAlign: 'right',
    formatter: priceFormatter,
    sort: true,
    align: 'right',
    footer: columnData => columnData.reduce((acc, item) => acc + item, 0),
    footerFormatter: footerPriceFormatter,
    footerAlign: 'right',
  }, {
    dataField: 'permits',
    text: 'Permits',
    headerAlign: 'right',
    formatter: priceFormatter,
    sort: true,
    align: 'right',
    footer: columnData => columnData.reduce((acc, item) => acc + item, 0),
    footerFormatter: footerPriceFormatter,
    footerAlign: 'right',
  }, {
    dataField: 'tips',
    text: 'Tips',
    headerAlign: 'right',
    formatter: priceFormatter,
    sort: true,
    align: 'right',
    footer: columnData => columnData.reduce((acc, item) => acc + item, 0),
    footerFormatter: footerPriceFormatter,
    footerAlign: 'right',
  }, {
    dataField: 'downPayment',
    text: 'Charges',
    headerAlign: 'right',
    formatter: priceFormatter,
    sort: true,
    align: 'right',
    footer: columnData => columnData.reduce((acc, item) => acc + item, 0),
    footerFormatter: footerPriceFormatter,
    footerAlign: 'right',
  }, {
    dataField: 'chargesPaid',
    text: 'Paid',
    headerAlign: 'right',
    formatter: priceFormatter,
    sort: true,
    align: 'right',
    footer: columnData => columnData.reduce((acc, item) => acc + item, 0),
    footerFormatter: footerPriceFormatter,
    footerAlign: 'right',
  }];

const defaultSorted = [{
  dataField: 'soldAt',
  order: 'desc'
}];

export const Reports = ({
  reportListRequest,
  loadingReport,
  errorReport,
  sales,
}) => {
  useEffect(() => {
    reportListRequest();
  }, [reportListRequest]);

  return (
    <>
      <Row className="mt-3 mb-3">
        <Col sm="8">
          <h2>Sales Report</h2>
        </Col>
      </Row>
      <Row>
        <Col lg="10" sm="6">
          <SaleFilters />
        </Col>
        <Col lg="2" sm="6" align="right">
          <Link to="/sales/create" className="btn btn-primary">
            Add New Sale
          </Link>
        </Col>
      </Row>

      {loadingReport ? (
        
        <Row className="justify-content-md-center">
        
        <Col md="auto"><Spinner animation="border" variant="primary"/></Col>
        
      </Row>
      
      ) : (

          <Row>
            <BootstrapTable
              bootstrap4
              keyField='_id'
              data={sales}
              columns={columns}
              striped
              hover
              condensed={true}
              bordered={ false }
              responsive
              filter={filterFactory()}
              defaultSorted={defaultSorted}
              noDataIndication="No registered sales"
            />
          </Row>
        )}
    </>
  );
};

Reports.propTypes = {
  sales: PropTypes.array.isRequired,
  loadingReport: PropTypes.bool.isRequired,
  errorReport: PropTypes.bool.isRequired,
  reportListRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  sales: state.reportReducer.list.sales,
  loadingReport: state.reportListStatusReducer.loading,
  errorReport: state.reportListStatusReducer.error,
});

const mapDispatchToProps = {
  reportListRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reports);
