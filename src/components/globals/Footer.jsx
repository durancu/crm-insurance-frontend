import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//Actions
import { userLogoutRequest } from "../../redux/actions";
//Components
import { Navbar, Nav, Image } from "react-bootstrap";

const Footer = () => {

  return (
    <Navbar
      bg="dark"
      variant="dark"
      fixed="bottom"
      sticky="bottom"
      style={{ padding: "0 20px 0 20px", marginTop:"80px" }}
    >
      <Nav>
        <span style={{fontSize:"10px", color:"#f0f0f0"}}>Powered by ARANE Consulting LLC, 2021. All Rights Reserved.</span>
      </Nav>
      <Navbar.Brand
        href="https://araneconsulting.com"
        style={{ marginLeft: "50px",  padding:"0"}}
        className="ml-auto"
      >
        <Image src="https://arane-crm-resources.s3.us-east-2.amazonaws.com/training/logo-arane-small.png"  height="24"/>
      </Navbar.Brand>
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
