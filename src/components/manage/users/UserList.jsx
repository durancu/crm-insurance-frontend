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
import cellEditFactory from "react-bootstrap-table2-editor";
import { Row, Col, Button, Card } from "react-bootstrap";
import { usersDefaultSorted, usersTableColumns } from "./config";
import DeleteModelAlert from "../../globals/DeleteModelAlert";
import ChangePassword from "./ChangePassword";
import { isAdminCheck, isExecutiveCheck } from "../../../config/user";
import Spinner from "../../globals/spinner";
import UserCreate from "./UserCreate";

function UserList({
  userLoadRequest,
  userDeleteRequest,
  userUpdateRequest,
  users,
  user,
  loadingCreate,
  loadingDelete,
  loadingUpdate,
}) {
  //States
  const [isAdmin, setIsAdmin] = useState(false);
  const [isExecutive, setIsExecutive] = useState(false);
  const [modal, setModal] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);
  const [id, setId] = useState("");
  //Functions
  useEffect(() => {
    setIsAdmin(isAdminCheck(user));
    setIsExecutive(isExecutiveCheck(user));
    userLoadRequest();
  }, [user, userLoadRequest]);

  const showModal = () => {
    setModal(!modal);
  };
  const showPasswordModal = () => {
    setPasswordModal(!passwordModal);
  };

  const [createEmployeeModal, setCreateEmployeeModal] = useState(false);
  const showCreateEmployeeModal = () => {
    setCreateEmployeeModal(!createEmployeeModal);
  };

  return (
    <>
      <Card>
        <Card.Body>
        <Row className="mb-2">
            <Col lg="8" sm="6">
              &nbsp;
            </Col>
            <Col lg="4" sm="6" align="right"
              style={{ textAlign: "right" }}
              hidden={!isAdmin && !isExecutive}
            >
              <Button variant="primary" onClick={showCreateEmployeeModal}>
                Add New Employee
              </Button>
              <UserCreate
                showModal={showCreateEmployeeModal}
                modal={createEmployeeModal}
                edit={false}
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
                modal={modal}
                handleModal={showModal}
                deleteElement={userDeleteRequest}
              >
                Employee
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
                columns={usersTableColumns(
                  isAdmin,
                  isExecutive,
                  showModal,
                  setId,
                  showPasswordModal
                )}
                /* striped */
                hover
                bordered={false}
                responsive
                filter={filterFactory()}
                filterPosition="top"
                defaultSorted={usersDefaultSorted()}
                noDataIndication="No registered employees"
                cellEdit={cellEditFactory({
                  mode: "click",
                  afterSaveCell: (oldValue, newValue, row, column) => {
                    const fieldName = column.dataField;
                    let payload = {};
                    if (fieldName === "roles[0]") {
                      payload = { roles: [newValue] };
                    } else
                      payload = {
                        [fieldName]: newValue,
                      };
                    oldValue !== newValue &&
                      userUpdateRequest(payload, row._id);
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

UserList.propTypes = {
  userLoadRequest: PropTypes.func.isRequired,
  userDeleteRequest: PropTypes.func.isRequired,
  userUpdateRequest: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  loadingCreate: PropTypes.bool.isRequired,
  loadingDelete: PropTypes.bool.isRequired,
  loadingUpdate: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.userReducer.list,
  user: state.userProfileReducer.user,
  loadingCreate: state.userLoadStatusReducer.loading,
  loadingDelete: state.userDeleteStatusReducer.loading,
  loadingUpdate: state.userUpdateStatusReducer.loading,
});

const mapDispatchToProps = {
  userLoadRequest,
  userDeleteRequest,
  userUpdateRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
