import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//Actions
import {
  userAuthCheckRequest,
  checkIpStatusGetRequest,
} from "../../redux/actions";
//components
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Page403 from "./Page403";
import { checkIpStatusCodes } from "../../global/config";
function Containers({
  children,
  userAuthCheckRequest,
  checkIpStatusGetRequest,
  error,
  loading,
  authCheck,
  checkIpStatus,
}) {
  useEffect(() => {
    userAuthCheckRequest();
  }, [userAuthCheckRequest]);

  useEffect(() => {
    checkIpStatusGetRequest();
  }, [checkIpStatusGetRequest]);

  return (
    <>
      {authCheck && checkIpStatus === checkIpStatusCodes.AUTHORIZED && (
        <Redirect to="/" />
      )}
      {authCheck && checkIpStatus === checkIpStatusCodes.AUTHORIZED && (
        <Header />
      )}
      {checkIpStatus === checkIpStatusCodes.AUTHORIZED ? (
        <Body>{children}</Body>
      ) : (
        <Page403></Page403>
      )}

      {authCheck && checkIpStatus === checkIpStatusCodes.AUTHORIZED && (
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
  checkIpStatus: state.checkIpStatusReducer.checkIpStatus,
  loadingcheckIpStatus: state.checkIpStatusGetStatusReducer.loading,
});

const mapDispatchToProps = {
  userAuthCheckRequest,
  checkIpStatusGetRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Containers);
