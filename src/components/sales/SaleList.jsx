import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Actions
import {
  saleListRequest,
  customerLoadRequest,
  userLoadRequest,
  insurerListRequest,
  saleUpdateRequest,
} from "../../redux/actions";

//Assets
import "../assets/App.css";
//Components
import { Spinner, Row, Col } from "react-bootstrap";
import SalesFilters from "./SalesFilters";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory from "react-bootstrap-table2-filter";
import cellEditFactory from "react-bootstrap-table2-editor";
import { salesTableColumns, salesDefaultSorted } from "./config";
import SaleForm from "./SaleForm";

export const SaleList = ({
  userLoadRequest,
  saleListRequest,
  saleUpdateRequest,
  customerLoadRequest,
  insurerListRequest,
  loading,
  errorSale,
  sales,
  customers,
  sellers,
  insurers,
  user,
}) => {
  const [isAdmin] = useState(false);
  useEffect(() => {
    userLoadRequest();
    customerLoadRequest();
    insurerListRequest();
    saleListRequest();
    //user.roles.map((rol) => rol === "ADMIN" && setIsAdmin(true));
  }, [
    saleListRequest,
    customerLoadRequest,
    userLoadRequest,
    insurerListRequest,
    user.roles,
  ]);

  return (
    <>
      <Row className="mb-2">
        <Col lg="10" sm="6">
          <SalesFilters />
        </Col>
        <Col lg="2" sm="6" align="right">
          <SaleForm />
        </Col>
      </Row>

      {loading ? (
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
            columns={salesTableColumns(isAdmin, customers, sellers, insurers)}
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
                  _id: sale._id,
                };

                const numericFields = [
                  "fees",
                  "permits",
                  "tips",
                  "liabilityCharge",
                  "cargoCharge",
                  "physicalDamageCharge",
                  "wcGlUmbCharge",
                  "downPayment",
                  "chargesPaid",
                  "premium",
                ];
                const referenceFields = [
                  "customer._id",
                  "seller._id",
                  "liabilityInsurer._id",
                  "cargoInsurer._id",
                  "physicalDamageInsurer._id",
                  "wcGlUmbInsurer._id",
                ];

                if (numericFields.includes(fieldName)) {
                  payload = {
                    ...payload,
                    [fieldName]: Math.round(newValue * 100) / 100,
                  };
                }

                if (referenceFields.includes(fieldName)) {
                  const referenceField = fieldName.split(".")[0];
                  payload = { ...payload, [referenceField]: newValue };
                }

                saleUpdateRequest(payload);
              },
            })}
          />
        </Row>
      )}
    </>
  );
};

SaleList.propTypes = {
  saleListRequest: PropTypes.func.isRequired,
  saleUpdateRequest: PropTypes.func.isRequired,
  userLoadRequest: PropTypes.func.isRequired,
  customers: PropTypes.array.isRequired,
  sellers: PropTypes.array.isRequired,
  insurers: PropTypes.array.isRequired,
  sales: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  errorSale: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  sales: state.saleReducer.list,
  customers: state.customerReducer.list,
  sellers: state.userReducer.list,
  insurers: state.insurerReducer.list,
  loading: state.saleListStatusReducer.loading,
  errorSale: state.saleListStatusReducer.error,
  user: state.userProfileReducer.user,
});

const mapDispatchToProps = {
  saleListRequest,
  saleUpdateRequest,
  customerLoadRequest,
  userLoadRequest,
  insurerListRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(SaleList);
