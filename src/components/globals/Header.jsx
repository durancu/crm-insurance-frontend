import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//Actions
import { userLogoutRequest } from "../../redux/actions";
//Components
import { Container, Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import { PersonCircle, Book } from "react-bootstrap-icons";
import {
  isAdminCheck,
  isExecutiveCheck,
  isSellerCheck,
} from "../../config/user";

const Header = ({ user, userLogoutRequest, ipAddress }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [isExecutive, setIsExecutive] = useState(false);

  useEffect(() => {
    setIsAdmin(isAdminCheck(user));
    setIsSeller(isSellerCheck(user));
    setIsExecutive(isExecutiveCheck(user));
  }, [user]);

  return (
    <>
      {process.env.REACT_APP_ENV !== "pro" && (
        <Navbar
          bg="secondary"
          variant="light"
          expand="lg"
          fixed="top"
          sticky="top"
          style={{ fontSize: "0.8rem", color:"#ffffff", fontWeight:"300", lineHeight:1, height:"24px"}}
        >

         <div className="mr-auto fill text-center"> <strong>{ipAddress}</strong></div>
         <div className="ml-auto fill text-center"> <strong>{process.env.REACT_APP_ENV.toUpperCase()}</strong></div>
        </Navbar>
      )}
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        fixed="top"
        sticky="top"
        style={{ fontSize: "1rem" }}
      >
        <Container fluid style={{ maxWidth: "98%" }}>
          <Navbar.Brand href="/" style={{ marginRight: "50px" }}>
            <Image src="https://arane-crm-resources.s3.us-east-2.amazonaws.com/training/logo-vl17-crm.png" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto fill justify">
              <Link className="nav-link" style={{ marginRight: "20px" }} to="/">
                Home
              </Link>
              <Link
                className="nav-link"
                style={{ marginRight: "20px" }}
                to="/manage/sales"
                hidden={!isAdmin && !isExecutive && !isSeller}
              >
                Sales
              </Link>
              <Link
                className="nav-link"
                style={{ marginRight: "20px" }}
                to="/manage/customers"
              >
                Customers
              </Link>

              <Link
                className="nav-link"
                style={{ marginRight: "20px" }}
                to="/manage/users"
              >
                Employees
              </Link>
              {(isAdmin || isExecutive) && (
                <Link
                  className="nav-link"
                  style={{ marginRight: "20px" }}
                  to="/manage/insurers"
                >
                  Insurers
                </Link>
              )}
              <NavDropdown
                title="Reports"
                style={{ marginRight: "20px" }}
                id="collasible-nav-dropdown"
              >
                <Link className="dropdown-item" to="/reports/sales">
                  Sales
                </Link>
                <Link
                  className="dropdown-item"
                  to="/reports/profits"
                  hidden={!isAdmin}
                >
                  Profits
                </Link>
                {/* 
                  <Link className="dropdown-item" to="/bonus">
                    Bonus
                  </Link> 
                  */}
                <Link
                  className="dropdown-item"
                  to="/reports/payroll"
                  hidden={!isAdmin && !isExecutive}
                >
                  Payroll
                </Link>
              </NavDropdown>
            </Nav>
            <Nav className="ml-auto filled">
              <Link
                className="nav-link"
                to="/training"
                style={{ marginRight: "20px" }}
              >
                <Book size={25} />
              </Link>
              <NavDropdown
                title={<PersonCircle size={25} />}
                id="basic-nav-dropdown"
              >
                <Link className="dropdown-item" to="/profile">
                  Profile
                </Link>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/" onClick={userLogoutRequest}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

Header.propTypes = {
  user: PropTypes.object.isRequired,
  userLogoutRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.userProfileReducer.user,
  ipAddress: state.allowedIpReducer.ipAddress,
});

const mapDispatchToProps = {
  userLogoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
