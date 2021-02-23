import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { customerDeleteRequest, customerGetRequest } from '../../../redux/actions'

import { Button } from "react-bootstrap";
import { Pencil, Trash, Person, Building } from "react-bootstrap-icons";

export const CustomerItem = ({ customer, no, loading, loadingGetCustomer,customerDeleteRequest, customerGetRequest, showModal, editItem }) => {
  const deleteCustomer = () => {
    customerDeleteRequest(customer._id)
  };

  const loadedEditData = () => {
    customerGetRequest(customer._id)
    setTimeout(() => {
      if (!loadingGetCustomer){
        editItem()
        showModal();
      }
    }, 1000);
  }

  return (
    <tr>
      <td>{no}</td>
      <td>{customer.name}</td>
      <td>{customer.isCompany ? <Building size="25" color="red" /> : <Person size="25" color="blue" />}</td>
      <td>{customer.email}</td>
      <td>{customer.phone}</td>
      <td>
        <Button variant="success" onClick={loadedEditData}>
          <Pencil />
        </Button>{" "}
        <Button disabled={loading} variant="danger" onClick={deleteCustomer}>
          <Trash />
        </Button>
      </td>
    </tr>
  );
};

CustomerItem.propTypes = {
  customer: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  edit: PropTypes.bool.isRequired,
  //Functions
  customerDeleteRequest: PropTypes.func.isRequired,
  customerGetRequest: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.customerDeleteStatusReducer.loading,
  loadingGetCustomer: state.customerGetStatusReducer.loading,
});

const mapDispatchToProps = {
  customerDeleteRequest,
  customerGetRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerItem);
