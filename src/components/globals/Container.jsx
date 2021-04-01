import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//Actions
import { userAuthCheckRequest } from "../../redux/actions";
//components
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { userIpIsAllowed } from "./functions";
function Containers({
  children,
  userAuthCheckRequest,
  error,
  loading,
  authCheck,
}) {
  useEffect(() => {
    userAuthCheckRequest();
  }, [userAuthCheckRequest]);

  const [allowedIp, setAllowedIp] = useState(false);

  useEffect(() => {
    userIpIsAllowed().then(res => {
      setAllowedIp(res);
    }).catch(setAllowedIp("N/A"));

  }, []);

  return (
    <>
      {allowedIp ? (
        <>
          {authCheck && <Redirect to="/" />}
          {authCheck && <Header />}
          <Body>{children}</Body>
          {authCheck && <Footer />}
        </>
      ) : (
        <> Your IP is not allowed to access this website</>
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
});

const mapDispatchToProps = {
  userAuthCheckRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Containers);
