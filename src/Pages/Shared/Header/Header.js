import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Container>
                    <h4 href="#home">Ashbab</h4>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">Blog</Nav.Link>
                            <Nav.Link href="#pricing">Manage Items</Nav.Link>
                            <Nav.Link href="#pricing">Add Items</Nav.Link>
                            <Nav.Link href="#pricing">My Item</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;