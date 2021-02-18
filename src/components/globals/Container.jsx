import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//Actions
import { userProfileGetRequest} from "../../redux/actions";
//components
import Header from "./Header";
import Body from "./Body";

function Containers({
  children,
  userProfileGetRequest,
  error,
  loading,
  authCheck,
}) {
  useEffect(() => {
    userProfileGetRequest();
  }, [userProfileGetRequest]);

  return (
    <div>
      {authCheck && <Redirect to="/" />}
      {authCheck && <Header/>}
      <Body>{children}</Body>
    </div>
  );
}

Containers.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  authCheck: PropTypes.bool.isRequired,
  userProfileGetRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authCheck: state.userProfileReducer.authCheck,
  loading: state.userProfileGetStatusReducer.loading,
  error: state.userProfileGetStatusReducer.error,
});

const mapDispatchToProps = {
  userProfileGetRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Containers);
