import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//Actions
import {
  userAuthCheckRequest,
  ipCheckStatusGetRequest,
} from "../../redux/actions";
//components
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Page403 from "./Page403";
import { IpCheckStatusCodes } from "../../global/config";
function Containers({
  children,
  userAuthCheckRequest,
  ipCheckStatusGetRequest,
  error,
  loading,
  authCheck,
  ipCheckStatus,
  loadingIpCheckStatus,
}) {
  useEffect(() => {
    userAuthCheckRequest();
  }, [userAuthCheckRequest]);

  useEffect(() => {
    ipCheckStatusGetRequest();
  }, [ipCheckStatusGetRequest]);

  useEffect(() => {
    console.log(ipCheckStatus);
  }, [ipCheckStatus]);

  return (
    <>
      {authCheck && ipCheckStatus === IpCheckStatusCodes.AUTHORIZED && (
        <Redirect to="/" />
      )}
      {authCheck && ipCheckStatus === IpCheckStatusCodes.AUTHORIZED && (
        <Header />
      )}
      {ipCheckStatus === IpCheckStatusCodes.AUTHORIZED ? (
        <Body>{children}</Body>
      ) : (
        <Page403></Page403>
      )}

      {authCheck && ipCheckStatus === IpCheckStatusCodes.AUTHORIZED && (
        <Footer />
      )}
    </>
  );
}

Containers.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  authCheck: PropTypes.bool.isRequired,
  userAuthCheckRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authCheck: state.userProfileReducer.authCheck,
  loading: state.userProfileGetStatusReducer.loading,
  error: state.userProfileGetStatusReducer.error,
  ipCheckStatus: state.ipCheckStatusReducer.ipCheckStatus,
  loadingIpCheckStatus: state.ipCheckStatusGetStatusReducer.loading,
});

const mapDispatchToProps = {
  userAuthCheckRequest,
  ipCheckStatusGetRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Containers);
