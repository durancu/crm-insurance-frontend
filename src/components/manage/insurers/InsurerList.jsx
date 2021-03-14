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
import overlayFactory from "react-bootstrap-table2-overlay";
import cellEditFactory from "react-bootstrap-table2-editor";

import { insurersDefaultSorted, insurersTableColumns } from "./config";
import DeleteModelAlert from "../../globals/DeleteModelAlert";

function InsurerList({
  insurerListRequest,
  insurerDeleteRequest,
  insurerUpdateRequest,
  insurers,
  loading,
  loadingDelete,
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
        condensed={true}
        bordered={false}
        responsive
        filter={filterFactory()}
        defaultSorted={insurersDefaultSorted()}
        noDataIndication="No registered insurers"
        loading={loading || loadingDelete}
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
          afterSaveCell: (oldValue, newValue, row, column) => {
            const fieldName = column.dataField;
            let payload = {
              _id: row._id,
              [fieldName]: newValue,
            };

            oldValue !== newValue && insurerUpdateRequest(payload, payload._id);
          },
        })}
      />
    </>
  );
}

InsurerList.propTypes = {
  insurerListRequest: PropTypes.func.isRequired,
  insurers: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  loadingDelete: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  insurers: state.insurerReducer.list,
  loading: state.insurerListStatusReducer.loading,
  loadingDelete: state.insurerDeleteStatusReducer.loading,
});

const mapDispatchToProps = {
  insurerListRequest,
  insurerDeleteRequest,
  insurerUpdateRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(InsurerList);
