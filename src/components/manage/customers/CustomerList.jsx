import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

//Actions
import {
  customerLoadRequest,
  customerDeleteRequest,
} from "../../../redux/actions";

//components
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory from "react-bootstrap-table2-filter";
import overlayFactory from "react-bootstrap-table2-overlay";
import { customersDefaultSorted, customersTableColumns } from "./config";
import DeleteModelAlert from "../../globals/DeleteModelAlert";

function CustomerList({
  customerLoadRequest,
  customerDeleteRequest,
  customers,
  loading,
  loadingDelete,
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
        striped
        hover
        condensed={true}
        bordered={false}
        responsive
        filter={filterFactory()}
        defaultSorted={customersDefaultSorted()}
        noDataIndication="No registered customers"
        loading={loading}
        overlay={overlayFactory({
          spinner: true,
          styles: {
            overlay: (base) => ({
              ...base,
              background: "rgba(100,100, 100, 0.7)",
            }),
          },
        })}
        // cellEdit={cellEditFactory({ mode: "click", blurToSave: false })}
      />
    </>
  );
}

CustomerList.propTypes = {
  customerLoadRequest: PropTypes.func.isRequired,
  customerDeleteRequest: PropTypes.func.isRequired,
  customers: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  loadingDelete: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  customers: state.customerReducer.list,
  loading: state.customerLoadStatusReducer.loading,
  loadingDelete: state.customerDeleteStatusReducer.loading,
});

const mapDispatchToProps = {
  customerLoadRequest,
  customerDeleteRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);
