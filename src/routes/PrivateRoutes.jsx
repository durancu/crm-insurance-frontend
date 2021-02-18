import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoutes = ({ component: Component, authCheck, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authCheck ? <Component {...props} /> : <Redirect to="/auth" />
      }
    />
  );
};

PrivateRoutes.propTypes = {
  authCheck: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authCheck: state.userProfileReducer.authCheck,
});

/* const mapDispatchToProps = {
}; */

export default connect(mapStateToProps)(PrivateRoutes);
