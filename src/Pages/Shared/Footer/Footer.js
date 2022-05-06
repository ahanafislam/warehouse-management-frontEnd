import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
            <footer className='p-4'>
                 <Container className='d-flex justify-content-center align-items-center'>
                    <div>
                        <p className='mb-0 text-center'><small>Follow us on</small></p>
                        <ul className='social-link list-group list-group-horizontal'>
                            <li className='list-group-item border-0'><Link to="/"><FaFacebookSquare></FaFacebookSquare></Link></li>
                            <li className='list-group-item border-0'><Link to="/"><FaYoutubeSquare></FaYoutubeSquare></Link></li>
                            <li className='list-group-item border-0'><Link to="/"><RiInstagramFill></RiInstagramFill></Link></li>
                            <li className='list-group-item border-0'><Link to="/"><FaTwitterSquare></FaTwitterSquare></Link></li>
                        </ul>
                        <h6 className='brand-text text-center'>Ashbab &copy; {year}</h6>
                    </div>
                 </Container>
            </footer>
    );
};

export default Footer;