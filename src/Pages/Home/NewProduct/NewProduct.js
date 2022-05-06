import React from 'react';
import { Card, Col } from 'react-bootstrap';

const NewProduct = ({product}) => {
    const {name, img, price} = product;
    return (
        <Col>
            <Card className='service-container border-0 shadow-sm position-relative text-center'>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <h6>{name}</h6>
                <p className='text-muted'>${price}</p>
                <button className='brand-btn-sm'>Buy Now</button>
            </Card.Body>
            </Card>
        </Col>
    );
};

export default NewProduct;