import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

//actions

import { userAuthCheckRequest, allowedIpGetRequest } from "../redux/actions";
import Page403 from "../components/globals/Page403";

export const PrivateRoutes = ({
  component: Component,
  authCheck,
  allowedIp,
  ...rest
}) => {

  useEffect(() => {
    allowedIpGetRequest();
  }, []);
  
  useEffect(() => {
    console.log(allowedIp);
  }, [allowedIp]);

  useEffect(() => {
    userAuthCheckRequest();
  });

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
          <Page403></Page403>
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
