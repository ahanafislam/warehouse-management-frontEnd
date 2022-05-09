import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user, loading] = useAuthState(auth);

    if(loading) {
        return <Loading></Loading>
    }

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
                            {
                                user ?
                                    <>
                                        <Nav.Link as={Link} to="/manage_inventory/">Manage Items</Nav.Link>
                                        <Nav.Link href="#pricing">Add Items</Nav.Link>
                                        <Nav.Link href="#pricing">My Item</Nav.Link>
                                    </>
                                : ""
                            }
                            <Nav.Link href="#pricing">About</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user
                                ?
                                 <button onClick={() => signOut(auth)} className="m-1 brand-btn-sm">Log out</button>
                                :
                                 <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;