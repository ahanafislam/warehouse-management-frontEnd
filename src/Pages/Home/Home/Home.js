import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Facilities from '../Facilities/Facilities';
import InventoryItems from '../InventoryItems/InventoryItems';
import NewProducts from '../NewProducts/NewProducts';
import './Home.css';

const Home = () => {
    return (
        <Container>
            <Banner></Banner>
            <NewProducts></NewProducts>
            <InventoryItems></InventoryItems>
            <Facilities></Facilities>
        </Container>
    );
};

export default Home;