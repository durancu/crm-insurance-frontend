import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//Actions
import { userLogoutRequest } from "../../redux/actions";
//Components
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { ADMIN_ROLES } from "../../config/user";

const Header = ({ user, userLogoutRequest }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    user.hasOwnProperty("roles") && ADMIN_ROLES.includes(user.roles[0]) && setIsAdmin(true)
        
  });
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
              Dashboard
            </Link>
            <Link className="nav-link" to="/sales">
              Sales
            </Link>
            <NavDropdown title="Reports" id="collasible-nav-dropdown">
              <Link className="dropdown-item" to="/reports-sales">
                Sales
              </Link>
              {isAdmin && (
                <>
                  <Link className="dropdown-item" to="/profitability">
                    Profitability
                  </Link>
                  <Link className="dropdown-item" to="/bonus">
                    Bonus
                  </Link>
                  <NavDropdown.Divider />
                  <Link className="dropdown-item" to="/salaries">
                    Salaries
                  </Link>
                </>
              )}
            </NavDropdown>
          </Nav>
          <Nav className="ml-auto">
            <NavDropdown title="Manage" id="basic-nav-dropdown">
              <Link className="dropdown-item" to="/customers">
                Customers
              </Link>
              {isAdmin && (
                <>
                  <Link className="dropdown-item" to="/users">
                    Users
                  </Link>
                  <Link className="dropdown-item" to="/insurers">
                    Insurers
                  </Link>
                  <NavDropdown.Divider />
                  <Link className="dropdown-item" to="/company">
                    Company
                  </Link>
                </>
              )}
            </NavDropdown>
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
