import React, { useState } from 'react'
import './Header.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import InstagramIcon from '@mui/icons-material/Instagram';
import Accordion from 'react-bootstrap/Accordion';
import Logo from './logo.JPG'
import Brand from './brand-logo.png'



const Header = () => {
   
  return (
    <div className='header'>
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3" id='nav-3'>
          <Container className='header-container' fluid>
            <div></div>
            <Navbar.Brand className='header-brand' href="/">
            <img className='brand-logo' alt='brand' src={Brand}/>
            </Navbar.Brand>
            <Navbar.Toggle className='header-toggle' aria-controls={`offcanvasNavbar-expand-${expand}`} style={{color:'white'}}/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <img className='header-logo' alt='logo' src={Logo}/>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Accordion>
                    <Accordion.Item eventKey="0">
                    <Accordion.Header>
                     <div className='trainer-profile'>
                       <span className='trainer-name'>Elliott John</span>
                       <Nav.Link href="https://www.instagram.com/thesciencediet/"><InstagramIcon/></Nav.Link>
                     </div>
                     </Accordion.Header>
                     <Accordion.Body>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                       minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                       aliquip ex ea commodo consequat. Duis aute irure dolor in
                       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                       pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                       culpa qui officia deserunt mollit anim id est laborum.
                     </Accordion.Body>
                     </Accordion.Item>
                     <Accordion.Item eventKey="1">
                    <Accordion.Header>
                     <div className='trainer-profile'>
                       <span className='trainer-name'>Trainer</span>
                       <Nav.Link href="https://www.instagram.com/thesciencediet/"><InstagramIcon/></Nav.Link>
                     </div>
                     </Accordion.Header>
                     <Accordion.Body>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                       minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                       aliquip ex ea commodo consequat. Duis aute irure dolor in
                       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                       pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                       culpa qui officia deserunt mollit anim id est laborum.
                     </Accordion.Body>
                     </Accordion.Item>
                  </Accordion>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
    </div>
  )
}

export default Header