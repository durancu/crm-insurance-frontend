import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

//Actions
import {
  customerLoadRequest,
  customerDeleteRequest,
  customerUpdateRequest,
} from "../../../redux/actions";

//components
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory from "react-bootstrap-table2-filter";
import cellEditFactory from "react-bootstrap-table2-editor";

import { customersDefaultSorted, customersTableColumns } from "./config";
import DeleteModelAlert from "../../globals/DeleteModelAlert";
import { Row, Col } from "react-bootstrap";
import Spinner from "../../globals/spinner";

function CustomerList({
  customerLoadRequest,
  customerDeleteRequest,
  customerUpdateRequest,
  customers,
  loadingCreate,
  loadingDelete,
  loadingUpdate,
}) {
  const [modal, setModal] = useState(false);
  const [id, setId] = useState("");
  useEffect(() => {
    customerLoadRequest();
  }, [customerLoadRequest]);

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
            deleteElement={customerDeleteRequest}
          >
            Customer
          </DeleteModelAlert>
          <BootstrapTable
            bootstrap4
            keyField="_id"
            data={customers}
            columns={customersTableColumns(false, showModal, setId)}
            /* striped */
            hover
            bordered={false}
            responsive
            filter={filterFactory()}
            filterPosition="top"
            defaultSorted={customersDefaultSorted()}
            noDataIndication="No registered customers"
            cellEdit={cellEditFactory({
              mode: "click",
              afterSaveCell: (oldValue, newValue, row, column) => {
                const fieldName = column.dataField;
                let payload = {
                  _id: row._id,
                  [fieldName]: newValue,
                };

                oldValue !== newValue &&
                  customerUpdateRequest(payload, payload._id);
              },
            })}
          />
        </Row>
      )}
    </>
  );
}

CustomerList.propTypes = {
  customerLoadRequest: PropTypes.func.isRequired,
  customerDeleteRequest: PropTypes.func.isRequired,
  customerUpdateRequest: PropTypes.func.isRequired,
  customers: PropTypes.array.isRequired,
  loadingCreate: PropTypes.bool.isRequired,
  loadingDelete: PropTypes.bool.isRequired,
  loadingUpdate: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  customers: state.customerReducer.list,
  loadingCreate: state.customerLoadStatusReducer.loading,
  loadingDelete: state.customerDeleteStatusReducer.loading,
  loadingUpdate: state.customerUpdateStatusReducer.loading,
});

const mapDispatchToProps = {
  customerLoadRequest,
  customerDeleteRequest,
  customerUpdateRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);
