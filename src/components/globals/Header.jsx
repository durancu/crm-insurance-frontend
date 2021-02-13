import React, { /* useState  */ } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

//Components
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Header = () => {

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link className="navbar-brand" to="/home">Insurance VL17</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/home">Home</Link>
            {/* <NavDropdown title="Sales" id="basic-nav-dropdown">
              <Link className="dropdown-item" to="/sales/create">Create</Link>
            </NavDropdown> */}
            <Link className="nav-link" to="/customers">Customers</Link>
            <Link className="nav-link" to="/insurers">Insurers</Link>
          </Nav>
          <Nav className="ml-auto">
            <NavDropdown title="Admin" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
              <Link className="dropdown-item" to="/users">Users</Link>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" >Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

Header.propTypes = {

}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
