import React from 'react';
import { Container } from 'react-bootstrap';
import const_img from "../../images/unser_constraction.png";

const About = () => {
    return (
        <Container className='text-center'>
            <img src={const_img} alt="under construction" className='img-fluid' />
            <h3 className='brand-text'>This webpage is under construction.</h3>
        </Container>
    );
};

export default About;