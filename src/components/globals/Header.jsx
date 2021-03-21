import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//Actions
import { userLogoutRequest } from "../../redux/actions";
//Components
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { isAdminCheck, isExecutiveCheck } from "../../config/user";

const Header = ({ user, userLogoutRequest }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isExecutive, setIsExecutive] = useState(false);

  useEffect(() => {
    setIsAdmin(isAdminCheck(user));
    setIsExecutive(isExecutiveCheck(user));
  }, [user]);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" sticky="top">
      <Container fluid style={{ maxWidth: "98%" }}>
        <Link className="navbar-brand" to="/">
          VL17 Insurance Agency
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/manage/sales">
              Sales
            </Link>
            <Link className="nav-link" to="/manage/customers">
              Customers
            </Link>

            <Link className="nav-link" to="/manage/users">
              Employees
            </Link>
          </Nav>
          <Nav className="ml-auto">
            <NavDropdown title="Reports" id="collasible-nav-dropdown">
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
                hidden={!isExecutive}
              >
                Payroll
              </Link>
            </NavDropdown>
            {isAdmin && (
              <NavDropdown title="Manage" id="basic-nav-dropdown">
                <>
                  {/* <Link className="dropdown-item" to="/manage/users">
                    Users
                  </Link> */}
                  <Link className="dropdown-item" to="/manage/insurers">
                    Insurers
                  </Link>
                  {/* <NavDropdown.Divider />
                  <Link className="dropdown-item" to="/manage/company">
                    Company
                  </Link> */}
                </>
              </NavDropdown>
            )}
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <Link className="dropdown-item" to="/profile">
                My Profile
                <NavDropdown.Divider />
              </Link>
              <NavDropdown.Item href="/" onClick={userLogoutRequest}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

Header.propTypes = {
  user: PropTypes.object.isRequired,
  userLogoutRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.userProfileReducer.user,
});

const mapDispatchToProps = {
  userLogoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
