import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

//actions

import { userAuthCheckRequest } from "../redux/actions";

export const PrivateRoutes = ({ component: Component, authCheck, ...rest }) => {
  useEffect(() => {
    userAuthCheckRequest();
  });
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
