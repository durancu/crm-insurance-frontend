import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Button } from "react-bootstrap";
import { Pencil, Trash, Person, Building } from "react-bootstrap-icons";

export const CustomerItem = ({ customer }) => {
  const deleteCustomer = () => {
    console.log(customer._id);
  };
  return (
    <tr>
      <td></td>
      <td>{customer.name}</td>
      <td>{customer.isCompany ? <Building color="success"/> : <Person />}</td>
      <td>{customer.email}</td>
      <td>{customer.phone}</td>
      <td>
        <Button variant="success">
          <Pencil />
        </Button>{" "}
        <Button variant="danger" onClick={deleteCustomer}>
          <Trash />
        </Button>
      </td>
    </tr>
  );
};

CustomerItem.propTypes = {
  customer: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerItem);
