import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" variant="light" sticky="top">
                <Container>
                    <Link to="/" className='nav-link'>
                        <h3 as={Link} to="/" className='logo'>Ashbab</h3>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link href="#pricing">Blog</Nav.Link>
                            {/* <Nav.Link href="#pricing">Manage Items</Nav.Link>
                            <Nav.Link href="#pricing">Add Items</Nav.Link>
                            <Nav.Link href="#pricing">My Item</Nav.Link> */}
                            <Nav.Link href="#pricing">About</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;