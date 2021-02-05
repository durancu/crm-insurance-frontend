import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { customerDeleteRequest } from '../../redux/actions'

import { Button } from "react-bootstrap";
import { Pencil, Trash, Person, Building } from "react-bootstrap-icons";

export const CustomerItem = ({ customer, no, loading, customerDeleteRequest }) => {

  const deleteCustomer = () => {
    customerDeleteRequest(customer._id)
  };
  return (
    <tr>
      <td>{no}</td>
      <td>{customer.name}</td>
      <td>{customer.isCompany ? <Building size="25" color="red" /> : <Person size="25" color="blue" />}</td>
      <td>{customer.email}</td>
      <td>{customer.phone}</td>
      <td>
        <Button variant="success">
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
  customerDeleteRequest: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  loading: state.customerDeleteStatusReducer.loading
});

const mapDispatchToProps = {
  customerDeleteRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerItem);
