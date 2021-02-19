import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Assets
import "../assets/App.css";
//Actions
import { saleListRequest, saleDeleteRequest } from "../../redux/actions";
//Components
import SaleItem from "./SaleItem";
import { Spinner } from "react-bootstrap";

export const SaleList = ({
  list,
  loading,
  error,
  loadingDelete,
  errorDelete,
  saleListRequest,
  saleDeleteRequest,
}) => {
  let no = 0;

  useEffect(() => {
    saleListRequest();
  }, [saleListRequest]);

  return loading ? (
    <><Spinner variant="primary" animation="border" /><h3>Loading...</h3></>
  ) : (
    <div className="table">
      <div className="theader">
        <div className="table_header">No</div>
        <div className="table_header">Sold At</div>
        <div className="table_header">Customer</div>
        <div className="table_header">Liability</div>
        <div className="table_header">Motor Charge</div>
        <div className="table_header">Physical Damage</div>
        <div className="table_header">WC,GL,UMB</div>
        <div className="table_header">Permits</div>
        <div className="table_header">Fees</div>
        <div className="table_header">Tips</div>
        <div className="table_header">Total Charge</div>
        <div className="table_header">{` `}</div>
      </div>
      {list.map((sale) => (
        <SaleItem
          key={sale._id}
          sale={sale}
          no={++no}
          saleDeleteRequest={saleDeleteRequest}
          loadingDelete={loadingDelete}
          errorDelete={errorDelete}
        />
      ))}
    </div>
  );
};

SaleList.propTypes = {
  //LIST
  list: PropTypes.array.isRequired,
  saleListRequest: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  //DELETE
  saleDeleteRequest: PropTypes.func.isRequired,
  loadingDelete: PropTypes.bool.isRequired,
  errorDelete: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  //LIST
  list: state.saleReducer.list,
  loading: state.saleListStatusReducer.loading,
  error: state.saleListStatusReducer.error,
  //DELETE
  loadingDelete: state.saleDeleteStatusReducer.error,
  errorDelete: state.saleDeleteStatusReducer.error,
});

const mapDispatchToProps = {
  saleListRequest,
  saleDeleteRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(SaleList);
