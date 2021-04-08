import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//Actions
import { userLogoutRequest } from "../../redux/actions";
//Components
import { Navbar, Image } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      fixed="bottom"
      sticky="bottom"
      className="nav-footer text-light pt-0 pb-1 pl-0 pr-1 mt-5"
    >
      <div className="ml-auto">
        Powered by ARANE Consulting LLC, 2021. All Rights Reserved.
        <Navbar.Brand
          href="https://araneconsulting.com"
          className="ml-2 pt-0"
        >
          <Image
            src="https://arane-crm-resources.s3.us-east-2.amazonaws.com/training/logo-arane-small.png"
            height="20"
          />
        </Navbar.Brand>
      </div>
    </Navbar>
  );
};

Footer.propTypes = {
  user: PropTypes.object.isRequired,
  userLogoutRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.userProfileReducer.user,
});

const mapDispatchToProps = {
  userLogoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
