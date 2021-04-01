import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

//actions

import { userAuthCheckRequest } from "../redux/actions";

export const PrivateRoutes = ({
  component: Component,
  authCheck,
  allowedIp,
  ...rest
}) => {
  useEffect(() => {
    //console.log("allowedIP",allowedIp);
    allowedIp && userAuthCheckRequest();
  }, [allowedIp, authCheck]);

  return (
    <Route
      {...rest}
      render={(props) =>
        allowedIp ? (
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
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoutes);
