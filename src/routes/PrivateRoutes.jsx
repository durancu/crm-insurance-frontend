import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

//actions

import {
  userAuthCheckRequest,
  ipCheckStatusGetRequest,
} from "../redux/actions";
import Page403 from "../components/globals/Page403";
import { IpCheckStatusCodes } from "../global/config";

export const PrivateRoutes = ({
  component: Component,
  authCheck,
  ipCheckStatus,
  ...rest
}) => {
  useEffect(() => {
    ipCheckStatusGetRequest();
  }, []);

  useEffect(() => {
    console.log(ipCheckStatus);
  }, [ipCheckStatus]);

  useEffect(() => {
    userAuthCheckRequest();
  });

  return (
    <Route
      {...rest}
      render={(props) => {
        if (ipCheckStatus === IpCheckStatusCodes.UNCHECKED) {
          return <Component />;
        } else if (ipCheckStatus === IpCheckStatusCodes.AUTHORIZED) {
          if (authCheck) {
            return <Component {...props} />;
          } else {
            return <Redirect to="/auth" />;
          }
        } else {
          return <Page403></Page403>;
        }
      }}
    />
  );
};

PrivateRoutes.propTypes = {
  authCheck: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authCheck: state.userProfileReducer.authCheck,
  ipCheckStatus: state.ipCheckStatusReducer.ipCheckStatus,
});

const mapDispatchToProps = {
  userAuthCheckRequest,
  ipCheckStatusGetRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoutes);
