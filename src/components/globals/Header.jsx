import React /* useState  */ from "react";
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//Actions
import { userLogoutRequest } from '../../redux/actions'
//Components
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = ({ user, userLogoutRequest }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link className="navbar-brand" to="/">
          Insurance VL17
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/sales">
              Sales
            </Link>
            <Link className="nav-link" to="/customers">
              Customers
            </Link>
            <Link className="nav-link" to="/insurers">
              Insurers
            </Link>
          </Nav>
          <Nav className="ml-auto">
            <NavDropdown title={user.username} id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
              <Link className="dropdown-item" to="/users">
                Users
              </Link>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" onClick={userLogoutRequest}>
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
  userLogoutRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
