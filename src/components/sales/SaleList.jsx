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
  saleDeleteRequest,
} from "../../redux/actions";

//Components
import { Spinner, Row, Col } from "react-bootstrap";
//import SalesFilters from "./SalesFilters";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory from "react-bootstrap-table2-filter";
import cellEditFactory from "react-bootstrap-table2-editor";
import overlayFactory from "react-bootstrap-table2-overlay";
import { salesTableColumns, salesDefaultSorted } from "./config";
import DateRangeFilter from "../globals/filters/DateRangeFilter";
import SaleCreate from "./SaleCreate";
import DeleteModelAlert from "../globals/DeleteModelAlert";

export const SaleList = ({
  userLoadRequest,
  saleListRequest,
  saleUpdateRequest,
  saleDeleteRequest,
  customerLoadRequest,
  insurerListRequest,
  params,
  loading,
  loadingDelete,
  loadingUpdate,
  sales,
  customers,
  sellers,
  insurers,
  user,
}) => {
  const [isAdmin] = useState(false);
  const [modal, setModal] = useState(false);
  const [id, setId] = useState("");
  useEffect(() => {
    userLoadRequest();
    customerLoadRequest();
    insurerListRequest();
    //user.hasOwnProperty("roles") && ADMIN_ROLES.includes(user.roles[0]) && setIsAdmin(true);
  }, [
    saleListRequest,
    customerLoadRequest,
    userLoadRequest,
    insurerListRequest,
    user.roles,
    user,
  ]);

  useEffect(() => {
    saleListRequest({}, params);
  }, [params, saleListRequest]);

  const showModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <Row className="mb-2">
        <Col lg="10" sm="6">
          {/*  <SalesFilters model={'sale'}/> */}
          <DateRangeFilter model={"sale"} />
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
          <DeleteModelAlert
            id={id}
            modal={modal}
            handleModal={showModal}
            deleteElement={saleDeleteRequest}
          >
            Customer
          </DeleteModelAlert>
          <BootstrapTable
            bootstrap4
            keyField="_id"
            data={sales}
            columns={salesTableColumns(
              isAdmin,
              setId,
              showModal,
              customers,
              sellers,
              insurers
            )}
            striped
            hover
            bordered={false}
            responsive
            filter={filterFactory()}
            defaultSorted={salesDefaultSorted()}
            noDataIndication="No registered sales"
            loading={loading || loadingDelete || loadingUpdate}
            overlay={overlayFactory({
              spinner: true,
              styles: {
                overlay: (base) => ({
                  ...base,
                  background: "rgba(100,100, 100, 0.7)",
                }),
              },
            })}
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
  saleDeleteRequest: PropTypes.func.isRequired,
  userLoadRequest: PropTypes.func.isRequired,
  customers: PropTypes.array.isRequired,
  sellers: PropTypes.array.isRequired,
  insurers: PropTypes.array.isRequired,
  sales: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  loadingDelete: PropTypes.bool.isRequired,
  loadingUpdate: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  sales: state.saleReducer.list,
  //loading
  loading: state.saleListStatusReducer.loading,
  loadingDelete: state.saleDeleteStatusReducer.loading,
  loadingUpdate: state.saleUpdateStatusReducer.loading,
  customers: state.customerReducer.list,
  sellers: state.userReducer.list,
  insurers: state.insurerReducer.list,
  user: state.userProfileReducer.user,
  params: state.filterReducer.params,
});

const mapDispatchToProps = {
  saleUpdateRequest,
  customerLoadRequest,
  userLoadRequest,
  insurerListRequest,
  saleListRequest,
  saleDeleteRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(SaleList);
