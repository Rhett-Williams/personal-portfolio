import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from "../../assets/icons/logo.png";
import "./NavBar.css";

 const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="md"
            fixed="top"
             className="animate-navbar nav-theme justify-content-between"
             variant="dark">
                <Navbar.Brand href="#home">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <img style={{maxHeight: 250}} className="logo" src={Logo} alt='Logo'/>
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavBar