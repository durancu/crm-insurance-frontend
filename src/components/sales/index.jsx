import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

//Actions
import { saleListRequest } from "../../redux/actions";

//Assets
import "../assets/App.css";
//Components
import { Spinner, Row, Col } from "react-bootstrap";
import SalesFilters from "./SalesFilters";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory from "react-bootstrap-table2-filter";
import cellEditFactory from "react-bootstrap-table2-editor";
import { salesTableColumns, salesDefaultSorted } from "./config";

export const Sales = ({
  saleListRequest,
  loadingSale,
  errorSale,
  sales,
  user,
}) => {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    saleListRequest();
    user.roles.map((rol) => rol === "ADMIN" && setIsAdmin(true));
  }, [saleListRequest, user.roles]);

  return (
    <>
      <Row className="mt-3 mb-3">
        <Col sm="8">
          <h2>Sales</h2>
        </Col>
      </Row>
      <Row>
        <Col lg="10" sm="6">
          <SalesFilters />
        </Col>
        <Col lg="2" sm="6" align="right">
          <Link to="/sales/create" className="btn btn-primary">
            Add New Sale
          </Link>
        </Col>
      </Row>

      {loadingSale ? (
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
            columns={salesTableColumns(isAdmin)}
            striped
            hover
            condensed={true}
            bordered={false}
            responsive
            filter={filterFactory()}
            defaultSorted={salesDefaultSorted()}
            noDataIndication="No registered sales"
            cellEdit={cellEditFactory({ mode: "click", blurToSave: false })}
          />
        </Row>
      )}
    </>
  );
};

Sales.propTypes = {
  sales: PropTypes.array.isRequired,
  loadingSale: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  errorSale: PropTypes.bool.isRequired,
  saleListRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  sales: state.saleReducer.list,
  loadingSale: state.saleListStatusReducer.loading,
  errorSale: state.saleListStatusReducer.error,
  user: state.userProfileReducer.user,
});

const mapDispatchToProps = {
  saleListRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sales);
