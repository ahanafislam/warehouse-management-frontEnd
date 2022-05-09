import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const {item_id} = useParams();

    return (
        <Container>
            <h1>This is Inventory Details Page</h1>
            <h2>Items id : {item_id}</h2>
        </Container>
    );
};

export default InventoryDetails;