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
      <td align="center" width='150px'>{insurer.phone}</td>
      <td align="center">{insurer.liabilityCommission ? (Math.round(insurer.liabilityCommission * 100))+'%': '-'}</td>
      <td align="center">{insurer.cargoCommission ? (Math.round(insurer.cargoCommission * 100))+'%': '-'}</td>
      <td align="center">{insurer.physicalDamageCommission ? (Math.round(insurer.physicalDamageCommission * 100))+'%': '-'}</td>
      <td align="center">{insurer.wcGlUmbCommission ? (Math.round(insurer.wcGlUmbCommission * 100))+'%': '-'}</td>
      <td width='130px'>
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
