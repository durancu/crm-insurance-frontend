import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

//Actions
import { saleListRequest, customerLoadRequest, userLoadRequest, saleUpdateRequest } from "../../redux/actions";

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
  saleUpdateRequest,
  customerLoadRequest,
  userLoadRequest,
  loadingSale,
  errorSale,
  sales,
  user,
  customers,
  sellers,
}) => {

  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    saleListRequest();
    customerLoadRequest();
    userLoadRequest();
    user.roles.map((rol) => rol === "ADMIN" && setIsAdmin(true));
  }, [saleListRequest, customerLoadRequest, userLoadRequest, user.roles]);

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
              columns={salesTableColumns(isAdmin, customers, sellers)}
              striped
              hover
              condensed={true}
              bordered={false}
              responsive
              filter={filterFactory()}
              defaultSorted={salesDefaultSorted()}
              noDataIndication="No registered sales"
              cellEdit={cellEditFactory({
                mode: "click",
                afterSaveCell: (oldValue, newValue, sale, column) => {

                  const fieldName = column.dataField;

                  let payload = {
                    "_id": sale._id,
                  }

                  const numericFields = ['fees', 'permits', 'tips', 'liabilityCharge', 'cargoCharge', 'physicalDamageCharge', 'wcGlUmbCharge', 'downPayment', 'chargesPaid'];
                  const referenceFields = ['customer._id', 'seller._id', 'liabilityInsurer._id', 'cargoInsurer._id', 'physicalDamageInsurer._id', 'wcGlUmbInsurer._id'];

                  if (numericFields.includes(fieldName)) {
                    payload = { ...payload, [fieldName]: Math.round(newValue * 100) / 100 }
                  }

                  if (referenceFields.includes(fieldName)) {
                    const referenceField = fieldName.split(".")[0];
                    console.log(referenceField);
                    payload = { ...payload, [referenceField]: newValue };
                  }

                  saleUpdateRequest(payload);
                }
              })}

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
  saleUpdateRequest: PropTypes.func.isRequired,
  customers: PropTypes.array.isRequired,
  sellers: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  sales: state.saleReducer.list,
  customers: state.customerReducer.list,
  sellers: state.userReducer.list,
  loadingSale: state.saleListStatusReducer.loading,
  errorSale: state.saleListStatusReducer.error,
  user: state.userProfileReducer.user,
});

const mapDispatchToProps = {
  saleListRequest,
  saleUpdateRequest,
  customerLoadRequest,
  userLoadRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Sales);
