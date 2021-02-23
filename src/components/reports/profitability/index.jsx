import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export const Profitability = (props) => {
  return (
    <div>
      <h2>Profitability</h2>
    </div>
  );
};

Profitability.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Profitability);
