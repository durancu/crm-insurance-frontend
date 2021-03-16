import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Actions
import {
  customerLoadRequest,
  userLoadRequest,
  insurerListRequest,
  saleUpdateRequest,
  saleListRequest,
} from "../../redux/actions";

//Components
import { Spinner, Row, Col } from "react-bootstrap";
//import SalesFilters from "./SalesFilters";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory from "react-bootstrap-table2-filter";
import cellEditFactory from "react-bootstrap-table2-editor";
import { salesTableColumns, salesDefaultSorted } from "./config";
import DateRangeFilter from "../globals/filters/DateRangeFilter";
import  SaleCreate  from "./SaleCreate";

export const SaleList = ({
  userLoadRequest,
  saleListRequest,
  saleUpdateRequest,
  customerLoadRequest,
  insurerListRequest,
  params,
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
    //user.hasOwnProperty("roles") && ADMIN_ROLES.includes(user.roles[0]) && setIsAdmin(true);
  }, [saleListRequest, customerLoadRequest, userLoadRequest, insurerListRequest, user.roles, user]);

  useEffect(() => {
    saleListRequest({}, params);
    
  }, [params, saleListRequest]);

  return (
    <>
      <Row className="mb-2">
        <Col lg="10" sm="6">
         {/*  <SalesFilters model={'sale'}/> */}
          <DateRangeFilter model={'sale'}/>
        </Col>
        <Col lg="2" sm="6" align="right">
          <SaleCreate />
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
                  "premium",
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
  params: state.filterReducer.params,
});

const mapDispatchToProps = {
  saleUpdateRequest,
  customerLoadRequest,
  userLoadRequest,
  insurerListRequest,
  saleListRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(SaleList);
