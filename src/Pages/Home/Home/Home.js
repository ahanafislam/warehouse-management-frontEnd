import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';
import NewProducts from '../NewProducts/NewProducts';
import './Home.css';

const Home = () => {
    return (
        <Container>
            <Banner></Banner>
            <NewProducts></NewProducts>
            <InventoryItems></InventoryItems>
        </Container>
    );
};

export default Home;