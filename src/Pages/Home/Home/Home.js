import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import NewProducts from '../NewProducts/NewProducts';
import './Home.css';

const Home = () => {
    return (
        <Container>
            <Banner></Banner>
            <NewProducts></NewProducts>
        </Container>
    );
};

export default Home;