import React from 'react'
import "./NavBar.css"

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <div className='navbar'>
         <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo"/>      
        
    <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              id='searchbar'
            />
            <Button variant="outline-success" id='searchbtn'>Search</Button>
            <NavDropdown title="Profile" id="navbarScrollingDropdown" className='profile'>
              <NavDropdown.Item href="/PasswordReset" id='modifyusername'>Modify Password</NavDropdown.Item>
              <NavDropdown.Item href="/EmailReset" id='modifyusername'>
                Modify Email
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/" id='logoutprofile'  >
                LOG-OUT
                </NavDropdown.Item>
            </NavDropdown>
          </Form>

    
        <img className= "avatar" src= "https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />

    </div>
  )
}

export default NavBar