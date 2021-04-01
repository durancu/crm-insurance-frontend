import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

//actions

import { userAuthCheckRequest, allowedIpGetRequest } from "../redux/actions";

export const PrivateRoutes = ({
  component: Component,
  authCheck,
  allowedIp,
  ...rest
}) => {
  useEffect(() => {
    allowedIpGetRequest();
  });

  useEffect(() => {
    userAuthCheckRequest();
  });

  return (
    <Route
      {...rest}
      render={(props) =>
        true ? (
          authCheck ? (
            <Component {...props} />
          ) : (
            <Redirect to="/auth" />
          )
        ) : (
          <Redirect to="/403" />
        )
      }
    />
  );
};

PrivateRoutes.propTypes = {
  authCheck: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authCheck: state.userProfileReducer.authCheck,
  allowedIp: state.allowedIpReducer.allowedIp,
});

const mapDispatchToProps = {
  userAuthCheckRequest,
  allowedIpGetRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoutes);
