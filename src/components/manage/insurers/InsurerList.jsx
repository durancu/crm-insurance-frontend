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
import { Row, Col } from "react-bootstrap";
import Spinner from "../../globals/spinner";
import { insurersDefaultSorted, insurersTableColumns } from "./config";
import DeleteModelAlert from "../../globals/DeleteModelAlert";

function InsurerList({
  insurerListRequest,
  insurerDeleteRequest,
  insurerUpdateRequest,
  insurers,
  loadingCreate,
  loadingDelete,
  loadingUpdate,
}) {
  //States
  const [modal, setModal] = useState(false);
  const [id, setId] = useState("");
  //Functions

  useEffect(() => {
    insurerListRequest();
  }, [insurerListRequest]);

  const showModal = () => {
    setModal(!modal);
  };
  return (
    <>
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
            modal={modal}
            handleModal={showModal}
            deleteElement={insurerDeleteRequest}
          >
            Customer
          </DeleteModelAlert>
          <BootstrapTable
            bootstrap4
            keyField="_id"
            data={insurers}
            columns={insurersTableColumns(false, showModal, setId)}
            striped
            hover
            bordered={false}
            responsive
            filter={filterFactory()}
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
    </>
  );
}

InsurerList.propTypes = {
  insurerListRequest: PropTypes.func.isRequired,
  insurers: PropTypes.array.isRequired,
  loadingCreate: PropTypes.bool.isRequired,
  loadingDelete: PropTypes.bool.isRequired,
  loadingUpdate: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  insurers: state.insurerReducer.list,
  loadingCreate: state.insurerListStatusReducer.loading,
  loadingDelete: state.insurerDeleteStatusReducer.loading,
  loadingUpdate: state.insurerUpdateStatusReducer.loading,
});

const mapDispatchToProps = {
  insurerListRequest,
  insurerDeleteRequest,
  insurerUpdateRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(InsurerList);
