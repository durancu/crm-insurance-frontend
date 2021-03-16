import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

//Actions
import {
  userLoadRequest,
  userDeleteRequest,
  userUpdateRequest,
} from "../../../redux/actions";

//components
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory from "react-bootstrap-table2-filter";
import overlayFactory from "react-bootstrap-table2-overlay";
import cellEditFactory from "react-bootstrap-table2-editor";

import { usersDefaultSorted, usersTableColumns } from "./config";
import DeleteModelAlert from "../../globals/DeleteModelAlert";
import ChangePassword from "./ChangePassword";

function UserList({
  userLoadRequest,
  userDeleteRequest,
  userUpdateRequest,
  users,
  loading,
  loadingDelete,
}) {
  //States
  const [modal, setModal] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);
  const [id, setId] = useState("");
  //Functions
  useEffect(() => {
    userLoadRequest();
  }, [userLoadRequest]);

  const showModal = () => {
    setModal(!modal);
  };
  const showPasswordModal = () => {
    setPasswordModal(!passwordModal);
  };
  return (
    <>
      <DeleteModelAlert
        id={id}
        modal={modal}
        handleModal={showModal}
        deleteElement={userDeleteRequest}
      >
        Customer
      </DeleteModelAlert>
      <ChangePassword
        modal={passwordModal}
        showModal={showPasswordModal}
        id={id}
      />

      <BootstrapTable
        bootstrap4
        keyField="_id"
        data={users}
        columns={usersTableColumns(false, showModal, setId, showPasswordModal)}
        striped
        hover
        bordered={false}
        responsive
        filter={filterFactory()}
        defaultSorted={usersDefaultSorted()}
        noDataIndication="No registered users"
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
              [fieldName]: newValue,
            };

            oldValue !== newValue && userUpdateRequest(payload, row._id);
          },
        })}
      />
    </>
  );
}

UserList.propTypes = {
  userLoadRequest: PropTypes.func.isRequired,
  userDeleteRequest: PropTypes.func.isRequired,
  userUpdateRequest: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  loadingDelete: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.userReducer.list,
  loading: state.userLoadStatusReducer.loading,
  loadingDelete: state.userDeleteStatusReducer.loading,
});

const mapDispatchToProps = {
  userLoadRequest,
  userDeleteRequest,
  userUpdateRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
