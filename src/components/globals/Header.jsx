import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//Actions
import { userLogoutRequest } from "../../redux/actions";
//Components
import { Container, Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import {PersonCircle, Book} from 'react-bootstrap-icons'
import {
  isAdminCheck,
  isExecutiveCheck,
  isSellerCheck,
} from "../../config/user";

const Header = ({ user, userLogoutRequest }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [isExecutive, setIsExecutive] = useState(false);

  useEffect(() => {
    setIsAdmin(isAdminCheck(user));
    setIsSeller(isSellerCheck(user));
    setIsExecutive(isExecutiveCheck(user));
  }, [user]);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" sticky="top">
      <Container fluid style={{ maxWidth: "98%" }}>
        <Link className="navbar-brand" to="/">
        <Image
        src="https://arane-crm-resources.s3.us-east-2.amazonaws.com/training/logo-64.png"
        />
          <span style={{marginLeft:"20px", marginRight:"50px"}}>MANAGEMENT SYSTEM</span>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav justify className="mr-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link
              className="nav-link"
              to="/manage/sales"
              hidden={!isSeller}
            >
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
            {isExecutive && (
              <NavDropdown title="Manage" id="basic-nav-dropdown">
                <>
                  <Link className="dropdown-item" to="/manage/insurers">
                    Insurers
                  </Link>
                </>
              </NavDropdown>
            )}
            <NavDropdown title={<PersonCircle size={25}/>} id="basic-nav-dropdown">
              <Link className="dropdown-item" to="/profile">
                Profile
              </Link>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/" onClick={userLogoutRequest}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
            <Link className="nav-link" to="/training">
              <Book size={25}/>
            </Link>
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
