import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { userDeleteRequest, userGetRequest } from '../../redux/actions'

import { Button } from "react-bootstrap";
import { Pencil, Trash } from "react-bootstrap-icons";
import UserDetails from "./UserDetails";

export const UserItem = ({ user, no, loading, loadingGetUser, userDeleteRequest, userGetRequest, showModal, editItem }) => {
  const deleteUser = () => {
    userDeleteRequest(user._id)
  };

  const loadedEditData = () => {
    userGetRequest(user._id)
    setTimeout(() => {
      if (!loadingGetUser) {
        editItem()
        showModal();
      }
    }, 1000);
  }

  return (
    <tr>
      <td>{no}</td>
      <td>{user.name}</td>
      <td>{user.location}</td>
      <td>{user.position}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td><UserDetails user={user}/></td>
      <td>
        <Button variant="success" onClick={loadedEditData}>
          <Pencil />
        </Button>{" "}
        {
          user.username !== "admin" &&
        <Button disabled={loading} variant="danger" onClick={deleteUser}>
          <Trash />
        </Button>
        }
      </td>
    </tr>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  edit: PropTypes.bool.isRequired,
  //Functions
  userDeleteRequest: PropTypes.func.isRequired,
  userGetRequest: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.userDeleteStatusReducer.loading,
  loadingGetUser: state.userGetStatusReducer.loading,
});

const mapDispatchToProps = {
  userDeleteRequest,
  userGetRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(UserItem);
