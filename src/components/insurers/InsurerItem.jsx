import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { insurerDeleteRequest, insurerGetRequest } from '../../redux/actions'

import { Button } from "react-bootstrap";
import { Pencil, Trash } from "react-bootstrap-icons";

export const InsurerItem = ({ insurer, no, loading, loadingGetInsurer,insurerDeleteRequest, insurerGetRequest, showModal, editItem }) => {
  const handleDelete = () => {
    insurerDeleteRequest(insurer._id)
  };

  const loadedEditData = () => {
    insurerGetRequest(insurer._id)
    setTimeout(() => {
      if (!loadingGetInsurer){
        editItem()
        showModal();
      }
    }, 1000);
  }

  return (
    <tr>
      <td>{no}</td>
      <td>{insurer.name}</td>
      <td>{insurer.email}</td>
      <td>{insurer.phone}</td>
      <td>{insurer.liabilityCommission}</td>
      <td>{insurer.cargoCommission}</td>
      <td>{insurer.physicalDamageCommission}</td>
      <td>{insurer.wcGlUmbCommission}</td>
      <td>
        <Button variant="success" onClick={loadedEditData}>
          <Pencil />
        </Button>{" "}
        <Button disabled={loading} variant="danger" onClick={handleDelete}>
          <Trash />
        </Button>
      </td>
    </tr>
  );
};

InsurerItem.propTypes = {
  insurer: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  edit: PropTypes.bool.isRequired,
  loadingGetInsurer: PropTypes.bool.isRequired,
  //Functions
  insurerDeleteRequest: PropTypes.func.isRequired,
  insurerGetRequest: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.insurerDeleteStatusReducer.loading,
  loadingGetInsurer: state.insurerGetStatusReducer.loading,
});

const mapDispatchToProps = {
  insurerDeleteRequest,
  insurerGetRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(InsurerItem);
