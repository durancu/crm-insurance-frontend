import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

//actions

import {
  userAuthCheckRequest,
  checkIpStatusGetRequest,
} from "../redux/actions";
import Page403 from "../components/globals/Page403";
import { checkIpStatusCodes } from "../global/config";

export const PrivateRoutes = ({
  component: Component,
  authCheck,
  checkIpStatus,
  ...rest
}) => {
  useEffect(() => {
    checkIpStatusGetRequest();
  }, []);

  useEffect(() => {
    userAuthCheckRequest();
  });

  return (
    <Route
      {...rest}
      render={(props) => {
        if (checkIpStatus === checkIpStatusCodes.UNCHECKED) {
          return <Component />;
        } else if (checkIpStatus === checkIpStatusCodes.AUTHORIZED) {
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
  checkIpStatus: state.checkIpStatusReducer.checkIpStatus,
});

const mapDispatchToProps = {
  userAuthCheckRequest,
  checkIpStatusGetRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoutes);
