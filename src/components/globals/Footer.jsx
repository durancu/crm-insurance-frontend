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
      style={{
        padding: "0 20px 0 20px",
        marginTop: "80px",
        fontSize: "0.7rem",
        color: "#f0f0f0",
      }}
    >
      <div className="ml-auto">
        Powered by ARANE Consulting LLC, 2021. All Rights Reserved.
        <Navbar.Brand
          href="https://araneconsulting.com"
          style={{ marginLeft: "50px", padding: "0" }}
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
