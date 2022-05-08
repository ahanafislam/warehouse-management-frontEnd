import React from 'react';
import { Card, Col } from 'react-bootstrap';

const InventoryItem = ({item}) => {
    const {name, img, description, price, quantity, supplier} = item;

    return (
        <Col>
            <Card className='service-container border-0 shadow-sm'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <div className="d-flex justify-content-between">
                        <h6 className='mb-0'>{name}</h6>
                        <small className='text-muted p-0'>( Quantity: {quantity} )</small>
                    </div>
                    <small className='text-muted'>Supplier: {supplier}</small>
                    <Card.Subtitle className='brand-text mt-1'>${price}</Card.Subtitle>
                    <Card.Text>{description.slice(0, 80).concat('...')}</Card.Text>
                    <div className="text-end">
                        <button className='brand-btn-sm'>Update Stock</button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default InventoryItem;