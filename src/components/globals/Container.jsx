import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//Actions
import { userAuthCheckRequest, allowedIpGetRequest } from "../../redux/actions";
//components
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
function Containers({
  children,
  userAuthCheckRequest,
  allowedIpGetRequest,
  error,
  loading,
  authCheck,
  allowedIp,
  loadingAllowedIp,
}) {
  useEffect(() => {
     userAuthCheckRequest();
  }, [userAuthCheckRequest]);

  return (
    <>
      {/* {false && <Redirect to="/403" />} */}
      {authCheck && allowedIp && <Redirect to="/" />}
      {authCheck && allowedIp && <Header />}
      <Body>{children}</Body>
      {authCheck && allowedIp && <Footer />}
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
  allowedIp: state.allowedIpReducer.allowedIp,
  loadingAllowedIp: state.allowedIpGetStatusReducer.loading,
});

const mapDispatchToProps = {
  userAuthCheckRequest,
  allowedIpGetRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Containers);
