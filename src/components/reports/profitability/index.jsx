import React from "react";
//import PropTypes from "prop-types";
import { connect } from "react-redux";

export const Profitability = () => {
  return (
    <div>
      <h2>Profitability</h2>
    </div>
  );
};

Profitability.propTypes = {
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Profitability);
