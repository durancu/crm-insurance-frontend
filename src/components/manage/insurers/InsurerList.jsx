import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

//Actions
import {
  insurerListRequest,
  insurerDeleteRequest,
  insurerUpdateRequest,
} from "../../../redux/actions";

//components
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory from "react-bootstrap-table2-filter";
import cellEditFactory from "react-bootstrap-table2-editor";
import { Row, Col, Card, Button } from "react-bootstrap";
import Spinner from "../../globals/spinner";
import { insurersDefaultSorted, insurersTableColumns } from "./config";
import DeleteModelAlert from "../../globals/DeleteModelAlert";
import { isAdminCheck } from "../../../config/user";

import InsurerCreate from "./InsurerCreate";

function InsurerList({
  insurerListRequest,
  insurerDeleteRequest,
  insurerUpdateRequest,
  insurers,
  loadingCreate,
  loadingDelete,
  loadingUpdate,
  user,
}) {
  const [createInsurerModal, setCreateInsurerModal] = useState(false);
  const [edit, setEdit] = useState(false);

  const showCreateInsurerModal = () => {
    edit && setEdit(false);
    setCreateInsurerModal(!createInsurerModal);
  };

  //States
  const [deleteInsurerModal, setDeleteInsurerModal] = useState(false);
  const [id, setId] = useState("");

  const [isAdmin, setIsAdmin] = useState(false);
  const showDeleteInsurerModal = () => {
    setDeleteInsurerModal(!deleteInsurerModal);
  };

  useEffect(() => {
    setIsAdmin(isAdminCheck(user));
  }, [user]);

  useEffect(() => {
    insurerListRequest();
  }, [insurerListRequest]);

  return (
    <>
      <Card>
        <Card.Body>
          <Row className="mb-2">
            <Col lg="8" sm="6"></Col>
            <Col lg="4" sm="6" align="right">
              <Button variant="primary" onClick={showCreateInsurerModal}>
                Add New Insurer
              </Button>
               <InsurerCreate
                showModal={showCreateInsurerModal}
                modal={createInsurerModal}
                edit={false}
                dataForm={{}}
              />
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
              <DeleteModelAlert
                id={id}
                modal={deleteInsurerModal}
                handleModal={showDeleteInsurerModal}
                deleteElement={insurerDeleteRequest}
              >
                Customer
              </DeleteModelAlert>
              <BootstrapTable
                bootstrap4
                keyField="_id"
                data={insurers}
                columns={insurersTableColumns(
                  isAdmin,
                  showDeleteInsurerModal,
                  setId
                )}
                /* striped */
                hover
                bordered={false}
                responsive
                filter={filterFactory()}
                filterPosition="top"
                defaultSorted={insurersDefaultSorted()}
                noDataIndication="No registered insurers"
                cellEdit={cellEditFactory({
                  mode: "click",
                  afterSaveCell: (oldValue, newValue, row, column) => {
                    const fieldName = column.dataField;
                    let payload = {
                      _id: row._id,
                      [fieldName]: newValue,
                    };

                    oldValue !== newValue &&
                      insurerUpdateRequest(payload, payload._id);
                  },
                })}
              />
            </Row>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

InsurerList.propTypes = {
  insurerListRequest: PropTypes.func.isRequired,
  insurers: PropTypes.array.isRequired,
  loadingCreate: PropTypes.bool.isRequired,
  loadingDelete: PropTypes.bool.isRequired,
  loadingUpdate: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  insurers: state.insurerReducer.list,
  loadingCreate: state.insurerListStatusReducer.loading,
  loadingDelete: state.insurerDeleteStatusReducer.loading,
  loadingUpdate: state.insurerUpdateStatusReducer.loading,
  user: state.userProfileReducer.user,
});

const mapDispatchToProps = {
  insurerListRequest,
  insurerDeleteRequest,
  insurerUpdateRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(InsurerList);
