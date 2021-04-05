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
  saleGetRequest,
} from "../../redux/actions";

//Components
import { Row, Col, Card } from "react-bootstrap";
import Spinner from "../globals/spinner";

//import SalesFilters from "./SalesFilters";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory from "react-bootstrap-table2-filter";
import { salesTableColumns, salesDefaultSorted } from "./config";
import DateRangeFilter from "../globals/filters/DateRangeFilter";
import SaleCreate from "./SaleCreate";
import DeleteModelAlert from "../globals/DeleteModelAlert";
import { isAdminCheck, isExecutiveCheck } from "../../config/user";

export const SaleList = ({
  userLoadRequest,
  saleListRequest,
  saleUpdateRequest,
  saleDeleteRequest,
  saleGetRequest,
  customerLoadRequest,
  insurerListRequest,
  params,
  loadingCreate,
  loadingDelete,
  loadingUpdate,
  sales,
  customers,
  sellers,
  insurers,
  user,
}) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isExecutive, setIsExecutive] = useState(false);
  //Functions

  //Modals
  const [modal, setModal] = useState(false);
  const [onEditMode, setOnEditMode] = useState(false);
  const [id, setId] = useState("");

  //Functions
  useEffect(() => {
    userLoadRequest();
    customerLoadRequest();
    insurerListRequest();
    setIsAdmin(isAdminCheck(user));
    setIsExecutive(isExecutiveCheck(user));
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

  useEffect(() => {
    onEditMode && saleGetRequest(id);
  }, [id, onEditMode, saleGetRequest]);

  const showModal = () => {
    setModal(!modal);
  };

  const launchEditForm = () => {
    setOnEditMode(!onEditMode);

    console.log(`launchEditForm`, onEditMode);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Row className="mb-2">
            <Col lg="8" sm="6">
              <DateRangeFilter model={"sale"} />
            </Col>
            <Col lg="4" sm="6" align="right">
              <SaleCreate editState={{ onEditMode, setOnEditMode }} />
            </Col>
          </Row>
          {loadingCreate || loadingDelete || loadingUpdate ? (
            <Row className="justify-content-md-center">
              <Col md="auto">
                <Spinner />
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <DeleteModelAlert
                  id={id}
                  modal={modal}
                  handleModal={showModal}
                  deleteElement={saleDeleteRequest}
                >
                  Sale
                </DeleteModelAlert>
                <BootstrapTable
                  bootstrap4
                  keyField="_id"
                  data={sales}
                  columns={salesTableColumns(
                    setId,
                    showModal,
                    launchEditForm,
                    isAdmin,
                    isExecutive,
                    customers,
                    sellers,
                    insurers
                  )}
                  /* striped */
                  hover
                  bordered={false}
                  responsive
                  filter={filterFactory()}
                  filterPosition="top"
                  defaultSorted={salesDefaultSorted()}
                  noDataIndication="No registered sales"
                  /* cellEdit={cellEditFactory({
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

                      if (fieldName === "soldAt") {
                        payload = {
                          ...payload,
                          soldAt: moment(newValue).toISOString(),
                        };
                      }

                      saleUpdateRequest(payload);
                    },
                  })} */
                />
              </Col>
            </Row>
          )}
        </Card.Body>
      </Card>
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
  loadingCreate: PropTypes.bool.isRequired,
  loadingDelete: PropTypes.bool.isRequired,
  loadingUpdate: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  sales: state.saleReducer.list,
  //loading
  loadingCreate: state.saleListStatusReducer.loading,
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
  saleGetRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(SaleList);
